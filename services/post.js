var post = require("./allServices");

post.getService("post").getPost(function(data){
	$("#text").text(data.success)
},function(data){
	alert("error!")
})