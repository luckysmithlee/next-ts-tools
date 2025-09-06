module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 类型枚举
    'type-enum': [
      2,
      'always',
      [
        'feat',     // 新功能
        'fix',      // 修复
        'docs',     // 文档
        'style',    // 格式（不影响代码运行的变动）
        'refactor', // 重构
        'perf',     // 性能优化
        'test',     // 测试
        'chore',    // 构建过程或辅助工具的变动
        'ci',       // CI 配置
        'build',    // 构建系统
        'revert',   // 回滚
      ],
    ],
    // 类型大小写
    'type-case': [2, 'always', 'lower-case'],
    // 类型不能为空
    'type-empty': [2, 'never'],
    // 范围大小写
    'scope-case': [2, 'always', 'lower-case'],
    // 主题不能为空
    'subject-empty': [2, 'never'],
    // 主题大小写
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    // 主题结尾不能有句号
    'subject-full-stop': [2, 'never', '.'],
    // 主题长度
    'subject-max-length': [2, 'always', 100],
    // 正文每行长度
    'body-max-line-length': [2, 'always', 100],
    // 页脚每行长度
    'footer-max-line-length': [2, 'always', 100],
    // 页脚格式
    'footer-leading-blank': [2, 'always'],
    // 正文前必须有空行
    'body-leading-blank': [2, 'always'],
    // 页脚前必须有空行
    'footer-leading-blank': [2, 'always'],
  },
};
