import promisify from '../../utils/promisify';

export default {
    chooseImage: promisify(wx.chooseImage),
    setStorage: promisify(wx.setStorage),
    getStorage: promisify(wx.getStorage),
    removeStorage: promisify(wx.removeStorage),
    clearStorage: promisify(wx.clearStorage),
    getLocation: promisify(wx.getLocation),
    chooseLocation: promisify(wx.chooseLocation),
    showToast: promisify(wx.showToast),
    showModal: promisify(wx.showModal),
    login: promisify(wx.login),
    checkSession: promisify(wx.checkSession),
    getSetting: promisify(wx.getSetting),
    authorize: promisify(wx.authorize),
    getUserInfo: promisify(wx.getUserInfo),
};