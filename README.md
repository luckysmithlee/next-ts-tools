# next-ts-tools

一个轻量级的TypeScript实用工具库，提供常用的字符串处理函数。

## 安装

```bash
npm install next-ts-tools
```

## 功能特性

- 轻量级：无外部依赖，体积小
- 类型安全：完整的TypeScript类型定义
- 简单易用：API设计简洁明了

## API文档

### 字符串工具 (stringUtils)

#### capitalize(str: string): string

将字符串的首字母大写。

```typescript
import { capitalize } from 'next-ts-tools';

capitalize('hello'); // 返回 'Hello'
capitalize('WORLD'); // 返回 'WORLD'（非首字母不变）
```

**注意**：输入空字符串时会抛出错误。

#### camelCase(str: string): string

将下划线或短横线命名转换为驼峰命名。

```typescript
import { camelCase } from 'next-ts-tools';

camelCase('hello_world'); // 返回 'helloWorld'
camelCase('user-name');   // 返回 'userName'
```

#### mask(str: string, prefixLength?: number, suffixLength?: number): string

对字符串进行脱敏处理，保留前后指定数量的字符，中间用星号替代。

```typescript
import { mask } from 'next-ts-tools';

// 默认保留前3后3
mask('13812345678');     // 返回 '138****5678'

// 自定义前后保留位数
mask('张三李四王五', 1, 1); // 返回 '张****五'
mask('abcdefg', 2, 2);    // 返回 'ab****fg'
```

**参数说明**：
- `str`: 需要脱敏的字符串
- `prefixLength`: 前端保留的字符数量，默认为3
- `suffixLength`: 后端保留的字符数量，默认为3

## 开发

### 安装依赖

```bash
npm install
```

### 运行测试

```bash
npm test
```

### 构建

```bash
npm run build
```

## 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'feat: 添加某个特性'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

**注意**：提交信息请遵循[约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/)规范，以便自动化工作流能正确处理版本更新。

## 许可证

本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件。