<template>
	<div class="cancel-order-modal">
		<scroll-view class="popheight" scroll-y="true">
			<div class="cancel-order-condition" >
				<div class="cancel-order-title" >
					商品价格:
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
					预约金:
				</div>
				<div class="cancel-statement-wrap">
					<div class="cancel-radio-wrap">
						<span class="cancel-radio"></span>
						<span class="cancel-label">预约金: ¥-{{confirmPlan.makePrice}}</span>
					</div>
				</div>
			</div>
			<div class="cancel-order-condition" >
				<div class="cancel-order-title" >
					定金:
				</div>
				<div class="cancel-statement-wrap">
					<div class="cancel-radio-wrap">
						<span class="cancel-radio"></span>
						<span class="cancel-label">定金: ¥-{{confirmPlan.earnestMoney}}</span>
					</div>
				</div>
			</div>
			<div class="cancel-order-condition" >
				<div class="cancel-order-title" >
					尾款:
				</div>
				<div class="cancel-statement-wrap">
					<div class="cancel-radio-wrap">
						<span class="cancel-radio"></span>
						<span class="cancel-label">尾款: ¥{{confirmPlan.tailMoney}}</span>
					</div>
				</div>
			</div>
			<div class="zhanwei"></div>
		</scroll-view>
		
		<div class="agree-plan-wrap">
			<div>
				<image :src="'/static/mine/'+(check?'un':'')+'check.jpg'" @click="cg_check"></image><span>验收成功</span>
			</div><button class="cancel-plan agree-plan" @click="orderCheck">确认付款</button>
		</div>
	</div>
</template>

<script>
import ut from '../utils/index.js';
export default {
  props: ["orderId","reload","changeVisibileModal","confirmPlan"],
  data() { 
	return {
		check:false
	}
  },
	onLoad() {
		console.log(this.confirmPlanlist)
	},
  methods: {  
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
	cg_check(){
		this.check=!this.check;
	},
	orderCheck() {
		if(!this.check){
			ut.totast("请确认验收完成");
			return;
		}
		ut.request({
			data: {
				orderId: this.orderId
			},
			url: "customze/store/order/check"
		}).then(data=>{
			console.log(data)
			ut.pay(data,{
				complete: (res)=> {
					this.$parent.changeVisibileModal(false)
					this.$emit('reload');
				},
				success: () => {
					ut.totast("操作成功")
				}
			})
			
			console.log(data)
		})
	}
  }
}
</script>

<style scoped="true">
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
		border-bottom: 1px solid #ededed;
	}
	.popheight{
		height: 600upx;
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
	.zhanwei{
		height: 140upx;
		margin-left: 220upx;
	}
	.cancel-plan.agree-plan {
		width: 500upx;
		height: 100upx;
		border-radius: 0upx;
		line-height: 100upx;
		flex: 1;
	}
	.agree-plan-wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
		position: fixed;
		bottom: 0;
		background: white;
		left: 0;
		right: 0;
	}
	.agree-plan-wrap>div{
		display: flex;
		padding: 30upx;
		align-items: center;
	}
	.agree-plan-wrap>div image{
		width: 40upx;
		height: 40upx;
		margin-right: 10upx;
	}
</style>
