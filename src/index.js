import dom from './utils/dom'
import toggle from './utils'
import layout from './config/layout'
import rule from './config/rule'
import defaultOptions from './config/defaultOptions'
import { warn, note } from './log'
import { throttle } from './utils'
import './stylus/index.styl'

export default class plateNumberInput {
  constructor(options) {
    this.options = Object.assign(defaultOptions, options)
    this.el = document.querySelector(this.options.el)
    this.numberType = this.options.defaultNumberType
    this.currentIndex = 0
    this.prevIndex = 0
    this.containerInput = null
    this.spareSpan = null
    this._generateLayout()
    this.setInputFocus()
    this.setNumberType(this.numberType)
    this.bindEvents()
  }
  getNumber() {
    // TODO: 获取当前输入车牌
    return this.containerInput.textContent.trim()
  }
  getNumberType() {
    // TODO: 获取当前车牌类型
    return this.numberType
  }
  setDefaultNumber() {
    // TODO: 设置默认车牌号
  }
  setNumberType(type = 'common') {
    if (!this.spareSpan.parentNode && type !== 'common') {
      this.containerInput.appendChild(this.spareSpan)
    }
    if (this.spareSpan.parentNode && type === 'common') {
      this.containerInput.removeChild(this.spareSpan)
    }
  }
  bindEvents() {
    // 绑定输入框按钮事件
    dom.on(this.containerInput, 'click', 'span', e => {
      const { index } = e.target.dataset
      this.setInputFocus(Number(index))
    })
    // 模拟键盘 点击事件
    dom.on(
      this.keyboardWrapper,
      'click',
      'span',
      throttle(e => {
        const el = e.target
        const text = el.innerText
        const { type } = el.dataset
        if (el.className.includes(this.disableKeyItemClassName)) {
          return note('点击的是 已被禁用的键')
        }
        if (el.className.includes(this.placeholderClassName)) {
          return note('点击的是 无效键')
        }
        // 点击的是确定键
        if (text === '确定') {
          this.keyboardWrapper.classList.add('hide')
          return note('点击的是 确定 键')
        }
        if (type === 'delete') {
          this.del()
          return note('点击的是 删除 键')
        }
        // 点击的是普通键
        this.inputSpans[this.currentIndex].innerText = text
        this.next()
      }),
    )
    dom.on(this.inputboxWrapper, 'click', '.container-switch-button', e => {
      const el = e.target
      const text = el.innerText.trim()
      this.options.switchText.forEach(item => {
        if (item === text) return
        el.innerText = el.innerText.replace(text, item)
      })
      note('switch')
    })
  }
  next() {
    const nextIndex = this.currentIndex === this.inputSpans.length - 1 ? this.currentIndex : this.currentIndex + 1
    this.setInputFocus(nextIndex)
  }
  del() {
    const prev = this.currentIndex === 0 ? 0 : this.currentIndex - 1
    this.inputSpans[this.currentIndex].innerText = ''
    this.setInputFocus(prev)
  }
  switchNumerType() {}
  /**
   * 生成布局
   */
  _generateLayout() {
    // TODO: 获取生成好的html字符串  不包括键盘
    const inputbox = layout.inputbox
      .replace(/{{btnSaveText}}/, this.options.btnSaveText)
      .replace(/{{switchText}}/, this.options.switchText[0])
    const inputboxEl = dom.create(inputbox)
    this.containerInput = inputboxEl.querySelector('.container-input')
    this.spareSpan = this.containerInput.lastElementChild
    this.el.appendChild(inputboxEl)
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
  get inputSpans() {
    return this.containerInput.children
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
  get placeholderClassName() {
    return this._prefix('placeholder')
  }
  setInputFocus(index = 0) {
    this.keyboardWrapper.classList.remove('hide')
    this.prevIndex = this.currentIndex || 0
    this.currentIndex = index
    this.inputSpans[this.prevIndex].classList.remove('focus')
    this.inputSpans[this.currentIndex].classList.add('focus')
    this._generateKeyboard()
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
          classList += this.placeholderClassName
        }
        return `<span class="${this._prefix('item') + classList}" data-type="${item}">${
          item === 'delete' ? '' : item
        }</span>`
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
