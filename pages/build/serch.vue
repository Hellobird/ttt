<template>
	<div>
		<div class="serch"><image src="../../static/index/serch.png" @click="req_goodslist"></image><input type="text" placeholder="寻找商品、店铺" v-model="name" confirm-type='search' @confirm='req_goodslist'/></div>
		<div class="section">
			<div class="list">
				<div v-for="(store,index) in list" :key='index'>
					<image class="store_img" :src="static + store.picture" ></image>
					<div class="inf">
						<div class="storeinf">
							<p>{{store.name}}</p>
							<p>{{store.address}}</p>
						</div>
						<scroll-view class="goodslist" scroll-x>
							<div @click="go_build_mallinf(goods.classId)" class="goodsinf"  v-for="(goods,childIndex) in store.storeGoods" :key='childIndex'>
								<image class="goods_img" :src="static + goods.picture"></image>
								<p class="goods_name">{{goods.name}}长度测试咯</p>
								<p>¥{{goods.price}}起</p>
							</div>
						</scroll-view>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				static:'',
				name:'',
				list:[]
			}
		},
		onLoad() {
			this.static=ut.static;
		},
		methods: {
			req_goodslist(){
				ut.request({
					data: {
						name:this.name
					},
					url: "class/goods/list"
				}).then(data=>{
					this.list=data;
					if(!this.list.length){
						ut.totast('暂无相关商品')
					}
				})
			},
			go_build_mallinf(_id){
				wx.navigateTo({
					url: `../build/mallinf?_id=${_id}`
				})
			}
		}
	}
</script>

<style>
	.serch{margin-left: 60upx;margin-right: 60upx;margin-top: 30upx;height: 54upx;line-height: 54upx;border-radius: 10upx;display: flex;border:1px solid #c8c8c8;font-size: 24upx;align-items: center;}
	nav{
		margin-bottom: 42upx;
		margin-top: 29upx;
		font-size: 30upx;
	}
	nav span{
		margin-left: 152upx;
		display: inline-block;
		vertical-align: top;
		color: #FEC300;
	}
	nav span:first-child{
		margin-left: 81upx;
		color: #5d5c5c;
	}
	.serch image{width: 26upx;height: 24upx;margin-left: 30upx;margin-right: 30upx;}
	.serch input{
		flex: 1;
	}
	.section{display: flex;}
	.section .list{
		flex: 1;
		margin-left: 30upx;
		display: flex;
	}
	.list{
		display: flex;
		flex-direction: column;
		font-size: 24upx;
	}
	.list>div{
		margin-bottom: 30upx;
		flex-direction: row;
		display: flex;
	}
	.store_img{
		width: 80upx;
		height: 80upx;
		margin-top: 20upx;
		margin-right: 18upx;
	}

	.storeinf{
		justify-content: center;
		height: 120upx;
		display: flex;
		flex-direction: column;
		border-bottom: 1px dashed #CCCCCC;
	}
	.storeinf p:first-child{
		margin-bottom: 10upx;
		font-size: 32upx;
		font-weight: bold;
	}
	
	.goodslist{
		width: 630upx;
		overflow: hidden;
		white-space: nowrap;
		margin-top: 20upx;
	}
	
	.goods_img{
		width: 200upx;
		height: 200upx;
		margin-bottom: 10upx;
		border-radius: 5px;
		margin-right: 20upx;
	}
	.goodslist .goodsinf{
		display: inline-block;
	}
	.goodsinf p{
		width: 200upx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.goods_name{
		margin-bottom: 5upx;
		font-size: 28upx;
	}
</style>
