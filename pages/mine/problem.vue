<template>
	<view>
		<div v-for="(list,index) in list" :key='list'>
			<div class="columlist" @click="cg_check(index)">
				<span>{{list.title}}</span><div><image src="../../static/right.jpg"></image></div>
			</div>	
			<div v-if="list.check" class="cont">{{list.content}}</div>
		</div>
	</view>
</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				list:[]
			}
		},
		onShow() {
			this.req_problem();
		},
		methods: {
			req_problem(){
				ut.request({
					url: "common/problem"
				}).then(data=>{
					data=data||[]
					data.forEach(item=>{
						item.check=false
					})
					this.list=data;
				})
			},
			cg_check(index){
				this.list[index].check=!this.list[index].check
			}
		}
	}
</script>

<style>
	.columlist{
		display: flex;
		justify-content: space-between;
		font-size: 24upx;
		align-items: center;
		height: 90upx;
		padding: 0 30upx;
		border-bottom: 1px solid #CCCCCC;
	}
	.columlist1,.columlist>div{
		height: 180px!important;
	}
	.columlist image{
		width: 20upx;
		height: 35upx;
	}
	.header{
		width: 120px!important;
		height: 120px!important;
	}
	.bggray{
		background: #e5e5e5;
		height: 30upx;
	}
	.outinf{
		background: #FEC200;
		line-height: 100upx;
		text-align: center;
		margin-top: 200upx;
		font-size: 24upx;
		color: white;
		margin-left: 30upx;
		margin-right: 30upx;
	}
	.columlist>div{
		display: flex;
		justify-content: space-between;
		font-size: 24upx;
		align-items: center;
		height: 90upx;
	}
	.columlist1>div>image:first-child{
		margin-right: 30upx;
	}
	.columlist>div>span{
		margin-right: 30upx;
	}
	.cont{
		border-bottom: 1px solid #CCCCCC;
		padding: 30upx;
		font-size: 24upx;
		background: #E8E8E8;
		line-height: 30upx;
		
	}
</style>