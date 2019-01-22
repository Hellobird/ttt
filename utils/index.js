var ut = {};
ut.url = 'https://mdapi.vertxjava.com/api/v1/client/';
ut.static = 'https://mdapi.vertxjava.com';
ut.uploadimgurl = 'https://mdapi.vertxjava.com/api/v1/';
ut.formatTime = function(data) {
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	return minute + '分' + second + '秒';
}
ut.formatNumber = function(n) {
	n = n.toString()
	return n[1] ? n : '0' + n
};
//格式化时间
ut.time = function(timestamp) {
	var date = new Date(timestamp * 1000), //时间戳为10位需*1000，时间戳为13位的话不需乘1000
		Y = date.getFullYear() + '-',
		M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-',
		D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
		h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() + ' :',
		m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	return Y + M + D + " " + h + m;
};
ut.reloaadTime = 600;
ut.checkPageTime=function(name){
	const monttime = new Date().getTime();
	const m = (monttime-wx.getStorageSync(name))/1000;
	if(m>ut.reloaadTime||!wx.getStorageSync(name)){
		wx.setStorageSync(name,new Date().getTime());
		return true;
	}
	return false;
}
//提示
ut.totast=function(title){
	wx.showToast({
		title: title,
		icon: 'none',
		color: 'red',
		duration: 2000
	})
}
//拨打电话
ut.call=function(){
	const callphone=wx.getStorageSync('callphone');
	if(callphone){
		wx.makePhoneCall({
			phoneNumber: callphone
		})
		return
	}
		ut.request({
			allurl: ut.uploadimgurl+"common/customerPhone",
			method:'GET'
		}).then(data=>{
			wx.setStorageSync('callphone',data);
			wx.makePhoneCall({
				phoneNumber: data,
			})
		})
	
}
//
ut.createRandom = function(num, min, max) {
	let arr = [],
		res = [],
		newArr;
	for(let i = min; i < max; i++) {
		arr.push(i);
	}
	newArr = Object.assign([], arr);

	for(let item = 0; item < arr.length; item++) {
		res.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
	}
	res.length = num;
	return res;
}
//设置页面title
ut.settitle = function(title) {
	wx.setNavigationBarTitle({
		title: title
	})
}
//弹出消息
ut.showToast = function(title) {
	wx.showToast({
		title: title,
		icon: 'none',
		color: 'red',
		duration: 2000
	})
}
//校验手机号
ut.checkmobile = function(str) {
	var myreg = /^[1][3,4,5,6.7,8,9][0-9]{9}$/;
	if (!myreg.test(str)) {
		return false;
	} else {
		return true;
	}
}
//校验用户名
ut.checkUsername = function(str) {
	if(/^[a-zA-Z0-9]*$/g.test(str)){
	  return true;
	}
	return false;
}
//校验姓名
ut.checkName=function(name){
	const regName =/^[\u4e00-\u9fa5]{2,4}$/; 
	if(!regName.test(name)){ 
		 return false; 
	 }
	 return true;
}
//校验身份证
ut.checkCard=function(id) {
	var format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/;
        //号码规则校验
        if (!format.test(id)) {
            return false;
        }
        //区位码校验
        //出生年月日校验   前正则限制起始年份为1900;
        var year = id.substr(6, 4),//身份证年
            month = id.substr(10, 2),//身份证月
            date = id.substr(12, 2),//身份证日
            time = Date.parse(month + '-' + date + '-' + year),//身份证日期时间戳date
            now_time = Date.parse(new Date()),//当前时间戳
            dates = (new Date(year, month, 0)).getDate();//身份证当月天数
        if (time > now_time || date > dates) {
            return false;
        }
        //校验码判断
        var c = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];   //系数
        var b = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];  //校验码对照表
        var id_array = id.split("");
        var sum = 0;
        for (var k = 0; k < 17; k++) {
            sum += parseInt(id_array[k]) * parseInt(c[k]);
        }
        return id_array[17].toUpperCase() === b[sum % 11].toUpperCase();
}
//校验密码
ut.checkPass=function(pass){
	const regIdNo = /(^\a-\z\A-\Z0-9\@\.)/; 
	if(!regIdNo.test(pass)){ 
		return false; 
	}
	return true
}
//清除用户信息
ut.loginout =function(){
	wx.setStorageSync('token','');
}
ut.request=function(parm){
	parm.data=parm.data||{};
	var c='application/x-www-form-urlencoded';
	if(parm.c){
	  c='application/json';
	}
	return new Promise(function(reject,fail){
		uni.request({
			url: parm.allurl?parm.allurl:(ut.url + parm.url),
			data: parm.data,
			method: parm.method || 'post',
			header: {
				"Accept": "*/*",
				'content-type': c,
				"Authorization": wx.getStorageSync('token')||''
			},
			success: (res) => {
				if(res.statusCode==401){
					const pages = getCurrentPages(); //获取加载的页面
					const currentPage = pages[pages.length-1].route; //获取当前页面的对象
					ut.loginout();
					if(currentPage.indexOf('pages/index')!=-1){
						wx.navigateTo({
							url: '../mine/login'
						})
					}else{
						wx.redirectTo({
							url: '../mine/login'
						})
					}
					return
				}

				if(res.data.code == 0) {
					reject(res.data.data)
				} else {
					wx.showToast({
						title: res.data.msg,
						icon: 'none',
						color: 'red',
						duration: 2000
					})
				}
			},
			fail: function() {
				fail();
				wx.showToast({
					title: '连接超时',
					icon: 'none',
					color: 'red',
					duration: 2000
				});
			}
		});
	})
};
//请求
ut.ajax = function(parm) {
	if(parm.loadinghide) {
		ut.request(parm);
	} else {
		wx.showLoading({
			title: '正在加载。。',
			complete: function() {
				ut.request(parm);
			}
		})
	}
}

ut.login = function(callback) {
	//调用登录接口
	wx.login({
		success: function(data) {
			console.log(data)
			wx.getUserInfo({
				success: function(res) {
					//获取用户标识
					ut.ajax({
						url: 'thirdParty/register',
						data: {
							js_code: data.code,
							nickName: res.userInfo.nickName,
							avatarUrl: res.userInfo.avatarUrl
						},
						method: 'get',
						success: function(data) {
							wx.setStorageSync('uid', data.id);
							wx.setStorageSync('userInfo', data.inf);
							if(callback) callback();
						}
					});
				}
			});

			//  
		}
	});
}
//上传图片
ut.uploadimg = function(parm) {
	parm=parm||{};
	wx.chooseImage({
		count:1,
		sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
		sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		success: function(res) {
			// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
			console.log(res)
			if(parm.callback)parm.callback(res.tempFilePaths[0]);		
		}
	})
}
//
export default ut;