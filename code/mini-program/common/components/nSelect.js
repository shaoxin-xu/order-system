import util from '../../../utils/util';

Component({
  properties: {
    value: {
      type: String,
      value: ''
    },
    falseValue: {
      type: String,
      value: ''
    },
    selected: {
      type: Boolean,
      value: false,
      observer(v, o) {
        if (v != this.data.isSelected) {
          this.setData({ isSelected: v });
        }
      }
    }
  },
  data: {
    isSelected: false
  },
  methods: {
    tapHandler(e) {
      let value = '';
      let isSelected = !this.data.isSelected;
      this.setData({ isSelected: isSelected });
      if (isSelected) {
        if (util.isBlank(this.data.value)) {
          value = '';
        } else {
          value = this.data.value;
        }
      } else {
        if (util.isBlank(this.data.falseValue)) {
          value = '';
        } else {
          value = this.data.falseValue;
        }
      }
      this.triggerEvent('onChange', { value });
    },
    clean(){
      this.setData({ isSelected: false });
    }
  }
});
