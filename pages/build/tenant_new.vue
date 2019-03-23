<template>
	<div class="container">
		<div class="head">
			<div class="otherinf">
				<div class="share">
					<div>
						<button type="primary" bindtap="onShareAppMessage" open-type="share" class="shareFriend"></button>
						<image src="../../static/home/share.png"></image>
						<div>分享</div>
					</div>
					<!-- <div>
						<image src="../../static/home/share.png"></image>
						<div>收藏</div>
					</div> -->

				</div>
				<div class="mallname">
					<p>{{mallname}}</p>
					<p>{{mallname1}}</p>
				</div>
				<div class="malladress">
					<view>{{tenant.name}}</view>
					<view>{{tenant.address}}</view>
				</div>
			</div>
			<image :src="storePicture" class="mallimage"></image>

		</div>
		<div class="content" :style="{height:contentHeight+'px'}">
			<scroll-view class="left" scroll-y>
				<div class="left_item" v-bind:class="{active:item.id == class_id}" v-for="item in typeList" :key='item.id' @click="scrollTo(item.offsetY)">
					{{item.name}}
				</div>
			</scroll-view>
			<scroll-view class="right" scroll-y @scroll="scroll" :scroll-top="scrollTop">
				<div @click="go_build_mallinf(item.id)" class="mall1inf" v-for="item in malllist" :key='item'>
					<image :src="static+item.picture"></image>
					<div>
						<p>{{item.name}}</p>
						<p>月销{{item.monthSell}}笔</p>
						<p class='add'>
							<div class='addedit'>
								<image src="../../static/build/minus.png" v-if="item.mallnum"></image><span v-if="item.mallnum">{{item.mallnum}}</span>
								<image src="../../static/build/add.png"></image>
							</div><span>￥{{item.price}}</span>
						</p>
					</div>
				</div>
			</scroll-view>
		</div>

		<div class='footer'>
			<div class="edit"><span @click="req_cartadd">加入购物车</span><span @click="go_build_pay">购买</span></div>
			<span class="mallnum" v-show='otherGoods.num'>{{otherGoods.num}}</span>
			<image src="../../static/logo.jpg" class="logo" @click="cg_pop"></image><span class="money" v-show='otherGoods.num'>￥{{otherGoods.price}}</span>
		</div>
		<div class="pop" v-if='pop' @click="cg_pop">
			<div class="popcont">
				<div class='delbar' @click.stop='cleanbar'>
					<image src="../../static/mine/del.png"></image><span>清空购物车</span>
				</div>
				<scroll-view class='barlist' scroll-y='true'>
					<div class="add1" v-for="(list,_index) in goods" :key="_index" v-if='otherGoods.num' @click.stop>
						<div v-for="(item,index) in list.guigetype" :key="index" v-if='item.num>0'>
							<div class='addedit addedit1'>
								<image src="../../static/build/minus.png" @click.stop="minus(_index,index)"></image><span>{{item.num}}</span>
								<image src="../../static/build/add.png" @click.stop="add(_index,index)"></image>
							</div><span class="barname">{{item.name}}</span><span class="barmoney">￥{{item.price}}</span>
						</div>
					</div>
				</scroll-view>
			</div>
		</div>
		<div v-if="goodsInf" class="pop">
			<GoodsInf :goodsInf='goodsInf' @onClose='onClose'></GoodsInf>
		</div>
	</div>
</template>

<script>
	import ut from '../../utils/index.js';
	import GoodsInf from '../../components/common/goodsInf.vue';
	import marked from '../../components/marked';
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				contentHeight: 500, // 打比说默认高度是500px嘛
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				static: '',
				malllist: [],
				typeList: [],
				mallnum: 0,
				mallprice: 0,
				pop: false,
				storeid: '',
				class_id: '',
				tenant: {},
				mallname: '',
				mallname1: '',
				goodsInf: '',
				storePicture: ''
			}
		},
		components: {
			GoodsInf
		},
		computed: {
			...mapState(['goods', 'otherGoods', 'goodsPay'])
		},
		onLoad(opt) {
			this.contentHeight = wx.getSystemInfoSync().windowHeight - uni.upx2px(420);

			this.cleanbar()
			this.tenant = wx.getStorageSync('tenant');
			ut.settitle(this.tenant.name || '建材城');
			const length = this.tenant.name.split('').length;
			this.mallname = this.tenant.name.substring(0, parseInt(length / 2));
			this.mallname1 = this.tenant.name.substring(parseInt(length / 2), length)
			wx.setStorageSync('tenant', '');
			this.static = ut.static;
			this.storeid = opt.storeid;
			this.req_storeclasslist()
			this.storePicture = this.static + this.tenant.picture;
		},
		methods: {
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop;
				let itemHeight = uni.upx2px(180);
				let first = parseInt(e.detail.scrollTop / itemHeight);
				let parentId = this.malllist[first].classId;
				if (this.class_id != parentId) {
					// this.currentSelectID = parentId;
					this.$set(this.$data, 'class_id', parentId);
				}
			},
			scrollTo: function(offset) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = offset;
				});
			},
			cg_pop() {
				if (!this.pop && !this.otherGoods.num) {
					return;
				}
				this.goodsInf = ''
				this.pop = !this.pop;
			},
			go_build_mallinf(id) {
				/* wx.navigateTo({
					url: `../build/mallinf?_id=${id}`
				}) */
				this.req_detail(id)
			},
			minus(_index, index) {
				const goods = this.goods;
				this.$store.commit('minusOtherGoods', goods[_index].guigetype[index].price);
				goods[_index].guigetype[index].num -= 1;
				this.$store.commit('setGoods', goods)
				this.$store.commit('setGoodsPay')
			},
			add(_index, index) {
				const goods = this.goods;
				this.$store.commit('addOtherGoods', goods[_index].guigetype[index].price);
				goods[_index].guigetype[index].num += 1;
				this.$store.commit('setGoods', goods)
				this.$store.commit('setGoodsPay')
			},
			malllistmap(arr) {
				return arr.map((item) => {
					item.price = Number(item.price).toFixed(2);
					item.mallnum = 0;
					return item;
				})
			},
			cleanbar() {
				this.$store.commit('clean')
				this.goodsInf = ''
				this.pop = false;
			},
			filterdate(barlist) {
				let parm = [];
				for (let i = 0; i < barlist.length; i++) {
					parm[i] = {
						goodsId: barlist[i].goodsId,
						num: barlist[i].num,
						specId: barlist[i].id
					}
				}
				return parm;
			},
			req_cartadd() {
				if (!wx.getStorageSync('token')) {
					wx.navigateTo({
						url: '../mine/login'
					})
					return
				}
				let barlist = this.goodsPay;
				console.log(this.goodsPay)
				barlist = barlist.filter(item => {
					console.log(item.num)
					return item.num > 0
				})
				if (!barlist.length) {
					ut.totast('请先选择商品');
					return;
				}
				const parm = this.filterdate(barlist);
				ut.request({
					data: parm,
					url: "cart/add",
					c: true
				}).then(data => {
					this.cleanbar();
					ut.totast('加入购物车成功');
				})
			},
			go_build_pay() {
				if (!wx.getStorageSync('token')) {
					wx.navigateTo({
						url: '../mine/login'
					})
					return
				}
				let barlist = this.goodsPay;
				barlist = barlist.filter(item => {
					console.log(item.num)
					return item.num > 0
				})
				if (!barlist.length) {
					ut.totast('请先选择商品');
					return;
				}
				this.goodsInf = ''
				wx.setStorageSync('buildinf', barlist)
				wx.navigateTo({
					url: '../build/pay'
				})
			},
			req_storeclasslist() {
				ut.request({
					data: {
						storeid: this.storeid
					},
					url: "goods/storeclasslist1"
				}).then(data => {
					let goodsArray = [];
					if (data) {
						let currentY = 0;
						for (let group of data) {
							group.offsetY = currentY;
							// 将分类子项加入列表
							if (group.goodss) {
								goodsArray = goodsArray.concat(group.goodss);
								currentY += group.goodss.length * uni.upx2px(180);
							}
						}
					}
					this.typeList = data;
					this.malllist = goodsArray;
					if (data[0]) {
						this.class_id = data[0].id;
					}
					console.log(data)
				});
			},
			req_detail(id) {
				console.log(this.goods)
				const goodinf = this.goods.filter(item => {
					return item.clientGoods.id == id
				})
				console.log(goodinf)
				if (goodinf.length > 0) {
					this.goodsInf = goodinf[0]
					return
				}
				ut.request({
					data: {
						goodsid: id
					},
					url: "goods/goodsdetail"
				}).then(data => {
					const goodsInf = {};
					const reg = new RegExp('/attach/download\\?filePath=', 'g');
					goodsInf.clientGoods = data.clientGoods;
					goodsInf.detailinf = marked(goodsInf.clientGoods.detail.replace(reg, ut.static));
					if (data.clientGoodsSpecList[0]) {
						data.clientGoodsSpecList.forEach(item => {
							item.num = 0;
						})
						goodsInf.mallinf = data.clientGoodsSpecList[0]
						if (goodsInf.mallinf.picture) {
							goodsInf.swipeList = goodsInf.mallinf.picture.split(',')
						} else {
							goodsInf.swipeList = [goodsInf.clientGoods.picture]
						}

					}
					goodsInf.guigetype = data.clientGoodsSpecList;
					goodsInf.index = this.goods.length
					this.goodsInf = goodsInf
					const _goodsInf = this.goods
					_goodsInf.push(goodsInf)
					this.$store.commit('setGoods', _goodsInf)
				})
			},
			onClose() {
				this.goodsInf = ''
			}
		}
	}
</script>

<style>
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.head {
		width: 100%;
		height: 300upx;
		display: flex;
		position: fixed;
		background-color: #999999;
		z-index: 99;
	}

	.content {
		margin-top: 320upx;
		display: flex;
		flex-direction: row;
	}

	.left {
		width: 200upx;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.left_item {
		height: 62upx;
		text-align: center;
		margin-bottom: 20upx;
		line-height: 62upx;
		margin-top: 23upx;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 28rpx;
		border-bottom-right-radius: 20rpx;
		border-top-right-radius: 20rpx;
	}

	.active {
		background: #fec300;
		color: white;
	}

	.right {
		width: 480upx;
		height: 100%;
		margin-left: 20upx;
		display: flex;
		flex-direction: column;
	}

	/*隐藏滚动条*/
	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}

	/* 以下是以前的代碼樣式 */
	.mallinf1 {
		position: relative;
	}

	.otherinf {
		position: absolute;
		width: 100%;
		bottom: 0;
		background: rgba(0, 0, 0, 0.3);
		top: 0;
	}

	.otherinf>div {
		display: inline-block;
		vertical-align: bottom;
	}

	.mallname {
		width: 150upx;
		height: 150upx;
		background: #FEC200;
		color: white;
		border-radius: 20upx;
		font-size: 24upx;
		margin-left: 30upx;
		bottom: -20upx;
		text-align: center;
		position: absolute;
	}

	.mallname p {
		margin-top: 30upx;
	}

	.mallname p:nth-child(2) {
		margin-top: 12upx;
	}

	.malladress {
		font-size: 26upx;
		color: white;
		line-height: 40upx;
		margin-bottom: 20upx;
		margin-left: 200upx;
		position: absolute;
		bottom: 0;
		font-size: 24rpx;
	}

	.malladress div:first-child {
		font-size: 26rpx;
	}

	.mallimage {
		width: 100%;
		height: 300upx;
	}

	.share {
		position: absolute;
		right: 30upx;
		bottom: 10upx;
	}

	.share>div {
		display: inline-block;
		vertical-align: top;
		font-size: 26upx;
		line-height: 40upx;
		color: white;
		margin-left: 70upx;
	}

	.share image {
		width: 45upx;
		height: 45upx;
	}

	.footer {
		background: white;
		position: fixed;
		bottom: 0;
		width: 100%;
		border-top: 1px solid #C8C8C8;
		height: 100upx;
		display: flex;
		align-items: center;
	}

	.logo {
		margin-left: 30upx;
		width: 80upx;
		height: 80upx;
	}

	.edit {
		position: absolute;
		right: 30upx;
	}

	.edit span {
		line-height: 60upx;
		color: white;
		font-size: 24upx;
		text-align: center;
		width: 215upx;
		display: inline-block;
	}

	.edit span:first-child {
		border-bottom-left-radius: 30upx;
		border-top-left-radius: 30upx;
		background: #FEC200;
	}

	.edit span:last-child {
		border-bottom-right-radius: 30upx;
		border-top-right-radius: 30upx;
		background: #FF0015;
	}

	.section {
		margin-top: 28upx;
		display: flex;
		position: fixed;
		top: 330upx;
		bottom: 30upx;
		width: 100%;
	}

	.section .list {
		flex: 1;
		padding: 0 30upx;
		display: flex;
	}

	.section .nav {
		width: 200upx;
		flex-direction: column;
		height: 100%;
	}

	.section .nav div {
		width: 200rpx;
		height: 62rpx;
		line-height: 62rpx;
		text-align: center;
		font-size: 28rpx;
		border-bottom-right-radius: 20rpx;
		border-top-right-radius: 20rpx;
		margin-bottom: 23rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap
	}

	.section .nav .active {
		background: #fec300;
		color: white;
	}

	.list {
		display: flex;
		flex-direction: column;
	}

	.mall1inf {
		height: 150upx;
		align-items: center;
		margin-bottom: 30upx;
		flex-direction: row;
		display: flex;
	}

	.mall1inf image {
		width: 150upx;
		height: 120upx;
		border-radius: 10upx;
		margin-right: 18upx;
		background: #efefef;
	}

	.mall1inf div {
		flex: 1;
		font-size: 24upx;
		line-height: 30upx;
	}

	.mall1inf div p {
		margin-bottom: 15upx;
	}

	.add {
		color: #FEC300;
		margin-bottom: 0 !important;
	}

	.add1 {
		margin-bottom: 0 !important;
		line-height: 80upx;
		position: relative;
		font-size: 24upx;
	}

	.addedit {
		position: absolute;
		right: 0;
		line-height: 30upx;
	}

	.addedit image,
	.addedit span {
		display: inline-block;
		vertical-align: top;
		width: 50upx;
		text-align: center;
	}

	.addedit image {
		width: 30upx !important;
		height: 30upx !important;
		margin-right: 0;
	}

	.addedit.addedit1 {
		line-height: 80upx;
	}

	.addedit.addedit1 image {
		width: 40upx !important;
		height: 40upx !important;
		margin-right: 0;
		margin-top: 20upx;
	}

	.mallnum {
		width: 45upx;
		font-size: 20upx;
		text-align: center;
		background: #FF0100;
		color: white;
		height: 45upx;
		border-radius: 50%;
		position: absolute;
		line-height: 45upx;
		margin-left: 89.5upx;
		margin-top: -25upx;
	}

	.money {
		font-size: 24upx;
		color: #FEC200;
		margin-left: 30upx;
	}

	.barname {
		width: 300upx;
		overflow: hidden;
		text-overflow: ellipsis;
		height: 80upx;
		white-space: nowrap;
		margin-right: 20upx;
	}

	.popcont {
		height: 500upx;
		position: absolute;
		bottom: 0;
		width: 100%;
		background: white;
	}

	.delbar {
		line-height: 95upx;
		font-size: 24upx;
		text-align: right;
		padding: 0 30upx;
		border-bottom: 1px solid #C8C8C8;
	}

	.delbar image,
	.delbar span {
		display: inline-block;
		vertical-align: top;
	}

	.delbar image {
		width: 20upx;
		height: 30upx;
		margin-right: 20upx;
		margin-top: 32.5upx;
	}

	.barlist {
		height: 400upx;
		padding: 0 30upx;
		position: relative;
		width: auto;
	}
</style>
