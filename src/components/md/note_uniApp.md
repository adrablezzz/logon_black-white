# 									uni-app

## 一. 认识uni-app

### 0.在线笔记: 

http://notes.xiyanit.cn/#/uniapp/uniapp%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86?id=uni-app%e7%9a%84%e5%9f%ba%e6%9c%ac%e4%bd%bf%e7%94%a8

### 1.环境搭建

  编辑器HBuilder
  微信开发者工具

### 2.目录结构

### 3.全局配置和页面配置

```js
pages: {
    {
        path,
    	style: {}
    }
}
globalStyle: {
    navigationBarBackgroundColor,	//顶部导航条背景颜色
    navigationBarTitleText,				//顶部导航条标题文字
    navigationBarTextStyle,				//顶部导航条标题文字颜色:white/black
    enablePullDownRefresh,				//下拉刷新:false
    backgroundTextStyle,					//下拉刷新加载样式dark/light
    backgroundColor,							//背景颜色(下拉可见)
    onReachBottomDistance					//上拉事件触底距离
}
```

### 4.tabBar配置(与pages同级)

```js
tabBar: {
    color,							//tab文字颜色
    selectedColor,			//活跃文字颜色
    backgroundColor,		//tab背景颜色
    borderStyle,				//tab上边框颜色:black/white
    position,						//tab的位置:bottom/top(仅支持微信小程序)
    list: [
        pagePath,				//页面路径,必须在pages中先定义
        text,						//tabBarItem的文字
        iconPath,				//图标路径
        selectedIconPath	//活跃图标路径
    ]
}
```

### 5.condition启动模式配置-直达页面
​	与pages同级

```js
codition: {
    current: 0,			//list数组的索引值
    list: [					//list里面包含1+对象
        {
        name,			//页面名称
        path,			//页面路径
        query			//携带参数,在页面onload()获取
        }
    ]
}
```

### 6.组件使用

0.<view>根组件

​	hover-class 触摸样式
​    hover-stop-propagation 阻止冒泡
​    :hover-start-time='2000' 触摸延迟
​    :hover-stay-time='2000' 触摸松开延迟

1.<text>文本组件

​    selectable 文字可选属性
​    space='ensp'/'emsp'/'nbsp' 连续空格属性
​    decode 是否支持解码(&lt;/&amp;)

2.<button>按钮组件

​    size='default/mini' 尺寸
​    type='primary/default/wran' 按钮类型: 自适应/白色/红色
​    plain 镂空
​    disabled 禁用
​    loading 加载图标

3.<image>组件

​    src 
​    mode='aspectFit/aspectFill' 长边边长(完全显示)/短边边长(裁剪)



### 7.样式

​	1.rpx 响应式px 750rpx为屏幕宽度

​	2.@import 导入外部css文件

​	3.uni-app不能使用*选择器

​	4.page相当于body节点

​	5.全局样式: App.vue中的样式

​		局部样式: pages中的样式

​	6.字体图标: 

​		要求字体文件小于40kb
​		路径以~@开头的绝对路径
​		@import引入字体图标 修改url

​	7.scss安装

​		语言设置: 

```scss
<style lang="scss"></style>
```

​		

### 8.uni的数据绑定

​	1.数据(data),绑定(v-bind),循环(v-for),事件(v-on)同Vue一样

​	2.事件同时传递参数和事件 

```js
<button	@click="itemClick(1,$event)">按钮</button>
...methods: {
    itemClick(num, event) {
    	console.log(num, event) //1,事件对象
    }
}
```

### 9.uni的生命周期

​	1.应用的生命周期

​		onLaunch	uni-app初始化完成
​		onShow		uni-app启动,或从后台进入前台显示
​		onHide		uni-app进入后台
​		onError		uni-app报错

​	2.页面的生命周期

​		onLoad		监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参）
​		onShow		监听页面显示
​		onReady		监听页面初次渲染
​		onHide		监听页面隐藏
​		onUnload	监听页面卸载
​		

### 10.下拉刷新

​	开启下拉刷新的两种方式:

​		1.style 选项中开启 enablePullDownRefresh
​		2.调用uni.startPullDownRefresh()方法开启下拉刷新,通过onPullDownRefresh()监听函数可以监听到下拉刷新的动作

​	关闭下拉刷新的方式:

​		uni.stopPullDownRefresh()

### 11.上拉加载

​	1.配置上拉加载距底部开启加载的距离
​	2.通过onReachBottom监听函数监听到触底的行为

### 12.网络请求

​	0.搭建本地接口: 

​		工具: phpStudy

​	1.调用uni.request方法进行请求网络请求. 需要注意的是：在小程序中网络相关的 API 在使用前需要配置域名白名单。

```js
//get请求
uni.request({
    url: ''
    success(res) {
    	console.log(res)
	}
})
```

### 13.数据缓存

​	1.uni.setStorage	将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
​		

```js
uni.setStorage({
    key: 'id',
    data: 100, 
    success() {
    	console.log('储存成功')
    }
})
```

​	2.uni.setStorageSync	将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
​		

```js
uni.setStorageSync(key, data)
```

​		

3.uni.getStorage	从本地缓存中异步获取指定key对应的内容

```js
uni.getStorage({
    key: 'id',
    success: res => {
    	console.log(res.data)
    }
})
```

4.uni.getStorageSync 从本地缓存中同步获取指定key对应的内容
	uni.getStorageSync(key)
	
5.uni.removeStorage 从本地缓存中异步移除指定 key

```js
uni.removeStorage({
    key: 'id',
    success: function() {
    	console.log('删除成功')
    }
})
```

6.uni.removeStorageSync 从本地缓存中同步移除指定 key
	uni.removeStorageSync(key)

### 14.上传图片/预览图片

​	1.上传图片: uni.chooseImage方法从本地相册选择图片或使用相机拍照 //H5中限制不了数量
​		

```js
uni.chooseImage() {
    count: 9,
    success: res => {
        this.imgArr = res.temFilePaths //imgArr是之前定义在data中的数组
        console.log(res)
    }
}
```

​	2.预览图片: uni.previewImg方法点击图片即可预览图片

```js
uni.previewImage({
	urls: this.imgArr,
	current,		//当前图片
	loop,			//循环 5+app
	indicator 		//图片指示器 5+app
})
```

### 15.条件注释实现跨段兼容

​	1.写法: 	以 #ifdef 平台标识 开头, 以endif结尾
​	2.平台标识:

```
APP-PLUS				5+App
H5							H5
MP-WEIXIN				微信小程序
MP-ALIPAY				支付宝小程序
MP-BAIDU				百度小程序
MP-TOUTIAO			头条小程序
MP-QQ						QQ小程序
MP							MP开头的小程序
```

​	3.组件的条件注释

```html
<!-- #ifdef 平台标识 -->
...
<!-- #endif -->
```

​	4.api的条件注释

```js
//#ifdef 平台标识
...
//#endif
```

​	5.样式的条件注释

```css
/* #ifdef 平台标识 */
...
/* #endif */
```

### 16.uni中的导航跳转

​	1.利用navigator进行跳转: 该组件类似HTML中的<a>组件，但只能跳转本地页面。目标页面必须在pages.json中注册。
​		跳转到普通页面

```html
<navigator url="/pages/about/about" hover-class="navigator-hover">
	<button type="default">跳转到关于页面</button>
</navigator>
```

​		跳转到tabbar页面

```html
<navigator url="/pages/message/message" open-type="switchTab"> //open-type="redirect"会卸载上一个页面
	<button type="default">跳转到message页面</button>
</navigator>
```

​	2.利用编程式导航进行跳转
​		1.利用navigateTo进行导航跳转: 保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。

```js
//通过navigateTo方法进行跳转到普通页面
uni.navigateTo({
	url: '/pages/about/about',
})
```

​		2.通过switchTab跳转到tabbar页面 //并卸载上一个非tabBar页面
​			

```js
uni.switchTab({
	url: '/pages/message/message'
})
```

​		3.redirectTo进行跳转: 关闭当前页面，跳转到应用内的某个页面。
​			

```js
uni.switchTab({
	url: '/pages/message/message'
})
```

​	3.导航跳转传递参数: 在导航进行跳转到下一个页面的同时，可以给下一个页面传递相应的参数，接收参数的页面可以通过onLoad生命周期进行接收
​		

```js
//当前页面传递参数
uni.navigateTo({
	url: '/pages/about/about?id=80',
});
```

```js
//下一页面接收参数
onLoad (options) {
	console.log(options)
}
```



### 17.uni-app组件

​	组件及生命周期同Vue.
​	组件的生命周期函数: beforeCreate create beforeMount mounted beforeUpdate update beforeDestroy destroyed
​	

### 18.组件的通信

​	父子组件通信同Vue
​	

### 19.uni-ui的使用

​	*.可以免引用、注册，直接使用各种符合规则的vue组件。在代码区键入u，拉出各种内置或uni ui的组件列表，选择其中一个，即可使用该组件。
​	1、进入Grid宫格组件
​	2、使用HBuilderX导入该组件
​	3、导入该组件

```js
import uniGrid from "@/components/uni-grid/uni-grid.vue"
import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
```

​	4、注册组件

```js
components: {uniGrid,uniGridItem}
```

​	5、使用组件

```html
<uni-grid :column="3">
  <uni-grid-item>
 	 <text class="text">文本</text>
  </uni-grid-item>
  <uni-grid-item>
  	<text class="text">文本</text>
  </uni-grid-item>
  <uni-grid-item>
  	<text class="text">文本</text>
  </uni-grid-item>
</uni-grid>
```

​		

## 二. 黑马商城项目(流程)

*.类似项目接口文档:https://www.showdoc.com.cn/128719739414963/2612148628877795 

### 20.项目结构划分

​	1.业务逻辑:

```
项目: {
    首页
    资讯
    购物车
    会员
}
```

​	2.代码结构:

```
components: {},
pages: {},
static: {},
unpackage: {},
uitil: {},
```



### 21.配置顶部导航栏

### 22.配置tabBar

### 23.获取轮播图数据

​	需要工具: uni.request 接口地址 
​	*补充:	
​		1.uni.showToast({}) 显示Toast弹窗
​		2.可以使用await修饰uni.request来替换success. Eg: 
​			

```js
asyc getSwipers() {
  const res = await uni.request({
  	url: ''
  })
  console.log(res) //await方式的返回值是一个数组
}
```



### 24.请求封装

​	1.新建util/api.js文件,通过Promise导出请求方法myRequest

```js
cosnt BASE_URL = ''
export const myRequest = (options) => {
  return new Promise((resolve, reject) => {
  	uni.request({
        url: BASE_URL+options.url,
      	method: options.method || 'GET',
      	data: options.data || {},
      	success: res => {
            //请求成功Toast弹出'成功'
            resolve(res)
      	},
        fail: err => {
            //请求失败弹出'失败'
            reject(err)
        }
  	})
  })
}
```

​	2.将$myRequest方法挂载到全局
​		在Vue的原型上挂载myRequest方法,在其他组件中通过this.$myRequest调用
​			main.js中:
​			

```js
import { myRequest } from ''
Vue.prototype.$myRequest = myRequest 
```



### 25.轮播图

​	0.通过uni自带组件: 

```vue
<swiper><swiper-item></swiper-item>></swiper> 
```

​	1.swiper的属性
​		indiccator-dots 	显示面板指示点: false
​		circular 				 循环播放: false

### 26.导航区域

### 27.推荐商品

​	1.请求保存商品数据
​	2.展示数据,设置样式

### 28.导航跳转

### 29.封装goodsList组件并使用

### 30.上拉加载更多和下拉刷新

​	0.补充: [...this.goods, ...res.data.message]的形式可以累计传递多个数据

​	1.触底函数: onReachBottom() 

​	2.下拉刷新函数: onPullDownRefresh()

​	3.停止下拉刷新: uni.stopPullDownRefresh()

​	4.向getGoodsList()函数传递停止下拉刷新函数,在这个函数存在的时候调用它

### 31.页面地图和拨打电话

​	1.地图组件: <map> 	//百度地图坐标拾取器

​		longitude	经度

​		latitude		维度

​		makers		标记点

​		scale			缩放

​	2.拨打电话方法: uni.makePhoneCall()

### 32.分类左侧导航栏

​	1.滚动组件: <scroll-view>

​	2.获取分类数据

​	3.点击高亮事件

### 33.分类右侧数据展示

​	1.点击事件根据id值请求数据

​	2.展示数据设置样式

### 34.图片预览

​	函数: uni.previewImage()

### 35.资讯页面

​	1.min-width,max-width...	最小大宽高,保证不变形

​	2.获取数据

​	3.展示数据

​	4.抽离资讯组件

​	5.时间格式化	//padStart(2,0)	处理字符串数字,不满足2位则在前面加0,例: 3 ==> 03

### 36.点击跳转到资讯详情页

​	1.方法跳转: uni.navigateTo()

​	2.组件跳转: <navigator>

### 37.资讯详情页面

​	1.可以定义全局过滤器

​	2.富文本: <rich-text>	可以解析html标签

### 38.点击商品列表跳转到商品详情页

### 39.商品详情页

​	1.轮播图

​	2.商品信息

​	3.商品导航: GoodsNav插件

### 40.小程序打包

​	1.设置小程序id

​		1.微信公众平台注册小程序 -> 开发 ->开发设置 -> ID

​		2.manifest.json -> 微信小程序配置 -> 微信小程序AppID 

​		3.上传,提交审核

### 41.H5打包

​		1.manifest.json -> H5配置 -> 设置标题和路由

​		2.CMD -> live-server --port=3344

​		3.发行

### 42.安卓打包

​	1.manifest.json -> 基础和APP相关配置



## *其他补充:

### 1.动画

```js
<view :animation="animationDate">这是一个动画</view> ///通过绑定animation属性来实现动画
...
//创建动画空对象,之后会添加对象
data: {
	return {
		animationDate: {}
	}
}
//在页面加载完时给Vue创建animatioin动画实例
onload() {
	this.aniamtion = uni.createAnimation();
}
//页面卸载时清除animation
onUnload() {
	this.animation = {}
}
//定义触发动画的方法
methods: {
	itemClick() {
		this.animation.translateY(100).opcity(1).step({duration: 400})	//step用于结尾,表示一组动画完结
		//导出动画
		this.animationData = this.animation.export()
		//还原动画
		setTimeout(() => { 
			this.animation.translateY(100).opcity(1).step({duration: 0})
		},600)
		//补充:箭头函数没有this指向,如果用ES5语法需要在函数后面绑定this。
		//例: setTimeout(function() {}.bind(this), 600)
	}
}
```

### 2.注册登录

​	1.创建提交表单

​	2.发起注册登录请求

```js
uni.request({
	url:'',
	data: {
		"username": username,
		"password": password
	},
	method: "POST",
	success: res => {
		//判断状态码是否是200
		if(res.data.status == 200) {
			//获取的用户信息
			const userInfo = res.data.data) 
			//保存用户信息到全局缓存中
			uni.setStorageSync('globalUser', userInfo) 
			//切换页面
			uni.swithTab({
				url: ''
			})
		} else if(res.data.status == 500) { //密码错误
            uni.showToast({
                title: res.data.msg,
                duration: 2000,
                image: './xxx.png'
            })
        }
	}
})
```

3. 个人页面获取缓存信息

```js
onShow() {
	//获取缓存的个人信息
	const userInfo = uni.getStorageSync('globalUser')
	//然后将缓存信息保存在个人页面
}
```

4. 绑定个人信息: 名称,头像,ID等

### 3.清理缓存

### 4.用户退出登录

```js
...
logout() {
	const globalUser = this.getGlobalUser('globarUser')
	const serverUrl = this.serverUrl
	uni.request({
		url: serverUrl + '/user/logout?userId=' + gloabarUser.id,
		methods: "POST",
		success: res => {
			if(res.data.status == 200) {
				//用户退出成功
             	uni.removeStorageSync('globalUser')
                uni.swithTab({
                    url: ''
                })
			}
		}
	})
}
```

### 5.第三方登录

​	

### 6.文本省略

1. 1行省略

   ```css
   width: 500rpx;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
   ```

2. 2行省略

   ```css
   overflow: hidden;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 2;
   ```
   

### 7.微信支付

1. #### 创建订单

   1. #### 需要先获取订单编号

      1. 准备请求头 header={authorization: token}

      2. 准备请求体参数 order_price,consignee_addr,goods

      3. 发送请求 创建订单 获取订单编号

         请求({url,data,method,header})

   2. #### 需要先获取用户登录的token

      1.请求({url,data,method}) //因为获取token值需要企业微信,没有企业微信获取不了token

      2.模拟token: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo，这是后面几集需要用到的token值

   3. #### 需要先获取token参数: 

      encryptedData,rawData,iv,signature	//button的open-type获取(需要APPID)

      code	//wx.login或uni.login
      
      ​	1.需要注册微信公众平台小程序账号
      
      ​	2.获取APPID

#### 	2.准备支付

​		1.发起预支付接口,获取支付参数 {pay}=

​		2.调用微信内支付

​			wx.requestPayment({...支付参数}) //使用Promise封装

#### 	3.查询后台订单状态	

#### 	4.支付成功跳转到订单页面

#### 	5.删除已支付的缓存数据

#### 	6.优化代码

​		1.url中带有/my/的是私有路径 需要代码判断自动带上header和token

```js
const BASE_URL = 'https://api-hmugo-web.itheima.net/api/public/v1'
let ajaxTimes = 0
export const request = (options) => {
    //判断url中是否有私有路径
    let header = {...options.header} //为了如果还需要从请求头传递参数
    if(params.url.includes('/my/')) {
        //拼接header 带上token
        header['authorrization'] = uni.getStorageSync('token')
    }
    
	ajaxTimes++
	//显示加载中效果
	uni.showLoading({
		title:'加载中',
		mask: true
	})
	
	return new Promise((resolve, reject) => {
		uni.request({
            ...options,
            header: header,
			url: BASE_URL+options.url,
			success: res => {
				resolve(res)
			},
			fail: err => {
				reject(err)
			},
			complete:() => {
				ajaxTimes--
				uni.hideLoading()
			}
		})
	})
}
```

### 8.uni-app支付

###### 	0.uni官网 安装导入 微信/支付宝全能支付接口插件

#### 	1.H5接口支付方式wx

​		1.开启支付设置(见截图)

#### 	2.原生app支付wx

​		1.开启支付设置(见截图)

#### 	3.支付宝app支付

