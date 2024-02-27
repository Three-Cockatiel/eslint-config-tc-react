"use strict";
module.exports = {
  printWidth: 120, // 每行代码的最大长度，超过该长度会换行
  tabWidth: 2, // 缩进的空格数
  useTabs: false, // 是否使用制表符进行缩进
  semi: true, // 是否在语句末尾添加分号
  singleQuote: true, // 是否使用单引号
  quoteProps: "as-needed", // 对象属性是否添加引号，仅在必要时添加
  jsxSingleQuote: false, // 在JSX中是否使用单引号
  trailingComma: "all", // 是否添加尾逗号，包括对象、数组等
  bracketSpacing: true, // 对象字面量中括号之间是否添加空格
  bracketSameLine: false, // 对象大括号是否与内容同一行
  arrowParens: "always", // 箭头函数参数是否添加括号
  requirePragma: false, // 是否需要特定格式化的文件中添加注释
  insertPragma: false, // 是否在格式化的文件开头插入注释
  proseWrap: "preserve", // 是否保留文本换行
  htmlWhitespaceSensitivity: "css", // HTML文件中空格敏感性的配置
  vueIndentScriptAndStyle: false, // Vue文件中缩进<script>和<style>标签中的内容
  endOfLine: "lf", // 文件行尾的换行符类型
  embeddedLanguageFormatting: "auto", // 是否自动格式化嵌入语言（如HTML、CSS）的代码
};
