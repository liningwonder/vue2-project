<template>
    <div>
        <div class="title-container">
            <h3 class="title">中国银联</h3>
        </div>
        <div style="margin: 20px;"></div>
        <div class="form-container">
            <el-form ref="loginForm" :model="loginForm" :label-position="left" label-width="100px">
                <el-form-item label="用户名">
                    <el-input v-model="loginForm.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="loginForm.password" show-password></el-input>
                </el-form-item>
                <el-form-item label="验证码">
                    <el-input v-model="loginForm.captcha"></el-input>
                    <span><el-image :src="captchaUrl" @click="refreshCaptcha"></el-image></span>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-select v-model="loginForm.region" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登 录</el-button>
                </el-form-item>
            </el-form>
        </div>
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
                region: ''
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

<style></style>