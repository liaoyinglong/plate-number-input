const input = new Array(8).fill(undefined).map((item, index) => `<span data-index='${index}'></span>`)
const inputbox = `
  <div id='inputboxWrapper' class="container-top">
    <div class="container-middle">
      ${input.join('')}
    </div>
    <div class="container-bottom">
      <span id="btnSave" class="btnbind">{{btnSaveText}}</span>
    </div>
    <div  class="container-newbtn">
      <span>{{switchText}}</span>
    </div>
  </div>
`

const keyboard = [
  [
    ['粤', '川', '津', '沪', '渝', '蒙', '新', '藏', '宁', '桂'],
    ['浙', '晋', '冀', '青', '鲁', '豫', '苏', '皖'],
    ['闽', '赣', '湘', '鄂', '京', '琼', '甘'],
    ['陕', '贵', '云', '黑', '吉', '辽'],
  ],
  [
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'P', '港', '澳'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '学'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'delete'],
  ],
]

export default {
  keyboard,
  inputbox,
}
