Page({
  data: {
    summary:"-任意季节限定特饮（大杯）饮料券；-此电子饮料券自购买之日起三年内有效；-您可以在中国大陆境内任意星巴克门店（部分门店除外，详情请见《星巴克用星说社交礼品平台须知》）兑换其出售的指定商品；-此电子饮料券为一次性使用产品，一旦兑换，即失效；-使用电子饮料券在门店消费时，同时出示有效星享卡累积星星。"
  },
  onLoad: function (options) {

  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '礼品卡详情'
    })
  },
  onShareAppMessage: function () {

  }
})
