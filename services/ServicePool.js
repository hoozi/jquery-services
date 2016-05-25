var $ = require("../jquery/jquery")

function ServicePool(){}
ServicePool.prototype = {

	/**
	 * 执行ajax，包括ajax、post、get等ajax方法
	 * @param  {String} type    各种ajax类型，包括简写的post，get
	 * @param  {object} options ajax的options  
	 */
	execute: function(type,options){
		$[type].call(this,options);
	}
}

$.extend({
	_services: {},

	/**
	 * 添加Service
	 * @param {String} name    service名称
	 * @param {Object} options 添加methods
	 * @return {Object} newService 返回一个新的Service
	 */
	addService: function(name, options){
		var newService = $.extend({}, new ServicePool(), options);
		$._services[name] = newService;
		return newService;
	},

	/**
	 * 根据name获得service
	 * @param  {String} name service名称
	 * @return {null}      
	 */
	getService: function(name){
		return $._services[name];
	}
});
module.exports = {
	addService: $.addService,
	getService: $.getService
};