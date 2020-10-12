var baseURL = "http://ajax.frontend.itheima.net"
// 拦截所有ajax请求  
// 处理参数 
$.ajaxPrefilter(function (params) {
    params.url = baseURL + params.url;
    if (params.url.indexOf('/my/') !== -1) {
        params.headers = {
            Authorization:localStorage.getItem('token') || ''
        }
    }
    params.complete = function (res) {
        console.log(res.responseJSON);
        var obj = res.responseJSON;
        if (obj.status == 1 && obj.message == '身份认证失败') {
            localStorage.removeItem('token')
        location.href = '/login.html'
        }
    }
})