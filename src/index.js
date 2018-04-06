import dom from './utils/dom'
import layout from './config/layout'
import rule from './config/rule'
import defaultOptions from './config/defaultOptions'

import './stylus/index.styl'

export default class plateNumberInput {
  constructor(options) {
    this.options = Object.assign(defaultOptions, options)
    this.el = document.querySelector(this.options.el)
    this.numberType = this.options.defaultNumberType
    this.currentIndex = 1
    this.prevIndex = 1
    this._generateLayout()
    this.setInputFocus(0)
  }
  getNumber() {
    // TODO: 获取当前输入车牌
  }
  getNumberType() {
    // TODO: 获取当前车牌类型
    return this.numberType
  }
  setDefaultNumber() {
    // TODO: 设置默认车牌号
  }
  set currentInputIndex(val) {
    this.prevIndex = this.currentIndex || 0
    this.currentIndex = val
  }
  /**
   * 生成布局
   */
  _generateLayout() {
    // TODO: 获取生成好的html字符串  不包括键盘
    const inputbox = layout.inputbox
      .replace(/{{btnSaveText}}/, this.options.btnSaveText)
      .replace(/{{switchText}}/, this.options.switchText)
    this.el.appendChild(dom.create(inputbox))
    this.el.appendChild(dom.create(`<div id="keyboardWrapper"></div>`))
    this._generateKeyboard()
  }
  /**
   * 获取键盘容器
   */
  get keyboardWrapper() {
    return this.el.querySelector('#keyboardWrapper')
  }
  get inputboxWrapper() {
    return this.el.querySelector('#inputboxWrapper')
  }
  /**
   * 获取禁用规则
   */
  get disableRule() {
    return rule[this.currentIndex]
  }
  get disableKeyItemClassName() {
    return this._prefix('disable')
  }
  setInputFocus(index) {
    this.currentInputIndex = index
    this.changeFocusClassList()
  }
  changeFocusClassList() {
    const spans = this.inputboxWrapper.querySelectorAll('.container-input span')
    spans[this.prevIndex].classList.remove('focus')
    spans[this.currentIndex].classList.add('focus')
  }
  /**
   * 生成键盘
   */
  _generateKeyboard() {
    const currentKeyboardIndex = this.currentIndex && 1
    const currentKeyboard = layout.keyboard[currentKeyboardIndex]

    const generatekey = arr =>
      arr.map(item => {
        let classList = this.disableRule.includes(item) ? this.disableKeyItemClassName : ''
        // 占位符设置
        if (item === '') {
          classList += this._prefix('placeholder')
        }
        return `<span class="${this._prefix('item') + classList}">${item}</span>`
      })

    const combinationRow = arr =>
      arr.map(items => {
        let row = generatekey(items).join('')
        return `<div class="${this._prefix('row')}">${row}</div>`
      })
    this.keyboardWrapper.innerHTML = combinationRow(currentKeyboard).join('')
  }
  _prefix(str) {
    return ` keyboard-${str} `
  }
}
