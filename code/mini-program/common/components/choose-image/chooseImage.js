import { util, wxApi, regeneratorRuntime } from '../../commonImport';

Component({
  properties: {
    height: { type: String, value: '120rpx' },
    width: { type: String, value: '120rpx' },
    url: { type: String, value: null },
    isRechoose: { type: Boolean, value: true }  //当url存在时，默认可以重新选择，设置为false时将不能重新选择
  },
  data: {

  },
  methods: {
    fail() {
      wx.showModal({ title: '提示信息', content: '选择照片失败，请重试或者联系管理员！', showCancel: false });
    },
    async chooseHandler() {
      try {
        wx.showLoading({ title: '正在打开相册...', });
        let { errMsg, tempFilePaths: [tempFilePath] } = await wxApi.chooseImage({ count: 1, complete: () => wx.hideLoading() });
        if (errMsg == 'chooseImage:ok') {
          let { path } = await wxApi.getImageInfo({ src: tempFilePath });
          this.setData({ url: path });
          this.triggerEvent('change', { value: path });
        } else this.fail();
      } catch (error) {
        this.fail();
        console.log(error);
      }
    },
    previewHandler() {
      // if (this.data.url) wxApi.previewImage({ urls: [this.data.url] });
      let { url } = this.data;
      if (url) {
        if (!url.includes('http://tmp')) url = util.getBigUrl(url);
        wxApi.previewImage({ urls: [url] });
      }
    },
    remove() {
      this.triggerEvent('cancel', { value: this.data.url });
      this.setData({ url: '' });
    }
  }
});
