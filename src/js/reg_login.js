require('Router');
import '../less/normalized.less';
import '../less/common.less';
import '../less/reg_login.less';
import Tool from "../js/tools";
$(function() {

   var tool = new Tool();
  $('.register').on('click',()=>{
      document.title = "用户注册";
      $('.register').addClass('hide');
      $('.login-title').html(`注&nbsp;&nbsp;&nbsp;&nbsp;册`);
      $('.gray span').text('已经是我们的会员? ');
      $('.register-login').removeClass('hide');
      $('.re-username').text('注册账号');
      $('.section').removeClass('hide').addClass('show');
      $('.forget').addClass('hide');
      $('.submit').addClass('hide');
      $('.submit-register').removeClass('hide');
      $('.submit-login').removeClass('hide');
    });

    $('.register-login').on('click',()=>{
        document.title = "用户登录";
        $('.register').removeClass('hide');
        $('.login-title').html(`登&nbsp;&nbsp;&nbsp;&nbsp;录`);
        $('.gray span').text('还不是我们的会员? ');
        $('.register-login').addClass('hide');
        $('.re-username').text('账号');
        $('.section').addClass('hide').removeClass('show');
        $('.forget').removeClass('hide');
        $('.submit').removeClass('hide');
        $('.submit-register').addClass('hide');
        $('.submit-login').addClass('hide');
        });
   //弹出框点击事件
   $('.ensure').on('click',()=>{
    $('aside').addClass('hide');
   })
    //输入框状态
    let isWrong = false;
    //用户名正则判断
    $('.username').on('blur',(e)=>{
        if(!/^[A-Za-z0-9_-]{4,20}$/.test(e.currentTarget.value)){
            e.currentTarget.previousElementSibling.className = 'error';
            isWrong = true;
        }else{
            e.currentTarget.previousElementSibling.className = 'error hide'
            isWrong = false;
        }
        
    });
    //密码正则判断
    $('.password').on('blur',(e)=>{
        if(!/^[A-Za-z0-9_-]{4,16}$/.test(e.currentTarget.value)){
            e.currentTarget.previousElementSibling.className = 'error';
            isWrong = true;
        }else{
            e.currentTarget.previousElementSibling.className = 'error hide'
            isWrong = false;
        }
    });
    //确认密码判断
    $('.verify-password').on('blur',(e)=>{
        let reg = $('.password').val();
        if(reg != e.currentTarget.value){
            e.currentTarget.previousElementSibling.className = 'error';
            isWrong = true;
        }else{
            e.currentTarget.previousElementSibling.className = 'error hide'
            isWrong = false;
        }
    });
    //注册
    $('.submit-login').on('click',()=>{
        
        add($('.username'),$('.password'),$('.verify-password'))
        
    })
    
    //登录
    $('.submit').on('click',()=>{
        
       show($('.username'),$('.password'))
    });
    
    //注册函数
   function add(name,pass,verifyPassword){
        // console.log(verifyPassword[0].previousElementSibling.className != 'error hide')
        if(!name.val() || !pass.val() || !verifyPassword.val()){
            $('aside').removeClass('hide');
            $('aside p').text('用户名或密码不能为空');
            return;
        }else if(isWrong){
            $('aside').removeClass('hide');
            return;
        } else{
            let data=[],

            //获取本地存储
            stroge = localStorage.getItem("userInfo");
            if(stroge){
                data = JSON.parse(stroge)
            }
            else{
                 //存放数据
                 data.push({
                    username:name.val(),
                    password:pass.val()
                });
                //更新数据
                var dataStr = JSON.stringify(data);
                localStorage.setItem("userInfo",dataStr);
                tool.temporary(name.val());
                tool.state($('.right-one'));
                $('aside').removeClass('hide');
                $('aside p').text('恭喜您，注册成功');
                return;
            }
            for(var i = 0, len = data.length;i < len; i++){
                if(data[i].username == name.val()){
                    $('aside').removeClass('hide');
                    $('aside p').text('用户名已存在');
                    break;
                }else{
                    //存放数据
                    data.push({
                        username:name.val(),
                        password:pass.val()
                    });
                    //更新数据
                    var dataStr = JSON.stringify(data);
                    localStorage.setItem("userInfo",dataStr);
                    tool.temporary(name.val());
                    tool.state($('.right-one'));
                    $('aside').removeClass('hide');
                    $('aside p').text('恭喜您，注册成功');
                    break;
                }
            }
        }
}
    //登录
    function show(name,pass){
        if(!name.val() || !pass.val()){
            $('aside').removeClass('hide');
            $('aside p').text('用户名或密码不能为空');
            return;
        }else{
            var userData = JSON.parse(localStorage.userInfo)
            //获取本地存储
            for(var i = 0, len = userData.length;i < len; i++){
                if(userData[i].username !== name.val() || userData[i].password !== pass.val()){
                    $('aside').removeClass('hide');
                    $('aside p').text('用户名或密码输入错误');
                }else{
                    tool.temporary(name.val());
                    tool.state($('.right-one'));
                    $('aside').removeClass('hide');
                    $('aside p').text('恭喜您，登录成功');
                }
            }
        }
}

});