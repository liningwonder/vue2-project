<template>
    <div>
        <div>
            <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
        <div>
            <el-input placeholder="请输入内容" v-model="input2" :disabled="true"></el-input>
        </div>
        <div>
            <el-input placeholder="请输入内容" v-model="input3" clearable></el-input>
            <el-input placeholder="请输入密码" v-model="input4" show-password></el-input>
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
            <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea1"></el-input>
            <div style="margin: 20px 0;"></div>
            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入内容" v-model="textarea2">
            </el-input>
        </div>
        <div class="demo-input-suffix">
            属性方式：
            <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input1">
            </el-input>
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2">
            </el-input>
        </div>
        <div class="demo-input-suffix">
            slot 方式：
            <el-input placeholder="请选择日期" v-model="input3">
                <i slot="suffix" class="el-input__icon el-icon-date"></i>
            </el-input>
            <el-input placeholder="请输入内容" v-model="input4">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div>
        <div>
            <el-input placeholder="请输入内容" v-model="input1">
                <template slot="prepend">Http://</template>
            </el-input>
        </div>
        <div style="margin-top: 15px;">
            <el-input placeholder="请输入内容" v-model="input2">
                <template slot="append">.com</template>
            </el-input>
        </div>
        <div style="margin-top: 15px;">
            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="餐厅名" value="1"></el-option>
                    <el-option label="订单号" value="2"></el-option>
                    <el-option label="用户电话" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: '',
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            textarea: '',
            select: ''
        }
    }
}
</script>

<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>