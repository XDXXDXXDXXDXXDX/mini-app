Page({
  data: {
    motto: "Hello World",
    userInfo: {},
    hasUserInfo: false,
  },
  getUserProfile(e) {
    wx.getUserProfile({
      desc: "展示用户信息", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.data.userInfo = res.userInfo;
        this.data.hasUserInfo = true;
      },
    });
  },
});
