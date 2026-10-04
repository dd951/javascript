/* 
  标识符命名规则
1. 由数字、字母（任何一个国家的文字都支持）、下划线、美元符号组成。不能含有其它符号。
2. 不能以数字开始。
3. 关键字不能做标识符
4. 严格区分大小写
*/

// 变量 & 函数：小驼峰命名法
let userName = "Alice"; // 变量
function getUserInfo() {} // 函数

// 常量：全大写 + 下划线
const MAX_COUNT = 100;
const API_KEY = "abc123";

// 类 & 构造函数：大驼峰命名法
class UserProfile {}
function Car(model) {
  this.model = model;
}

// 私有成员：下划线前缀
class Person {
  constructor(name) {
    this._name = name; // 约定为私有变量
  }

  _privateMethod() {} // 约定为私有方法
}

// 布尔变量：以 is/has/can 开头
let isLoggedIn = true;
let hasPermission = false;
let canEdit = true;


