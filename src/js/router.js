
$(function() {
    // 设置路由基础路径
    let baseUrl = 'http://localhost:8050/';
    // 设置页面路径
    let urls     = [
        'static/pages/goods.html?=sofa',
        'static/pages/goods.html?=tableAndChair',
        'static/pages/goods.html?=bed',
        'static/pages/goods.html?=storge',
        'static/pages/goods.html?=more'
    ];
    // 配置页面最终路径
    urls = urls.map(url => {
        return baseUrl + url
    });
    // 添加点击事件
    $('.header-bottom .router').on('click', (event) => {
        // 获取点击菜单项的下标
        let index = $(event.currentTarget).index();
        // 根据获取的下标设置页面跳转路径
        location.href = urls[index];
    });
      //登录页面条状
      let loginUrls =[
        'static/pages/reg_login.html'
    ]
    //购物车页面跳转
    let ShoppingUrls = [
        'static/pages/shoppingcar.html'
    ]
    $('.right-one').on('click',()=>{
         location.href = baseUrl + loginUrls
    });
    $('.right-two').on('click',()=>{
        location.href = baseUrl + ShoppingUrls
    })
});