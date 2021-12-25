## 一.基础知识

### 1.Vue.js安装

​    1.cdn引入
​    2.vue官网下载
​    3.npm安装

### 2.hello vue.js

​    关键字: {{}} el data 

```vue
<div id="app">{{message}}</div> <!--用{{}}来引入属性-->
<script>
  // 编程范式: 声明式编程
  //  js/jquery原生编程范式属于:命令式编程
  const app = new Vue({//新建一个vue实例
    el: '#app',//挂载托管#app
    data: { //定义数据
      message: 'hello vue.js' //在#app中添加message属性
    }
  });
</script>
```



### 3.列表数据

​    关键字: v-for="item in someList"

```vue
<div id="app">
  <ul>
    <li v-for="item in movies">{{item}}</li>
  </ul>
</div>    
<script>
  const app = new Vue({
    el: '#app',
    data: {
      movies: ['让子弹飞','霸王别姬','杀生','凤凰面具']
    }
  })
</script>
```



### 4.计数器

​    关键字: v-on:event="function" methods this @click
​    //@click 是 v-on:click 的 "语法糖" ,即简写

```vue
<div id="app">
  <h2>当前计数:{{counter}}</h2>
  <!-- <button v-on:click="counter++">+</button>
<button v-on:click="counter--">-</button> -->
  <button v-on:click="add">+</button>
  <button v-on:click="sub">-</button>
</div>
```

```vue
<script>
  const app = new Vue({
    el: '#app',
    data: {
      counter: 0
    },
    methods: {
      add: function(){
        this.counter++;
      },
      sub: function(){
        this.counter--;
      }
    }
  })
</script>
```



### 5.vue中的MVVM(Model ViewModel View)

​    详见:vue\截图\计数器MVVM.png

#### 6.vue语法规范

  1.缩进建议2个空格(从这里开始)
    修改:vscode-首选项-设置-tabsize-2-取消自动检测
  2.vue模块化

### 7.插值操作

  1.mustache语法: {{}} //译:胡须
    mustache语法不仅可以写变量,也可以写简单表达式(+-*/)

```vue
<h2>{{firstName + lastName}}</h2>         ==>ZhangSan
<h2>{{firstName + " " + lastName}}</h2>   ==>Zhang San
<h2>{{firstName}} {{lastName}}</h2>       ==>Zhang San
<h2>{{counter * 2}}</h2>                  ==>200  //counter:100
```

  2.v-once指令
    只展示一次,之后修改参数不会随之改变

```vue
<h2>{{message}}</h2>//修改数据后会随之改变
<h2 v-once>{{message}}</h2>//修改数据后不会改变
```

  3.v-html指令
    运行包含html代码的字符串

```vue
//url: '<a href="http://www.baidu.com">百度一下</a>'
<h2>{{url}}</h2>//==><a href="http://www.baidu.com">百度一下</a>
<h2 v-html>{{url}}</h2>//==>百度一下
```

  4.v-text=""指令(不推荐)
    以文本形式显示,相当于mustache语法

  5.v-pre指令
    不进行mustache语法解析

```
<h2 v-pre>{{message}}</h2>//==>{{message}}
```

  6.v-cloak指令 //译:斗篷
    1.引言:在script脚本加载卡顿时,会出现{{message}}的闪现
      这样的闪现用户体验不好
    2.解决方案:
      在vue解析前,有一个v-cloak属性
      在vue解析后,删除v-cloak属性
      我们可以通过css样式来让[v-cloak]不进行展示
      这样就解决了闪现问题

### 8.动态绑定属性

  1.v-bind
    语法:v-bind:属性=""
    语法糖: :属性=""

```
<div id="app">
  <img v-bind:src="imgURL">
  <img :src="imgURL">//语法糖
</div>
<script>
  const app = new Vue({
    el: '#app'
    data:{
    	imgURL: "https://adfadfsd.webp"
    }
  })
</script>
```

  2.动态绑定class的
    1.对象语法
      语法: v-bind:Attribute(属性名)="{Class(类名): Boolean(布尔值)}"

```vue
v-bind:class="{active: isActive, line: isLine}"
v-bind:class="getClasses()"
```

​      url: vue\practice\04绑定.html 05对象语法.html
​    2.数组语法
​      语法: v-bind:属性="[类名]"

```vue
v-bind:class="[active, line]"
v-bind:class="getClasses()"
```

​      url: vue\practice\06数组语法.html

### 9.v-for和v-bind作业

  需求: 列表,点击 变红

### 10.v-bind绑定style对象语法

  1.语法: v-bind:Attribute(属性名)="{Key(属性名): value(属性值)}"

```
v-bind:style="{fontSize: fontSize, color: color}"
v-bind:style="getStyles()"
```

2. v-bind绑定style数组语法
     语法: v-bind:属性名="[样式名1,样式名2,...]"	

```
v-bind:style="[style1,style2,...]"
v-bind:style="getStyles()"
```

  url: vue\practice\08.动态绑定样式.html

### 11.计算属性(Computed)

  1.计算属性是一个属性,但它可以调用方法

```
computed: {
    fullName: function(){
      return this.firstName + ' ' + this.lastName;
    }
  }
```

  Eg. vue\practice\09计算属性.html

### 12.computed复杂使用

  Eg. vue\practice\11.计算价格.html
  补充: for...
        for...in...
        for..of...
        forEach

### 13.计算属性的setter和getter

  Eg. vue\practice\12.setter和getter.html

### 14.计算属性和methods对比

  methods方法每次都会计算
  conputed会利用缓存,只会计算一次,效率更高

### 15.ES6补充: var,let和const区别

​    0.块级作用域
​      块级作用域内部不能访问外部变量
​      外部不能访问块级作用域内部变量
​    1.var
​      1.var有全局作用域和函数作用域
​      2.var没有块级作用域{},
​        会导致外部能访问并修改块级作用域内部的变量
​    2.闭包:
​      闭包原理就是var的函数作用域

```
 //这是一个立即执行函数(匿名函数)
      (function(i){//这个i是形参

 	 })(i)//这个i是实参
```

3.let
  let有块级作用域
Eg. 按钮循环问题 var let 

4.const //常量
  1.声明的同时必须赋值
  2.修饰标志符为常量,不可修改
  3.常量的含义是指向的对象不能修改,但可以修改对象内部属性

### 16.ES6补充: 对象字面量增强写法

  1.属性的增强写法

```
const name = '张三';
const age = 18;
const height = 1.8;
//ES5语法
const obj = {
  name: name,
  age: age,
  height: height,
}
//ES6语法
const obj = {
	name,age,height,
}
```

  2.函数的增强写法

```
//ES5语法
const obj = {
	run: function(){

	}
}
//ES6语法
const obj = {
	run(){

	}
}
```

### 17.事件监听

  1.v-on  @
    语法: v-on:event  @event
  2.v-on参数
    1.事件调用的的方法没有参数可以省略()
      Eg.  vue\practice\13v-on参数.html

```
<button @click='btn01Click()'>按钮1</button>
<button @click='btn01Click'>按钮1</button>
```

​    2.在事件定义时,写方法时省略(),但是方法本身需要一个参数,这个时候,
​      Vue会默认将浏览器生成的event事件对象作为参数传入到方法中
​      Eg. vue\practice\13v-on参数.html

```
<button @click='btn02Click'>按钮2</button>//==>event事件对象
//中间省略几行代码
btn02Click(event){
	console.log(event);
}
```

​    3.方法定义时,需要event对象,同时又需要其他参数
​      Eg. vue\practice\13v-on参数.html

```
<button @click='btn03Click("abd123", $event)'>按钮3</button>
btn03Click(a, event){
	console.log(a, event);
},
```

  3.v-on修饰符
    .stop 阻止冒泡  //event.cancelBubble 或 event.stopPropagation()
    .prevent  阻止默认事件  //event.preventDafault() 或return false
    .{keyCode | keyAlias} 监听某个按键事件  //keyCode按键编码,keyAlias按键名称
    .once 只触发一次

​	.native 监听组件原生事件

### 18.条件判断

  v-if v-else-if v-else
  Eg. vue\practice\15条件判断.html

### 19.登录切换小案例

  0.需求:登录界面可以切换用户名登录和邮箱登录两种方式
    0.1问题:切换登录方式后,用户已输入信息不会清空,
            我们写的登录界面是两段代码,切换布尔值达到展示不同登录方式的目的,
            所以按理说,切换后,输入框应该是新的输入框,内容也应清空,但实际不是,
            这是vue的虚拟dom的一个问题,vue复用问题
  1.vue虚拟dom问题
    vue先将代码解析到虚拟dom中,在渲染到真实dom中
    vue为了运行效率考虑,对DOM代码相同标签的部分只渲染一次,
      如果发生切换,vue虚拟DOM不会重新渲染,而是对比前后两段代码,将不同的部分进行修改
  2.解决方法:加上一个不同值的key,vue就不会复用
  Eg. vue\practice\16登录切换案例.html

### 20.v-show

  1.v-if和v-show的区别
    v-if不展示是是直接删除的方式//一次切换推荐使用
    v-show不展示是以"display:none"的样式方式//多次切换推荐使用

### 21.循环遍历

  v-for
  1.获取数组的索引值
	<h2 v-for="(item,index) in movies">{{index}}.{{item}}</h2>  //movies: [...]
  2.获取对象values属性值
      <h2 v-for="value in movies">{{value}}</h2>
  3.获取对象value和key关键字
      <h2 v-for="(value,key) in movies">{{key}}:{{value}}</h2>
  3.获取对象value和key和index
      //优先顺序:value key index
      <h2 v-for="(value,key,index) in movies">{{index}}.{{key}}:{{value}}</h2>

### 22.v-for绑定和非绑定key的区别

  0.需求:使用v-for遍历li,在li中插入一个新的li
    v-for splice(start,length,'newValue')//替换数组中的内容
  1.正常思维(difference算法):在虚拟DOM中,对比改变前后不同,在列表规定的位置直接插入新的li
  2.实际运行时vue的算法:在虚拟DOM中,它会把start位置的li替换为插入的li,之后依次修改后面的li,这种方式效率很低
  3.解决方法: 一一对应绑定key
    Eg. <li v-for="item in items" :key="item">{{item}}</li> //绑定后item必须唯一

### 23.数组的响应式方法

  1.响应式方法: 
    加尾  ('...items') 
    去尾pop() 
    掐头shift() 
    添头unshift('...items')//添加方法可以添加多个值
    替换splice(start,length,'...items')//length和newValue可以为空,length为空表示max
    正序sort()  
    反序reverse()
    vue内部方法:vue.set(修改对象,索引值,新值)
  2.直接赋值为非响应式的方法
  Eg.

```
this.items[0]="newValue";//这时页面不会响应,实际后台数据已经更改
//解决方法:
this.items.splice(0,1,"newValue")="newValue";//这时页面会响应,后台数据更改
vue.set(this.items,[0],"newValue");//vue内部方法
```

  *.补充: 可变形参  ...items 可以传入任意多个实参    

```
function sum(...nums){
	console.log(nums);
}
sum(10,20,30,40,50,60);
```



### 24.购物车案例

  0.关键字: 
    表格模板
    事件绑定
    事件监听
    过滤器
    条件判断
  1.tofixed(2)  //保留两位小数
    Eg. num.tofixed(2)
  2.filter  //过滤器

```
<td>{{item.price | showPrice}}</td>
//...
filters: {
  showPrice(price){
		return '¥' + price.toFixed(2);
  }
}
```

  Eg. vue\practice\17购物车案例.html

### 25.js高阶函数

  1.回顾循环遍历 
    for 
    for...in  //拿到索引
    for...of  //拿到数组里的对象
    forEach   //拿到数组里的对象的属性
    Eg.  vue\practice\11.计算价格.html

  2.编程范式
    命令式编程/声明式编程
    面向对象编程(第一公民:对象)/函数式编程(第一公民:函数)

  3.filter/map/reduce
    1.filter(过滤器)

```
let newArr = oldArr.filter(function(n){
	return boolean;
})
```

​      filter需要一个回调函数,回调函数必须返回一个布尔值,ture放行到一个新的数组,false过滤掉
​    2.map(映射)
​      Eg. let newArr = oldArr.map(function(n){
​        return n * 2;
​      })
​      filter需要一个回调函数,回调函数可以返回任意数据到新的数组中;
​    3.reduce(汇总求和)
​      reduce(参数一,参数二)
​        参数一: 通常是一个函数
​          函数(前一个值,当前值){}
​        参数二: 初始化参数,通常为0
​      Eg. let newArr = oldArr.reduce(function(preValue,currentValue){
​        return preValue + currentValue;
​      },0)
​    4.函数组合(函数式编程)
​      let newArr = oldArr.filter().map().reduce()
​    5.补充:箭头函数=>
​      语法: (参数1,参数n)=>返回值
​        =>相当于function(){}

```js
let total = arr.filter(currentValue => currentValue<100)
.map(currentValue => currentValue*2).reduce((preValue,currentValue) => preValue+currentValue)
```

​    6.url:  vue\practice\18高阶函数.html

### 26.v-model表单绑定 

  1.v-model是双向绑定的
    v-model=""
  2.双向绑定的原理
    关键字 :value  @input  event.target.value 
    Eg. vue\practice\19v-model表单绑定.html

### 27.v-model和radio(单选框)

  回顾:<lable>中嵌套<input>可以点击文字选中  input-radio: name属性互斥
  v-model自带互斥
  Eg. vue\practice\20v-modelu与radio.html

28.v-model和checkbox(多选框)
  Eg. vue\practice\21v-model和checkbox.html

### 29.v-model和select(下拉框)

  回顾: 
    select > option //单选下拉框
    select:multiple > option //多选下拉框
  Eg. vue\practice\22v-model和select.html

### 30.input中的值绑定

  value值不写死,使用data中的数据
  Eg. vue\practice\23值绑定.html

### 31.v-model修饰符

  1.v-model.lazy  //失去焦点和回车时加载
  2.v-model.number  //让数字是number类型,v-model默认数字为string类型
  3.v-model.trim  //让data接收的值忽略空格(控制台查看)
  Eg. 

## 二.组件化开发

### 32.组件化

  1.组件化就是将一个组件拆分成多个小组件,分别完成小组件,在拼接起来
  2.vue组件化思想:将任意问题抽象为一颗组件树
  3.组件使用的步骤
    1.创建组件构造器  Vue.extend()方法
    2.注册组件  Vue.component()方法(译:组件)
    3.使用组件  在Vue实例的作用范围内使用组件

### 33.组件化的基本使用

  0.ES6语法: `` 相当于'',但可以换行

  1.创建组件构造器  Vue.extend()方法
    语法:const cpnC = Vue.extend({template:`组件内容`}) //译:template模板
  2.注册组件  Vue.component()方法(译:组件)
    语法:Vue.component('组件名称',组件构造器名称cpnC)
  3.使用组件  在Vue实例的作用范围内使用组件
  Eg. vue\practice\25组件化基本使用.html

### 34.全局组件和局部组件

  1.上面的在全局注册的组件是全局组件,可以在多个Vue实例中使用
  2.局部组件
    在Vue实例对象中注册,就只能在该Vue实例对象中使用
    Eg. components: {
          cpn: cpnC
      }
  3.一般开发中只创建一个Vue实例和使用局部组件

### 35.父组件和子组件

  1.在父组件构造器内部注册子组件,然后就可以在父组件模板中使用子组件
  注意:子组件构造器必须先于父组件构造器创建才生效 子->父
  Vue实例也可以看作root组件
  Eg. vue\practice\26.父组件和子组件.html

### 36.Vue组件注册语法糖

  原理:注册组件时同时,构造组件
  语法糖:
    //全局组件注册
    Vue.component('组件名称',组件构造器{})
    //局部组件注册
    components: {
      组件名称: 组件构造器{}
    }
  Eg. vue\practice\27Vue组件注册语法糖.html

### 37.组件模板抽离写法

  1.text/x-complate抽离写法
    Eg. vue\practice\28模板抽离写法.html
  2.<template>标签抽离写法

### 38.组件数据

  0.明确一个概念: 组件可以看作一个Vue实例,组件内部也有很多和Vue相同的属性(data,methods...)
  1.组件不能访问Vue实例中的data数据
  2.组件有自己的data数据//注意该data是一个函数,必须返回一个对象,该对象保存属性
    Eg. data(){
          return {message:'hello componentData',}
        }

### 39.组件中的data为啥必须是函数?

  0.回顾:栈内存与堆内存

```
var a = 1;
var obj1 = {name:'孙悟空'};
var obj2 = {name:'孙悟空'};
      栈内存          	堆内存(0x001)          堆内存(0x002)   
    属性名 属性值     	属性名   属性值        属性名   属性值
    a       1 
    obj1   0x001      name   '孙悟空'      
    obj2   0x002                           name   '孙悟空'
  obj1 = obj2 //false
```

  1.多个组件实例并不是同一个对象(内存地址不同)
  2.原因是:data()函数返回的是一个对象{},每次返回的实际上是一个新的内存地址,虽然对象里的内容是一样的
  3.这就避免了调用多个组件实例后,修改其一组件的data会影响其他组件的data,引起连锁反应
  4.如果data是对象,那么就会引起连锁反应
  Eg. 计数器组件重复使用

### 40.父子组件通信

  1.父传子
    1.子:props属性用来接收父传递的参数,
        然后在子组件实例中将子组件props的属性与父组件data的属性进行绑定(Eg. :cmovies),
        之后就可以在子模板中使用props中的数据的{{}}
      Eg. vue\practice\30父子组件通信-父传子.html
    2.props数据类型:[] {}

```
//props: [''] 或
props: {
  cpropertyname1: {
    type: string;
    default: '默认值',
    required: true //必须传propertyName属性
  },
	cpropertyname2: {
    type: Array,
    default(){  //当类型是Array或Object时,默认值必须是个函数来返回[]或{}
    	return [];
  	}
  }
}
```

​    3.props的驼峰标识
​      props不用驼峰命名法,而是可以用-标识驼峰来进行转换
​      Eg. cpropertyname
​          cPropertyName 可以转换为  c-property-name 来进行绑定

  2.子传父(自定义事件)
    1.$emit()发射自定义事件
      Eg. this.$emit('自定义事件名称',item)
    2.流程: 0.子组件需要传递数据到父组件
            1.子组件发射一个自定义事件
            2.父组件模板监听自定义事件,
            3.父组件构造器中定义该事件的处理方法
            4.可以添加item参数来传递子组件中数据中的属性
    3.原理:子组件模板监听点击事件@click="btnclick"-->子组件构造器定义方法btnclick-->btnclick发射事件itemclick-->父组件模板监听@itemclick="cpnclick"事件-->父组件构造器定义cpnclick方法来输出结果.
  Eg. vue\practice\32父子组件传递案例.html

### 41.watch

  监听某个属性的改变
  语法: watch:{property(newValue,oldValue){}}

```
watch: {
  property1(newValue){
    this.property1 = newValue * 100;
    this.$emit(property1change,newArr);
  }
}
```

  Eg. vue\practice\33父子组件传递案例-watch.html

### 42.父子组件的访问方式

  1.父访问子 $children | $refs //译:引用
  Eg.
    1.this.$children[index]//获取子组件,[]类型,少用
    2.<cpn ref="refname1"></cpn>//标记
      this.$refs.refname1//获取,{}类型,多用
  2.子访问父 $parent  | $root //少用
    Eg.
      1.this.$parent//访问父组件
      2.this.$root//访问根组件(Vue)

### 43.插槽slot

  0.slot在子组件模板里定义,<template></template>
  1.插槽是为了让组件更具有扩展性:将共性的封装成固定组件,需要个性化的预留成插槽
  2.语法:<slot></slot>//预留插槽,然后在<cpn>中直接添加个性化标签
  3.插槽里可以设置默认值,然后个性化的部分直接添加个性化标签将默认值覆盖
  Eg. <slot><h2>我是插槽默认值</h2></slot>

### 44.具名插槽

  Eg.
    子组件cpn: <span slot="left">替换左边</span>
    模板template:<slot name="left"><h2>左边</h2></slot>

### 45.编译作用域

  变量的作用域只在它所在的模板

```
//父子组件中都有isShow属性,父为true,子为false
<div id="app">
	<cpn v-show=isShow></cpn>//这里是父组件模板,isShow为true,显示
</div>

<template id="cpn">
  <div>
    <h2 v-show=isShow>我是子组件</h2>//这里是子组件模板,isShow为false,不显示
  </div>
</template>
```

### 46.作用域插槽

  父组件替换插槽的标签,但内容由子组件来提供
  关键字: slot-scope slot.data :data(data是自定义名称)
  需求:父组件使用并遍历子组件数据
  Eg. vue\practice\35作用域插槽.html

## 三.模块化开发

### 47.全局变量重名问题

  1.解决方法一: 匿名闭包//但是代码变得不可复用
  2.最终解决方案: 匿名闭包+模块化
    1.匿名闭包
    2.对象导出
    3.模块接收
    Eg.//ES5语法
      ;var moduleA = (function(){
        var name = '小红';
        //新建对象
        var obj = {};
        obj.name = name;
        //导出对象
        return obj;
      })()
      //其他js文件
      console.log(moduleA.name);  ==>小红
  *.模块化规范:CommonJS AMD CMD ES6的Modules
  *.了解CommonJS模块化
    语法:
      module.exports={test,demo};//导出
      let {test,demo} = require('路径');//导入

### 48.ES6模块化

  0.export/import //导出/导入
  Eg.
    html: <script scr="export.js" type="module"></script>//同理引用import.js
    export.js:  export{test,demo};//导出
    import.js:  import {test,demo} from "./export.js"//导入
  1.声明时导出:
    export var flag = flase;
  2.导出函数/类/复杂对象:
    export function sum(num1,num2){
      return num1 + num2;
    }
    export class Person {
      run(){
        console.log('在奔跑');
      }
    }
  3.export default //不命名导出
    Eg.
      export default const address = "重庆市";//  export.js 一个模块里只能有一个export default默认值
      import add from "./aaa.js";// import.js 导入时命名
  4.统一全部导出
    import * as aaa from "./aaa.js";

## 四.webpack 模块打包

*.相关版本配置:(不要直接使用最新版)

```node
//webpack
npm install webpack@3.6.0

//css-loader
npm install css-loader@2.0.2 --save-dev

//style-loader
npm install style-loader@0.23.1 --save-dev

//less-loader
npm install --save-dev less-loader@4.1.0 less@3.9.0

//url-loader
npm install --save-dev url-loader@1.1.2

//file-loader
npm install file-loader@3.0.1 --save-dev

//es6转换成es5
npm install --save-dev babel-loader@7.1.5 babel-core@6.26.3 babel-preset-es2015@6.24.1

//Vue
npm install vue@2.5.21 --save

//vue-loader和vue-template-compiler
npm install vue-loader@15.4.2 vue-template-compiler@2.5.21 --save-dev
```



### 49.认识webpack

  0.webpack官网:webpackjs.org
  1.webpack是前端模块化打包工具
  2.webpack依赖node环境
  3.npm(node packages manager)是node的包管理工具
  4.webpack可以支持各种模块化规范(commonJS/ES6/AMD/CMD/)
  5.终端命令:    

```
npm install webpack@3.6.0 -g //安装webpack
webpack -version //查看webpack版本
webpack ./src/main.js ./dist/bundle.js //打包模块

npm install -g cnpm //安装cnpm
cnpm install webpack@3.6.0 -g //安装webpack镜像
```

### 50.webpack.config.js配置和package.json配置

  webpack.config.js配置
    1.新建webpack.config.js
    2.终端输入npm init
      设置name/main
    3.终端输入npm install
    4.终端输入webpack
  package.json配置
    1.新建脚本package.json/script/build: "webpack" //这样执行webpack命令时会优先找本地webpack 路径: ./node_modules/bin
      Eg. npm run build
    2.终端执行脚本:npm run build
    3.webpack全局和本地区别
      1.开发时,本地webpack用的多,全局webpack用的少
      2.安装本地webpack:npm install webpack@3.6.0 --save-dev
      3.安装后package.json中生成devDependencies(开发时依赖的)

### 51.webpack中css文件配置

  1.安装loader
    0.查看webpack官网安装css-loader教程,如果报错用cnpm安装
    1.npm安装loader
    2.在webpack.config.计算中modules下配置
  2.依赖css文件
    main.js: require('./css/normal.css')
  3.css-loader只负责加载,style-loader负责将样式添加到DOM中生效,webpack使用多个loader时,是从右往左使用
  4.loader和webpack版本问题(报错注意版本问题,使用以下版本)
    webpack
      npm install webpack@3.6.0
    css-loader
      npm install css-loader@2.0.2 --save-dev
    style-loader
      npm install style-loader@0.23.1 --save-dev

### 52.webpack-less文件配置

  同css注意版本号,vscode自带easy-less进行转化
  配置代码:

```
{
  test: /\.less$/,
  use: [{
  	// compiles Less to CSS
  	loader: 'style-loader'
  },{
  	loader: 'css-loader'
  },{
  	loader: 'less-loader'
  }],
},
```



### 53.webpack-图片文件处理

  1.url和file-loader
    url-loader(已废弃但可用):加载小于limit的图片,以data字符串的形式加载
    file-loader:加载大于limit的图片,以图片文件的形式进行管理
  2.配置代码:

```
//设置file-loader:url路径
output: {
  ...
  publicPath: 'dist/'
},
{
  test: /\.(png|jpg|jpeg|gif)$/i,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 8192,
        //file-loader:图片命名问题
        name: 'img/[name].[hash:8].[ext]'
      },
    }
  ]
}
```

### 54.webpack-ES6语法转化工具 bable-loader

  1.安装
  2.配置代码:

```
{
  test: /\.m?js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
    	presets: ['es2015']
    }
  }
}
```

  问题:实测发现之前和之后的bundle都是ES5的语法

### 55.webpack-vue配置

  1.安装vue:见上
  2.引入vue
    import Vue from 'vue'
  3.vue编译的版本
    runtime-only 代码中,不可以有tempalte(包括vue挂载的div)
    runtime-compiler 代码中可以有template,因为compiler可以用于编译template
  4.配置webpack-vue编译的版本
    module.exports中
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' //alias别名
      }
    }
  5.template内容抽离到vue-template中,代码执行时template会替换掉el
  *.出现报错:can't find @runtime/...,暂时无法解决

### 56.vue抽离使用方案

  1.抽离模板,脚本,样式到app.vue中
  2.main.js引入vue和app.vue
  3.安装vue-loader和vue-template-compiler:见上
  4.配置vue-loader和vue-template-compiler
    {
      test: /\.vue$/,
      use: ['vue-loader']
    }
  5.注意: "vue-loader": "^13.0.0"解决报错
  6.补充: 省略后缀配置:
    resolve: {
      extension: ['.js','.vue','css']
    }

### 57.webpack-横幅plugin

  0.步骤:
    1.npm安装插件(webpack自带插件不用安装)
    2.配置插件
  1.版权插件 

```
const webpack = require('webpack');
module.exports = {
  ...
  plugins: [
    new webpack.BannerPlugin('最终版权归xxx所有')
  ]
}
```

### 58.webpack-html的plugin(将index.html添加到dist目录)

  1.安装
    npm install html-webpack-plugin@3.2.0 --save-dev
  2.引入插件

```
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  ...
  plugins: [
    new HtmlwebpackPlugin({
      template: 'index.html' //自动生成app模板
    })
  ]
}
```

  3.解决前后矛盾
    1.去掉公共路径:publicPath
    2.原index.html去掉script引用
    3.在new HtmlwebpackPlugin中添加模板

### 59.webpack-js压缩plugin

  1.安装
    npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
  2.配置

```
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  ...
  plugins: [
    new uglifyjsWebpackPlugin()
  ]
}
```

### 60.webpack-dev-server本地服务器搭建

  1.安装
    npm install --save-dev webpack-dev-server@2.9.3
  2.配置

```
module.exports = {
      ...
      devServer: {
        contentBase: './dist',
        inline: true, //实时刷新
        //port: 端口号 
        //historyApiFallback: 在SPA页面中依赖HTML5的history模式
      }
    }
```

  3.1配置运行脚本

```
    package.json 
      "script": {
        "dev": "webpack-dev-server --open" //--open自动打开窗口
      }
```

  3.运行服务器
    npm run dev

### 61.抽离配置

  1.抽离
  新建build文件夹保存以下配置文件:
    基本配置: base.config.js:  去除服务器和压缩配置
    开发配置: dev.config.js: 保留服务器配置
    生产配置: prod.config.js: 保留压缩js配置
  2.合并
    1.安装webapck-merge
      npm install webpack-merge@4.1.5 --save-dev
    2.生产配置webapck-merge

```
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig,{
  plugins: [
  	new uglifyjsWebpackPlugin()
  ]
})
```

3.开发配置

```
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig,{
  devServer: {
  	contentBase: './dist',
  	inline: true
  }
})
```

4.配置package.json
  "build": "webpack --config ./build/prod.config.js",//配置生产指令
  "dev": "webpack-dev-server --open --config ./build/dev.config.js"//配置开发指令
5.修改打包路径

```
//base.config.js中
output: {
	path: path.resolve(__dirname, '../dist')
}
```



## 五.Vue脚手架

### 62.Vue Cli 

  1.简介:Command-Line Interface 命令行界面,俗称脚手架
  2.依赖: node webpack
  3.安装
    npm install -g @vue/cli@3.2.1
    npm install @vue/cli-init //拉取cli2
    vue init webpack my-project //初始化cli2项目

  4. 配置项目

    project name
    project description
    author                    //默认读取gitconfig
    runtime-only              //选择(runtime-only)
    vue-router                //路由(no)
    ES-lint                   //js代码限制(规范代码)
      Standard
      Airbnb
      none
    unit tests                //单元测试(no)
    e2e                       //端到端测试(no)
    use NPM                   //选择npm或yarn

### 63.vuecli2目录解析

  1.查看package.json
  2.查看build.js
  3.查看index.js
  src: vue\截图\vuecli2.0项目结构.png

### 64.小结: vue\截图\webpack回顾.png

### 65.cli安装错误解决方法:

  方法1: 以管理员身份运行cmd,在安装cli
  方法2: 删除npm-chache
    npm clean cache -force 或
    C:\users\administrator\appdata\roaming\npm-chache 删除文件夹
  补充:关闭eslint: index.js-->useeslint: false

### 66.runtime-compiler和runtime-only的区别

  1.主要体现在main.js中:
    runtime-compiler
      是以模板和子组件的形式进行导入:
      Eg.
        new Vue({
          el: '#app',
          template: '<App/>',
          components: { App }
        })
    runtime-only
      以render函数进行渲染:
      Eg.
        new Vue({
          el: '#app',
          render: function(h){
            return h(App)
          } // h => h(App) //h()是createElement()函数,译:创建标签<>,下详解
        })
  2.Vue程序运行过程
    runtime-compiler:(v1)
      template (解析->) ast抽象语法树 (编译->) reder -> vdom -> 真实dom(UI)
    runtime-only:(v2 性能更高,代码更少)
      reder -> vdom -> 真实dom
  3.createElement函数
    1.普通用法: createElement('标签',{标签属性},['内容'])
        内容可以回调createElement函数
    2.传入组件对象
      return createElment(cpn) //cpn组件已创建,App同理
    3.编译完成后App.vue组件对象中没有template属性,template由vue-complate-compiler解析成render函数

### 67.Vue CLI3

  1.创建项目
    vue create my-project
      manually select features 手动选择特性 // vue\截图\vue_cli3手动配置选择.png
        按空格选中项目
      in dedicated config files 选择在单独配置文件  
      save this as preset...    保存配置方案 
      //删除配置方案: C:users\administrator\.vuerc ->删除presets中的内容
        save preset as:           配置方案名字
      use npm                     选择
  2.main.js
    new Vue({
      render: h => h(APP)
    }).$mount('#app')
    //$mount('#app')是el: '#app'的实质运行代码
  3.配置文件查看修改
    1.启动配置服务
      vue ui 
    2..\nodemodules\@vue\cli-service\webpack.config.js
    3.创建.\vue.config.js 添加配置
      module.exports = {}

## 68.箭头函数

  1.参数
    const fun1 = () => {}
    const sum = (num1, num2) =>{
      return num1 + num2
    }
    const power = num => {
      return num * num 
    }
  2.函数中代码行数问题
    1.多行代码正常写
    2.单行代码简写省略{return}
      const mul = (num1, num2) => num1 * num2
  Eg. vue\Program\箭头函数\01箭头函数.html
  3.什么时候使用箭头函数
    1.将一个函数作为参数传入另一个函数中时使用箭头函数
    2.箭头函数的this引用的是最近作用域中的this

## 69.路由 router

  公网ip 光猫 路由器 内网ip 映射表 
  1.映射表
    内网ip: mac地址

## 70.前端渲染和后端渲染,前端路由和后端路由

  1.后端渲染和后端路由
    vue\截图\后端渲染和后端路由.png
    后端渲染
      jsp: java server page 
    后端路由
      后端处理url和页面之间的映射关系
  2.前后端分离(ajax)
    vue\截图\前后端分离阶段.png
  3.单页面富应用阶段(spa)
    vue\截图\spa和前端路由.png

## 71.url的hash和html5的history

  -解决前端路由改变url页面不刷新的需求
  1.改变url的hash
    location.hash = 'home'
  2.改变html5的history
    history.pushState({},'','home') //添加到栈顶, 栈结构先进后出,显示栈顶
    history.back()  //移除栈顶,返回
    history.replaceState({},'','home') //替换栈顶
    history.go(-1)  //跳转到前(-)后(+)几个页面
    history.forward() //前进

## 72.vue-router

  1.安装
    npm install vue-router --save
  2.router\index.html
    1.导入路由
    2.通过Vue.use(VueRouter)安装插件 //代码内部执行VueRouter.install方法
    3.创建router对象
    4.导出router
    5.main.js导入router,挂载
  3.配置router映射关系
    1.创建路由组件
    2.导入组件,配置路由映射: {path,component}
    3.使用路由: 通过<router-link to="">和<router-view>
  4.路由的默认值和history模式
    1.路由默认值
    Eg.
      const routes = [
        {
          path: '',
          redirect: '/home' //重定向,默认Home
        }
      ]
    2.history模式,路径里没有#,#是默认hash模式
      Eg.
        const router = new VueRouter({
          ...
          mode: 'history'
        })
  5.router-link的属性
    to="/home"      //路径
    tag="button"    //渲染成任意标签(默认为a标签)
    replace         //使用replaceState()方法,无法返回
    active-class="active" //自定义单个组件活跃类名,默认为"router-link-active"
    exact-active-class //类上
    *活跃类名也可以在router/index.js中构造router时统一自定义:
      Eg.
        const router = new VueRouter({
          ...
          linkActiveClass: 'active'
        })
  6.通过vue-router代码方式修改路由
    通过原生js事件代码
    语法: this.$router.push('/home')    //push方法
          this.$router.replace('/home') //replace方法
    Eg.  见项目vue\Program\vue2.0_router

## 73.vue-router动态路由

  0.需求:动态跳转到 /user/userid...
  步骤:
    1.创建User.vue
    2.router/index.js导入User定义路由
    3.APP动态绑定userId数据
    4.User中通过$route.paramas.useId拿到当前用户id,通过{{}}语法展示

## 75.打包文件解析

  1.js文件解析
    app.[hash].js 业务代码: 当前应用程序开发的所有代码
    mainifest.[hash].js 为打包的代码作底层支撑
      代码结构: 
        闭包函数(形参)      //闭包函数
        ([函数1,函数2...]) //将几个函数以数组的形式作为参数传入闭包函数中
    vendor.[hash].js 第三方代码(vue/vue-router/axios/bs...)

### 76.路由懒加载(用时加载)

  1.vue异步组件和webpack结合(能看懂是懒加载代码,不推荐写)
    const Home = resolve => { require.ensure(['../components/Home.vue'], () => { resolve(require('../components/Home.vue'))})};
  2.AMD写法
    const About = resolve => require(['../components/About.vue'], resolve);
  3.ES6写法(推荐)
    const Home = () => import('../components/Home') //可以省略.vue
  *.config/index.js: prouductionSourceMap: true    //用来精确报错,会生成.map文件

### 77.路由嵌套

  例: /home/news...
  步骤:
    1.创建路由子组件 children[{}]
    2.懒加载子组件,配置子组件路由映射: {path,component}
    3.使用路由: 在父组件内通过<router-link to="">和<router-view>展示

### 78.路由传递参数

  传递参数的方式:
    params类型: Eg. User.vue
      配置路由格式: /router/:id //动态路由
      传递方式: 在path后面跟上对应的值
      传递后形成的路径: /router/123,/router/abc
    query的类型: Eg. Profile.vue
      配置路由: /router, 普通配置方式
      传递的方式: 对象中使用query的key作为传递方式
      传递形成的路径: /router?id=123, /router?id=abc
      总结: 在router-link路径中动态绑定{path:"/",query: {}}, 通过$route.query.xxx获取query对象中属性
      URL: 协议://localhost:80/path?query#fragment
  通过代码传递:
    button@click -> eventClick(){this.$router.push({path:'/',query: {}})}

### 79.$router和$route的区别

  1.结构
    $router 是新的 router.d.ts文件中的Router的一个工厂函数,该文件中定义了router的相关方法: push replace...
    $route 指的是当前活跃的路由
  2.源码
    *.所有的组件都继承自vue的原型
    1.$router和$route方法是在vue的原型中定义的
      Vue.prototype.$router
      Vue.prototype.$route
    2.VueRouter.install.js中通过Object.defineProperty方法为Vue原型定义$router和$route属性
      Eg. Object.defineProperty(Vue.prototype, '$router', {
        get() {return this._routerRoot._router }
      })

### 80.全局导航守卫

  作用: 监听组件跳转
  需求: 组件切换标题更换
  *生命周期函数: 
    created(){} 组件创建钩子函数 
    mounted(){} 组件挂载到DOM钩子函数
    updated(){} 界面刷新钩子函数
  实现方法1: 子组件使用created钩子函数改变文档title的值
    Eg. created(){document.title = '首页'}
  实现方法2(导航守卫): index.js使用router.beforeEach前置守卫(钩子)
    Eg. router.beforeEach((to,from,next) => {
      document.title = to.macthed[0].meta.title //需要在组件路由中定义meta: {title}内容
      next()  //下一步,方法实现必需
    })
  补充: 
    后置钩子:
      afterEach(to, from) => {} 
    路由独享守卫:
      routes:[
        {
          ...
          beforeEnter(to,from,next) => {}
        }
      ]  
    组件内守卫:
      

### 81.keep-alive标签

  作用: 让组件活着,不被销毁.相关函数activated/deactivated 活跃/不活跃
  需求1: 让首页默认展开新闻页面
  实现: 方法1: 子路由重定向
          childern: [{path:'',redirect:'news'}...] 
        方法2: 使用path保存默认路径,到Home活跃时将path添加到路由中
          path: '/home/news' this.$router.push(this.path)
  需求2: 切换回首页保持之前浏览的页面(消息)
  实现: 用导航守卫的beforeRouteLeave函数记录当前活跃路由路径
    beforeRouteLeave(to,from,next){this.path=this.$route.path; next()}
  <keep-alive>的属性: include exclude 包含/不包含
    Eg. exclude="Profile,User"

### 82.tabbar-基本结构搭建

  1.实现思路
    1.创建封装
      创建Tabbar组件,在App中使用
      让Tabbar处于底部,设置相关样式
    2.Tabbar中显示的内容由外界决定
      定义插槽
      flex布局平分Tabbar
    3.自定义TabBarItem,传入图片和文字
      定义TabBarItem, 并且定义两个插槽: 图片 文字
      给两个插槽外层包装div,用于设置样式.
      填充插槽,实现底部TabBar的效果
    4.传入高亮图片
      定义另一个插槽, 插入active-icon的数据
      定义一个变量isActive,通过v-show来决定是否显示对应的icon
    5.TabBarItem绑定路由数据
      安装路由: npm install vue-router --save
      完成router/index.js的内容,以及创建对应的组件
      main.js中注册router
      APP中加入<router-view>组件
    6.点击item跳转到对应路由,并且动态决定isActive
      监听item的点击,通过this.$router.replace()替换路径
      通过this.$route.path.indexOf(this.link) !== -1来判断是否是active
    7.动态计算active样式
      封装新的计算属性: this.isActive ? {'color': 'red'} : {} 

### 83.别名 alias

  build/webpack.base.config.js -> resolve ->alias
  给某个文件夹起别名 

### 84.Promise

  1.Promise是异步编程的一种解决方案
  2.语法: (链式编程)
    

```
new Promise((resolve, reject) => {
	//第一次网络请求代码
	setTimeout((data) => {
    //处理的代码使用resolve代替分离,跳到then
    resolve(data) //resolve可以传递实参,例: resolve('hello')
    //失败的时候调用reject,跳到catch
    reject('error message')
    },1000)
}).then((data) => {
    //第一次处理代码
    console.log('Hello Promise')
    //嵌套第二次网络请求
    return new Promise((resolve, reject) => {
    ...
    })
}).catch((err) => {
  console.log(err)
}).then(...)
```

  ?第二次网络请求错误时会一起打印第二次的请求失败和成功的两段话
  3.Promise源码解析:
    1.new -> 构造函数(1.保存了一些状态信息 2.执行传入的函数)
    2.在执行传入的回调函数时,会传入两个参数: resolve reject, 其本身又是函数

### 85.Promise的三种状态

  pending 等待状态
  fulfill 满足状态
  rejected 拒绝状态
  1.Promise的另一种写法
    语法: .then(resolve, reject) //这是两个参数又是函数     

```
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('succse')
    reject('error')
  },3000)
}).then(res => {
	console.log(res)
}, err => {
	console.log(err)
})
```

### 86.Promise的链式调用

 

```
//成功:
return new Promise((resolve) => {
	resolve(data)
})
//可以简化为:
return Promise.resolve(data)
//还可以简化为:
return data
//拒绝:
return new Promise((reject) => {
	reject('error message')
})
//可以简化为:
return Promise.reject('error message')
//还可以简化为:
throw 'error message'
```

87.Promise.all方法使用

```
//语法: 
Promise.all([
	new Promise((resolve, reject) => {

	}),
new Promise(...)
...

]).then(results => {
	console.log(results) //results是个数组
})
```

### 88.Vuex

  1.Vuex是Vue.js的状态管理工具
  2.Vuex实质是一个对象,储存所有组件共享的变量
  3.Vuex管理登录,用户名称,头像,位置等状态

### 89.Vuex单页面到多页面状态管理

  Eg. Program/vuex
  1.单页面 Eg.计数器
    State -> View -> Action 循环
    data     页面     操作
  2.多页面
  3.安装vuex
    npm install vuex@3.0.1 --save
  4.创建文件
    store/index.js: 
      1.导入vue vuex
      2.安装插件
        Vue.use(Vuex)
      3.创建对象
        const store = new Vuex.Store({
          state: {}, //储存状态, 通过$store.state.属性名 使用状态
          mutations: {}, 
          actions: {},
          getters: {},
          modules: {}
        })
      4.导出导入store

### 90.vuex-devtools和mutations

  1.安装vuex-devtools浏览器插件
  2.mutations 

```js
//定义方法 默认传入参数state
mutations: {
	increment(state) {
		state.counter++
	}
}
//3.组件调用mutations方法
methods: {
  add() {
  	this.$store.commit('increment')
	}
}
```

### 91.vuex-state单一状态树的理解

  1.类似数据data
  2.只创建一个store进行状态管理

### 92.vuex-getters的使用

  1.类似计算属性,默认传入state参数
  2.使用: {{$store.getters.方法名}}
  3.getters中的函数可以内嵌匿名函数以完成接收参数的任务
    Eg. {{$store.getters.moreToAge(20)}}
        getters: {
          moreToAge(state) {
            return age => {
              return state.students.filter(s => s.age > age)
            }
          }
        }

### 93.vuex-mutations状态更新

  1.类似方法methods
  2.mutations定义方式
    mutations: {
      increment(state) {
        state.counter++
      }
    }
  3.muitations更新
    methods: {
      add() {
        this.$store.commit('increment')
      }
    }
  4.mutations传递参数
    称为payload负载
    1.传递普通参数
      methods: {
        addCount(count) {
          this.$store.commit('addCount', count)
        }
      }
    2.传递对象参数
      methods: {
        addStudent() {
          const stu = {name: '胜七', age: 50}
          this.$store.commit('addStudent', stu)
        }
      }
    3.接收参数
      addCount(state, count) {
        state.counter += count
      },
  5.mutations特殊提交封装
    methods: {
      addCount(count) {
        //1.普通提交封装
        // this.$store.commit('addCount', count)
        //2.特殊提交封装
        this.$store.commit({
          type: 'addCount',
          count
        })
      }
    }
  6.mutations特殊提交封装接收
    mutations: {
      addCount(state, payload) {
        // console.log(payload) //普通方式结果为count,特殊方式为payload对象
        state.counter += payload.count
      }
    }

### 94.vuex-数据响应式原理

  1.state中的属性会被加入到响应式系统中,
    而响应式系统会监听属性的变化,
    当属性发生变化时,
    会通知所有界面用到该属性的地方,
    让界面发生刷新
  *.源码原理: 属性 -> dep => [watcher,..] 
  2.响应的前提是store已经有了初始化的属性(后添加的属性不会响应)
  3.添加属性的响应式方法
    1.数组的方法push,splice...
    2.Vue.set方法
      Vue.set(对象/数组,属性名/索引,属性)
    3.Vue.delete方法(删除)
      Vue.delete(对象/数组,属性名/索引)

### 95.vuex-mutations的类型常量

  1.在store中新建mutations-types.js文件用来保存类型常量
    Eg. export const INCREMENT = 'increment'
  2.在index.js文件中引用INCREMENT
    Eg. import {INCREMENT} from './mutations-types'
        ...
        mutations: {
          [INCREMENT](state) {
            state.counter++
          }
        }
  3.在组件中引用INCREMENT
    Eg. import {INCREMENT} from '@/store/mutations-types'
        ...
        methods: {
          add() {
            this.$store.commit(INCREMENT)
          }
        }

### 96.vuex-actions的使用

  1.actions是执行异步操作时使用,
    数据传递: actions (dispatch)--> mutations (commit)--> state
  2.actions中通过返回Promise来进行数据异步操作,
    在组件methods的函数方法中通过.then(...)来展示结果
  Eg. 
    index.js中:
      actions: {
        aChangeInfo(context, payload) { //context 上下文
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              context.commit('aChangeInfo')
              console.log(payload)
              resolve('111')
            },1000)
          })
        }
      }
      mutations: {
        aChangeInfo(state) {
          state.info.name = "a六子"
        }
      }
    APP.vue组件中: 
      methods: {
        //this.$store.dispatch('aChangeInfo','我是携带的信息') 这个相当于index.js中的actions的aChangeInfo函数的返回值,即Promise
        this.$store.dispatch('aChangeInfo','我是携带的信息').then(res => {
          console.log('内部完成提交')
          console.log(res)
        })
      }

### 97.vuex-modules的使用

  1.modules可以将store中的部分代码抽离成模块
  2.vuex实际运行时会将模块添加到根-store里,可以通过之前的方法访问模块中的数据
    Eg. {{$store.state.a.name}}
  3.modules内部也包括state,mutations,getters,actions,以及modules(如果需要)
  4.modules内部可以通过rootxxx来访问store内部数据,如: rootState rootGetters

### 98.ES6语法-对象的解构

  Eg.
  const obj = {
    name: '张三',
    age: 18,
    gender: '男',
    address: '重庆'
  }
  const {name, address, age} = obj; //可以结构obj中的部分或全部属性(属性名对应,无顺序要求)
  console.log(name) ==> 张三

### 99.vuex-store的文件夹的目录组织

  核心: 将mutations,getters,actions,modules代码抽离出index.js
  /store/ mutations.js 
          getters.js
          actions.js
          modules/moduleA.js

### 100.axios基本使用

  1.安装
    npm install axios@0.18.0 --save
  2.使用axios
    1.导入axios
    2.语法: axios(config)
  Eg.
    axios({
      url: 'http://123.207.32.32:8000/home/multidata',
      methods: 'get',
      paramas: {} //get请求的参数拼接
    }).then(res => {
      console.log(res)
    })

### 101.axios发送并发请求

  1.语法: 
    axios.all([axios(), axios()]).then(results => {})

### 102.axios的拦截器

  语法: axios.intercepters
  1.请求拦截的应用场景:
    1.拦截config中的一些不符合服务器要求的信息
    2.每次发送网络请求时,都希望在页面中显示一个请求图标
    3.某些网络请求(比如登录(token)),必须携带一些特殊的信息
  Eg.
    //请求拦截
    instance.interceptors.request.use(config => {
      console.log(config);
      return config;
    }, err => {
      console.log(err)
    })
    //响应拦截
    instance.interceptors.response.use(res => {
      //console.log(res);
      return res.data;
    }, err => {
      console.log(err)
    })

## 项目开发   

### 103.git管理项目

  1.创建git项目

  2.git指令

```
*.提交/删除三件套: add commit push
git init 没有安装git的项目初始化
//需要拷贝的方式
git clone 远程仓库地址  //本地项目与git建立联系
复制粘贴
git add . //添加到git管理
git commit -m '初始化项目'  //提交到本地
git push  //推送到git

//无需拷贝的方式
git remote add origin 远程仓库地址  //与git仓库建立联系
//error: remote origin already exists.报错解决方法: git remote rm origin
git push -u origin master //推送到远程仓库  //此时会报以下错(原因可能是REDEME重复)

//解决 ! [rejected] master -> master (fetch first) 报错
git pull --rebase origin master //合并仓库和gitee
git push origin master  //推送

//网络超时不稳定解决, Git bash运行:
git config --global http.sslVerify "false"
```

### 104.划分目录结构

  src/
    assets/
      img/
      css/
    components/
      common/           //可以在下一个项目使用的公共的组件
      content/          //当前项目的业务相关的公共组件
    view/               //存放大的视图,比如home, category, profile等
    router/
    store/
    network/
    common/             //存放公共的js文件,比如公共的常量const.js, 公共的方法utils.js

### 105.css文件引入

  css/
    normalize.css
    base.css

### 106.vue.config.js和editor.config文件配置

  module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          'assets': '@/assets',
          ...
        }
      }
    }
  }

### 107.tabbar引入和模块划分

  1.引入tabbar
  2.安装router
    npm install vue-router@3.0.2 --save

### 108.小图标的修改

  替换/public/favicon.ico
  index.html: <link rel="icon" href="<%= BASE_URL %>favicon.ico"> //jsp语法,获取基本路径

### 109.首页导航栏的封装和使用

  1.封装conponents/common/NavBar.vue
    预留3个被div包裹的具名插槽,以方便样式
    设置样式
    共有样式在NavBar.vue中设置,子组件个性化样式在子组件设置

### 110.请求首页数据

  0.安装axios: npm install axios --save
  1.引入/network/request.js
  2.封装/network/home.js文件,用来封装Home的网络请求函数getHomeMultidata()
  3.Home内,在组件创建后(created)使用网络请求函数getHomeMultidata(),获取res
  4.将要用到的数据拆解并保存到data里

### 111.首页轮播图

  1.导入轮播图组件/conponents/common/swiper/Swiper(公共组件)
  *轮播图的制作有点复杂,代码业务有点难理解
  2.组件中绑定数据: hre, img 
  3.抽离代码封装HomeSwiper子组件,通过父子组件方式传递数据
  4.Home组件中引入子组件, 用 :banners="banners"的方式绑定数据

### 112.首页推荐

  1.同上创建RecommendView组件,进行封装并导入
  2.设置样式

### 113.首页-本周流行

  1.同上创建FeatureView组件,封装导入
  2.设置样式
  3.使用粘滞定位(sticky)和(z-index)固定导航栏,(--webkit-sticky)解决兼容问题

### 114.首页-TabControl封装(公共组件)

  1.同上创建TabControl组件,封装导入
  2.使用父传子传递title数据
  3.设置活跃字体高亮样式
  4.设置点击高亮事件

### 115.首页-商品信息-设计保存商品信息的数据结构

  goods: {
    'pop': {page: 0, list: []},
    'new': {page: 0, list: []},
    'sell': {page: 0, list: []},
  }

### 116.首页-请求商品数据并保存

  *.接口更换,需要找老师要新接口, 或者爬虫加mock爬取其他网站的数据
    新接口: baseURL = "http://152.136.185.210:7878/api/hy66" 
  1.封装getHomeGoods(type,page)方法 //home.js中: url, params
  2.抽离created周期函数内的方法的具体代码到methods内
  3.通过数组的解构语法,将请求结果推送到goods中
    Eg. this.goods[type].list.push(...res.data.list)
  4.页码page自增1

### 117.首页-商品展示

  1./content/goods创建GoodsList组件和GoodsListItem子组件
  2.Home组件和GoodsList组件和GoodsListItem组件通过父传子方式传递数据
  3.GoodsList组件中遍历商品数据进行展示 []
  4.GoodsListItem组件中获取对象数据 {}
  5.GoodsList组件中展示 img,title,price,cfav
  6.设置样式
  *.父传子逻辑模型: Home --> GoodsList[goods] --> GoodsListItem{goodsItem}

### 118.首页-点击切换页面

  1.TabControl组件子传父发送tabclick点击事件,传递index索引值
  2.Home组件<tab-control>绑定事件
  3.data里创建currentType默认为'pop'
  4.监听事件tabClick, 根据index返回currentType. 
    1.使用swith或者if函数
    2.使用Object.keys()遍历goods对象,它会返回一个数组['pop', 'new', 'sell']
  5.通过计算属性优化代码

BetterScroll:
119.BetterScroll安装和使用
  0.BetterScroll官网: https://better-scroll.github.io/docs/zh-CN/
  1.安装命令
    npm install @better-scroll/core --save
  *.漏洞报错解决: 
    npm update //升级模块
    npm set audit false //关闭审计
    *遇到的bug: 移动端不可以滚动,网页端可以滚动 //已解决,真实手机上可以滚动,换台电脑也可以
  2.原生滚动
    1.父标签固定高度, 
    2.overflow-y: scroll
  3.使用
    //引入
    import BScroll from '@better-scroll/core' 
    //加载  
    let wrapper = document.getElementById("wrapper")
    let bs = new BScroll(wrapper, {})

### 120.better-scroll的属性

  1.probeType 侦测实时滚动
    :0,1 不侦测实时滚动
    :2  侦测手指滚动,不侦测惯性滚动
    :3  侦测所有滚动
  2.click: true/false 点击
  3.pullUpload: true/false 上拉 
  4.方法: BScroll.on('事件类型', 函数)  监听滚动事件
    'scroll': 滚动事件,参数position
    'pullingUp': 上拉事件,无参数,回调函数finishPullUp()结束监听当前上拉事件,允许监听下一个上拉事件
  ?问题: 首页图片无法滚动,
    原因: better-scroll在图片加载完毕之前就计算好了内容区高度,导致滚动不畅
    拟解决办法: 图片加载完成后调用refresh() //如何确定图片加载完成 onload如何使用
    该问题可能需要祖孙组件之间的事件发射, 
    --现解决方案: 设置个定时器,再refresh()重新计算高度
    --observe-dom 

### 121.scrollTo() 返回顶部方法

  1.封装components/content/backTop/BackTop组件
  2.使用BackTop组件, 使用.native修饰符监听组件原生事件
    Eg. <back-top @click.native="backClick"/>
  3.scrollTo(x, y, time?)
  4.可以将scrollTo()方法封装在BackTop组件内

### 122.observe-dom 

  DOM元素发生改变时,触发scroll的refresh方法
  1.安装: npm install @better-scroll/observe-dom --save
  2.使用: 

```
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
BScroll.use(ObserveDOM)

new BScroll('.bs-wrapper', {
  //...
  observeDOM: true // 开启 observe-dom 插件
})  
```

### 123.BackTop的隐藏和显示

  0.通过props由父组件决定probeType的值,默认0
  1.通过scroll实时侦测得到position
  2.通过自定义事件将position传递到父组件
  3.通过position大于某个值来决定v-show是否显示 

### 124.上拉加更多数据

  -1.安装pullup插件: npm install @better-scroll/pull-up --save ,使用同observe-dom
  0.通过props由父组件决定pullUpload的值,默认false
  1.通过自定义事件传递事件到父组件
  2.自定义事件调用getHomeGoods(this.currentType)方法加载更多数据
  3.getHomeGoods方法加载完数据后调用scroll的finishPullUp()方法

### 125.解决滚动bug方案二

  1.解决思路: 每张图片加载完成后发射事件到Home来执行refresh()函数
    1.vuex  
    2.事件总线(在任意组件都可监听) //vue3用mitt插件
      发射事件: this.$bus.emit('event', 参数)
      监听事件: this.$bus.$on('event', (参数) => {})
      此时$bus为空,在main.js中为Vue的原型添加$bus,为新的Vue实例(Vue实例可以作为事件总线)
        Eg. Vue.prototype.$bus = new Vue()
  2.优化代码: 
    1.调用方法之前先判断方法是否存在
    2.在Home的mounted里监听
    3.防抖函数debounce //节流throttle     

```
//调用防抖
mounted() {
	const refresh = this,debounce(this.$refs.scroll.refresh, 50)
	this.$bus.$on('itemImageLoad', () => {
		refresh()
	})
}
//方法中封装防抖函数,封装到common/utl.js中
debounce(func, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
    	func.apply(this, args)
    }, delay)
  }
}
```

​    *.补充:
​      1.闭包函数引用外部变量, 这个变量不会被销毁
​      2.setTimeout()异步函数即使不设置延时,总和被放在最后执行

### 126.tabControl的吸顶效果

  1.tabControl的offset获取:
    1.轮播图图片加载完毕后,发射事件 
    2.接收事件,通过$el.offset获取tabOffsetTop //$el可以获取组件的元素
  2.吸顶效果
    1.拷贝tabControl到scroll外,设置样式在上层,通过v-show=isTabFixed动态决定显示,
    2.通过滚动的距离是否大于tabOffsetTop决定isTabFixed的布尔值
    3.点击切换bug解决: 
      在tabClick点击事件中,将index同时赋值给两个tabControl
    4.总结: 
      isShowTabControlCopy控制复制组件的显示,当滚动偏移量大于图片高度时为true
      HomeSwiperOffsetTop负责记录图片高度

### 127.Home记录状态和位置

  1.记录状态: 使用<keep-alive></keep-alive>让路由组件<router-view>不被销毁
  2.记录位置: 离开时保存位置信息,再次进来时将保存的位置赋值 activated/deactivated
  3.返回时刷新一次: refresh()

### 详情页

### 128.跳转到详情页并传递参数

  1.新建Detail详情页组件
  2.配置路由映射关系
  3.GoodListItem组件内绑定点击事件
  4.使用动态路由或query方式
    动态路由: path: '/detail/:iid'
    query方式: {path: '/detail', query: {}} 

### 129.详情页导航栏封装

  1.封装childrenComps/DetailNavBar.vue
  2.引入NavBar,替换插条
  3.返回按钮使用路由back()方法

### 130.详情页请求数据和轮播图

  1.请求数据: network/detail.js封装请求模块
  2.Detail获取保存数据: topImages,
  3.创建DetailSwiper,引入swiper中的两个组件,props获取父组件数据,遍历展示
  4.<keep-alive>的exclude属性可以排除某个组件处于活跃

### 131.商品信息的封装和展示

  1.将从服务器获取的商品信息封装成一个对象goods
  Eg. detail.js: 
    export class Goods {
      constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
      }
    } 
  2.创建DetailBaseInfo组件,展示商品详细信息
    1.对整体设置v-if="Object.keys(goods) !== 0"来判断goods对象不为空时展示
    2.使用v-for遍历数组长度-1来选择展示的name,icon

### 132.店铺信息展示同上

  需要提取的数据: 
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  *.通过动态绑定样式覆盖之前样式的方式来根据score值动态决定样式

### 133.详情页加入better-scroll

  0.调整Detail样式覆盖底部菜单栏
  1.引入Scroll
  2.调整导航栏样式

### 134.详情页商品详情数据展示

  1.获取商品详情数: result.detailInfo.detailImage[0].list
  2.创建DetailGoodInfo组件展示数据

### 135.展示尺寸相关信息

  1. itemParams.info.set  itemParams.rule.tables[0] //新建类ParamsInfo保存

   2.新建组件DetailParamsInfo

### 136.展示评论信息

  1.获取评论数据data.rate
  2.新建组件DetailCommentInfo
  3.服务器返回的评论创建时间:
    1.服务器以Unix时间元年为起点,返回时间戳
    2.const date = new Date(时间戳*1000)
    3.封装使用时间格式化函数

### 137.推荐商品展示

  1.接口: '/recommend'
  2.调用GoodsList组件
  3.动态设置图片展示目录

138.混入mixin 
  1.类的继承
    使用extends继承另一个类的属性
    Eg. 
    class Animal {
      run() {}
    }
    class Dog extends Animal {}
  2.对象的混入
    通过mixin减少vue生命周期重复代码
    var mixin = {created: function() {console.log(1)}}
    var vm = new Vue({
      created: function() {console.log(2)},
      mixins: [mixin]
    }) //==>1 2

139.滚动debug
  方案一:使用observeImage插件
  方案二:手动调节
    1.图片加载完成发射事件
    2.Detail接收事件调用refresh方法,为性能可以考虑防抖

### 140.详情页滚动联动效果

  1.标题点击发射事件(index)
  2.保存获取对应组件的$el.offsetTop值
    1.在mounted,updated获取 //不行
    2.在getDetail里使用this.#nextTick()方法获取 //nextTick下一帧 (图片加载问题,获取的offsetTop值不对)
    3.最佳方案: 监听图片加载完,在回调函数中获取,created中定义防抖函数,imgload调用
  3.滚动到对应的位置

### 141.滚动改变title

  1.接收滚动事件
  2.获取position.y值
  3.比较offsetTop和y值,对应改变currentIndex //if
  4.将currentIndex赋值到导航组件中的currentIndex
  let index=this.themTopYs.findIndex(item=>item==position.y)一句话解决

### 142.底部工具栏

  跟淘宝一样

143.返回顶部组件应用和抽取
  1.引入BackTop组件
  2.使用mixin抽取BackTop组件代码
  *.mixin可以抽取vue生命周期函数/data/子组件,不可以抽取方法,但可以在方法内通过调用外部函数的方式,将代码抽取到mixin中

### 144.添加购物车功能

  1.发射点击事件addCart
  2.Detail接收事件,将商品信息保存为对象product:{image,title,desc,realPrice,iid,count=1,checked=true}
  3.安装使用vuex,通过mutations将product传入state.cartList[]中
  4.如果是相同的商品,使商品数量自增 product.count
  5.代码重构
    1.mutations的方法有尽量单一的原则
    2.使用actions判断复杂逻辑(数量+1或添加新商品),并调用mutations的方法来执行结果
    3.将vuex的各部分代码和常量抽取到外部js文件中

### 145.购物车界面

  1.顶部导航栏
  2.顶部商品计数: cartList.length
    getters和mapGetters  
  3.购物车列表CartList
    1.设置样式和滚动
    2.创建CartListItem组件,接收展示数据
      1.选中按钮/添加选中状态product.checked=true
      2.绑定按钮点击事件,切换checked值
    3.debug不能滚动: 在进入Cart组件时(activated)刷新一下Scroll
  4.底部工具栏
    1.创建使用CartBottomBar组件,设置样式,
    2.引入全选按钮
    3.计算价格 filter().reduce()
    4.结算(选中的商品种类)
    5.全选按钮(filter/find/遍历)

### 146.添加购物车弹窗 Toast

  1.actions的添加购物车方法使用Promise封装
  2.Detail添加购物车方法中接收Promise返回的结果
  3.mapActions同mapGetters
  4.公共组件中创建toast组件

### 147.封装toast组件

  1.插件方式封装toast组件
    1.创建toast/index.js文件,导入Toast组件,导出一个对象toast
    2.main.js中导入index.js的toast对象
    3.安装toast插件: Vue.use(toast)
    4.index.js定义toast.install函数 //带有Vue参数
    5.install函数
      1.创建组件构造器 
        const toastConstructor = Vue.extend(Toast)
      2.new的方式,根据组件构造器,创建一个组件对象
        const toast = new toastConstructor()
      3.将组件对象,手动挂载在某个元素上
        toast.$mount(document.createElement('div'))
      4.toast.$el对应的就是div
        document.body.appendChild(toast.$el)
      5.在Vue的原型上添加$toast
        Vue.prototype.$toast = toast
    6.在Toast组件内定义message,isShow和show()函数来控制组件的展示

### 148.补充

  1.fastClick插件-减少移动端300ms点击延迟
    安装: npm install fastclick
    导入: import FastClick from 'fastclick'
    使用: FastClick.attach(document.body)
  2.polyfill补丁-解决浏览器适配问题

149.图片懒加载: vue-lazyload
  1.安装
    npm install vue-lazyload --save
  2.loading占位图
    Vue.use(VueLazyLoad, {
      loading: require('./loading.png')
    })
  3.吧img的src改为v-lazy

150.px2vw-css单位转换插件 //px2rem
  1.安装
    npm install postcss-px-to-viewport --save-dev
  2.配置postcss.config.js
    见微信截图

### 151.nginx-项目部署在windows

  主机->操作系统->windows(.net)/Linux-> tomcat/nginx(软件/反向代理)
  1.将自己的电脑作为服务器 -> windows -> nginx //http://nginx.org
  2.远程部署
    1.dist替换index.html
    2.或者配置nginx.config: location -> root dist;
    3.命令: nginx -s reload //重启

### 152.nginx-项目部署在linux

  远程主机-> linux centos -> nginx -> 终端命令
  ssh登录: mac -> ssh
    windows -> WinSCP/SecureCRTPortable.exe
  终端命令: 
    yum install nginx
    systemctl start nginx.service   //开启nginx服务   
    systemctl enable nginx.service  //跟随系统启动

### 153.Vue响应式原理-代码

  1.Vue内部是如何监听数据的改变?
    Object.defineProperty -> 监听对象属性的改变


  2.当数据发生改变,Vue是如何知道通知谁,界面发生刷新?
    发布订阅者模式

  3.源码解析: 
    

```js
const obj = {
  message: 'hello vue'
  name: 'xiao ming'
}
//监听对象属性的改变 Observe
Object.keys(obj).forEach(key => {
  let value = obj[key]
  Object.defineProperty(obj, key, {
    set(newValue) {
      //监听key的改变
      value = newValue
    },
    get() {
      //获取key的值
      return value
    }
  })
})
//发布订阅者模式
```



### 154.Vue响应式原理-图解

<img src="D:\Study\vue\截图\Vue响应式原理.png" alt="0" style="zoom:100%;" />

![](D:\Study\vue\截图\Vue响应式原理2.png)

### 155.Vue响应式原理-源码具体原理

  0.创建Vue类
  1.保存数据(options, data, el)
  2.将data添加到响应式系统中(Observer)
    dep: subs, addSub(sub)订阅者, notify() -> 遍历sub.update() -> get() ->...
    Object.defineProperty()监听属性变化
      get() -> dep.addSub(wacher) //获取属性值时调用
      set() -> dep.notify()       //属性值发生变化时调用
  //3.代理this.$data的数据
    _proxy(), Object.defineProperty()
  4.处理el(Compiler)
    0.
      初始化时{{data}} -> watcher -> 调用dep的addSub(watcher)方法,同时将属性值呈现在view中
      当时属性值发生变化时,dep遍历subs数组的update()方法,update()方法将数值更新在view中

​	1.构造器
  	el/vm(vue实例)
​	2.创建片段,匹配{{}}模板



### 157.Vue展示md文件

​	1.安装 vue-markdown-loader

```undefined
npm install vue-markdown-loader  -D
```

​	2.安装 vue-loader 、vue-template-compiler

```cpp
npm install vue-loader  -D
npm install vue-template-compiler  -D
```

​	3.安装 github-markdown-css、highlight.js

```css
npm install github-markdown-css  -D
npm install highlight.js  -D
```

​	4.在vue.config.js中配置webpack

```jsx
module.exports = {
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  }
}
```

​	5.在main.js中引入样式文件

```dart
// markdown样式
import 'github-markdown-css'
// 代码高亮
import 'highlight.js/styles/github.css'
```

​	6.在vue组件中使用

```xml
<template>
  <demo-md class="markdown-body"></demo-md>
</template>

<script>
import DemoMd from './demo.md';
export default {
  components: {
    DemoMd
  }
}
</script>
```