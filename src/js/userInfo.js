require('Router');
import '../less/normalized.less';
import '../less/common.less';
import '../less/userInfo.less';
import Tool from "../js/tools";
window.onload = function(){
    var aBtn = document.getElementsByClassName("btn");
    var aDiv = document.getElementsByClassName("matter");
    var i = 0;

    for (i=0;i<aBtn.length;i++) {
        aBtn[i].index = i;
        aBtn[i].onclick = function (){
            for (i=0;i<aBtn.length;i++) {
                aDiv[i].style.display = 'none';
            }
            aDiv[this.index].style.display = 'block';
        }
    }
};
$(function(){
    var tool = new Tool();
    tool.state($('.right-one'));
    $.ajax({
        url: "../json/data.json",
        type: "GET",
        dataType: "json",
        success: (response) => {
            $('.order-btn').on('click',(e) => {
                var tool = new Tool();
                var data = response['order'];
                tool.loadingOrder(data,$(".order"));
            });
            $('.sale-btn').on('click',(e) => {
                var tool = new Tool();
                var data = response['sale'];
                tool.loadingSale(data,$(".sale"));
            });
            $('.system-btn').on('click',(e) => {
                var tool = new Tool();
                var data = response['system'];
                tool.loadingSystem(data,$(".information"));
            });
        }
    });
    var aBtn = document.getElementsByClassName("btn");
        var aDiv = document.getElementsByClassName("matter");
		var i = 0;

		for (i=0;i<aBtn.length;i++) {
			aBtn[i].index = i;
			aBtn[i].onclick = function (){
				for (i=0;i<aBtn.length;i++) {
					aDiv[i].style.display = 'none';
				}
				aDiv[this.index].style.display = 'block';
			}
		}

        var handledel = document.getElementsByClassName("handle-delete")[0];
        var handlede2 = document.getElementsByClassName("handle-delete")[1];
        var handlede3 = document.getElementsByClassName("handle-delete")[2];
        var handlede4 = document.getElementsByClassName("handle-delete")[3];
        var romovenor = document.getElementById("romovenor");
        handledel.onclick=function(){
            romovenor.style.display = 'block';
        }
        handlede2.onclick=function(){
            romovenor.style.display = 'block';
        }
        handlede3.onclick=function(){
            romovenor.style.display = 'block';
        }
        handlede4.onclick=function(){
            romovenor.style.display = 'block';
        }
        
        var qxbtn = document.getElementById("qxbtn"),
            surebtn = document.getElementById("surebtn");
        
        qxbtn.onclick = function(){
            romovenor.style.display = 'none';
        }

        var sign1 = document.getElementById("sign1"),
            sign2 = document.getElementById("sign2"),
            sign3 = document.getElementById("sign3"),
            sign4 = document.getElementById("sign4");

        sign1.onclick = function(){
            sign1.style.backgroundPosition = "16px -74px";
        }
        sign2.onclick = function(){
            sign2.style.backgroundPosition = "16px -74px";
        }
        sign3.onclick = function(){
            sign3.style.backgroundPosition = "16px -74px";
        }
        sign4.onclick = function(){
            sign4.style.backgroundPosition = "16px -74px";
        }
        

        var applyfor = document.getElementById("applyfor");
        var backbtn = document.getElementById("backbtn");
        var depreciate = document.getElementById("depreciate");

        applyfor.onclick = function(){
            depreciate.style.display = "block";
        }

        backbtn.onclick = function(){
            depreciate.style.display = "none";
        }
})