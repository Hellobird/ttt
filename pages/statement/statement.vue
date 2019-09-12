<template>
	<div class="cont-tip">
		<text>{{statement}}</text>
	</div>
</template>

<script>
	import ut from '../../utils/index.js';
	import marked from '../../components/marked'
	import wxParse from '../../components/mpvue-wxparse/src/wxParse.vue'
	export default {
		data() {
			return {
				statement: " " // 这里默认使用空格，否则wxParse会有报错
			};
		},
		components: {
			wxParse
		},
		onLoad(opt) {
			if(opt.type == "1"){
				ut.settitle('细则声明');
			} else if(opt.type == "3"){
				ut.settitle('配送声明');
			} else if(opt.type == "4"){
				ut.settitle('搬运声明');
			}
			this.req_statment(opt.type)
		},
		methods: {
			req_statment(type){
				ut.request({
					data: {
						type:type
					},
					method:"GET",
					allurl: ut.static + "/api/v1/common/statement"
				}).then(data => {
					const reg=new RegExp('/attach/download\\?filePath=','g');
					// this.statement = marked(data.replace(reg,ut.static));
					this.statement = data;
				})
			}
		}
	}
</script>

<style>
.cont-tip{
		display:-webkit-box;
		display:-webkit-flex;
		display:-ms-flexbox;
		display:flex;
		padding:0 30rpx;
		line-height:40rpx;
		margin-top:10rpx;
		font-size:24rpx;
		margin-bottom:120rpx;
	}
</style>
