// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //保存传递过来的页面参数
    query:[],
    shopList:[],
    page:1,
    pageSize:10,
    total:0
  },
  getShopInfo(){
    wx.request({
      url: 'https://www.escook.cn/categoires/${this.data.query.id}/shops',
      method:'get',
      data:{
        _page:this.data.page,
        _limit:this.data.pageSize
      },
      success:(res)=>{
        this.setData({
          shopList:[...this.data.shopList,...res.data],
          //字符转数字
          total:res.header["X-Total-Count"] - 0
        }),
        console.log(this.data.shopList)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      this.setData({
        query:options
      }),
      this.getShopInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    //修改标题
    wx.setNavigationBarTitle({
      title: this.data.query.title,
    })
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