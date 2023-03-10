<template>
    <div style="margin: 20px;" class="login">
        <div class="title-container">
            <h3 class="title">中国银联</h3>
        </div>
        <el-form ref="loginForm" :model="loginForm" label-width="30%" label-heigth="30%">
            <el-form-item label="用户名" class="icon" icon="el-icon-user" label-position="right" label-width="30%" label-heigth="30%">
                <el-input v-model="loginForm.userName" label-width="30%" label-heigth="30%"></el-input>
            </el-form-item>
            <el-form-item label="密码" class="icon" icon="el-icon-lollipop" label-position="right" label-width="30%" label-heigth="30%">
                <el-input v-model="loginForm.password" show-password label-width="30%" label-heigth="30%"></el-input>
            </el-form-item>
            <el-form-item label="验证码" label-position="right" label-width="30%" label-heigth="30%">
                <el-input class="icon" v-model="loginForm.captcha" label-width="30%" label-heigth="30%"></el-input>
                <span><el-image class="icon" :src="captchaUrl" @click="refreshCaptcha"></el-image></span>
            </el-form-item>
            <el-button class="icon" type="primary" @click="login">登 录</el-button>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            loginForm: {
                userName: '',
                password: '',
                captcha: '',
            },
            captchaUrl: ''
        }
    },
    methods: {
        login() {
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
        },
        refreshCaptcha() {
            let _this = this;
            axios({
                method: 'get',
                headers: { 'X-Request-Id': '123', 'X-Request-Time': '123' },
                responseType: 'arraybuffer',
                url: 'http://localhost:8081/captcha',
            }).then(function (response) {
                return 'data:image/png;base64,' + btoa(new Uint8Array(response.data)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
                );
            }).then(function (image) {
                _this.captchaUrl = image
            }).finally(function () {
                console.log("ok")
            })
        }
    },
    mounted() {
        let _this = this;
        axios({
            method: 'get',
            headers: { 'X-Request-Id': '123', 'X-Request-Time': '123' },
            responseType: 'arraybuffer',
            url: 'http://localhost:8081/captcha',
        }).then(function (response) {
            return 'data:image/png;base64,' + btoa(new Uint8Array(response.data)
                .reduce((data, byte) => data + String.fromCharCode(byte), '')
            );
        }).then(function (image) {
            _this.captchaUrl = image
        }).finally(function () {
            console.log("ok")
        })
    }
}

</script>

<style>

</style>