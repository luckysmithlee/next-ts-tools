/**
 * 将字符串首字母大写
 * @param str 输入字符串（非空）
 * @returns 首字母大写的字符串
 * @throws {Error} 输入为空时抛出错误
 */
export function capitalize(str: string): string {
  if (!str) throw new Error("Input string cannot be empty");
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 将下划线/短横线命名转换为驼峰命名
 * @example 'hello_world' → 'helloWorld'; 'user-name' → 'userName'
 * @param str 输入字符串
 * @returns 驼峰命名的字符串
 */
export function camelCase(str: string): string {
  return str.replace(/[-_](\w)/g, (_, c) => c ? c.toUpperCase() : '');
}