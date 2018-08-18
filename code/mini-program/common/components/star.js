import util from '../../../utils/util.js';
Component({
  properties: {
    starCount: { type: Number, value: 5 },
    selectedCount: { type: Number, value: 0 },
    disabled: { type: Boolean, value: false },
    eventName: {type: String, value: 'starChange'}
  },
  data: {

  },
  methods: {
    clickHandler(e) {
      if (!this.data.disabled) {
        let index = e.target.dataset.index;
        index = util.isBlank(index) ? 0 : index;
        this.setData({ selectedCount: index + 1 });
        this.triggerEvent(this.data.eventName, index + 1);
      }
    }
  }
});
