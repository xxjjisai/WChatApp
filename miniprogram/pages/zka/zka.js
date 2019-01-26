// miniprogram/pages/zka/zka.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navData:[
      {
        name : "购物车",
        current : 1,
        style : 0,
        ico : 'icon-qiugouguanli',
        fn:'gotoCompanyIndex'
      },
      {
        name : "我的名片",
        current : 0,
        style : 0,
        ico : 'icon-qiugouguanli',
        fn:'gotoCompanyIndex'
      },
      {
        name : "发布中心",
        current : 0,
        style : 1,
        ico : 'icon-qiugouguanli',
        fn:'gotoCompanyIndex'
      },
      {
        name : "消息中心",
        current : 0,
        style : 0,
        ico : 'icon-qiugouguanli',
        fn:'gotoCompanyIndex'
      },
      {
        name : "个人中心",
        current : 0,
        style : 0,
        ico : 'icon-qiugouguanli',
        fn:'gotoCompanyIndex'
      },
    ]
  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})