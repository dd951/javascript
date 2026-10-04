// 命名导入: import 后面的变量名不能随便写（必须使用导出的那个变量名），而且还必须使用花括号包裹。
// import {user, sayHello} from './30-user.js';

// 命名导入的时候支持重命名导入
import {user as myUser, sayHello as mySayHello} from './30-user.js';


// 使用
// console.log(user.name);
// sayHello();
console.log(myUser.name);
mySayHello();
