import dom from './utils/dom'
import toggle from './utils'
import layout from './config/layout'
import rule from './config/rule'
import defaultOptions from './config/defaultOptions'
import { warn, note } from './log'
import { throttle, once } from './utils'
import './stylus/index.styl'

export default class plateNumberInput {
  constructor(options) {
    this.options = Object.assign(defaultOptions, options)
    this.el = document.querySelector(this.options.el)
    this.currentIndex = 0
    this.prevIndex = 0
    this.containerInput = null
    this.spareSpan = null
    this.isNewpower = this.options.isNewpower
    this._generateLayout()
    this.setInputFocus()
    this.setNumberType(this.isNewpower)
    this.bindEvents()
    this.setDefaultNumber(this.options.defaultNumber)
  }
  /**
   * get 当前输入的车牌号码
   * @returns {string} 
   */
  getNumber() {
    return this.containerInput.textContent.trim()
  }
  /**
   * get 当前的车牌类型 
   * @returns {boolean} true:新能源车牌 false:普通车牌
   */
  getNumberType() {
    return this.isNewpower
  }
  /**
   * 设置默认车牌号
   * @param {string} plateNumber 车牌号
   */
  setDefaultNumber(plateNumber) {
    // TODO: 设置默认车牌号
    plateNumber = plateNumber.trim()
    const onceSetInputFocus = once(index => this.setInputFocus(index))
    ;[...this.inputSpans].forEach((span, index) => {
      span.innerText = plateNumber[index] || ''
      if (plateNumber[index] === undefined) return onceSetInputFocus(index)
      if (index === this.inputSpans.length - 1) return onceSetInputFocus(index)
    })
  }
  /**
   * 设置车牌类型
   * @param {boolean} isNewpower true:新能源车牌 false:普通车牌
   */
  setNumberType(isNewpower = false) {
    this.isNewpower = isNewpower
    if (!this.spareSpan.parentNode && isNewpower) {
      this.containerInput.appendChild(this.spareSpan)
    }
    if (this.spareSpan.parentNode && !isNewpower) {
      this.containerInput.removeChild(this.spareSpan)
    }
  }
  /**
   * 设置输入框上面的站位信息
   * @param {string} info
   */
  setInfo(info) {
    this.containerInfo.innerHTML = info
  }
  /**初始化绑定各种事件 */
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
        if (el.className.includes(this.deleteKeyItemClassName)) {
          this.del()
          return note('点击的是 删除 键')
        }
        // 点击的是普通键
        this.inputSpans[this.currentIndex].innerText = text
        this.next()
      }),
    )
    // 点击切换车牌按钮
    dom.on(this.inputboxWrapper, 'click', '.container-switch-button', e => {
      const el = e.target
      const text = el.innerText.trim()
      this.options.switchText.forEach(item => {
        if (item === text) return
        el.innerText = el.innerText.replace(text, item)
      })
      this.setNumberType(!this.isNewpower)
      note('点击的是 切换车牌 按钮')
    })
    // 点击保存按钮
    dom.on(this.inputboxWrapper, 'click', 'span#btnSave', e => {
      this.options.onBtnSaveClick(e)
      note('点击的是 保存 按钮')
    })
  }
  /** 每输入一个字符后调用 */
  next() {
    const nextIndex = this.currentIndex === this.inputSpans.length - 1 ? this.currentIndex : this.currentIndex + 1
    this.setInputFocus(nextIndex)
  }
  /** 点击删除按钮后调用 */
  del() {
    const prev = this.currentIndex === 0 ? 0 : this.currentIndex - 1
    this.inputSpans[this.currentIndex].innerText = ''
    this.setInputFocus(prev)
  }
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
   * @returns {Element}
   */
  get keyboardWrapper() {
    return this.el.querySelector('#keyboardWrapper')
  }
  /**
   * 上方输入框容器
   * @returns {Element}
   */
  get inputboxWrapper() {
    return this.el.querySelector('#inputboxWrapper')
  }
  /**
   * 输入框span的数组
   * @returns {HTMLCollection}
   */
  get inputSpans() {
    return this.containerInput.children
  }
  /**
   * @returns {Element}
   */
  get containerInfo() {
    return this.inputboxWrapper.querySelector('.container-info')
  }
  /**
   * 获取禁用规则
   * @returns {string[]}
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
  get deleteKeyItemClassName() {
    return this._prefix('delete')
  }
  /**
   * 设置指定位置输入框active
   * @param {number} index 第几个span
   */
  setInputFocus(index = 0) {
    this.keyboardWrapper.classList.remove('hide')
    this.prevIndex = this.currentIndex || 0
    this.currentIndex = index
    this.inputSpans[this.prevIndex].classList.remove('focus')
    this.inputSpans[this.currentIndex].classList.add('focus')
    this._generateKeyboard()
    this.setBtnSaveActive()
  }
  /**
   * 设置保存按钮的高亮效果
   */
  setBtnSaveActive() {
    const { classList } = this.inputboxWrapper.querySelector('#btnSave')
    if (this.getNumber().length === this.inputSpans.length) {
      classList.add('active')
    } else {
      classList.remove('active')
    }
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
        if (item === 'delete') classList += this.deleteKeyItemClassName
        return `<span class="${this._prefix('item') + classList}" >${item === 'delete' ? '' : item}</span>`
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
