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
				<goods-order-item :data="item" :reason="cancel_reason" :comment="comment" @reload="refresh"></goods-order-item>
			</div>
		</div>
		<div v-if="order_list.length">
			<div v-for="(item, index) in order_list" :key="index">
				<order-item :type="type" :data="item" :reason="cancel_reason" :comment="comment" @reload="refresh"></order-item>
			</div>
		</div>
		<div v-else  class="nomall">
			暂无订单
		</div>
	</div>
</template>

<script>
	import orderItem from '../../components/customOrderItem.vue'
	import goodsOrderItem from '../../components/goodsOrderItem.vue'
	import ut from '../../utils/index.js';
	export default {
		props:['type','comment','show','refreshStatus'],
		components: {
            orderItem,
			goodsOrderItem
        },
		data() {
			return {
				order_list: [],
				cancel_reason: [],
				goods_list:[]
			}
		},
		watch:{
			type(){
				this.order_list = [];
				this.goods_list = [];
				this.init();
			},
			show(){
				if(this.show&&wx.getStorageSync('token')){
					this.init();
				}
			}
		},
		onLoad(option) {
			this.init();
		},
		methods: {
			init() {
				this.getOrderList();
			},
			refresh(){
				this.getOrderList();
				this.$emit('refreshStatus');
			},
			getOrderList() {
				ut.request({
					data: {
						type: this.type
					},
					method: 'get',
					url: "customze/store/order/list"
				}).then(data=>{
					// 数据相等时不处理
					if(JSON.stringify(data) == JSON.stringify(this.order_list)){
						return;
					}
					this.order_list = data;
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
	.nomall{
		height: 300px;
		line-height: 300px;
		text-align: center;
		font-size: 24upx;
	}
</style>
