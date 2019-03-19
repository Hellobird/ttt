<template>
	<div class="container">
		<div class="head">这里是头部咯</div>
		<div class="content" :style="{height:contentHeight+'px'}">
			<scroll-view class="left" scroll-y>
				<div class="left_item" v-bind:class="{active:item.id == currentSelectID}" v-for="item in leftList" :key='item.id'
				 @click="scrollTo(item.offsetY)">
					{{item.title}}
				</div>
			</scroll-view>
			<scroll-view class="right" scroll-y @scroll="scroll" :scroll-top="scrollTop">
				<div class="right_item" v-for="item in rightList" :key='item.id'>
					{{item.title}}
				</div>
			</scroll-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				contentHeight: 500, // 打比说默认高度是500px嘛
				leftList: [],
				rightList: [],
				currentSelectID: 1,
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		onLoad() {
			this.contentHeight = wx.getSystemInfoSync().windowHeight - uni.upx2px(200);
			// 加点测试数据吧
			let group = [];
			for (let i = 0; i < 10; i++) {
				group.push({
					title: "分类" + i,
					id: i + 1,
					offsetY: 0
				})
			}
			this.leftList = group;

			let child = [];
			let currentY = 0;
			for (let item of group) {
				item.offsetY = currentY;
				for (let i = 0; i < item.id; i++) {
					child.push({
						title: "分类" + item.id + "-商品" + i,
						id: i,
						parentId: item.id
					})
				}
				// 增加偏移量咯
				currentY += item.id * parseInt(uni.upx2px(200));
			}
			this.rightList = child;
		},
		methods: {
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop;
				let itemHeight = uni.upx2px(200);
				let first = parseInt(e.detail.scrollTop / itemHeight);
				let parentId = this.rightList[first].parentId;
				if (this.currentSelectID != parentId) {
					// this.currentSelectID = parentId;
					this.$set(this.$data, 'currentSelectID', parentId);
				}
			},
			scrollTo: function(offset) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = offset;
				});
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
		height: 200upx;
		background: #00BFFF;
		display: flex;
		position: fixed;
	}

	.content {
		background: #EFCB70;
		margin-top: 200upx;
		background: #60CED0;
		display: flex;
		flex-direction: row;
	}

	.left {
		width: 250upx;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.left_item {
		height: 100upx;
		background-color: white;
		text-align: center;
		margin-bottom: 20upx;
		line-height: 100upx;
	}

	.active {
		background: #E9BB27;
	}

	.right {
		width: 500upx;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.right_item {
		height: 200upx;
		line-height: 200upx;
		text-align: center;
	}
</style>
