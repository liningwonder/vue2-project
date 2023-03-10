<template>
    <div>
        <el-button type="primary" @click="testAxios()">测试Axios调用</el-button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    methods: {
        testAxios() {
            axios({
                method: 'get',
                headers: {'appId': '123', 'sign': '123'},
                url: 'http://localhost:8081/company?creditCode=91110000100018988F',

            }).then(function (response) {
                console.log(response)
                alert(JSON.stringify(response.data))
            }).catch( function (error) {
                console.log(error)
            }).finally(function () {
                console.log("ok")
            });
            // axios.get('http://localhost:8081/company?creditCode=91110000100018988F')
            //     .then(function (response) {
            //         alert(JSON.stringify(response.data))
            //         console.log(response);
            //     }).catch(function (error) {
            //         console.log(error);
            //     }).finally(function () {
            //         console.log("finaly");
            //     }) 
            //axios.get('http://localhost:8081/company?creditCode=91110000100018988F').then(res => {alert(JSON.stringify(res.data))})
        }
    }
}
</script>