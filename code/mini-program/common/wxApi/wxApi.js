import promisify from '../../utils/promisify.js';

export default {
    authorize: promisify(wx.authorize),
    getSetting: promisify(wx.getSetting),
    openSetting: promisify(wx.openSetting),
    chooseImage: promisify(wx.chooseImage),
    previewImage: promisify(wx.previewImage),
    getImageInfo: promisify(wx.getImageInfo),
    login: promisify(wx.login),
    getUserInfo: promisify(wx.getUserInfo),
    authorize: promisify(wx.authorize),
    setStorage: promisify(wx.setStorage),
    getStorage: promisify(wx.getStorage),
    clearStorage: promisify(wx.clearStorage),
    showModal: promisify(wx.showModal),
    checkSession: promisify(wx.checkSession),
    showToast: promisify(wx.showToast),
    makePhoneCall: promisify(wx.makePhoneCall)
};
