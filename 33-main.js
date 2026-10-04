// 一行代码，同时拿到默认导出的 User 类，和命名导出的 validateName 函数
import User, { validateName, MAX_NAME_LENGTH } from './33-user.js';

const name = "Alice";

// 使用命名导入的函数
if (validateName(name)) {
    // 使用默认导入的类
    const user = new User(name);
    console.log(`用户 ${user.name} 验证通过，最大长度限制为 ${MAX_NAME_LENGTH}`);
}