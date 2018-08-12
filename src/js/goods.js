require('Router');
import '../less/normalized.less';
import '../less/common.less';
import '../less/goods.less';
import Tool from "../js/tools";
$(function(){
    var tool = new Tool();
    tool.state($('.right-one'));
    $.ajax({
        url: "../json/data.json",
        type: "GET",
        dataType: "json",
        success: (response) => {
            var tool = new Tool();
            tool.loadingHtml(response,'goods');
            $(".link").on("click", (e) => {
                let $target = $(e.currentTarget);
                if($target.attr("data-index") == 0){
                    location.href = `goodsDetails.html`;
                }else{
                    location.href = `goodsDetails_assem.html`;
                }
            });
        }
    });
})