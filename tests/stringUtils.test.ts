import { describe, test, expect } from 'vitest';
import { capitalize, camelCase, mask } from '../src';

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
      expect(mask('13812345678', 2, 4)).toBe('13****5678');
      expect(mask('张三李四王五', 1, 1)).toBe('张****五');
      expect(mask('abcdefg', 2, 2)).toBe('ab****fg');
    });

    test('处理边界情况', () => {
      // 空字符串返回原值
      expect(mask('')).toBe('');
      // null或undefined返回原值
      expect(mask(null as any)).toBe(null);
      expect(mask(undefined as any)).toBe(undefined);
      // 字符串长度小于等于前后保留长度之和时返回原值
      expect(mask('abc')).toBe('abc'); // 长度为3，前3后4，不脱敏
      expect(mask('abcdef', 3, 3)).toBe('abcdef'); // 长度为6，前3后3，不脱敏
      expect(mask('abcde', 3, 3)).toBe('abcde'); // 长度为5，前3后3，不脱敏
    });

    test('极端参数情况', () => {
      // 前缀长度为0
      expect(mask('abcdef', 0, 3)).toBe('****def');
      // 后缀长度为0
      expect(mask('abcdef', 3, 0)).toBe('abc****');
      // 前后缀长度都为0
      expect(mask('abcdef', 0, 0)).toBe('****');
    });
  });
});