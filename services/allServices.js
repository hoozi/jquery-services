var services = require("./ServicePool.js");
services.addService("post",{
	getPost: function(a,b) {
		this.execute("ajax", {
			url:"../data/post.json",
			type:"get",
			dataType:"json",
			success: a,
			error: b
		})
	}
})
services.addService("qq",{
	getQQ: function(a,b) {
		this.execute("ajax", {
			url:"../data/qq.json",
			type:"get",
			dataType:"json",
			success: a,
			error: b
		})
	}
})
module.exports = services;