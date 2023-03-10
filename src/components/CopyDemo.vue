<template>
    <div class="login-container">
        <el-form ref="loginForm" :model="loginForm" class="login-form" auto-complete="on" label-position="left">
            <div class="title-container">
                <h3 class="title">中国银联</h3>
            </div>
            <el-form-item prop="username">
                <span class="svg-container svg-container_login">
                    <svg-icon icon-class="user" />
                </span>
                <el-input v-model="loginForm.username" name="username" type="text" auto-complete="on"
                    placeholder="用户名" />
            </el-form-item>

            <el-form-item prop="password">
                <span class="svg-container">
                    <svg-icon icon-class="password" />
                </span>
                <el-input :type="passwordType" v-model="loginForm.password" name="password" auto-complete="on"
                    placeholder="密码" @keyup.enter.native="handleLogin"  show-password/>
            </el-form-item>

            <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: '',
                captcha: ''
            }
        }
    },
    methods: {
        handleLogin() {
            let _this = this;
            axios({
                method: 'post',
                headers: { 'X-Request-Id': '123', 'X-Request-Time': '123' },
                url: 'http://localhost:8081/login',
                data: {
                    userName: _this.loginForm.userName,
                    password: _this.loginForm.password,
                    captcha: _this.loginForm.captcha
                }
            }).then(function (response) {
                let json = response.data
                console.log(JSON.stringify(json))
            }).catch(function (error) {
                console.log(error)
            }).finally(function () {
                console.log("ok")
            });
        }
    }
}

</script>


<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;
.login-container {
  .el-input {
    color: #000;
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      color: #000;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>