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
  if (!str) return str;
  return str.replace(/[-_]+(\w)/g, (_, c) => c ? c.toUpperCase() : '');
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

  // 输入验证
  if (!str) return str;
  if (prefixLength < 0 || suffixLength < 0 || maskCharCount < 0) {
    throw new Error('Length parameters must be non-negative');
  }

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

/**
 * 将字符串转换为帕斯卡命名（首字母大写的驼峰命名）
 * @example 'hello_world' → 'HelloWorld'; 'user-name' → 'UserName'
 * @param str 输入字符串
 * @returns 帕斯卡命名的字符串
 */
export function pascalCase(str: string): string {
  if (!str) return str;
  const camel = camelCase(str);
  return capitalize(camel);
}

/**
 * 将驼峰命名转换为下划线命名
 * @example 'helloWorld' → 'hello_world'; 'userName' → 'user_name'
 * @param str 输入字符串
 * @returns 下划线命名的字符串
 */
export function snakeCase(str: string): string {
  if (!str) return str;
  return str.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
}

/**
 * 将驼峰命名转换为短横线命名
 * @example 'helloWorld' → 'hello-world'; 'userName' → 'user-name'
 * @param str 输入字符串
 * @returns 短横线命名的字符串
 */
export function kebabCase(str: string): string {
  if (!str) return str;
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

/**
 * 截断字符串并添加省略号
 * @param str 输入字符串
 * @param maxLength 最大长度
 * @param suffix 后缀，默认为 '...'
 * @returns 截断后的字符串
 * @example truncate('Hello World', 8) → 'Hello...'
 */
export function truncate(str: string, maxLength: number, suffix: string = '...'): string {
  if (!str || str.length <= maxLength) return str;
  if (maxLength <= suffix.length) return suffix;
  return str.substring(0, maxLength - suffix.length) + suffix;
}

/**
 * 移除字符串两端的空白字符
 * @param str 输入字符串
 * @returns 去除空白后的字符串
 */
export function trim(str: string): string {
  if (!str) return str;
  return str.trim();
}

/**
 * 检查字符串是否为空或只包含空白字符
 * @param str 输入字符串
 * @returns 是否为空
 */
export function isEmpty(str: string): boolean {
  return !str || str.trim().length === 0;
}