let utils = {
    routerTo (_this,name,params={}) {
        _this.$router.push({name:name,params:params})
    },
    GetRequest() {
        var url = location.search;
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            var strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    },
    // 时间戳改时间 (年/月/日)
	foryear (now) {
		now = new Date(now);
		let year = now.getFullYear();
		let month = now.getMonth() + 1;
		let date = now.getDate();
		if(month < 10) {
			month = '0' + month;
		}
		if(date < 10) {
			date = '0' + date;
		}
		return year + "-" + month + "-" + date;
	},
	// 时间戳改时间 (时:分)
	fortime (now) {
		now = new Date(now);
		let hour = now.getHours();
		let minute = now.getMinutes();
		if (hour<10) {
			hour = '0' + hour;
		}
		if (minute<10) {
			minute = '0' + minute;
		}
		return hour + ":" + minute;
	}
}
export default utils