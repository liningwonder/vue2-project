<template>
    <div>
        <div>
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                    <i class="el-icon-edit"></i>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div>
            <el-col :span="12">
                <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="1">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </div>
        <div>
            <el-row>
                <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="image">
                        <div style="padding: 14px;">
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ currentDate }}</time>
                                <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        <div>
            <el-button type="primary" @click="onSubmit">立即查询</el-button>
        </div>
        <div>
            <el-table :data="tableData" highlight-current-row @current-change="handleCurrentChange" height="250" stripe
                style="width: 100%" max-height="500">
                <el-table-column type="selection" width="55" fixed>
                </el-table-column>
                <el-table-column type="index" width="50" fixed>
                </el-table-column>
                <el-table-column prop="date" label="日期" width="180" fixed>
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
                <el-table-column prop="address1" label="地址1">
                </el-table-column>
                <el-table-column prop="address2" label="地址2">
                </el-table-column>
                <el-table-column prop="address3" label="地址3">
                </el-table-column>
                <el-table-column prop="address4" label="地址4">
                </el-table-column>
                <el-table-column prop="address5" label="地址5">
                </el-table-column>
                <el-table-column prop="address6" label="地址6">
                </el-table-column>
                <el-table-column prop="address7" label="地址6">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <el-button type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [],
            currentDate: new Date()
        }
    },
    methods: {
        setCurrent(row) {
            this.$refs.singleTable.setCurrentRow(row);
        },
        handleCurrentChange(val) {
            this.currentRow = val;
            console.log(this.currentRow.name)
        },
        onSubmit() {
            this.tableData = [
                {
                    date: '2016-05-02',
                    name: '王小虎2',
                    address: '上海市普陀区金沙江路 1518 弄',
                    address1: '上海市普陀区金沙江路 1518 弄',
                    address2: '上海市普陀区金沙江路 1518 弄',
                    address3: '上海市普陀区金沙江路 1518 弄',
                    address4: '上海市普陀区金沙江路 1518 弄',
                    address5: '上海市普陀区金沙江路 1518 弄',
                    address6: '上海市普陀区金沙江路 1518 弄',
                    address7: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    address1: '上海市普陀区金沙江路 1518 弄',
                    address2: '上海市普陀区金沙江路 1518 弄',
                    address3: '上海市普陀区金沙江路 1518 弄',
                    address4: '上海市普陀区金沙江路 1518 弄',
                    address5: '上海市普陀区金沙江路 1518 弄',
                    address6: '上海市普陀区金沙江路 1518 弄',
                    address7: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    address1: '上海市普陀区金沙江路 1518 弄',
                    address2: '上海市普陀区金沙江路 1518 弄',
                    address3: '上海市普陀区金沙江路 1518 弄',
                    address4: '上海市普陀区金沙江路 1518 弄',
                    address5: '上海市普陀区金沙江路 1518 弄',
                    address6: '上海市普陀区金沙江路 1518 弄',
                    address7: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    address1: '上海市普陀区金沙江路 1518 弄',
                    address2: '上海市普陀区金沙江路 1518 弄',
                    address3: '上海市普陀区金沙江路 1518 弄',
                    address4: '上海市普陀区金沙江路 1518 弄',
                    address5: '上海市普陀区金沙江路 1518 弄',
                    address6: '上海市普陀区金沙江路 1518 弄',
                    address7: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    address1: '上海市普陀区金沙江路 1518 弄',
                    address2: '上海市普陀区金沙江路 1518 弄',
                    address3: '上海市普陀区金沙江路 1518 弄',
                    address4: '上海市普陀区金沙江路 1518 弄',
                    address5: '上海市普陀区金沙江路 1518 弄',
                    address6: '上海市普陀区金沙江路 1518 弄',
                    address7: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    address1: '上海市普陀区金沙江路 1518 弄',
                    address2: '上海市普陀区金沙江路 1518 弄',
                    address3: '上海市普陀区金沙江路 1518 弄',
                    address4: '上海市普陀区金沙江路 1518 弄',
                    address5: '上海市普陀区金沙江路 1518 弄',
                    address6: '上海市普陀区金沙江路 1518 弄',
                    address7: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    address1: '上海市普陀区金沙江路 1518 弄',
                    address2: '上海市普陀区金沙江路 1518 弄',
                    address3: '上海市普陀区金沙江路 1518 弄',
                    address4: '上海市普陀区金沙江路 1518 弄',
                    address5: '上海市普陀区金沙江路 1518 弄',
                    address6: '上海市普陀区金沙江路 1518 弄',
                    address7: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    address1: '上海市普陀区金沙江路 1518 弄',
                    address2: '上海市普陀区金沙江路 1518 弄',
                    address3: '上海市普陀区金沙江路 1518 弄',
                    address4: '上海市普陀区金沙江路 1518 弄',
                    address5: '上海市普陀区金沙江路 1518 弄',
                    address6: '上海市普陀区金沙江路 1518 弄',
                    address7: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    address1: '上海市普陀区金沙江路 1518 弄',
                    address2: '上海市普陀区金沙江路 1518 弄',
                    address3: '上海市普陀区金沙江路 1518 弄',
                    address4: '上海市普陀区金沙江路 1518 弄',
                    address5: '上海市普陀区金沙江路 1518 弄',
                    address6: '上海市普陀区金沙江路 1518 弄',
                    address7: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    address1: '上海市普陀区金沙江路 1518 弄',
                    address2: '上海市普陀区金沙江路 1518 弄',
                    address3: '上海市普陀区金沙江路 1518 弄',
                    address4: '上海市普陀区金沙江路 1518 弄',
                    address5: '上海市普陀区金沙江路 1518 弄',
                    address6: '上海市普陀区金沙江路 1518 弄',
                    address7: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    address1: '上海市普陀区金沙江路 1518 弄',
                    address2: '上海市普陀区金沙江路 1518 弄',
                    address3: '上海市普陀区金沙江路 1518 弄',
                    address4: '上海市普陀区金沙江路 1518 弄',
                    address5: '上海市普陀区金沙江路 1518 弄',
                    address6: '上海市普陀区金沙江路 1518 弄',
                    address7: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    address1: '上海市普陀区金沙江路 1518 弄',
                    address2: '上海市普陀区金沙江路 1518 弄',
                    address3: '上海市普陀区金沙江路 1518 弄',
                    address4: '上海市普陀区金沙江路 1518 弄',
                    address5: '上海市普陀区金沙江路 1518 弄',
                    address6: '上海市普陀区金沙江路 1518 弄',
                    address7: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    address1: '上海市普陀区金沙江路 1518 弄',
                    address2: '上海市普陀区金沙江路 1518 弄',
                    address3: '上海市普陀区金沙江路 1518 弄',
                    address4: '上海市普陀区金沙江路 1518 弄',
                    address5: '上海市普陀区金沙江路 1518 弄',
                    address6: '上海市普陀区金沙江路 1518 弄',
                    address7: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    address1: '上海市普陀区金沙江路 1518 弄',
                    address2: '上海市普陀区金沙江路 1518 弄',
                    address3: '上海市普陀区金沙江路 1518 弄',
                    address4: '上海市普陀区金沙江路 1518 弄',
                    address5: '上海市普陀区金沙江路 1518 弄',
                    address6: '上海市普陀区金沙江路 1518 弄',
                    address7: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    address1: '上海市普陀区金沙江路 1518 弄',
                    address2: '上海市普陀区金沙江路 1518 弄',
                    address3: '上海市普陀区金沙江路 1518 弄',
                    address4: '上海市普陀区金沙江路 1518 弄',
                    address5: '上海市普陀区金沙江路 1518 弄',
                    address6: '上海市普陀区金沙江路 1518 弄',
                    address7: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    address1: '上海市普陀区金沙江路 1518 弄',
                    address2: '上海市普陀区金沙江路 1518 弄',
                    address3: '上海市普陀区金沙江路 1518 弄',
                    address4: '上海市普陀区金沙江路 1518 弄',
                    address5: '上海市普陀区金沙江路 1518 弄',
                    address6: '上海市普陀区金沙江路 1518 弄',
                    address7: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    address1: '上海市普陀区金沙江路 1518 弄',
                    address2: '上海市普陀区金沙江路 1518 弄',
                    address3: '上海市普陀区金沙江路 1518 弄',
                    address4: '上海市普陀区金沙江路 1518 弄',
                    address5: '上海市普陀区金沙江路 1518 弄',
                    address6: '上海市普陀区金沙江路 1518 弄',
                    address7: '上海市普陀区金沙江路 1518 弄'
                }
            ]
        }
    }
}
</script>

<style>
.el-table .warning-row {
    background: oldlace;
}

.el-table .success-row {
    background: #f0f9eb;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>