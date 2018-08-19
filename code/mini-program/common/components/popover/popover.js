let animation = wx.createAnimation({
  duration: 400,
  timingFunction: 'ease'
});
let start = 0, end = 0;
Component({
  properties: {
    isShow: {
      type: Boolean,
      value: false,
      observer(newVal, oldVal) {
        if (newVal != oldVal) {
          this.stateChange();
        }
      }
    },
    conWidth: {
      type: String,
      value: "53%"
    }
  },
  data: {
    animationData: {},
    currentState: false
  },
  methods: {
    stateChange() {
      if (this.data.currentState) {
        this.hide();
      } else {
        this.show();
      }
    },
    show() {
      this.setData({ currentState: true });
      animation.translateX('-100%').step();
      this.setData({ animationData: animation.export() });
    },
    hide() {
      this.setData({ currentState: false });
      animation.translateX('100%').step();
      this.setData({ animationData: animation.export() });
      start = 0;
      end = 0;
    },
    touchstartHandler(e) {
      if (e && e.changedTouches && e.changedTouches.length) {
        start = e.changedTouches[0].pageX;
      }
    },
    touchendHandler(e) {
      if (e && e.changedTouches && e.changedTouches.length) {
        end = e.changedTouches[0].pageX;
      }
      if (end - start > 80) {
        this.hide();
      } else if (end == start && e && e.target && e.target.id == 'container') {
        this.hide();
      }
    },
    tapHandler(e) {
      if (e && e.target && e.target.id == 'shade') {
        this.hide();
      }
    }
  }
});
