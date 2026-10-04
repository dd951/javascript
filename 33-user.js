// 默认导出：一个核心的类或主函数
export default class User {
    constructor(name) {
        this.name = name;
    }
}

// 命名导出：一些辅助的常量或工具函数
export const MAX_NAME_LENGTH = 50;

export function validateName(name) {
    return typeof name === 'string' && name.length <= MAX_NAME_LENGTH;
}