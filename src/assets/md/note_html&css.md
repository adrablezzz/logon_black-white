# HTML

#### 1.转义字符

```html
&nbsp;  空格
&gt;    大于
&lt;    小于
&copy;  版权符号
```

#### 2.布局标签（结构化语义标签）

```html
header 表示网页的头部
main 表示网页的主体部分(一个页面中只会有一个main)
footer 表示网页的底部
nav 表示网页中的导航
aside 和主体相关的其他内容（侧边栏）
article 表示一个独立的文章
section 表示一个独立的区块，上边的标签都不能表示时使用section

div 没有语义，就用来表示一个区块，目前来讲div还是我们主要的布局元素
span 行内元素，没有任何的语义，一般用于在网页中选中文字
```

#### 3.音视频

```html
<audio controls>
  <!-- 对不起，您的浏览器不支持播放音频！请升级浏览器！ -->
  <source src="./source/audio1.mp3">
  <source src="./source/audio1.ogg">
  <embed src="./source/audio1.mp3" type="audio/mp3" width="300" height="100">
</audio>

<video controls>
  <!-- 对不起，您的浏览器不支持播放音频！请升级浏览器！ -->
  <source src="./source/video1.mp4">
  <source src="./source/video1.webm">
  <embed src="./source/video1.mp4" type="video/mp4" width="800" height="500">
</video>
```

# CSS

#### 1.样式

```css
行内样式    style=";"
内联样式表  <style></style>
外联样式表  <link rel="stylesheet" href="./style.css">
```

#### 2.选择器

```css
1.常用选择器
	1.元素选择器    P{}
	2.id选择器      #red{}
	3.类选择器      .box1{}
	4.通配选择器    *{}

2.复合选择器
	1.交集选择器    div.red
	2.选择器分组    .box1,.box2,#red

3.关系选择器
	1.子元素选择器      >
  2.后代元素选择器    空格
  3.兄弟元素选择器    
  	下一个兄弟     +
    下面所有兄弟   ~
      
4.属性选择器
	[属性名]            选择含有指定属性的元素
	[属性名=属性值]     选择含有指定属性和属性值的元素
  [属性名^=属性值]    选择属性值以指定值开头的元素
  [属性名$=属性值]    选择属性值以指定值结尾的元素
  [属性名*=属性值]    选择属性值中含有某值的元素的元素

5.伪类选择器
	伪类（不存在的类，特殊的类）
	1. 伪类用来描述一个元素的特殊状态
	比如：第一个子元素、被点击的元素、鼠标移入的元素...
	2. 伪类一般情况下都是使用:开头
    :first-child 第一个子元素
    :last-child 最后一个子元素
    :nth-child() 选中第n个子元素
    :only-child
    特殊值：
    n 第n个 n的范围0到正无穷
    2n 或 even 表示选中偶数位的元素
    2n+1 或 odd 表示选中奇数位的元素

    - 以上这些伪类都是根据所有的子元素进行排序

    :first-of-type
    :last-of-type
    :nth-of-type()
    :only-of-type
    :empty
      - 这几个伪类的功能和上述的类似，不通点是他们是在同类型元素中进行排序

  3. :not() 否定伪类
    - 将符合条件的元素从选择器中去除
    * 选择器练习游戏 CSS Diner: https://flukeout.github.io/

  4.a元素的伪类
  :link       没访问过的链接
  :visited    访问过的链接  
  :hover      鼠标移入状态
  :active     鼠标点击状态

6.伪元素选择器
  ::first-letter 表示第一个字母
  ::first-line 表示第一行
  ::selection 表示选中的内容
  ::before 元素的开始 
  ::after 元素的最后
    - before 和 after 必须结合content属性来使用

7.选择器的权重
  内联样式        1,0,0,0
  id选择器        0,1,0,0
  类和伪类选择器   0,0,1,0
  元素选择器       0,0,0,1
  通配选择器       0,0,0,0
  继承的样式       没有优先级
```

#### 3.盒子模型

```css
1.盒子模型组成：
  内容区（content）
  内边距（padding）
  边框（border）
  边框的宽度 border-width: 1px
  边框的颜色 border-color: red
  边框的样式 border-style: solid 表示实线
  dotted 点状虚线
  dashed 虚线
  double 双线
  外边距（margin）

2.盒子模型的水平布局
  元素的水平方向的布局：
  元素在其父元素中水平方向的位置由以下几个属性共同决定“
  margin-left
  border-left
  padding-left
  width
  padding-right
  border-right
  margin-right

  一个元素在其父元素中，水平布局必须要满足以下的等式
  margin-left+border-left+padding-left+width+padding-right+border-right+margin-right = 其父元素内容区的宽度 （必须满足）

  0 + 0 + 0 + 200 + 0 + 0 + 0 = 800
  0 + 0 + 0 + 200 + 0 + 0 + 600 = 800


  100 + 0 + 0 + 200 + 0 + 0 + 400 = 800
  100 + 0 + 0 + 200 + 0 + 0 + 500 = 800
  - 以上等式必须满足，如果相加结果使等式不成立，则称为过度约束，则等式会自动调整
  - 调整的情况：
  - 如果这七个值中没有为 auto 的情况，则浏览器会自动调整margin-right值以使等式满足
  - 这七个值中有三个值和设置为auto
  width
  margin-left
  maring-right
  - 如果某个值为auto，则会自动调整为auto的那个值以使等式成立
  0 + 0 + 0 + auto + 0 + 0 + 0 = 800  auto = 800
  0 + 0 + 0 + auto + 0 + 0 + 200 = 800  auto = 600
  200 + 0 + 0 + auto + 0 + 0 + 200 = 800  auto = 400

  auto + 0 + 0 + 200 + 0 + 0 + 200 = 800  auto = 400


  auto + 0 + 0 + 200 + 0 + 0 + auto = 800  auto = 300

  - 如果将一个宽度和一个外边距设置为auto，则宽度会调整到最大，设置为auto的外边距会自动为0
  - 如果将三个值都设置为auto，则外边距都是0，宽度最大
  - 如果将两个外边距设置为auto，宽度固定值，则会将外边距设置为相同的值
  所以我们经常利用这个特点来使一个元素在其父元素中水平居中
  示例：
  width:xxxpx;
  margin:0 auto;
```

#### 4.高度塌陷,BFC和清除浮动

```css
1.高度塌陷的问题：
  在浮动布局中，父元素的高度默认是被子元素撑开的，
  当子元素浮动后，其会完全脱离文档流，子元素从文档流中脱离
  将会无法撑起父元素的高度，导致父元素的高度丢失
  父元素高度丢失以后，其下的元素会自动上移，导致页面的布局混乱
2.BFC(Block Formatting Context) 块级格式化环境
  - BFC是一个CSS中的一个隐含的属性，可以为一个元素开启BFC
  	开启BFC该元素会变成一个独立的布局区域
  - 元素开启BFC后的特点：
    1.开启BFC的元素不会被浮动元素所覆盖
    2.开启BFC的元素子元素和父元素外边距不会重叠
    3.开启BFC的元素可以包含浮动的子元素

  - 可以通过一些特殊方式来开启元素的BFC：
    1、float的值不是none。
    2、position的值不是static或者relative。
    3、display的值是inline-block、table-cell、flex、table-caption或者inline-flex
    4、overflow的值不是visible
    常用overflow:hidden
3.清除浮动
直接使用clearfix类
  .clearfix::before,
  .clearfix::after{
    content: '';
    display: table;
    clear: both;
  }
```

#### 5.定位(子绝父相)

#### 6.表单

```css
1.表格
  1.结构
  table
    thead
    tbody
      tr	//table row
      	td	//table data
  2.属性
  table 
    boder //边框
    align //水平对齐
  td 
    rowspan="2"	//合并行
    colspan			//合并列
2.表单
  1.结构
    form	//属性action:提交到服务器的地址
      input
        属性:type name value 
              autocomplete="off" 关闭自动补全
              readonly 将表单项设置为只读，数据会提交
              disabled 将表单项设置为禁用，数据不会提交
              autofocus 设置表单项自动获取焦点
  2.表单类型 
  type=""
    text 文本框
    password 密码框
    radio 单选框
    checkbox 多选框 //chenked
    submit 提交按钮
    reset 重置按钮
    button 普通按钮
    file 上传文件
  select 下拉框
    option 	//selected
```

#### 7.动画

```css
1.过渡
  transation:
    transition-property					//过渡属性
    transition-duration					//过渡持续时间
    transition-timing-function	//过渡的时序函数
      ease 默认值，慢速开始，先加速，再减速
      linear 匀速运动
      ease-in 加速运动
      ease-out 减速运动
      ease-in-out 先加速 后减速
      cubic-bezier() 来指定时序函数	//https://cubic-bezier.com
      steps() 分步执行过渡效果
        可以设置一个第二个值：
        end ， 在时间结束时执行过渡(默认值)
        start ， 在时间开始时执行过渡
    transition-delay	//过渡效果的延迟
	transition 可以同时设置过渡相关的所有属性，只有一个要求，如果要写延迟，则两个时间中第一个是持续时间，第二个是延迟 
	例:transition:2s margin-left 1s cubic-bezier(.24,.95,.82,-0.88);
2.动画
  1.animation
    animation-name
    animation-duration
    animation-delay
    animation-timing-function
    animation-iteration-count	//动画执行的次数 
    animation-direction	//指定动画运行的方向
      normal 						默认值  从 from 向 to运行 每次都是这样 
      reverse 					从 to 向 from 运行 每次都是这样 
      alternate 				从 from 向 to运行 重复执行动画时反向执行
      alternate-reverse 从 to 向 from运行 重复执行动画时反向执行
    animation-play-state	//设置动画的执行状态 
      running 默认值 动画执行
      paused 	动画暂停
    animation-fill-mode	//动画的填充模式
      none 			默认值 动画执行完毕元素回到原来位置
      forwards 	动画执行完毕元素会停止在动画结束的位置
      backwards 动画延时等待时，元素就会处于开始位置
      both 			结合了forwards 和 backwards
  2.关键帧
    @keyframes run {
      from{}
      to{}
      //也可以使用0%到100%
    }
3.变形
  transform:
    translateX(-50%) translateY(-50%);	//水平垂直居中
    translateZ(100px)	//z轴平移,向屏幕方向平移
    rotateX();	//绕xyz轴旋转
    scale()	//双方向缩放n倍,或x水平、y垂直缩放
```

#### 9.flex布局

```css
1.开启flex布局
  display: flex;	//inline-flex	行内弹性盒
2.flex属性
  flex-direction: row | row-reverse | column | column-reverse;
  flex-wrap: no-wrap | wrap | wrap-reverse;
  flex-flow: [flex-direction] | [flex-wrap];
  justify-content: flex-start | flex-end | center | space-between | space-around;
  align-items: flex-start | flex-end | center | baseline | stretch;
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
```

​	<a href="http://flexboxfroggy.com" target="_blank">*flex青蛙练习</a>

#### 10.媒体查询

```css
语法： @media 查询规则{}
媒体类型：
all 所有设备
print 打印设备
screen 带屏幕的设备
speech 屏幕阅读器
- 可以使用,连接多个媒体类型，这样它们之间就是一个或的关系

可以在媒体类型前添加一个only，表示只有。
only的使用主要是为了兼容一些老版本浏览器

@media only screen and (min-width: 500px) and (max-width:700px){
  body{
  	background-color: #bfa;
  }
}
```

