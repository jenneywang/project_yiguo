<template>
    <div>
        <div id="header_list">
            <p><span class="arrow" @click="back"><span class="arrows"></span></span>会员注册</p>
        </div>
    <form action="" class="form">
       <p><input type="tel" placeholder="手机号码"></p>
       <p><input type="text" placeholder="验证码"><span class="code">获取验证码</span></p>
       <p><input type="password" placeholder="密码"></p>
       <p><input type="password" placeholder="重复密码"></p>
    </form>
    <div class="footer">
        <div class="footer_logoin">
            <button class="btn" @click="btns">注册</button>
            <span class="tel" v-show="isshow">请输入正确的手机号</span>
        </div>
        <div class="xieyi">
            <p>点击注册，即代表同意<span>《易果服务协议》</span></p>
        </div>
    </div>
        <router-view></router-view>
    </div>
</template>

<style type="text/css" lang="scss">
  #header_list {
    position: relative;
    width: 100%;
    height: 45px;
    background-color: #fff;
    border-bottom: 1px solid #ACACAC;
  }
  #header_list p {
    height: 45px;
    font-size: 16px;
    line-height: 45px;
    font-weight: bold;
    font-family: "SimSun";
    text-align: center;
  }
  #header_list .arrow {
    position: absolute;
    top: 12px;
    left: 8px;
    width: 0px;
    font-size: 0;
    border: 12px solid transparent;
    border-right-color: #2A2A2A;
  }
  #header_list .arrows {
    position: absolute;
    top: -12px;
    left: -11px;
    width: 0px;
    font-size: 0;
    border: 12px solid transparent;
    border-right-color: #fff;
  }
  .form {
    width: 100%;
    height: 183px;
    background-color: #fff;
  }
  .form p {
    position: relative;
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #CECECE;
  }
  .form .code {
    position: absolute;
    top: 9px;
    right: 20px;
    width: 75px;
    height:25px;
    color: white;
    line-height: 25px;
    border-radius: 8px;
    background-color: #ACACAC;
    font-size: 12px;
    text-align: center;
  }
  .form p input {
    border: 0;
    padding-left: 8px;
    height: 45px;
    color: #8C8C8C;
    outline: none;
    font-size: 12px;
    margin-bottom: 5px;
    caret-color: blue;
  }
  .footer {
    width: 100%;
    height: 150px;
    text-align: center;
  }
  .footer .footer_logoin {
    position: relative;
    height: 80px;
    line-height: 110px;
  }
  .footer .footer_logoin button {
    text-align: center;
    color: white;
    width: 200px;
    height: 30px;
    outline:none;
    line-height: 30px;
    border-radius: 5px;
    background-color: #008742;
  }
  .footer .footer_logoin .tel {
    position: absolute;
    left: 50%;
    bottom: -8px;
    margin-left: -65px;
    width: 130px;
    height: 25px;
    color: white;
    border-radius: 5px;
    line-height: 25px;
    font-size: 12px;
    background-color: rgba(0,0,0,.7);

  }
  .footer .xieyi {
    width: 100%;
    height: 30px;
    line-height: 30px;
  }
  .footer .xieyi p {
    color: #8C8C8C;
    font-size: 12px;
    text-align: center;
  }
  .footer .xieyi span {
    color: #008742;
  }
</style>
<script>
    export default {
      data() {
        return {
            search: '',
            isshow: false
        }
      },
      methods: {
        back: function() {
          console.log(111)
          this.$router.push({path:'/login'})
        },
        btns() {
          this.isshow = !this.isshow
        }
      }
    }
</script>