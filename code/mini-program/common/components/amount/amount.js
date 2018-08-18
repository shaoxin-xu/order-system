// common/components/amount/amount.js
Component({
  externalClasses: ['placeholder-class', 'extends-class'],
  properties: {
    placeholder: {
      type: String,
      value: ''
    }
  },

  data: {},

  methods: {
    inputHandler(e) {
      let value = e.detail.value || '';
      if (value) {
        value = value.trim();
        //处理首位小数点
        if (value.indexOf('.') == 0) value = '0' + value;
        //处理两个小数点
        if (value.indexOf('.') != value.lastIndexOf('.')) value = value.substr(0, value.length - 1);
        //处理小数点后两位
        if (value.indexOf('.') > -1 && value.length - value.indexOf('.') > 3) value = value.substr(0, value.length - 1);
        //处理0开头的数字
        if (value.length == 2 && value.charAt(0) == '0' && value.charAt(1) != '.') value = value.charAt(1);
      }
      this.triggerEvent('amountChange', { value });
      return value;
    }
  }
});
