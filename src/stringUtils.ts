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

/**
 * 脱敏配置选项
 */
export interface MaskOptions {
  /** 前端保留的字符数量，默认为3 */
  prefixLength?: number;
  /** 后端保留的字符数量，默认为4 */
  suffixLength?: number;
  /** 星号的数量，默认为4 */
  maskCharCount?: number;
}

/**
 * 对字符串进行脱敏处理，保留前后指定数量的字符，中间用星号替代
 * @param str 需要脱敏的字符串
 * @param options 脱敏配置选项
 * @returns 脱敏后的字符串
 * @example mask('13812345678') → '138****5678'
 * @example mask('张三李四', { prefixLength: 1, suffixLength: 1 }) → '张****四'
 * @example mask('13812345678', { maskCharCount: 6 }) → '138******5678'
 */
export function mask(str: string, options: MaskOptions = {}): string {
  const { prefixLength = 3, suffixLength = 4, maskCharCount = 4 } = options;
  if (!str) return str;

  const length = str.length;

  // 如果字符串长度小于等于前后保留的长度之和，则不进行脱敏
  if (length <= prefixLength + suffixLength) {
    return str;
  }


  const prefix = str.substring(0, prefixLength);
  const suffix = str.substring(length - suffixLength);

  // 根据参数生成指定数量的星号
  const maskStr = '*'.repeat(maskCharCount);

  return prefix + maskStr + suffix;
}