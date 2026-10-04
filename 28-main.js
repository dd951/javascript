// main.js - 导入并使用 math.js 的功能
// ES6模块规范中规定：路径必须以 / 或者 ./ 或者 ../ 开头【如果 / 开头表示绝对路径。如果 ./ 或者 ../ 开头表示相对路径。】
import { add, PI } from './28-math.js';  // 从 math.js 导入 add 和 PI

console.log(add(2, 3));  // 输出: 5
console.log(PI);         // 输出: 3.14