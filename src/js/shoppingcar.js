require('Router');
import '../less/normalized.less';
import '../less/common.less';
import '../less/shoppingcar.less';
import Tool from "../js/tools";
$(function(){



  if(sessionStorage.order){
    var goodsOrder = JSON.parse(sessionStorage.order);
    // 加载数据
    var loadHtml = `
    <section class="shop-center">
                    
                    <div class="shop-icon">
                            <input type="checkbox" class="checkbox-icon" name = "checkbox-select">
                    </div>
                    <div class="shopInfo clearFix">
                        <section class="fl">
                            <img src="../images/${goodsOrder.img}" alt="">
                            <p><a href="#">${goodsOrder.sofaName}</a> </p>
                        </section>
                        <section class="fr">
                            <p>${goodsOrder.sofasize}</p>
                            <p>${goodsOrder.texture}</p>
                            <p>${goodsOrder.sofacolor}</p>
                        </section>
                    </div>
                    <p><span class="unit-price">${goodsOrder.price}</span></p>
                    <div class="count">
                        <span class="subtract">-</span>
                        <input type="text" class="price-nums" value="${goodsOrder.nums}">
                        <span class="add">+</span>
                    </div>
                    <p class="money">${goodsOrder.price}</p>
                    <p class="delete ">删除</p>       
            </section>
    `
    $('.shop').html(loadHtml)
  }else{
    $('.shop').html(`
        <h3 class="notice" style="padding:50px">您还没有添加物品哦，快去选择你喜欢的物品吧~~~</h3>`)
  }
//监听复选框
var tool = new Tool();
    tool.state($('.right-one'));
monitor() 
function monitor(){
      $("body").on("click","input",function(){
        GetCount()
         // 全选      
         if($('.select-box').is(':checked') || $('.select1-box').is(':checked')){
          $(this.parentElement.classList = "buy-icon");
          $(".checkbox-icon").each(function(){
            $(this).attr("checked", true);
            $(this.parentElement.classList = "buy-icon");
            
          })
          GetCount()
          
         }else{
          $(this.parentElement.classList = "shop-icon");
          $(".checkbox-icon").each(function(){
            $(this).attr("checked", false);
            $(this.parentElement.classList = "shop-icon");
          })
          GetCount()
         }
     
        });
}
    //加
   $('.add').on('click',(e)=>{
     
       let numAddChild = Number(e.currentTarget.previousElementSibling.value);
       let addResult = numAddChild += 1;
       e.currentTarget.previousElementSibling.value = addResult;
       //价格
      let  previousNums = Number((e.currentTarget.parentNode.previousElementSibling.textContent).slice(1));
      e.currentTarget.parentNode.nextElementSibling.textContent ='￥' + previousNums * e.currentTarget.previousElementSibling.value;
      monitor();
      GetCount()
      
   })
   //减
   $('.subtract').on('click',(e)=>{
    let numSubtractChild = Number(e.currentTarget.nextElementSibling.value);
       if(numSubtractChild > 1){
        numSubtractChild = numSubtractChild -= 1
        e.currentTarget.nextElementSibling.value = numSubtractChild;
        //价格
        let  subtractNums = Number((e.currentTarget.parentNode.previousElementSibling.textContent).slice(1));
        e.currentTarget.parentNode.nextElementSibling.textContent = '￥' + subtractNums *e.currentTarget.nextElementSibling.value;
        monitor();
        GetCount()
       }else{
           alert('不能在少了喲')
       }
   
    
   });

 //删除
   $('.delete').on('click',(e) =>{
     e.currentTarget.parentElement.remove();
     GetCount();
     if($('shop').html('')){
        $('.shop').html(`
        <h3 class="notice" style="padding:50px">您还没有添加物品哦，快去选择你喜欢的物品吧~~~</h3>`)
    
     }
   });
  //总价
  function GetCount() {
    var conts = 0;
    var aa = 0;
    $(".checkbox-icon").each(function () {
        if($(this).is(':checked')) {
          $(this.parentElement.classList = "buy-icon");
            for (var i = 0; i < $(this).length; i++) {
                conts += Number((this.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent).slice(1));
                aa += Number((this.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.children[1].value));

            }
        }else{
          $(this.parentElement.classList = "shop-icon");
        }
    });
    $(".nums").text(aa);
    $(".nums-price").text('￥'+(conts).toFixed(2));
}
   
  
});