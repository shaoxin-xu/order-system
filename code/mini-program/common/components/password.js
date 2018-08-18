Component({
  properties: {
    pFocus: {
      type: Boolean,
      value: false,
      observer(n) {
        n && this.focus();
      }
    }
  },
  data: {
    isFocus: false,
    inputData: ''
  },
  methods: {
    focus() {
      this.setData({ isFocus: true });
    },
    inputHandler(e) {
      let inputData = e.detail.value;
      if (inputData.length >= 6) {
        inputData = inputData.substr(0, 6);
        this.setData({ isFocus: false, inputData });
        this.triggerEvent('passwordChange', { value: inputData });
        this.setData({ inputData: '', isFocus: false, pFocus: false });
      } else {
        this.setData({ inputData });
      }
    },
    clean() {
      this.setData({ inputData: '', pFocus: false });
    }
  }
});
