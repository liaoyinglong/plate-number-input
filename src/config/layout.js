require('core-js/fn/array/fill')
const input = new Array(8).fill(undefined).map((item, index) => `<span data-index='${index}'></span>`)
const inputbox = `
 <div>
  <div id='inputboxWrapper' class="container-top">
  <div class='container-info'>宝立方创意产业园(地库)</div>
  <div class="container-input">
      ${input.join('')}
  </div>
  <div class="container-save-button">
    <span id="btnSave" class="btnbind">{{btnSaveText}}</span>
  </div>
  <div  class="container-switch-button">
    &nbsp;&nbsp;{{switchText}}
  </div>
  </div>
  <span class='bar_bindcarnum'></span>
 </div>
`

const keyboard = [
  [
    ['确定'],
    ['粤', '川', '津', '沪', '渝', '蒙', '新', '藏', '宁', '桂'],
    ['陕', '浙', '晋', '冀', '青', '鲁', '豫', '苏', '皖', '辽'],
    ['贵', '闽', '赣', '湘', '鄂', '京', '琼', '甘', '云', '黑'],
    ['吉', '', '', '', '', '', '', '', '', 'delete'],
  ],
  [
    ['确定'],
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'P', '港', '澳'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '学'],
    ['', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '', 'delete'],
  ],
]

export default {
  keyboard,
  inputbox,
}
