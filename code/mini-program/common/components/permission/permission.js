
import { util, regeneratorRuntime } from '../../commonImport';

Component({
  options: { multipleSlots: true },
  properties: {
    entityId: { type: String, value: '' }
  },
  data: {
    hasPermission: false
  },
  async attached() {
    try {
      let { entityId } = this.data;
      if (util.isBlank(entityId)) {
        this.setData({ hasPermission: false });
        return;
      }
      let hasPermission = await util.checkEntityId(entityId);
      this.setData({ hasPermission });
    } catch (error) {
      console.log(error);
    }
  }
});
