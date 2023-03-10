const baseUrl = "http://localhost:8081"

export default {
    method: 'get',
    baseUrl: baseUrl,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    data: {},
    timeout: 10000,
    withCredentials: true,
    responseType: 'json'
}