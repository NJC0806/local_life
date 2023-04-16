// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //存放轮播图数据
    swipperList:[],
    //存放九宫格数据
    gridList:[]
  },
  //获取轮播图的相关图片地址
  getSwipperList(){
    wx.request({
      url: 'https://www.escook.cn/slides',
      method:'GET',
      success:(res) => {
          this.setData({
            //对应的轮播图数据在res.data中
            swipperList: res.data
          })
      }
    })
  },
  getGridList(){
    wx.request({
      url: 'https://www.escook.cn/categories',
      method:"GET",
      success:(res) => {
        this.setData({
          gridList:res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //页面加载时获取轮播图网址
    this.getSwipperList(),
    //页面加载时获取九宫格网址
    this.getGridList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})