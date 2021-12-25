# js基础笔记

0.

​	//1.	文本节点TextNode
​	//2.	add.EventListener("click",hide,false);
​	//		attachEvent("onclick",hide)//i8以下

#### 1.js简介

​    DCOMAScript DOM BOM 

#### 2.js输出内容

​    //1.alert("")弹窗输出
​    2.Document.Write("")浏览器输出
​    3.console.log("")控制台输出

#### 3.js编写位置

​    1.html结构里面（不推荐）
​        //Eg.  <button onclick="alert('')"></button>
​                <a href="javascript:alert('');"></a>
​                <a href="javascript:;"></a>
​    2.Script标签里面
​       // Eg.  <Script>alert("")</Script>
​    3.引入外部js文件
​        Eg.  <Script src=""></Script>

#### 4.基本语法

​        1.注释
​			1.单行注释
​				//注释内容
​			2.多行注释
​				/*
​					注释内容
​				*/
​		2.JS严格区分大小写	
​		3.JS中每条语句以分号(;)结尾
​		4.JS中会自动忽略多个空格和换行

#### 5.字面量和变量

​    1.字面量：
​        字面量实际上就是一些固定的值，
​        比如 1 2 3 4 true false null NaN "hello"
​    2.变量：a
​        var a = 1;//声明并赋值变量

#### 6.标识符

​    比如：变量名、函数名、属性名
​    规范：  
​            1.标识符中可以含有字母、数字、_、$
​		    2.标识符不能以数字开头
​			3.标识符不能是JS中的关键字和保留字
​			4.标识符一般采用驼峰命名法
​				xxxYyyZzz

#### 7.数据类型

​    1.JS中一共分成六种数据类型
​        1.基本数据类型：
​            1. String 字符串："" ''
​                转义字符：
​                    \ 
​                    \n 换行
​                    \t 制表
​                        2. Number 数值 int float
​                        Infinity 正无穷
​                        -Infinity 负无穷
​                        NaN 不是一个数值
​                                    3. Boolean 布尔值：true false
​                                                4. Null 空值：null
​                                                5. Undefined 未定义:undefined
​                                        2.引用数据类型
​		            6. Object 对象

2.类型转换
    定义：将其他的数据类型，转换为String Number 或 Boolean
    1.转换为String

​		1.toString() 

​			Eg. 	a.toString()

​		2.String()

​			Eg. 	String(a)

​		3.用 + "" 来转换
​			Eg.	a = a + "";

2. 转换为Number
      1. Number()
      2. parseInt() parseFloat()
      3. 用 + 来转换
            Eg. a = +a;
3. 转换为布尔值
      1. Boolean()
      2. 任意的数据类型做两次非运算，即可将其转换为布尔值
            Eg. a = !!a;

#### 8.运算符

```js
1. typeof 变量：用于检查变量类型

2. 算数运算符 + - * / %（取余）

3. 一元运算符

4. ：将非数值转换为数值类型

5. ：对数字进行符号取反

6. 自增 
    a++
        使变量自增1，a++等于原值
        Eg. var a = 10;
            a1 = a++;
            console.log("a = " + a)         ==> a=11
            console.log("a1 = " + a1)     ==> a1=10
    ++a
        使变量自增1，a++等于新值
        Eg. var a = 20;
            a1 = ++a;
            console.log("a = " + a)         ==> a=21
            console.log("a1 = " + a1)     ==> a1=21

7. 自减 
a--
    使变量自减1，a--等于原值
    Eg. var a = 10;
        a1 = a--;
        console.log("a = " + a)         ==> a=9
        console.log("a1 = " + a1)     ==> a1=10
--a
    使变量自减1，a--等于新值
    Eg. var a = 20;
        a1 = --a;
        console.log("a = " + a)         ==> a=19
        console.log("a1 = " + a1)     ==> a1=19

8. 逻辑运算符

&&：与 
        定义：
            两者之一为假即为假
            与是一个短路的与，如果第一个值是false，则不再检查第二个值
        规则：
				1.如果第一个值为false，则返回第一个值
				2.如果第一个值为true，则返回第二个值
```

​    	||：或 
​        	定义：
​           	 两者之一为真即为真
​            	或是一个短路的或，如果第一个值是true，则不再检查第二个值
​       	 规则：	
​					1.如果第一个值为true，则返回第一个值
​					2.如果第一个值为false，则返回第二个值
   	 ！：非  
​            将其转换为boolean类型并取反
​            !!  可以将其转换为boollean类型



9. 赋值运算符

   ​	= 

	- 可以将符号右侧的值赋值给左侧变量
	
	+=
	
	- a += 5 相当于 a = a+5
	- var str = "hello";  str += "world";
	
	
	-=
		- a -= 5  相当于 a = a-5
		
	
	*=
		- a *= 5 相当于 a = a*5
		
	
	/=
		- a /= 5 相当于 a = a/5	
	
	%=
		- a %= 5 相当于 a = a%5	

10关系运算符

- 关系运算符用来比较两个值之间的大小关系的
	>=
	><
	<=
- 关系运算符的规则和数学中一致，用来比较两个值之间的关系，
	如果关系成立则返回true，关系不成立则返回false。
- 如果比较的两个值是非数值，会将其转换为Number然后再比较。
- 如果比较的两个值都是字符串，此时会比较字符串的Unicode编码，而不会转换为Number。

11.相等运算符
	==

	- 相等，判断左右两个值是否相等，如果相等返回true，如果不等返回false
	- 相等会自动对两个值进行类型转换，如果对不同的类型进行比较，会将其转换为相同的类型然后再比较，
		转换后相等它也会返回true
		!=
	- 不等，判断左右两个值是否不等，如果不等则返回true，如果相等则返回false
	- 不等也会做自动的类型转换。


​	
​	===
​		- 全等，判断左右两个值是否全等，它和相等类似，只不过它不会进行自动的类型转换，
​			如果两个值的类型不同，则直接返回false


​	
​	!==
​		- 不全等，和不等类似，但是它不会进行自动的类型转换，如果两个值的类型不同，它会直接返回true


​	特殊的值：
		- null和undefined
			- 由于undefined衍生自null，所以null == undefined 会返回true。
				但是 null === undefined 会返回false。
			

```js
	- NaN
		- NaN不与任何值相等，报告它自身 NaN == NaN //false
		
	- 判断一个值是否是NaN
		- 使用isNaN()函数
```

12.三元运算符：
	?:

```js
	- 语法：条件表达式?语句1:语句2;
	//Eg.	a > b ? alert("a大")：alert("b大");
	- 执行流程：
		先对条件表达式求值判断，
			如果判断结果为true，则执行语句1，并返回执行结果
			如果判断结果为false，则执行语句2，并返回执行结果
```

13.优先级：

- 和数学中一样，JS中的运算符也是具有优先级的，
	比如 先乘除 后加减 先与 后或
- 具体的优先级可以参考优先级的表格，在表格中越靠上的优先级越高，
	优先级越高的越优先计算，优先级相同的，从左往右计算。
- 优先级不需要记忆，如果越到拿不准的，使用()来改变优先级。

#### 9.流程控制语句

​	1.条件分支语句
​		1.if语句

```js
if(){
  if(){
    alert();
  }...
    .
    .
}esle if(){
  alert();
  .
    .
}else alert();
```

​		2.switch语句	

```js
switch(a){
  case 1:
    alert();
    break;
  case 2:
    alert();
    break;
    .
      .
        .
        default:
    alert();
    break;
}
```

2.循环语句

```js
1.while循环
while(){
  alert();
}

2.do...while循环
do{
  alert();
}while();

3.for循环
  - 语法：
for(①初始化表达式 ; ②条件表达式 ; ④更新表达式){
  ③语句...
}

  Eg.	

  firstloop: //设置循环名称label（相当于id）
  for(i = 1 ; i < 10  ; i++){
    for(j = 1 ; j < i ; j++){
      if(i = 3){
        break;
        //break firstloop;
      }
    }
  }
  - 执行流程：
  首先执行①初始化表达式，初始化一个变量，
  然后对②条件表达式进行求值判断，如果为false则终止循环
  如果判断结果为true，则执行③循环体
  循环体执行完毕，执行④更新表达式，对变量进行更新。
  更新表达式执行完毕重复②

  4.死循环
  while(true){

  }

  for(;;){

  }

  5.补充
  1. Match.sqrt() 对一个数开方
  Eg.	Match.sqrt(16); ===> 4

  2.console.time() 计时器：用于测试程序运行时间
  Eg.	
  //开始计时,计时器名称：test
  console.time("test");
  ...
  console.timeEnd("test");
```

 

#### 10.对象（Object）

```js
- 对象是JS中的引用数据类型
- 对象是一种复合数据类型，在对象中可以保存多个不同数据类型的属性
- 使用typeof检查一个对象时，会返回object
0. 创建对象
	- 方式一：
		- var obj = new Object();
	- 方式二：
		- var obj = {};
```

1.增： 向对象中添加属性

- 语法：
	对象.属性名 = 属性值;
	对象["属性名"] = 属性值;
	
	- 对象的属性名没有任何要求，不需要遵守标识符的规范，
		但是在开发中，尽量按照标识符的要求去写。
	- 属性值也可以任意的数据类型。


2.删： 删除对象中的属性
	- 语法：
		delete 对象.属性名
		delete 对象["属性名"]


​	
​			

3.查： 使用in检查对象中是否含有指定属性

- 语法："属性名" in 对象
	- 如果在对象中含有该属性，则返回true
		如果没有则返回false

4.改：对象名.属性名 = 新值
	Eg.	obj.name = "孙悟空";
		obj.name = "猪八戒"；

		console.log(obj.name) ===> "猪八戒"

5.读： 读取对象中的属性
	- 语法：
		对象.属性名
		对象["属性名"]
	- 如果读取一个对象中没有的属性，它不会报错，而是返回一个undefined
			
6. 使用对象字面量，在创建对象时直接向对象中添加属性
	语法：
		var obj = {
						属性名:属性值,
						属性名:属性值,
						属性名:属性值,
						属性名:属性值
				}
	
7. 基本数据类型和引用数据类型
	- 基本数据类型
		String Number Boolean Null Undefined
	- 引用数据类型
		Object
	- 基本数据类型的数据，变量是直接保存的它的值。
		变量与变量之间是互相独立的，修改一个变量不会影响其他的变量。
	- 引用数据类型的数据，变量是保存的对象的引用（内存地址）。
		如果多个变量指向的是同一个对象，此时修改一个变量的属性，会影响其他的变量。
	- 比较两个变量时，对于基本数据类型，比较的就是值，
		对于引用数据类型比较的是地址，地址相同才相同
		（详见 笔记/day09/note/画图.pptx）
	* 补充：
		1.	一个对象相当于一个塑料袋，多个对象可以嵌套使用；
		2.	基本数据类型被保存在栈内存中，变量与属性值一一对应，互不影响；
			引用数据类型被保存在堆内存中，变量对应的是内存地址：
				内存块中储存属性值，内存块具有唯一id值————内存地址，
				变量和内存地址对应关系：
					一对一
					多对一

#### 11.函数		

```js
	1.函数声明与调用
		1.函数声明：
			function fun1(){
				语句...
				return fun1;
			}
	2.函数表达式：（也是一种声明）
		var fun2 = function([形参1],[形参2],...){
			语句...	
			return fun1;
		}	
		//[]表示非必要的值
		
	3.调用：
		fun1();
		fun2([实参1],[实参2]);//可以赋值实参给形参
	
2. 返回值：	return 值;
	break		推出循环
	continue	跳过当次循环
	return		推出函数
3.方法
	对象中可以嵌套函数，该函数被称为XX对象的XX方法
	**可以想象成冰激凌店（对象）的冰激凌机（方法）制造的冰激凌（值），你想要的一般是冰激凌。**
	Eg.0
		var 冰激凌店 = {
			店名:"冰雪蜜城",
			地址:"101路",
			冰激凌机:function(){
				生产工艺；
				return 冰激凌;
			}
		}
	Eg. 
	var obj = {
		name:"孙悟空",
		age:18,
		kongfu:function(){
			//alert("筋斗云");
			doucument.write("火眼金金");
		}
	}
	obj.kongfu();	===>	筋斗云	火眼金金
4.for...in 语句
	作用：枚举对象中的所有属性
	Eg.	
	var obj ={
		name:"孙悟空",
		age:18
	}
	
	for(var n in obj){
		console.log("属性名：" + n);
		
		console.log("属性值：" + obj[n]);
	}
5.立即执行函数 
Eg.
	(function(a,b){
		console.log(return a*b);		
	})(7,8)		
```

#### 12.作用域（变量作用的范围）

```js
0.声明提前：
	变量和函数都是--先声明(var function)，后赋值(=)
		Eg.
			//alert("a = " + a);	
			var a = 20; 
			//以上代码浏览器解析如下：
			var a;		
			alert("a = " + a);	//所以输出结果为:a = undefined
			a = 20;
1.全局作用域（变量作用范围为全局）
	1.全局作用域在页面打开时创建，在页面关闭时销毁
	2.window对象是全局对象，也是最大的对象	
		所有的变量都是window的属性，所有的函数都是window的方法
		Eg.1	function fun(){};		===>window.fun();
		Eg.2	a = 10;  				===>window.a = 10;//不用var声明的变量都会成为全局变量(即使它在函数中)
		
2.函数作用域	
	1.调用函数时创建函数作用域，函数执行完毕以后，函数作用域销毁
	2.在全局作用域中无法访问到函数作用域的变量（var声明的）	
	3.在函数中要访问全局变量可以使用window对象（Eg.	window.a）
	Eg.
		var a = 1;
		function fun1(){
			var a = 10;
			//要访问全局变量的a 
			console.log(window.a);	===>1
			
			console.log(a);			===>10
		}
	4.定义形参就相当于在函数作用域中声明了变量	
	
3.总结——作用域模型
	window{				//window是全局对象
		var a = 10;		//全局变量						即window的属性 相当于window.a=10；
		function(){		//函数 							即window的方法 相当于 window.function();
		var b = 20;		//局部变量						在函数范围内有效
		c = 30;			//未用var声明的变量视为全局变量	即window.c = 30;
		}
		//补充:	
		函数定义形参相当于声明(笔记/day10/note/函数作用域.txt)
		
		alert()				相当于	window.alert();
		document.write()	相当于	window.document.write();
	}
```

#### 13.this

​	1.this指向的是一个对象	这个对象我们称为函数执行的 上下文对象

	2. this是调用方法的对象	谁调用方法谁就是this
		比如:	
			函数是window对象的方法,this就是window;
			obj1对象的fun1方法,this就是obj1;

14. #### 工厂化创建对象
	
	原理:函数里创建对象,外部赋值形参
	Eg.
	
	```js
	//创建一个函数
		function fun(name,age,adress){
			//创建一个对象
			var obj = new Object();
			obj.name = name;
			obj.age = age;
			obj.adress = adress;
			obj.sayName = function(){
				alert(this.name);
			};
	//上面代码也可以这样写				
	//		//创建一个对象
	//		var obj = {
	//			name:name,
	//			age:age,
	//			obj:adress,
	//			sayName:function(){
	//				alert(this.name);
	//			}
	//		}
	
	​	//返回对象
	​	return obj;
	}
	//批量生产对象
	var obj1 = fun("孙悟空",18,"花果山");
	var obj2 = fun("猪八戒",18,"高佬庄");
	var obj3 = fun("沙和尚",18,"流沙河");
	console.log(obj1);
	console.log(obj2);
	console.log(obj3);
	
	//调用方法
	//obj1.sayName();	
	```
	
	

#### 15.构造函数

​	1.构造函数定义
​		创建一个构造函数，专门用来创建Person对象的
​		构造函数就是一个普通的函数，创建方式和普通函数没有区别,
​		不同的是构造函数习惯上首字母大写

​	构造函数和普通函数的区别就是调用方式的不同
​	普通函数是直接调用，而构造函数需要使用new关键字来调用
​	
​	构造函数的执行流程：
​		1.立刻创建一个新的对象
​		2.将新建的对象设置为函数中this,在构造函数中可以使用this来引用新建的对象
​		3.逐行执行函数中的代码
​		4.将新建的对象作为返回值返回
​	
​	使用同一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一个类。
​	我们将通过一个构造函数创建的对象，称为是该类的实例
​	
​	2.this的情况：
​		1.当以函数的形式调用时，this是window
​		2.当以方法的形式调用时，谁调用方法this就是谁
​		3.当以构造函数的形式调用时，this就是新创建的那个对象
​	

3. instanceof
	使用instanceof可以检查一个对象是否是一个类的实例
	语法：
		对象 instanceof 构造函数
		如果是，则返回true，否则返回false
	Eg.
		console.log(per instanceof Person);
		console.log(dog instanceof Person);
				
	所有的对象都是Object的后代，
	所以任何对象和Object左instanceof检查时都会返回true
	Eg.
		console.log(dog instanceof Object);
		

​	4.构造函数的问题
​		1.问题:占用内存空间
​			在Person构造函数中，为每一个对象都添加了一个sayName方法，
​			目前我们的方法是在构造函数内部创建的，
​				也就是构造函数每执行一次就会创建一个新的sayName方法
 			也是所有实例的sayName都是唯一的。
 			这样就导致了构造函数执行一次就会创建一个新的方法，
​				执行10000次就会创建10000个新的方法，而10000个方法都是一摸一样的
​				这是完全没有必要，完全可以使所有的对象共享同一个方法
​		2.解决方法
​			将方法在全局作用域中定义
​				//谁调用this指向就是谁
​			仍然存在的问题
​				污染全局作用域

#### 16.原型(prototype)	//.\笔记\day11\note\画图.pptx

​	1.认识原型对象
​	原型属性名:__proto__
 	我们所创建的每一个函数，解析器都会向函数中添加一个属性prototype
​		这个属性对应着一个对象，这个对象就是我们所谓的原型对象
​	如果函数作为普通函数调用prototype没有任何作用
 	当函数以***构造函数***的形式调用时，它所创建的对象中都会有一个隐含的属性，
​		指向该构造函数的原型对象，我们可以通过__proto__来访问该属性

原型对象就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象，
	我们可以将对象中共有的内容，统一设置到原型对象中。

 当我们访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，
	如果没有则会去原型对象中寻找，如果找到则直接使用...

以后我们创建构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原型对象中，
这样不用分别为每一个对象添加，也不会影响到全局作用域，就可以使每个对象都具有这些属性和方法了

- 为对象的原型对象添加方法
	构造函数名.prototype.方法名(){
	
	​	};
	Eg.
	​	Person.prototype.fun1(){
	​		//alert("");
	​	}
	 	

2.原型链
	引言
		1.用 in检查某个对象中是否有某个属性,但无法区分其是自身还是原型中的属性
		2.用 hasOwnProperty("") "有自身的属性" 来检查自身是否有某个属性
		3.查找hasOwnProperty属性在哪里//找手机
			1.在对象里找//在自己房间里找
				console.log(fun1.hasOwnProperty("hasOwnProperty"))	==>false//找不到
			2.在对象的原型里找//在爸爸房间里找
				console.log(fun1.__proto__.hasOwnProperty("hasOwnProperty"))	==>false//找不到
			3.在对象的原型的原型里找//在爷爷的房间里找
				console.log(fun1.__proto__.__proto__.hasOwnProperty("hasOwnProperty"))	==>true//找到了
			4.思考:对象的原型的原型还有原型吗?//我可以到祖父的房间里找手机吗?
				console.log(fun1.__proto__.__proto__.proto__)	==>null
	结论
		原型对象也是对象，所以它也有原型，
			1.当我们使用一个对象的属性或方法时，会先在自身中寻找，自身中如果有，则直接使用，
			2.如果没有则去原型对象中寻找，如果原型对象中有，则使用，
			3.如果没有则去原型的原型中寻找,直到找到Object对象的原型，
			4.Object对象的原型没有原型，如果在Object原型中依然没有找到，则返回undefined

17. #### toString
	
	//当我们直接在页面中打印一个对象时，事件上是输出的对象的toString()方法的返回值
	console.log(per1);	==>[object Object]	//per1是构造函数Person的一个实例
	per1.toString();	==>[object Object]	//相当于上面代码
	
	- 如何修改输出的内容
		需要修改Person原型的toString的返回值
		Person.prototype.toString = function(){
			return "xxx";
		}
		18.垃圾回收（GC）
		当不需要一个对象时，将其设置为 null,浏览器会自动清理没有被指向的堆内存。
		Eg.	var obj = new Object();
		//进行一些操作后，不需要obj了
		obj = null;
		

#### 19.数组（Array）

​	0.对象分类
​		内建对象
​		宿主对象
​		自定义对象
​	1.数组的定义
​		1.数组也是一个对象
​		2.它和我们普通对象功能类似，也是用来存储一些值的
​		3.不同的是普通对象是使用字符串作为属性名的，而数组时使用数字来作为索引操作元素
​	2.索引(index)
​		从0开始的整数就是索引
​	

```js
  Eg.
	var arr = new Array();//创建一个数组
	// var arr = [];//也可以这样写,类似于对象的创建方法
	arr[0] = 0;
	arr[1] = 10;//向数组中添加元素
	arr[0];//读取数组中的元素
	arr[10];//读取未定义的索引会返回undefined
	arr.length = 10 ;//修改length会改变数组长度
	arr[arr.length] = 30;//这样写会始终向连续数组的最后一个索引添加值

3.数组字面量(value)
	数组中的元素可以是任何类型的数据
  Eg.
  	//可以是数值,字符串,布尔值,空,未定义,对象,函数,数组(二维数组)
  	var arr = [1,"string",true,null,undefined,{},function(){},[]];
  	
  	var arr1 = new Array(10,20,30);//使用构造函数创建数组并添加元素
  	arr = [10];//创建一个数组数组中只有一个元素10
	arr2 = new Array(10);//创建一个长度为10的数组
	
4.数组的方法
	push(newElement1,...,newElementx)//向数组末尾添加一个或多个元素,并返回新的数组长度
	pop(onlyElement)//向数组末尾删除一个元素,并返回删除的元素
	unshift(newElement1,...,newElementx)//向数组开头添加一个或多个元素,并返回新的长度
	shift(onlyElement)//向数组开头删除一个元素,并返回删除的元素
	
	slice(indexStart,indexEnd)//从某个已有的数组返回选定的元素,包含开始不包含结束
	splice(indexStart,deletedLength,newElement1,newElement2,..)//替换元素,然后返回被删除的元素(倒数第n个元素:-n),该方法会改变原始数组。
	
	* 数组的其它方法:w3c	https://www.w3school.com.cn/jsref/jsref_obj_array.asp
	sort()//排序 默认Unicode编码排序 改变原数组 
		sort(number)//以数字从小到大顺序排序
		sort(function(a,b){a-b})//用回调函数进行排序从小到大; b-a则是从大到小
		
	concat()//连接多个数组或元素,返回新的数组
	join()//拼接字符串并返回,jion("?")指定连接符
	reverse()//反转数组

5.forEach()	遍历数组的方法(支持i8以上的浏览器)
	forEach()方法需要一个函数作为参数
		 * 	- 像这种函数，由我们创建但是不由我们调用的，我们称为回调函数
		 * 	- 数组中有几个元素函数就会执行几次，每次执行时，浏览器会将遍历到的元素
		 * 		以实参的形式传递进来，我们可以来定义形参，来读取这些内容
		 * 	- 浏览器会在回调函数中传递三个参数：
		 * 		第一个参数，就是当前正在遍历的元素
		 * 		第二个参数，就是当前正在遍历的元素的索引
		 * 		第三个参数，就是正在遍历的数组
		 * 		
		 */
		arr.forEach(function(value , index , obj){
			console.log(value);
		});
```

#### 20.call()和apply()

​	1.这两个方法都是函数对象的方法，需要通过函数对象来调用
​		当对函数调用call()和apply()都会调用函数执行
​		Eg.
​			fun.call();		相当于	fun();
​			fun.apply();	相当于	fun();
​			

```js
2.在调用call()和apply()可以将一个对象指定为第一个参数
	此时这个对象将会成为函数执行时的this
	Eg.(待完善)
		fun.call(obj);	可以理解为	obj.fun();//此时this指向obj
		fun.apply(obj);	可以理解为	obj.fun();//此时this指向obj
		
3.call()方法可以将实参在对象之后依次传递
	apply()方法需要将实参封装到一个数组中统一传递
	Eg.
		fun.call(obj,实参1,实参2);//实参对应形参
		fun.apply(obj,[实参1,实参2]);//将实参封装为数组
		
4.this的总结：
	1.以函数形式调用时，this永远都是window
	2.以方法的形式调用时，this是调用方法的对象
	3.以构造函数的形式调用时，this是新创建的那个对象
	4.使用call和apply调用时，this是指定的那个对象		
```


 		

#### 21.arguments() 实参

​	1.arguments是一个类数组,在调用函数时，浏览器每次都会传递进两个隐含的参数：
​		1.函数的上下文对象 this
​		2.封装实参的对象 arguments
​		Eg.	arguments[实参1,实参二]
​		

​	2.callee属性:指向当前函数对象

#### 22.Date()	

​	Eg.	
​		//使用构造函数创建对象
​		var d = new Date();//封装当前代码执行时间
​		//创建一个指定的时间对象
​		var d2 = new Date("mm/dd/yyyy hh:mm:ss");
​		

```js
	getDate();//获取月份中的"几日"
	getDay();//获取周几(0~6:周日~周六)
	getMonth();//获取几月(0~11:十二月~十一月)
	getFullYear();//获取当前年份
	getTime();//获取当前日期对象的时间戳(单位:ms miliSecond)
	Date.now();//获取当前的时间戳,可以用来当计时器
	
*.时间戳	
	指的是从格林威治标准时间的1970年1月1日，0时0分0秒
		到当前日期所花费的毫秒数（1秒 = 1000毫秒）
	计算机底层在保存时间时使用都是时间戳
```

#### 23.Math()	

​	1.Math不是构造函数,是某个对象的一个方法
​	

```js
Eg.
	Math.PI//圆周率π
	Math.abs()//绝对值
	Math.ceil()//向上取整
	Math.floor()//向下取整
	Math.round()//四舍五入
	Math.random()//生成(0,1)之间的随机数
		Math.round(Math.random()*(y-x)+x);//生成x-y之间的随机整数
	Math.max()
	Math.min()
	
	math.pow(x,n)//x的n次方
	math.sqrt()//对一个数开平方
```

#### 24.包装类 

​	1.定义:String() Number() Boolean()
​	基本数据类型
​		 * 	String Number Boolean Null Undefined
​		 * 引用数据类型
​		 * 	Object
​		 * 
​		 * 在JS中为我们提供了三个包装类，通过这三个包装类可以将基本数据类型的数据转换为对象
​		 * 	String()
​		 * 		- 可以将基本数据类型字符串转换为String对象
​		 * 	Number()
​		 * 		- 可以将基本数据类型的数字转换为Number对象
​		 *  Boolean()
​		 * 		- 可以将基本数据类型的布尔值转换为Boolean对象
​		 * 	但是注意：我们在实际应用中不会使用基本数据类型的对象，
​		 * 		如果使用基本数据类型的对象，在做一些比较时可能会带来一些不可预期的结果
​		 

​	2.包装类存在的意义
​		方法和属性只能添加给对象，不能添加给基本数据类型
​			当我们对一些基本数据类型的值去调用属性和方法时，
​				浏览器会临时使用包装类将其转换为对象，然后在调用对象的属性和方法
​				调用完以后，在将其转换为基本数据类型

​			 
​			 

#### 25.String的方法(都不会影响原字符串)

​	1.在底层字符串是以字符数组的形式进行保存,可以用对待数组的方法操作字符串
​	2.额外的属性
​		charAt()//返回在指定索引号的字符
​		charCodeAt()//获取指定索引号的字符的字符编码(Unicode编码)
​		

```js
	String.formCharCode(0x2692)//根据字符编码获取字符		==>"中"	0x表示16进制
	
	indexOf("x",n)//检索从索引n开始,是否有指定内容"x"		x.apper.firstIndexNum		-1
	lastIndexOf()//同上,不过从后往前找
	
	slice(start,end)//截取字符串长度,end不包含,end可以为负值
	substring(start,length)//截取字符串长度
	splite(";")//拆分字符串为数组,分隔符为;		
	splite("")//全部拆分为单个字符组成的数组
	
	toUpperCase()//大写
	toLowerCase()//小写
```

​		

#### 26.正则表达式	RegExp

​	1.正则表达式用于定义一些字符串的规则
​		语法 var 变量 = new RegExp("正则表达式","匹配模式");
​		Eg.	var reg = new RegExp("ab","i");//i忽略大小写,g全局匹配
​		

```js
2.正则表达式的方法：
	test()
		使用这个方法可以用来检查一个字符串是否符合正则表达式的规则==>true,false
3.使用字面量来创建正则表达式
	语法：var 变量 = /正则表达式/匹配模式
	Eg.	var reg = /a/i;
4.其它字面量	
	a|b		a或b
	[ab]	a或b
	[a-z]	任意小写字母
	[A-Z]	任意大写字母
	[A-z]	任意字母
	[0-9]	任意数字
	[^ab]	除了ab
	
5.正则表达式的相关方法
	splite()//将一个字符串以指定分隔符拆分为一个数组(全部拆分)
	search()//搜索字符串中是否含有指定内容(只找第一个,即使g也无效)
	match()//提取指定内容并封装为一个数组
	replace(old,new)//将字符串中指定内容替换为新的内容
	
	*方法可以嵌套使用
		Eg.	str.split("").reverse().join("");
	
6.量词
	1.通过量词可以设置一个内容出现的次数,
		量词只对它前边的一个内容起作用
		
	Eg.
		{n}//正好出现n次
		{m,n}//出现m-n次
		{m,}//m次以上
		+	//至少1次,相当于{1,}
		*	//任意次,相当于{0,}
		?	//0-1次,相当于{0,1}
		^a	//以a开头
		a$	//以a结尾
		
		var reg = /(abc){3}/;//用()圈分出一个整体,==>出现3次abc
7.字符		
	.	//表示任意字符
	\.	//==>.,\表示转义字符
	
	\w	//任意字母数字下划线[A-z0-9]
	\W	//除了字母数字下划线[^A-z0-9]
	\d	//任意数字[0-9]
	\D	//除了数字[^0-9]
	\s	//空格
	\S	//除了空格
	
	\b	//单词边界
		Eg.	reg = /\bchild\b/;
	\B	//除了单词边界
	
8.邮件的正则		
```

​		

#### 27.DOM

​	1.什么是DOM?
​		DOM，全称Document Object Model文档对象模型。
​		

```js
	文档:表示的就是整个的HTML网页文档
	对象:表示将网页中的每一个部分都转换为了一个对象
	模型:使用模型来表示对象之间的关系，这样方便我们获取对象

2.节点(Node)
	1.网页中的每一个部分都可以称为是一个节点
	2.节点分类(常用):
		文档节点(document)：整个HTML文档
		元素节点(Element)：HTML文档中的HTML标签<>
		属性节点(Attribute)：元素的属性id,class...
		文本节点(Text)：HTML标签中的文本内容
		
	Eg.	
		document.getElementById("");//根据id属性值获取元素节点对象
		元素节点.firstChild();//获取元素节点的第一个子节点，一般为文本节点
		元素节点.getAttributeNode("属性名");//获取属性节点("?"),注意:我们一般不使用属性节点。
```


​			
​		3.节点属性
​			nodeName	nodeType	nodeValue
​			
```js
3.事件	
	1.事件，就是文档或浏览器窗口中发生的一些特定的交互瞬间。
	2.事件Eg.
		onclick	ondblclick onload ...//用on连接,表示在xxx事件上
	3.参考w3c: https://www.w3school.com.cn/jsref/dom_obj_event.asp
	
4.js代码的位置
	1.元素<>内部
		在事件对应的属性中设置一些js代码,不方便维护，不推荐使用	
		
	2.对应元素下方(body标签里)
		Eg.	<button id="btn">我是一个按钮</button>
			<script type="text/javascript">
				//获取按钮对象
				var btn = document.getElementById("btn");
				//绑定一个单击事件
				btn.onclick = function(){
					//alert("你还点~~~");
				};
				//像这种为单击事件绑定的函数，我们称为单击响应函数
			</script>
		
		优点:利于网页加载
		缺点:不方便维护
	
	3.head标签或外部文件
		1.此时需要为window绑定一个onload事件,使函数在页面加载完成后执行
		Eg.	
			window.onload = function(){
				//获取id为btn的按钮
				var btn = document.getElementById("btn");
				//为按钮绑定一个单击响应函数
				btn.onclick = function(){
					//alert("hello");
				};
			};
			
5.DOM查询(找对象)
	1.获取元素节点(document对象的方法)
		getElemnetById("");//通过id获取元素
		getElemnetsByTagName("");//通过标签名获取元素
		getElemnetByName("");//通过name(表单属性)获取元素
	
	2.获取元素节点的子节点(元素对象的方法)
		*节点包含空白文本节点(ie8及以下浏览器不会将空白当成文本节点)
		
		getElementsByTagName()//通过标签名获取元素
		
		childNodes//获取当前节点的子节点
		children属性可以获取当前元素的所有子元素(i8及以下不支持)
		
		firstChild//获取第一个子节点
		firstElementChild//获取第一个子元素(i8及以下不支持)
		
		lastChild//获取最后一个子节点
		lastElementChild//获取最后一个子元素(i8及以下不支持)
		
	3.获取父节点和兄弟节点
		parentNode//获取当前节点的父节点
		
		previousSibling//获取前一个兄弟节点
		previousElementSibling//获取前一个兄弟元素(i8及以下不支持)
		
		nextSibling//获取后一个兄弟节点
		nextElementSibling//获取后一个兄弟元素(i8及以下不支持)
		
	4.元素节点的属性
		元素对象.属性名
			Eg.	element.value element.id element.className
		
		nodeValue//文本节点可以通过nodeValue属性获取和设置文本节点的内容
			
		innerHTML//内部的HTML代码
		innerText//内部的文本节点内容
		firstChild.nodeValue//返回第一个文本节点的值(同上返回文本信息)
		
	5.dom查询的剩余方法
		document.body				==>	<body>
		document.all 				==>	所有元素<*>
		document.documentElement	==>	<html>
		
		getElementsByClassName("")//通过类名选择元素(不支持i8及以下)
		
		1.querySelector("")	查询选择器
			它可以通过css选择器选择元素(支持i8及以上)
			""内容为css选择器
			
			Eg.
			document.querySelector(".box")//返回第一个.box元素
			document.querySelectorAll(".box")//返回一个数组包含所有.box元素(即使只有一个)
```


​	6.DOM增删改(搞对象)
​		document.creatElement()//创建元素节点<>
​		document.creatTextNode()//创建文本节点
​		

```js
	父节点.appendChild()//添加子节点
	父节点.insertBefore(new,old)//向指定old子节点前添加new子节点
	父节点.replaceChild(new,old)//用new子节点替换old子节点
	父节点.removeChild()//删除一个子节点
	
	节点.remove()//删除节点自身
	子节点.parentNode()//子节点的父节点
	
	innnerHTML	可以对HTML代码进行增删改操作
		Eg.	document.getElementByTagName("ul").innerHTML += "<li>我是一个新的li</li>"; //+=不推荐使用
```


​		

#### 28.DOM查询练习

​	练习路径:js/DOM
​	1.return false;//取消默认行为,防止超链接跳转,相当于javascript:;
​	2.comfirm("");//询问窗口:确认返回true,取消返回false
​	

#### 29.DOM操作css

​	1.修改内联样式(优先级仅次于!important)
​		语法:元素.style.样式名 = 样式值	可以对css代码进行操作
​			Eg.	document.querySelectorAll(".box").style = "background-color:#f00";
​		或	Eg.	document.querySelectorAll(".box").style["background-color"] = "#f00";
​		或 采用驼峰命名法命名:
​			Eg.	document.querySelectorAll(".box").style.backgroundColor = "#f00";
​	

```js
2.读取内联样式
	语法:元素.style.样式名
	
3.读取元素当前显示的样式(以下方式读取的样式都是只读的)
	1.currentStyle	//当前样式(只支持ie)
		语法:	元素.currentStyle.样式名
		
	2.getComputedStyle()	//获取计算后的样式(不支持i8及以下)
		这是window对象的方法,可以直接使用
		语法:	getComputedStyle(参数一,参数二)
			参数一：要获取样式的元素
			参数二：可以传递一个伪元素，一般都传null
	
	3.兼容问题解决
	Eg.	
		function getStyle(obj,name){
			if(window.getComputedStyle){
				//i9和其他
				return getComputedStyle(box1,null)[name];
			}else{
				//i8及以下
				return obj.currentStyle[name];
			}

			//return window.getComputedStyle?getComputedStyle(box1,null)[name]:obj.currentStyle[name];
		};
		
	4.其他读取样式方法
		语法:	元素.方法(Eg.  box.clientWidth)
		
		clientWidth		//可见宽度(content,padding)
		clientHeight	//可见高度
		offsetWidth		//整个宽度(content,padding,border)
		offsetHeight	//整个高度
		offsetParent	//定位父元素(当前元素最近的开启定位的祖先元素,body默认开启定位)
		offsetLeft		//水平偏移量(相对其定位父元素)
		offsetTop		//垂直偏移量
		scrollHeight	//滚动区域高度
		scrollWidth		//滚动区域宽度
		scrollLeft		//水平滚动距离
		scrollTop		//垂直滚动距离
		
		*补充
			当满足scrollHeight - scrollTop == clientHeight
			说明垂直滚动条滚动到底了
			
			当满足scrollWidth - scrollLeft == clientWidth
			说明水平滚动条滚动到底
			
			disabled	//设置元素是否禁用
		*补充Event
			onscroll //滚动事件
```

#### 30.事件对象

​	1.当事件的相应函数被触发时,浏览器每次都会将一个事件对象作为实参传递进相应函数
​		在事件对象中封装了当前事件的相关一切信息,比如:鼠标/键盘属性
​		

```js
	我们可以定义一个形参用来接收该实参事件对象
	该实参对象属性:
		clientX	鼠标移动时的X坐标(可见区域)
		clientY	鼠标移动时的Y坐标
2.兼容性问题		
	Eg.	
		areaDiv.onmousemove = function(event){
		
			/*
			 * 在IE8中，响应函数被触发时，浏览器不会传递事件对象，
			 * 	在IE8及以下的浏览器中，是将事件对象作为window对象的属性保存的
			 */
			/*if(!event){
				event = window.event;
			}*/
			
			//解决事件对象的兼容性问题
			event = event || window.event;
			
			/*
			 * clientX可以获取鼠标指针的水平坐标
			 * cilentY可以获取鼠标指针的垂直坐标
			 */
			var x = event.clientX;
			var y = event.clientY;
			
			//alert("x = "+x + " , y = "+y);
			
			//在showMsg中显示鼠标的坐标
			showMsg.innerHTML = "x = "+x + " , y = "+y;
		};
		
3.解决鼠标移动问题
	1.使用clientX和clientY
		出现问题:滚动页面鼠标与div脱离
		原因:clientX和clientY表示的是可见区域坐标
		
	2.使用pageX和pageY(i8及以下不支持)
		pageX	鼠标移动时的X坐标(整个页面)
		pageY	鼠标移动时的X坐标
		
	3.最终方案
		使用clientX + scrollTop
			clientY + scrollLeft来解决
			
		新兼容性问题:
			chrome认为scroll是body的属性			//body
			火狐等浏览器认为scroll是html的属性	//documentElement
			
			解决办法:(chrome现在认为scroll是html属性了,测试发现不兼容i8)
			var st = document.body.scrollTop || document.documentElement.scrollTop;
			var sl = document.body.scrollLeft || document.documentElement.scrollLeft;
```

#### 31.事件的冒泡(Bubble)

​	1.所谓的冒泡指的就是事件的向上传导，当后代元素上的事件被触发时，其祖先元素的相同事件也会被触发
​		在开发中大部分情况冒泡都是有用的,如果不希望发生事件冒泡可以通过事件对象来取消冒泡
​		Eg.	event.cancelBubble = true;

#### 32.事件的委派

​	1.引言:
​		我们希望，只绑定一次事件，即可应用到多个的元素上，即使元素是后添加的
​		我们可以尝试将其绑定给元素的共同的祖先元素

2.事件的委派
	指将事件统一绑定给元素的共同的祖先元素，这样当后代元素上的事件触发时，会一直冒泡到祖先元素
		从而通过祖先元素的响应函数来处理事件。
	事件委派是利用了冒泡，通过委派可以减少事件绑定的次数，提高程序的性能
	
	event.target	//event中的target表示的触发事件的对象
	
	//*补充:includes属性		包含...

#### 33.事件的绑定

​	1.引言
​		使用 对象.事件 = 函数 的形式绑定响应函数，
​	 	它只能同时为一个元素的一个事件绑定一个响应函数，
​		不能绑定多个，如果绑定了多个，则后边会覆盖掉前边的
​		

```js
2.addEventListener()//不支持i8及以下
	参数：
 		1.事件的字符串，不要on
		2.回调函数，当事件触发时该函数会被调用
		3.是否在捕获阶段触发事件，需要一个布尔值，一般都传false
		
	Eg.
		obj.addEventListener("click",function(){
			alert(1);
		},false);
		
3. attachEvent()//只支持i8及以下,函数执行顺序后进先出(与上面的相反)
	在IE8中可以使用attachEvent()来绑定事件
		参数：
			1.事件的字符串，要on
	 		2.回调函数
	 		
	*i8及以下浏览器中attachEvent()是window对象的一个方法
		attachEvent()中的this指向的就是window
	 		
4.this对象的修改
	this是谁由调用方式决定
	我们可以用call(obj)来修改this指向obj
	
	我们可以在匿名函数中调用回调函数,来让this指向obj
  Eg.	
	<script type="text/javascript">
		window.onload = function(){
			//自建函数bind
			function bind(obj, eventStr,callback){
				//判断
				if(obj.addEventListener){
					//支持ie11及其他
					obj.addEventListener(eventStr,callback,false)
				}else{
					//只支持ie6-10
					obj.attachEvent("on" + eventStr,function(){
						callback.call(obj);//使用call然this指向obj
					})
				}
			}
			var btn01 = document.getElementById("btn");
			bind(btn01,"click",function(){
				alert(this);
			})
		};
	</script>
```

#### 34.事件的传播

	- 关于事件的传播网景公司和微软公司有不同的理解
​	- 微软公司认为事件应该是由内向外传播，也就是当事件触发时，应该先触发当前元素上的事件，
 		然后再向当前元素的祖先元素上传播，也就说事件应该在冒泡阶段执行。
​	- 网景公司认为事件应该是由外向内传播的，也就是当前事件触发时，应该先触发当前元素的最外层的祖先元素的事件，
 		然后在向内传播给后代元素
 	- W3C综合了两个公司的方案，将事件传播分成了三个阶段
    		1.捕获阶段
    			- 在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件
      		2.目标阶段
      			- 事件捕获到目标元素，捕获结束开始在目标元素上触发事件
        		3.冒泡阶段
        			- 事件从目标元素向他的祖先元素传递，依次触发祖先元素上的事件

	- 如果希望在捕获阶段就触发事件，可以将addEventListener()的第三个参数设置为true
		一般情况下我们不会希望在捕获阶段触发事件，所以这个参数一般都是false
  
	- IE8及以下的浏览器中没有捕获阶段(只有冒泡阶段)

#### 35.拖拽练习

​	1.拖拽box1元素(需要考虑scroll问题)
​	- 拖拽的流程
​		1.当鼠标在被拖拽元素上按下时，开始拖拽  onmousedown
​		2.当鼠标移动时被拖拽元素跟随鼠标移动 onmousemove
​		3.当鼠标松开时，被拖拽元素固定在当前位置	onmouseup
​		

```js
2.div位置的优化
	原因:
		鼠标按下时出现div位置跳跃,用户体验不好
	解决方案:
		在mousedown时,用鼠标的x,y坐标 - div水平和垂直方向的坐标 = 偏移量
	即	div的水平偏移量 鼠标.clentX - 元素.offsetLeft
		div的垂直偏移量 鼠标.clentY - 元素.offsetTop
```


​	3.拖拽优化
​		return false	//取消默认行为,不支持i8及以下
​		元素.setCaptrue()
​		元素.releaseCaptrue()
​		box1.setCapture && box1.setCapture();
​		box1.releaseCapture && box1.releaseCapture();

#### 36.滚轮事件

​	onwheel	//onmousewhell不推荐使用了
​		event.wheelDelta 可以获取鼠标滚轮滚动的方向
​		//向上滚 120   向下滚 -120
​		//wheelDelta这个值我们不看大小，只看正负
​		

```js
	//alert(event.wheelDelta);
	
	//wheelDelta这个属性火狐中不支持
	//在火狐中使用event.detail来获取滚动的方向
	//向上滚 -3  向下滚 3
	//alert(event.detail);
	
使用addEventListener()方法绑定响应函数，取消默认行为时不能使用return false
	需要使用event来取消默认行为event.preventDefault();
	但是IE8不支持event.preventDefault();,如果直接调用会报错
```

#### 37.键盘事件

​	onkeydown	//键盘按下
​	onkeyup		//键盘松开
​	onkeypress	//键盘正在被按下(键盘被压着)
​	

​	ctrlkey
​	altkey
​	shiftkey
​	keyCode		//按键编码

#### 38.BOM

​	1.BOM
​	 * 	- 浏览器对象模型
​	 * 	- BOM可以使我们通过JS来操作浏览器
​	 * 	- 在BOM中为我们提供了一组对象，用来完成对浏览器的操作
​	 * 	- BOM对象
​	 * 		Window
​	 * 			- 代表的是整个浏览器的窗口，同时window也是网页中的全局对象
​	 * 		Navigator
​	 * 			- 代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器
​	 * 		Location
​	 * 			- 代表当前浏览器的地址栏信息，通过Location可以获取地址栏信息，或者操作浏览器跳转页面
​	 * 		History
​	 * 			- 代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录
​	 * 				由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页
​	 * 				而且该操作只在当次访问时有效
​	 * 		Screen
​	 * 			- 代表用户的屏幕的信息，通过该对象可以获取到用户的显示器的相关的信息
​	 * 
​	 * 
​	 * 		这些BOM对象在浏览器中都是作为window对象的属性保存的，
​	 * 			可以通过window对象来使用，也可以直接使用
​	 * 
​	 * 		
​	 */
​	

```js
Eg.
//console.log(navigator);
//console.log(location);
//console.log(history);

2.History
	对象可以用来操作浏览器向前或向后翻页
  属性:
  	/*
	 * length
	 * 	- 属性，可以获取到当成访问的链接数量
	 */
	//alert(history.length);
	
	/*
	 * back()
	 * 	- 可以用来回退到上一个页面，作用和浏览器的回退按钮一样
	 */
	//history.back();
	
	/*
	 * forward()
	 * 	- 可以跳转下一个页面，作用和浏览器的前进按钮一样
	 */
	//history.forward();
	
	/*
	 * go()
	 * 	- 可以用来跳转到指定的页面
	 * 	- 它需要一个整数作为参数
	 * 		1:表示向前跳转一个页面 相当于forward()
	 * 		2:表示向前跳转两个页面
	 * 		-1:表示向后跳转一个页面
	 * 		-2:表示向后跳转两个页面
	 */
	
3.Location
	该对象中封装了浏览器的地址栏的信息
	
	//如果直接打印location，则可以获取到地址栏的信息（当前页面的完整路径）
	//alert(location);
	
	/*
	 * 如果直接将location属性修改为一个完整的路径，或相对路径
	 * 	则我们页面会自动跳转到该路径，并且会生成相应的历史记录
	 */
	//location = "http://www.baidu.com";
	//location = "01.BOM.html";
	
	/*
	 * assign()
	 * 	- 用来跳转到其他的页面，作用和直接修改location一样
	 */
	//location.assign("http://www.baidu.com");
	
	/*
	 * reload()
	 * 	- 用于重新加载当前页面，作用和刷新按钮一样
	 * 	- 如果在方法中传递一个true，作为参数，则会强制清空缓存刷新页面
	 */
	//location.reload(true);
	
	/*
	 * replace()
	 * 	- 可以使用一个新的页面替换当前页面，调用完毕也会跳转页面
	 * 		不会生成历史记录，不能使用回退按钮回退
	 */
```

#### 39.定时调用

​	setInterval()
​	  	- 定时调用
​	  	- 可以将一个函数，每隔一段时间执行一次
​	  	- 参数：
​	  		1.回调函数，该函数会每隔一段时间被调用一次
​	  		2.每次调用间隔的时间，单位是毫秒
​	  

```js
  	- 返回值：
  		返回一个Number类型的数据
  		这个数字用来作为定时器的唯一标识

	Eg.	setInterval(function(){},1000)

clearInterval()
	可以用来关闭一个定时器
	方法中需要一个定时器的标识作为参数，这样将关闭标识对应的定时器
	Eg.	clearInterval(timer);
```

#### 40.延时调用

​	setTimeout()
​		延时调用，
​			延时调用一个函数不马上执行，而是隔一段时间以后在执行，而且只会执行一次
​		  

```js
	延时调用和定时调用的区别，定时调用会执行多次，而延时调用只会执行一次
	  
	延时调用和定时调用实际上是可以互相代替的，在开发中可以根据自己需要去选择
Eg.	setTimeout(function(){},1000)//单位:ms

clearTimeout(timer);//使用clearTimeout()来关闭一个延时调用
```

#### 41.补充-jq源码封装

Eg.
//尝试创建一个可以执行简单动画的函数
/*

 * 参数：
 * 	obj:要执行动画的对象
 * 	attr:要执行动画的样式，比如：left top width height
 * 	target:执行动画的目标位置
 * 	speed:移动的速度(正数向右移动，负数向左移动)
 *  callback:回调函数，这个函数将会在动画执行完毕以后执行
 */
    function move(obj, attr, target, speed, callback) {
	//关闭上一个定时器
	clearInterval(obj.timer);

	//获取元素目前的位置
	var current = parseInt(getStyle(obj, attr));

	//判断速度的正负值
	//如果从0 向 800移动，则speed为正
	//如果从800向0移动，则speed为负
	if(current > target) {
		//此时速度应为负值
		speed = -speed;
	}

	//开启一个定时器，用来执行动画效果
	//向执行动画的对象中添加一个timer属性，用来保存它自己的定时器的标识
	obj.timer = setInterval(function() {

	```js
	//获取box1的原来的left值
  var oldValue = parseInt(getStyle(obj, attr));
	
	//在旧值的基础上增加
  var newValue = oldValue + speed;
	
	//判断newValue是否大于800
	//从800 向 0移动
	//向左移动时，需要判断newValue是否小于target
	//向右移动时，需要判断newValue是否大于target
	if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
		newValue = target;
  }
	
	//将新值设置给box1
  obj.style[attr] = newValue + "px";
	
	//当元素移动到0px时，使其停止执行动画
	if(newValue == target) {
		//达到目标，关闭定时器
		clearInterval(obj.timer);
		//动画执行完毕，调用回调函数
		callback && callback();
  }
	```
  
  }, 30);
    }

/*
 * 定义一个函数，用来获取指定元素的当前的样式
 * 参数：
 * 		obj 要获取样式的元素
 * name 要获取的样式名
    */
   function getStyle(obj, name) {

   if(window.getComputedStyle) {
   	//正常浏览器的方式，具有getComputedStyle()方法
   	return getComputedStyle(obj, null)[name];
   } else {
   	//IE8的方式，没有getComputedStyle()方法
   	return obj.currentStyle[name];
   	
   ```js
   /*
    *	注意:
    *		currentStyle表示当前样式,返回默认值auto(NAN);
    *		getComputedStyle表示计算后的样式,返回为具体值;
    */
   ```
   }
   }
   /Eg.

#### 42.类的操作

​	通过className
​	

#### 43.JSON

​	1.什么是JSON?
​	  	- JS中的对象只有JS自己认识，其他的语言都不认识
​	  	- JSON就是一个特殊格式的字符串，这个字符串可以被任意的语言所识别，
​	  		并且可以转换为任意语言中的对象，JSON在开发中主要用来数据的交互
​	  	- JSON
​	  		- JavaScript Object Notation JS对象表示法
​	  		- JSON和JS对象的格式一样，只不过JSON字符串中的属性名必须加双引号
​	  			其他的和JS语法一致
​	  		JSON分类：
​	  			1.对象 {}
​	  			2.数组 []
​	  

```js
  		JSON中允许的值：
  			1.字符串
  			2.数值
  			3.布尔值
  			4.null
  			5.对象
  			6.数组
  			
	Eg.
		var json = '{"name":"孙悟空","age":18,"gender":"男"}';
		var arr = '[1,2,3,"hello",true]';
		var obj2 = '{"arr":[1,2,3]}';
		var arr2 ='[{"name":"孙悟空","age":18,"gender":"男"},{"name":"孙悟空","age":18,"gender":"男"}]';

2.JSON工具类
	将JSON字符串转换为JS中的对象
	在JS中，为我们提供了一个工具类，就叫JSON
	这个对象可以帮助我们将一个JSON转换为JS对象，也可以将一个JS对象转换为JSON

3.JSON转化
	JSON --> js对象
		JSON.parse()
	js对象 --> JSON
		JSON.stringify()	
	
4.兼容ie7的不完美方案
	eval()
  	- 这个函数可以用来执行一段字符串形式的JS代码，并将执行结果返回
  	Eg.
		//var str2 = "alert('hello');";	==> hello
  		
  	- 如果使用eval()执行的字符串中含有{},它会将{}当成是代码块
  		如果不希望将其当成代码块解析，则需要在字符串前后各加一个()
  	Eg.
  		var str = '{"name":"孙悟空","age":18,"gender":"男"}';
		
		var obj = eval("("+str+")");
		
		console.log(obj);	==>{name:"孙悟空",age:18,gender:"男"}
  
  	- eval()这个函数的功能很强大，可以直接执行一个字符串中的js代码，
  		但是在开发中尽量不要使用，首先它的执行性能比较差，然后它还具有安全隐患

5.兼容ie7的完美方案
	直接引入一个JSON2.js外部文件
	里面是JSON工具类源码
	通过这个即可完美解决ie7兼容性问题,不过目前不太考虑ie7的兼容问题
```