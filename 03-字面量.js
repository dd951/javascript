// 数字字面量
42          // 整数
3.14        // 浮点数
0xFF        // 十六进制（255）
0o10        // 八进制
0b1010      // 二进制（10）
1.5e3       // 科学计数法（1500）

// 字符串字面量
"Hello"     // 双引号字符串
'World'     // 单引号字符串
`ES6`       // 模板字符串（支持插值：例如`username=${username}`）

// 布尔字面量
let isDone = true;
let isActive = false;

// 数组字面量
[1, 2, 3]                     // 数字数组
["apple", "banana", "orange"]  // 字符串数组
[1, "two", true, [4, 5]]      // 混合类型数组

// 类数组字面量
const arrayLike = {0:'id', 1:'name', length:2};

// 对象字面量
const obj1 = { name: "Alice", age: 25 }      // 简单对象

const obj2 = { 
  id: 1,
  // 对象中的这种方法不能当做构造函数使用。
  // 这里的this指向当前对象
  getName() { return this.name; }  // 方法：有两种定义方式，这是第1种。（ES6推荐这种方式。）
}

const obj3 = {
  id: 1,
  // 对象中的这种方法不能当做构造函数使用。
  // 这里的this指向当前对象
  getName: function(){ return this.name; } // 方法：有两种定义方式，这是第2种。
}

// 如果需访问 this（指向对象本身），不能用箭头函数
// 箭头函数的 this 自动继承外部作用域的this。
// 那你可能在想箭头函数的外层作用域不是obj4吗？obj4后面是一个大括号，这个大括号不是作用域吗？
// 当然不是。对象字面量 {} 不创建作用域，它只是语法结构
const obj4 = {
  id: 1,
  // 这里的this不会指向当前对象，指向外层作用域的this。
  // 如果obj4对象是在全局作用域当中，则以下的this指向的就是window。
  getName: () => this.name // 不会指向 obj4
};

// 正则表达式字面量
/\d+/g          // 匹配数字

// null 和 undefined字面量
let empty = null;
let notDefined = undefined;

// BigInt字面量
9007199254740992n  // BigInt 类型 - 在数字后加 n 表示大整数

// Symbol字面量
const sym = Symbol("description"); // 通过 Symbol() 创建唯一值