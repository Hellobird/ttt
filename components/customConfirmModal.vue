<template>
	<div class="cancel-order-modal">
		<scroll-view class="popheight" scroll-y="true">
			<div class="cancel-order-condition" >
				<div class="cancel-order-title" >
					价格明细:
				</div>
				<div class="cancel-statement-wrap">
					<div class="cancel-radio-wrap" v-for="(item,priceIndex) in confirmPlan.prices" :key="priceIndex">
						<span class="cancel-radio"></span>
						<span class="cancel-label">{{item.name+' '+item.price+item.unit+' '+'x'+item.number}}</span>
					</div>
					<div class="cancel-radio-wrap" v-if="confirmPlan.taxRate != 0">
						<span class="cancel-radio"></span>
						<span class="cancel-label">税率 ¥{{confirmPlan.taxRate}}</span>
					</div>
					<div class="cancel-radio-wrap" v-if="confirmPlan.storeDiscount != -1">
						<span class="cancel-radio"></span>
						<span class="cancel-label">店铺折扣 {{confirmPlan.storeDiscount}}折</span>
					</div>
					<div class="cancel-radio-wrap" v-if="confirmPlan.mudouDiscount != -1">
						<span class="cancel-radio"></span>
						<span class="cancel-label">木斗工匠折扣 {{confirmPlan.mudouDiscount}}折</span>
					</div>
				</div>
				<div style="height: 10px;"/>
				<div class="total-item">
					<span class="total-item-title">总价：</span>
					<span class="cancel-radio"></span>
					<span class="cancel-label">总价: ¥{{confirmPlan.allPrice}}</span>
				</div>
			</div>
			<div class="cancel-order-condition" >
				<div class="cancel-order-title" >
					定金:
				</div>
				<div class="cancel-statement-wrap">
					<div class="cancel-radio-wrap">
						<span class="cancel-radio"></span>
						<span class="cancel-label">定金: ¥{{confirmPlan.earnestMoney}}</span>
					</div>
				</div>
			</div>
		</scroll-view>
		<div class="cancel-plan-wrap">
			<button class="cancel-plan" @click="cancel_confirm">放弃购买</button>
			<button class="cancel-plan" @click="againPlan">重新申报</button>
		</div>
		<div class="agree-plan-wrap">
			<button class="cancel-plan agree-plan" @click="confirmCustomPlan">确认购买及支付定金</button>
		</div>
	</div>
</template>

<script scode="true">
import ut from '../utils/index.js';
export default {
  props: ["orderId","reload","changeVisibileModal","confirmPlan"],
  data() { 
	return {

	}
  },
  methods: { 
	 cancel_order() {
	 			
		ut.request({
			data: {
				orderId: this.orderId,
			},
			url: "customze/store/order/cancelOrder"
		}).then(data=>{
			this.$parent.changeVisibileModal(false)
			this.$emit('reload');
			ut.totast("订单取消成功")
		})
	},
	 cancel_confirm() {
		 this.$parent.changeVisibileModal(false)
		this.$emit('changeb',true)
	 },
	againPlan() {
		ut.request({
			data: {
				orderId: this.orderId
			},
			url: "customze/store/order/againPrice"
		}).then(data=>{
			this.$parent.changeVisibileModal(false)
			this.$emit('reload');
			ut.totast("操作成功")
			console.log(data)
		})
	},
	confirmCustomPlan() {
		ut.request({
			data: {
				orderId: this.orderId
			},
			url: "customze/store/order/confirmPrice"
		}).then(data=>{
			console.log(data);
			let that = this;
			wx.requestPayment({
				'timeStamp': data.timeStamp,
				'nonceStr': data.nonceStr,
				'package': data.package,
				'paySign': data.paySign,
				'signType': 'HMAC-SHA256',
				success: function(res) {
					
				},
				'fail': function(res) {
					console.log(res)
				},
				'complete': function(res) {
					that.$parent.changeVisibileModal(false)
					that.$emit('reload');
				}
			});
		})
	}
  }
}
</script>

<style>
	.action-sheet {
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
		position: fixed;
		top: 0upx;
		left: 0upx;
	}
	.action-main-wrap {
		width: 100%;
		background: #fff;
		position: absolute;
		bottom: 0upx;
		box-sizing: border-box;
		padding: 30upx;
	}
	.action-main {
		position: relative;
	}
	.cancel-order-modal {
		width: 100%;
		font-size: 24upx;
	}
	.cancel-order-title {
		padding-bottom: 30upx;
	}
	.cancel-order-condition {
		padding-bottom: 30upx;
		margin-bottom: 30upx;
		border-bottom: 1px solid #ededed;
	}
	.popheight{
		max-height: 600upx;
	}
	.noborder {
		margin-top: 30upx;
		border-bottom: 0upx;
	}
	.cancel-order-status .cancel-order-title {
		padding-top: 20upx;
	}

	.cancel-radio-wrap {
		margin-left: 220upx;
		margin-bottom: 20upx;
	}
	.cancel-radio {
		display: inline-block;
		width: 20upx;
		height: 20upx;
		background: #fec200;
		border-radius: 10upx;
	}
	.cancel-label {
		padding-left: 57upx;
	}
	.cancel-plan-wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 98upx;
		padding-right: 98upx;
		margin-bottom: 30upx;
	}
	.cancel-plan {
		width: 200upx;
		height: 50upx;
		background: #fec200;
		border-radius: 4upx;
		font-size: 24upx;
		text-align: center;
		line-height: 50upx;
		color: #fff;
	}
	.cancel-plan.agree-plan {
		width: 500upx;
		height: 100upx;
		border-radius: 0upx;
		line-height: 100upx;
	}
	.agree-plan-wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 50upx;
	}
	
	.total-item{
		margin-top: 20upx;
	}
	.total-item-title{
		display: inline-block;
		width: 80upx;
	}
	
	.total-item .cancel-radio{
		margin-left: 140upx;
	}
</style>
