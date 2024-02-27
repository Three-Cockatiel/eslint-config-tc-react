# 为什么是eslint-config-tc-react
  基于`standard`配置，是所有前端开发者工人的前二的eslint代码规范，加上作者多年编程经验，认同的一些理念进行代码规范的约束，适合react + ts项目
  
  前期目的为了本人的项目代码规范

# 安装
```javascript
  npm install eslint-config-tc-react -D
```

# 使用
  创建`.eslintrc`文件

```javascript
{
  "extends": ["tc-react"],
}
```

# 如何继承prettier的配置
`.prettierrc`文件下（注意不要带文件格式，让他自己解析，否则可能失败）
```javascript
"eslint-config-tc-react/.prettierrc.cjs"
```

# 变更日志 
[点击查看变更日志](https://github.com/Three-Cockatiel/eslint-config-tc-react/blob/main/CHANGELOG.md)