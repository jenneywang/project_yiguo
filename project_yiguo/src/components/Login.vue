<template>
	<div class="gd_login">
		<div id="header">
            <p><span class="arrow"><span class="arrows"></span></span>会员登录</p>
        </div>
        <div class="denglu">
            <div class="left_padd">
                <div class="top">
                      <img src="../../public/login/icon_username.png" alt="">
                      <input type="text" v-model="search" placeholder="请输入用户名">
                  <div class="bottom">
                      <img src="../../public/login/icon_password.png" alt="">
                     <input type="password" id="mima" placeholder="请输入密码">
                  </div>
                </div>
           </div>
       </div>
       <div class="logoin">
          <div class="mima"><p>忘记密码？</p></div>
          <div class="cent">
                <button class="delu">登录</button>
                <button class="zhuc" @click="register">立即注册</button>
          </div>
          <div class="logoin_bottom"><p class="hez">合作账号登录</p></div>
      </div>
      <div class="pic">
          <div>
              <img src="../../public/login/qq.png" alt="">
          </div>
          <div>
              <img src="../../public/login/weibo.png" alt="">
          </div>
      </div>
      <div class="bottom">
          <div>
              <img src="../../public/login/yiguo_logo.png" alt="">
          </div>
      </div>
		<router-view></router-view>
	</div>
</template>

<style type="text/css" lang="scss">
  // * {
  //   padding: 0;
  //   margin: 0;
  // }
  // html,body {
  //   background-color: #F4F4F4;
  // }
  .gd_login {
 #header {
    position: relative;
    width: 100%;
    height: 45px;
    background-color: #fff;
    margin-bottom: 5px;
    border-bottom: 1px solid #ACACAC;
  }
  #header p {
    height: 45px;
    font-size: 16px;
    line-height: 45px;
    font-weight: bold;
    font-family: "SimSun";
    text-align: center;
  }
  #header .arrow {
    position: absolute;
    top: 12px;
    left: 8px;
    width: 0px;
    font-size: 0;
    border: 12px solid transparent;
    border-right-color: #2A2A2A;
  }
  #header .arrows {
    position: absolute;
    top: -12px;
    left: -11px;
    width: 0px;
    font-size: 0;
    border: 12px solid transparent;
    border-right-color: #fff;
  }
  .denglu {
    width: 100%;
    height: 105px;
    background-color: #fff;
    border-bottom: 1px solid #CECECE;

  }
  .denglu .left_padd {
    padding-left: 17px;
  }
  .denglu .left_padd .top {
    height: 50px;
    border-bottom: 1px solid #CECECE;
  }
  .denglu .left_padd img {
    width: 16px;
    height: 18px;
    margin-right: 5px;

  }
  .denglu .left_padd input {
    border: 0;
    height: 50px;
    color: #8C8C8C;
    outline: none;
    margin-bottom: 5px;
    caret-color: blue;
  }
  .logoin {
    width: 100%;
    height: 143px;
  }
  .logoin .mima {
    display: block;
    padding-left: 15px;
    font-size: 12px;
    height: 45px;
    line-height: 25px;
    color: #057248;
  }
  .logoin .cent {
    display: flex;
    height: 45px;
    padding: 10px 25px;
  }
  .logoin .cent .delu {
    flex: 1;
    outline:none;
    height: 34px;
    color: white;
    font-size: 12px;
    text-align: center;
    margin-right: 50px;
    line-height: 34px;
    border-radius: 5px;
    background-color: #008742;
  }
  .logoin .cent .zhuc {
    flex: 1;
    height: 34px;
    color: #008742;
    font-size: 12px;
    text-align: center;
    line-height: 34px;
    border: 1px solid #008742;
    border-radius: 5px;
    background-color: white;
  }
  .logoin .logoin_bottom {
    position: relative;
    height: 30px;
    padding-right: 25px;
    text-align: center;
    border-bottom: 1px dashed #CECECE;
  }
  .logoin .logoin_bottom .hez {
    position: absolute;
    left: 50%;
    margin-left: -50px;
    bottom: -11px;
    width: 100px;
    height: 20px;
    font-size: 12px;
    background-color: #F4F4F4;

  }
  .pic {
    display: flex;
    width: 100%;
    height: 100px;
    margin: 50px 0px;
  }
  .pic div:nth-child(1),img {
    text-align: center;
    flex: 1;
    width: 64.5px;
    height: 63.5px;
  }
  .pic div:nth-child(2) {
    text-align: center;
    flex: 1;
  }
  .bottom {
    width: 100%;
  }
  .bottom div {
    text-align: center;
  }
  .bottom div img {
    width: 78px;
    height: 25px;
  }    
  }
 
</style>

<script>
    export default {
      data() {
        return {
            search: ''
        }
      },
      methods: {
        register: function() {
          this.$router.push({path:'/register'})
        }
      }
    }
</script>