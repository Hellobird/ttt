<template>
	<view class="container">
		<wxParse :content="content" v-if="content"/>
	</view>
</template>

<script>
	import ut from '../../utils/index.js';
	import marked from '../../components/marked'
	import wxParse from '../../components/mpvue-wxparse/src/wxParse.vue'
	export default {
		data() {
			return {
				content:""
			}
		},
		components: {
			wxParse
		},
		onShow() {
			this.req_problem();
		},
		methods: {
			req_problem(){
				ut.request({
					method:'GET',
					url: "agreement/detail"
				}).then(data=>{
					if(!data)return;
					this.content = data;
				})
			}
		}
	}
</script>

<style>
	.container{
		padding: 0 30upx;
	}
</style>