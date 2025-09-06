import { describe, test, expect } from 'vitest';
import {
  capitalize,
  camelCase,
  mask,
  MaskOptions,
  pascalCase,
  snakeCase,
  kebabCase,
  truncate,
  trim,
  isEmpty
} from '../src';

describe('stringUtils', () => {
  test('capitalize: 空字符串抛出错误', () => {
    expect(() => capitalize('')).toThrow('Input string cannot be empty');
  });

  test('capitalize: 正常字符串首字母大写', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('WORLD')).toBe('WORLD'); // 非首字母不影响
  });

  test('camelCase: 下划线转驼峰', () => {
    expect(camelCase('hello_world')).toBe('helloWorld');
  });

  test('camelCase: 短横线转驼峰', () => {
    expect(camelCase('user-name')).toBe('userName');
  });

  describe('mask', () => {
    test('使用默认参数（前3后4）', () => {
      expect(mask('13812345678')).toBe('138****5678');
      expect(mask('abcdefghijk')).toBe('abc****hijk');
    });

    test('自定义前后保留位数', () => {
      expect(mask('13812345678', { prefixLength: 2, suffixLength: 4 })).toBe('13****5678');
      expect(mask('张三李四王五', { prefixLength: 1, suffixLength: 1 })).toBe('张****五');
      expect(mask('abcdefg', { prefixLength: 2, suffixLength: 2 })).toBe('ab****fg');
    });

    test('处理边界情况', () => {
      // 空字符串返回原值
      expect(mask('')).toBe('');
      // null或undefined返回原值
      expect(mask(null as any)).toBe(null);
      expect(mask(undefined as any)).toBe(undefined);
      // 字符串长度小于等于前后保留长度之和时返回原值
      expect(mask('abc')).toBe('abc'); // 长度为3，前3后4，不脱敏
      expect(mask('abcdef', { prefixLength: 3, suffixLength: 3 })).toBe('abcdef'); // 长度为6，前3后3，不脱敏
      expect(mask('abcde', { prefixLength: 3, suffixLength: 3 })).toBe('abcde'); // 长度为5，前3后3，不脱敏
    });

    test('极端参数情况', () => {
      // 前缀长度为0
      expect(mask('abcdef', { prefixLength: 0, suffixLength: 3 })).toBe('****def');
      // 后缀长度为0
      expect(mask('abcdef', { prefixLength: 3, suffixLength: 0 })).toBe('abc****');
      // 前后缀长度都为0
      expect(mask('abcdef', { prefixLength: 0, suffixLength: 0 })).toBe('****');
    });

    test('自定义星号数量', () => {
      // 默认4个星号
      expect(mask('13812345678')).toBe('138****5678');
      // 自定义6个星号
      expect(mask('13812345678', { maskCharCount: 6 })).toBe('138******5678');
      // 自定义2个星号
      expect(mask('13812345678', { maskCharCount: 2 })).toBe('138**5678');
      // 自定义8个星号
      expect(mask('13812345678', { maskCharCount: 8 })).toBe('138********5678');
      // 0个星号（特殊情况）
      expect(mask('13812345678', { maskCharCount: 0 })).toBe('1385678');
    });
  });

  describe('pascalCase', () => {
    test('下划线转帕斯卡命名', () => {
      expect(pascalCase('hello_world')).toBe('HelloWorld');
      expect(pascalCase('user_name')).toBe('UserName');
    });

    test('短横线转帕斯卡命名', () => {
      expect(pascalCase('hello-world')).toBe('HelloWorld');
      expect(pascalCase('user-name')).toBe('UserName');
    });

    test('空字符串处理', () => {
      expect(pascalCase('')).toBe('');
    });
  });

  describe('snakeCase', () => {
    test('驼峰转下划线命名', () => {
      expect(snakeCase('helloWorld')).toBe('hello_world');
      expect(snakeCase('userName')).toBe('user_name');
      expect(snakeCase('XMLHttpRequest')).toBe('x_m_l_http_request');
    });

    test('空字符串处理', () => {
      expect(snakeCase('')).toBe('');
    });
  });

  describe('kebabCase', () => {
    test('驼峰转短横线命名', () => {
      expect(kebabCase('helloWorld')).toBe('hello-world');
      expect(kebabCase('userName')).toBe('user-name');
      expect(kebabCase('XMLHttpRequest')).toBe('-x-m-l-http-request');
    });

    test('空字符串处理', () => {
      expect(kebabCase('')).toBe('');
    });
  });

  describe('truncate', () => {
    test('正常截断', () => {
      expect(truncate('Hello World', 8)).toBe('Hello...');
      expect(truncate('Hello World', 5)).toBe('He...');
    });

    test('不需要截断', () => {
      expect(truncate('Hello', 8)).toBe('Hello');
      expect(truncate('Hello', 5)).toBe('Hello');
    });

    test('自定义后缀', () => {
      expect(truncate('Hello World', 8, '---')).toBe('Hello---');
    });

    test('边界情况', () => {
      expect(truncate('', 5)).toBe('');
      expect(truncate('Hello', 0)).toBe('...');
    });
  });

  describe('trim', () => {
    test('去除前后空白', () => {
      expect(trim('  hello  ')).toBe('hello');
      expect(trim('\t\nworld\t\n')).toBe('world');
    });

    test('空字符串处理', () => {
      expect(trim('')).toBe('');
    });
  });

  describe('isEmpty', () => {
    test('空字符串', () => {
      expect(isEmpty('')).toBe(true);
      expect(isEmpty('   ')).toBe(true);
      expect(isEmpty('\t\n')).toBe(true);
    });

    test('非空字符串', () => {
      expect(isEmpty('hello')).toBe(false);
      expect(isEmpty('  hello  ')).toBe(false);
    });
  });
});