require('Router');
import '../less/normalized.less';
import '../less/common.less';
import '../less/goodsDetails.less';
import Tool from "../js/tools";
$(function(){
    var tool = new Tool();
    tool.state($('.right-one'));
    $.ajax({
        url:'../json/data.json',
        type: "GET",
        dataType: "json",
        success: (response) => {
            var tool = new Tool();
            let data = response['infos'][0];
            tool.loadingHtml(data,'detail');
            let order = {
                sofaName:data.sofaName,
                sofasize:data.sofasize,
                texture:data.texture,
                nums:$(".nums").val(),
                sofacolor:data.sofacolor,
                img:data.pic,
                price:data.sofaPrice
            }
            // 处理左侧图片
            $(".thumbnail img").on("mouseenter", (e) => {
                let $target = $(e.target);
                $target.addClass("selected").siblings().removeClass("selected");
                $(".small-img").attr({
                    "src": $target.attr("src")
                })
            });
            $(".nums").on("change", (e) => {
                let $target = $(e.target);
                order.nums = $target.val();
                order.price = (parseFloat(data.barginprice) * order.nums).toFixed(2);
            });
            //点击添加购物车
            $(".shoppingcar").on("click", () =>{
                    alert("添加购物车成功！");
                    sessionStorage.order = JSON.stringify(order);
                    location.href = "../pages/shoppingcar.html";
            });
        }
    })

})