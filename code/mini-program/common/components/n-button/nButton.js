import { util, wxApi, APP_CONST, regeneratorRuntime } from '../../commonImport';

Component({
  externalClasses: ['extend-class'],
  properties: {
    nClass: {
      type: String,
      value: 'btn'
    },
    entityId: {
      type: String,
      value: ''
    }
  },
  data: {
    show: false
  },
  methods: {

  },
  async ready() {
    try {
      let { entityId } = this.data;
      let { data: userEntitys } = await wxApi.getStorage({ key: APP_CONST.STORAGE.ENTITY_IDS });
      let show = null;
      if (util.isBlank(entityId) || entityId == '0000') {
        show = true;
      } else {
        if (userEntitys && userEntitys.length > 0) {
          show = (userEntitys.includes(parseInt(entityId)) || userEntitys.includes(entityId));
        } else {
          show = false;
        }
      }
      this.setData({ show });
    } catch (error) {

    }
  }
});
