# 贡献指南

## 提交信息规范

本项目使用 [约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 规范来标准化提交信息。

### 提交格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 类型 (type)

- **feat**: 新功能
- **fix**: 修复 bug
- **docs**: 文档更新
- **style**: 代码格式（不影响代码运行的变动）
- **refactor**: 重构（既不是新功能也不是修复 bug）
- **perf**: 性能优化
- **test**: 测试相关
- **chore**: 构建过程或辅助工具的变动
- **ci**: CI 配置
- **build**: 构建系统
- **revert**: 回滚

### 范围 (scope)

可选，表示影响的范围，如：
- `stringUtils`: 字符串工具函数
- `mask`: 脱敏函数
- `workflow`: GitHub Actions 工作流
- `config`: 配置文件

### 主题 (subject)

- 使用现在时态，如 "add" 而不是 "added" 或 "adds"
- 首字母小写
- 结尾不加句号
- 长度不超过 50 个字符

### 正文 (body)

可选，详细描述变更内容：
- 使用现在时态
- 说明变更的动机和与之前行为的对比
- 每行不超过 72 个字符

### 页脚 (footer)

可选，用于：
- 关联 issue: `Closes #123`
- 破坏性变更: `BREAKING CHANGE: 描述变更`

### 示例

```bash
# 新功能
feat: 添加字符串截断功能

# 修复
fix: 修复 mask 函数边界情况处理

# 文档
docs: 更新 API 文档

# 重构
refactor: 优化 camelCase 函数性能

# 破坏性变更
feat!: 重写 mask 函数 API

BREAKING CHANGE: mask 函数参数改为对象形式
```

### 自动检查

项目配置了 Commitlint 来自动检查提交信息格式。如果提交信息不符合规范，提交会被拒绝。

### 使用提交模板

项目提供了提交模板，使用以下命令配置：

```bash
git config commit.template .gitmessage
```

然后使用 `git commit` 时会自动使用模板。
