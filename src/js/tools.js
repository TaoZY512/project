import example_6 from '../images/example_6.jpg';
import example_7 from '../images/example_7.jpg';
import example_9 from '../images/example_9.jpg';
import example_10 from '../images/example_10.jpg';
import example_11 from '../images/example_11.jpg';
class Tool {
    constructor(){}
    loadingHtml(response,keyword){
        switch(keyword){
            case "goods":{
                var searchStr = location.search;
                searchStr = searchStr.slice(2);
                let htmlStr    = '';
                let headerStr  = '';
                let titleStr   = '';
                var headerlist = response['header'][searchStr];
                var htmlList   = response['infos'];
                var titleList  = response['title'][searchStr];
                headerlist.forEach(data => {
                    headerStr += `
                    <li>${data}</li>
                    `
                });
                
                titleStr += `
                    <span>${titleList}</span>
                `
                htmlList.forEach((data,index) => {
                    htmlStr += `
                    
                    ${function(){
                        let tmpStr = '';
                        if(data.oldprice){
                        tmpStr += `
                        <section class='link' data-index=${index}>
                        <div>
                        <img src="../images/${data.pic}">
                    </div>
                    <p><span class='goodsName'>商品名称</span>
                    <span class='oldprice'>${data.oldprice}</span>
                    <span class='sofaPrice'>${data.sofaPrice}</span>
                    </p>
                        </section>
                        `
                    }else{
                        tmpStr +=`
                        <section>
                        <div>
                        <img src="../images/${data.pic}">
                    </div>
                    <p><span class='goodsName'>商品名称</span>
                    <span class='sofaPrice'>${data.sofaPrice}</span>
                    </p>
                    </section>
                        `
                    }   
                    return tmpStr;
                }()}
                `   
                })
                $('.h1').html(titleStr);
                $('.header').html(headerStr);
                $('.good-choose').html(htmlStr);}break;
            case "detail":{
                var data = response;
                $(".contents").html(`
                <div class='goods-wrap'>
                <div class="box left-box">
                <div class="small-box">
                    <img class="small-img" src="../images/${data.imgs[0]}" alt="">
                </div>
                <div class="thumbnail">
                ${(function(){
                        let thumbnailStr = ``;
                        data.imgs.forEach((imgName) => {
                            thumbnailStr += `
                                <div class='img'><img src="../images/${imgName}" alt="图片加载失败"></div>
                            `;
                        });
                        return thumbnailStr;
                    }())
                }</div>
            </div>
            <div class="box right-box">
                <div class="title-box">
                    <h1 class="title">${data.sofaName}</h1>
                    <p class="des">${data.introduce}</p>
                </div>
                <div class="price-box">
                    <section>
                        <span class="price">
                            <span class='oldprice'>${data.oldprice}</span>
                        </span>
                        <span>
                            <span class='sofaPrice'>${data.sofaPrice}</span><span>元</span>
                        </span> 
                    </section>
                    <section>
                        <span class="head-flag">原始购买价格</span>
                        <span>
                            <span class="oldPrice">${data.oldPrice}</span>
                        </span>
                    </section>
                </div>
                <div class="other-box">
                    <section class="item">
                        <span class="head-flag">积分：</span>
                        <span style="color:#FF0036">${data.integral}</span>
                    </section>
                    <section class="item">
                        <a href='#'>了解积分规则</a>
                    </section>
                    <section class="item">
                        <span class="head-flag">送天猫积分</span>
                        <span style="color:#280">38</span>
                    </section>
                </div>
                <div class="infos-box">
                    <section class="item">
                        <span class="head-flag">库存数量：</span>
                        <span class='inventory'>${data.inventory}</span>
                        <div class="stock">
                            <input class="nums" type="number" value="1" min="1" max="${data.stock}">
                            <span>件</span>
                            <button type="button" class="buy">立刻购买</button>
                            <button type="button" class="shoppingcar">加入购物车</button>
                        </div>
                    </section>
                </div>
                <div class='onlineServer'>
                    <button></button>
                </div>
                <div class='huliServer'>
                    <p>
                    <span>户里服务： </span>
                    <span>该商品在仓库，23点前完成下单可在后天（5月15日）送达/该商品在用户家中，23点前完成下单，可在（5天后）送达</span>
                    </p>
                </div>
            </div>
            </div>
                <div class='goods'>
                    <h1>商品规格</h1>
                    <div class='goodsStyle'>
                    <section class='goodsSize'>
                        <span>尺寸：</span>
                        <span>${data.sofasize}</span>
                    </section>
                    <section class='goodsSize'>
                        <span>材料：</span>
                        <span>${data.texture}</span>
                    </section>
                    <section class='goodsSize'>
                        <span>颜色： </span>
                        <span>${data.sofacolor}</span>
                    </section>
                        </div>
                </div>
                <div class='goods'>
                    <h1>商品详情</h1>
                    <section class='goodsDetails'></section>
                </div>
                <div class='goods'>
                    <h1>送货</h1>
                    <p class='goodsDeliver'>${data.deliver}</p>
                </div>
                <div class='goods'>
                    <h1>推荐商品</h1>
                    <div class='introduce'>
                    <section class='link'>
                        <div>
                        <img src="../images/${data.pic}">
                    </div>
                    <p><span class='goodsName'>商品名称</span>
                    <span class='oldprice'>${data.oldprice}</span>
                    <span class='sofaPrice'>${data.sofaPrice}</span>
                    </p>
                        </section>
                        <section class='link'>
                        <div>
                        <img src="../images/${data.pic}">
                    </div>
                    <p><span class='goodsName'>商品名称</span>
                    <span class='sofaPrice'>${data.sofaPrice}</span>
                    </p>
                        </section>
                        <section class='link'>
                        <div>
                        <img src="../images/${data.pic}">
                    </div>
                    <p><span class='goodsName'>商品名称</span>
                    <span class='oldprice'>${data.oldprice}</span>
                    <span class='sofaPrice'>${data.sofaPrice}</span>
                    </p>
                        </section>
                    </div>
                </div>

            </div>
            `);    
            }break;
        }
    }
    loadingOrder(data,html){
        var htmlStr = '';
        data.forEach((data) => {
            htmlStr += `
        <p class='pic'>
            <img src='../images/${data.pic}'>
            <span>订单号</span>
        </p>
        <p>${data.newPrice}</p>
        <p>${data.orderTime}</p>
        <p>${data.deliveryTime}</p>
        <p>${data.stute}</p>
        `
        })
        html.html(htmlStr)
    }
    loadingSale(data,html){
        var htmlStr = '';
        data.forEach((data) => {
            htmlStr += `
        <p class='pic'>
            <img src='../images/${data.pic}'>
            <span>订单号</span>
        </p>
        <p>${data.newPrice}</p>
        <p>${data.orderTime}</p>
        <p>${data.deliveryTime}</p>
        <p>${data.retention}</p>
        <p>${data.stute}</p>
        <p>${data.back}</p>
        `
        html.html(htmlStr)
        })
        
    }
    loadingSystem(data,html){
        var htmlStr = '';
        data.forEach((data) => {
        htmlStr += `
        <p>${data.systemMessages}</p>
        <span class='data'>${data.systemDate}</span>
        <span>${data.systemTime}</span>
        `
        })
        html.html(htmlStr)
    }
    //本地存储 
    temporary(nameVal){
    let temporaryData =[],
        temporaryStroge = sessionStorage.getItem("userName");
        if(temporaryStroge){
          temporaryData = JSON.parse(temporaryStroge);
        }else{
            temporaryData.push({
                username:nameVal
           });
           //更新
           let temporaryStr = JSON.stringify(temporaryData);
           sessionStorage.setItem("userName",temporaryStr);
        }
};
  
//登录状态
    state(box){
        let stateDate = JSON.parse(sessionStorage.getItem('userName'));
        if(stateDate){
            box.html(`
            <p class="user-info">
            <a href='./userInfo.html'>hello!${stateDate[0].username}</a>
            </p>`);
            box.css({"background-image":"url( )","line-height":"37px"});
        }
       
    }
}
module.exports = Tool;