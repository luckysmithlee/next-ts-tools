import { describe, test, expect } from 'vitest';
import { capitalize, camelCase } from '../src';

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
});