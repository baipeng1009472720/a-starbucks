// 获取应用实例
const app = getApp();

Page({
  data: {
  },
  bindViewTap() {
    my.navigateTo({
      url: '/pages/detail/detail'
    });
  },
  onLoad() {
    // 调用应用实例的方法获取全局数据
    app.getUserInfo((userInfo) => {
      console.warn(`==== ${JSON.stringify(userInfo)}`);
      // 更新数据
      this.setData({
        userInfo,
      });
    });
  },
});
