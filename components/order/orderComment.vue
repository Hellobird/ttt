<template>
	<div>
		<div class="order-tip">
			<p v-if="type==1" class="order-tip-text">您可以在此页面查看您已付上门费的订单和“查看状态”</p>
			<p v-if="type==2" class="order-tip-text">待木斗工匠上门与您协商后，您可在此页面找到相应订单，选择“请确认方案”“放弃此订单”“重新生成订单”</p>
			<p v-if="type==3" class="order-tip-text">木斗工匠已完工并且您已现场验收后请找到相应订单点击“请验收”确认支付尾款，完成方案并对“图文评价”并发布</p>
			<p v-if="type==4" class="order-tip-text">您可以在此页面查看您已付上门费的订单和“查看状态”</p>
		</div>
		<div v-if="goods_list.length">
			<div v-for="(item, index) in goods_list" :key="index">
				<goods-order-item :data="item" :reason="cancel_reason" :comment="comment" @reload="init"></goods-order-item>
			</div>
		</div>
		<div v-else-if="order_list.length">
			<div v-for="(item, index) in order_list" :key="index">
				<order-item :type="type" :data="item" :reason="cancel_reason" :comment="comment" @reload="init"></order-item>
			</div>
		</div>
		<div v-else-if="custom_list.length">
			<div v-for="(item, index) in custom_list" :key="index">
				<custom-order-item :type="type" :data="item" :reason="cancel_reason" :comment="comment" @reload="init"></custom-order-item>
			</div>
		</div>
		<div v-else class="nomall">
			暂无订单
		</div>
	</div>
</template>

<script>
	import orderItem from '../../components/orderItem.vue'
	import goodsOrderItem from '../../components/goodsOrderItem.vue'
	import customOrderItem from '../../components/customOrderItem.vue'
	import ut from '../../utils/index.js';
	export default {
		props: ['type', 'comment', 'show'],
		components: {
			orderItem,
			goodsOrderItem,
			customOrderItem
		},
		data() {
			return {
				order_list: [],
				cancel_reason: [],
				goods_list: [],
				custom_list: [] // 订制商品
			}
		},
		watch: {
			comment() {
				this.init();
			},
			show() {
				if (this.show) {
					if (wx.getStorageSync('token')) {
						this.init();
					} else {
						this.order_list = [];
						this.goods_list = [];
						this.custom_list = [];
					}
				}
			}
		},
		onLoad(option) {
			/* this.comment=option.comment
			let barTitle = "查看订单";
			if(this.type == 1) {
				barTitle = "查看订单";
			}else if(this.type == 2) {
				barTitle = "确认施工方案和价格";
			}else if(this.type == 3) {
				barTitle = "质量验收及付尾款";
			}
			wx.setNavigationBarTitle({
			  title: barTitle
			}) */
			this.init();
		},
		methods: {
			init() {
				if(this.comment != 1){
					this.order_list = [];
				}
				if(this.comment != 2){
					this.goods_list = [];
				}
				if(this.comment != 3){
					this.custom_list = [];
				}
				if (this.comment == 1) {
					this.getOrderList();
				} else if (this.comment == 2) {
					this.getOrderList1();
				} else {
					this.getCustomOrderList();
				}
			},
			getOrderList() {
				ut.request({
					data: {
						type: this.type
					},
					method: 'get',
					url: "service/order/list"
				}).then(data => {
					console.log(data)
					// 如果返回结果与当前列表相同，则不处理
					if(JSON.stringify(this.order_list) == JSON.stringify(data)){
						return;
					}
					this.order_list = data;
				})
			},
			getOrderList1() {
				ut.request({
					data: {
						type: this.type
					},
					method: 'get',
					url: "goods/order/goodsOrderList"
				}).then(data => {
					console.log(data)
					data.forEach(item => {
						item.orderGoods.forEach(item => {
							if (item.picture) item.picture = item.picture.split(',')[0];
						})
					})
					// 如果返回结果与当前列表相同，则不处理
					if(JSON.stringify(this.goods_list) == JSON.stringify(data)){
						return;
					}
					this.goods_list = data;
				})
			},
			getCustomOrderList() {
				ut.request({
					data: {
						type: this.type
					},
					method: 'get',
					url: "customze/store/order/list"
				}).then(data => {
					console.log(data)
					// 如果返回结果与当前列表相同，则不处理
					if(JSON.stringify(this.custom_list) == JSON.stringify(data)){
						return;
					}
					this.custom_list = data;
				})
			}
		}
	}
</script>

<style>
	.order-tip {
		width: 100%;
		border-bottom: 1px solid #ededed;
		box-sizing: border-box;
		padding: 30upx;
	}

	.order-tip-text {
		font-size: 20upx;
		color: #656565;
		box-sizing: border-box;
		padding-left: 40upx;
		position: relative;
	}

	.order-tip-text:before {
		content: '';
		display: inline-block;
		width: 16upx;
		height: 16upx;
		background: #fec401;
		border-radius: 8upx;
		position: absolute;
		top: 50%;
		left: 0upx;
		margin-top: -8upx;
	}

	.nomall {
		height: 300px;
		line-height: 300px;
		text-align: center;
		font-size: 24upx;
	}
</style>
