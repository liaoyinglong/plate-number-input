# 车牌输入键盘控件

## 在线预览

[在线 demo](https://liaoyinglong.github.io/plate-number-input/dist/)

## Quick Start

```javascript
const input = new plateNumberInput({
  el: '#app',
  defaultNumber: '粤B11111',
  isNewpower: false,
})

log('input 对象')
log(input)

log('获取当前输入车牌')
log(input.getNumber())

log('获取当前车牌类型')
log(input.getNumberType())

log('设置默认车牌号')
input.setDefaultNumber('粤A3RHKT')

log('设置车牌输入框上方提示文字')
input.setInfo('输入框上方提示文字')
```

## Installation

### 从 GitHub 下载代码

```html
<script src="/path/to/plateNumberInput.js"></script>
```

### 用包管理工具

支持 [npm](https://www.npmjs.com/package/js-cookie)

#### NPM

```
  $ npm install plate-number-input --save
```

### Module Loaders

支持 AMD, CommonJS 以及 ES module.

#### script 标签引入

`script` 标签引入，暴露在全局的变量是 `plateNumberInput`

#### ES6

```javascript
import PlateNumberInput from 'plate-number-input'
```

## 浏览器支持

ie9+

## api 文档

[文档地址](https://liaoyinglong.github.io/plate-number-input/doc/)

## 更新日志

[CHANGELOG](https://github.com/liaoyinglong/plate-number-input/blob/master/CHANGELOG.md)

## LICENSE

MIT
