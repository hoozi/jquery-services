var post = require("./allServices");

post.getService("qq").getQQ(function(data){
	$("#qq").text(data.success)
},function(data){
	alert("error!")
})