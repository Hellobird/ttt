<template>
	<div>
		<div class="setinput">
			<p class="logo">
				<image src="../../static/logo.jpg"></image>
			</p>
			<div>
				<image src="../../static/mine/user.jpg"></image><input type="text" placeholder="请输入手机号" v-model="phone"/>
			</div>
			<div>
				<input type="number" placeholder="请输入验证码" v-model="verifyCode"/><label class="getcode" @click="req_sendCode">{{codemsg}}</label>
			</div>
			<p class="submit" @click="req_login">				
				登录
			</p>
			<p class="tip" @click="go_mine_register">没有账号？立即注册</p>
		</div>
		<div class="qlogin" @click="loginWithWechat">
			<image src="../../static/mine/qlogin.jpg" mode="widthFix"></image>
			<div>
				<image src="../../static/mine/wx.jpg"></image>
			</div>
		</div>
	</div>
</template>

<script>
	
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				phone:"",
				verifyCode:"",
				codemsg:"获取验证码"
			}
		},
		onLoad() {

		},
		methods: {
			go_mine_login(){
				wx.navigateTo({
					url: '../mine/login'
				})
			},
			cg_active(){
				console.log(1)
				this.check=!this.check;
			},
			go_mine_register(){
				wx.redirectTo({
					url: '../mine/register'
				})
			},
			req_login(){
				if(!this.phone){
					ut.totast('请输入手机号');
					return;
				}
				if(!ut.checkmobile(this.phone)){
					ut.totast('请输入正确的手机号');
					return;
				}
				if(!this.verifyCode){
					ut.totast('请输入验证码');
					return;
				}
				wx.login({
					success: data => {
						ut.request({
							url: `user/phoneLogin?phone=${this.phone}&vCode=${this.verifyCode}&code=${data.code}`
						}).then(data=>{
							wx.setStorageSync('token',data.token)
							wx.setStorageSync('user_id',data.userId)
							wx.navigateBack()
						})
						
					}
				})
				
				
			},
			req_sendCode(){
				if(this.codemsg!="获取验证码"&&this.codemsg!="重新获取")return;
				if(!this.phone){
					ut.totast('请输入手机号');
					return;
				}
				if(!ut.checkmobile(this.phone)){
					ut.totast('请输入正确的手机号');
					return;
				}
				let codenum=60;
				let timer=setInterval(()=>{
					codenum--;
					this.codemsg=codenum+'s后重新获取';
					if(codenum==0){
						clearInterval(timer);
						this.codemsg="重新获取";
					}
				},1000)
				ut.request({
					data: {
						phone:this.phone
					},
					url: "user/sendCode"
				}).then(data=>{
				}).catch(data=>{
					clearInterval(timer);
					this.codemsg="重新获取";
				})
			},
			loginWithWechat(){
				wx.showLoading({
					title:'加载中'
				});
				wx.login({
					success(res) {
						if(res.code){
							wx.request({
								url: `${ut.url}user/loginByWeChat?code=${res.code}`,
								method: "POST",
								success(res) {
									wx.hideLoading();
									if(res.data && res.data.code == 0 && res.data.data.token){
										wx.setStorageSync('token',res.data.data.token);
										wx.setStorageSync('user_id',res.data.data.user_id)
										wx.navigateBack()
									} else {
										wx.redirectTo({
											url: '../mine/bindPhone'
										})
									}
								},
								fail() {
									wx.hideLoading();
									wx.showToast({
										title: '网络繁忙',
										icon: 'none',
										color: 'red',
										duration: 2000
									})
								}
							});
						}
					}
				})
			},
			
		}
	}
</script>

<style>
	.tip{
		line-height: 60upx;
		text-align: right;
		font-size: 24upx;
	}
	.setinput{
		padding: 0 70upx;
	}
	.submit{
		background: #F6C11B;
		color: white;
		line-height: 80upx;
		text-align: center;
		border-radius: 10upx;
		font-size: 28upx;
		margin-top: 90upx;
	}
	.logo{
		padding: 40px 0;
		text-align: center;
	}
	.logo image{
		display: inline-block;
		vertical-align: top;
		width: 250upx;
		height: 250upx;
	}
	.setinput>div>input{
		flex: 1;
	}
	.setinput>div{
		display: flex;
		border-bottom: 1px solid #C8C8C8;
	}
	.setinput>div>input{
		line-height: 90upx;
		height: 90upx;
		font-size: 24upx;
	}
	.setinput>div>image{
		width: 35upx;
		height: 35upx;
		margin-top: 27.5upx;
		margin-right: 30upx;
	}
	.qlogin>image{
		width: 100%;
		margin-top: 75upx;
	}
	.qlogin>div{
		text-align: center;
	}
	.qlogin>div image{
		width: 150upx;
		height: 150upx;
		display: inline-block;
		vertical-align: top;
		margin-top: 50upx;
	}
	.getcode{
		float: right;
		color: #F6C11B;
		width: 200upx;
		text-align: center;
		border-left: 1px solid #C8C8C8;
		height: 30upx;
		line-height: 30upx;
		margin-top: 45upx;
		min-height: 30upx;
		font-size: 24upx;
	}
</style>
