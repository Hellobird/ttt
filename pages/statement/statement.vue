<template>
	<view>
		<wxParse :content="statement"/>
	</view>
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
					allurl:"https://mdapi.vertxjava.com/api/v1/common/statement"
				}).then(data => {
					const reg=new RegExp('/attach/download\\?filePath=','g');
					this.statement = marked(data.replace(reg,ut.static));
				})
			}
		}
	}
</script>

<style>

</style>
