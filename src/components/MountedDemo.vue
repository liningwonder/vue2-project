<template>
    <div>
        <el-descriptions class="margin-top" title="企业基本信息" :column="2" :size="size" border>
            <el-descriptions-item label="企业名称">{{ companyInfo.entName }}</el-descriptions-item>
            <el-descriptions-item label="统一社会信用代码">{{ companyInfo.uniscId }}</el-descriptions-item>
            <el-descriptions-item label="法人">{{ companyInfo.name }}</el-descriptions-item>
            <el-descriptions-item label="工商注册号">{{ companyInfo.regNo }}</el-descriptions-item>
            <el-descriptions-item label="经营范围" :span="2">{{ companyInfo.opScope }}</el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-mobile-phone"></i>
                    手机号
                </template>
                18100000000
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-location-outline"></i>
                    居住地
                </template>
                苏州市
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-office-building"></i>
                    联系地址
                </template>
                江苏省苏州市吴中区吴中大道 1188 号
            </el-descriptions-item>
        </el-descriptions>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            companyInfo: {
                uniscId: '',
                regNo: '',
                entName: '',
                name: '',
                opScope: ''
            }
        }
    },
    mounted() {
        let _this = this
        axios({
            method: 'get',
            headers: { 'appId': '123', 'sign': '123' },
            url: 'http://localhost:8081/company?creditCode=91110000100018988F',
        }).then(function (response) {
            let json = response.data
            _this.companyInfo.uniscId = json.data.uniscId
            _this.companyInfo.regNo = json.data.regNo
            _this.companyInfo.entName = json.data.entName
            _this.companyInfo.name = json.data.name
            _this.companyInfo.opScope = json.data.opScope
        }).finally(function () {

        })
    }
}
</script>