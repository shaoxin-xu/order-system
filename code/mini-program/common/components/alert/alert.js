Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    isshow: {
      type: Boolean,
      value: false,
      observer: 'observeval'
    },
    title: String,
    aStyle: String
  },
  methods: {
    observeval: function (newVal, oldVal) {
      if (newVal) {
        console.log(this);
        this.triggerEvent('showalert');
      }
    },
    closealert() {
      this.setData({ isshow: false });
      this.triggerEvent('closealert');
    },
    showalert() {

    }
  }
});
