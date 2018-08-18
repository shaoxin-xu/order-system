// common/components/n-textarea/nTextarea.js
// 原生组件textarea问题所在
// value与placeholder层级最高，会覆盖到悬浮的弹窗
// 换行时会触发focus事件
// 失去焦点时（把焦点切换到其它input或者textarea除外）会触发两次blur事件
Component({
  /**
   * 组件的属性列表
   */
  data: {
    value: '',
    valueCopy: '',
  },
  properties: {
    value: {
      type: String,
      value: '',
      observer: function (newVal, oldVal, changedPath) {
        this.setData({ valueCopy: newVal });
      }
    },
    placeholder: { type: String, value: '' },
    placeholderStyle: { type: String, value: '' },
    placeholderClass: { type: String, value: '' },
    disabled: { type: Boolean, value: false },
    maxlength: { type: Number, value: 140 },
    autoFocus: { type: Boolean, value: false },
    focus: { type: Boolean, value: false },
    autoHeight: { type: Boolean, value: false },
    adjustPosition: { type: Boolean, value: true },
    nStyle: { type: String, value: '' }
  },
  methods: {
    focusHandler(event) {
      this.triggerEvent('focus', event.detail);
    },
    blurHandler(event) {
      this.setData({ valueCopy: this.data.value, hideview: false });
      this.triggerEvent('blur', event.detail);
    },
    lineChangeHandler(event) {
      this.triggerEvent('linechange', event.detail);
    },
    inputHandler(event) {
      this.setData({ value: event.detail.value });
      this.triggerEvent('input', event.detail);
    },
    getFocus() {
      this.setData({ autoFocus: true, focus: true, hideview: true });
    }
  }
});
