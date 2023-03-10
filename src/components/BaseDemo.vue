<template>
    <div>
        {{ companyInfo.message }}
        <el-button type="primary" @click="onSubmit">立即查询</el-button>
        <el-descriptions title="公司信息">
            <el-descriptions-item label="统一社会信用代码">{{ companyInfo.uniscId }}</el-descriptions-item>
            <el-descriptions-item label="工商注册号">{{ companyInfo.regNo }}</el-descriptions-item>
            <el-descriptions-item label="企业名称">{{ companyInfo.entName }}</el-descriptions-item>
            <el-descriptions-item label="法人">{{ companyInfo.name }}</el-descriptions-item>
            <el-descriptions-item label="经营范围" :span="2">{{ companyInfo.opScope }}</el-descriptions-item>
        </el-descriptions>
        <el-descriptions title="企业基本信息" :column="2" border>
            <el-descriptions-item label="统一社会信用代码">{{ companyInfo.uniscId }}</el-descriptions-item>
            <el-descriptions-item label="工商注册号">{{ companyInfo.regNo }}</el-descriptions-item>
            <el-descriptions-item label="企业名称" >{{ companyInfo.entName }}</el-descriptions-item>
            <el-descriptions-item label="法人">{{ companyInfo.name }}</el-descriptions-item>
            <el-descriptions-item label="经营范围" :span="2">{{ companyInfo.opScope }}</el-descriptions-item>
        </el-descriptions>

        <el-descriptions class="margin-top" title="垂直无边框列表" :column="2" direction="vertical">
            <el-descriptions-item label="统一社会信用代码">{{ companyInfo.uniscId }}</el-descriptions-item>
            <el-descriptions-item label="工商注册号">{{ companyInfo.regNo }}</el-descriptions-item>
            <el-descriptions-item label="企业名称">{{ companyInfo.entName }}</el-descriptions-item>
            <el-descriptions-item label="法人">{{ companyInfo.name }}</el-descriptions-item>
            <el-descriptions-item label="经营范围" :span="2">{{ companyInfo.opScope }}</el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            companyInfo: {
                message: '',
                uniscId: '',
                regNo: '',
                entName: '',
                name: '',
                opScope: ''
            }
        }
    },
    methods: {
        onSubmit() {
            let _this = this;
            axios({
                method: 'get',
                headers: { 'appId': '123', 'sign': '123' },
                url: 'http://localhost:8081/company?creditCode=91110000100018988F',
            }).then(function (response) {
                //console.log(response)
                // alert(JSON.stringify(response.data))
                let json = response.data
                console.log(json)
                console.log(json.data)
                _this.companyInfo.uniscId = json.data.uniscId
                _this.companyInfo.regNo = json.data.regNo
                _this.companyInfo.entName = json.data.entName
                _this.companyInfo.name = json.data.name
                _this.companyInfo.message = '456'
                _this.companyInfo.opScope = json.data.opScope
            }).catch(function (error) {
                console.log(error)
            }).finally(function () {
                console.log("ok")
            });
        }
    }
}
</script>