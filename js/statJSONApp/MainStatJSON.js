"use strict";
angular.module('MainStatJSON', [])
.controller('statJSONController', ['$state', '$interval','$timeout','$scope','$resource','$http',  function ($state, $interval, $timeout,$scope,$resource,$http) {
	var that = this;
    var stats = [];//store stats
  	

  	$http.get("test.json").then(function(param){
  		
  		var data=param.data;
  		var keys = Object.keys(data);//collect list of keys

  		for(var i=0;i<keys.length;i++){
  			var res =_.countBy(data[keys[i]],function(p){
  				return (p=="")?'empty':'filled';
  			});//count number of filled/empty values

  			if(res.empty === undefined || res.empty === null)
  				res.empty=0;
  			if(res.filled === undefined || res.filled === null)
  				res.filled=0;

  			if(data[keys[i]].new !== undefined){//if it contains "new" as an attribute
  				res.filled--;
  			}
  			
  			var value=(res.filled*100.0)/(res.filled+res.empty);
  			value=Math.round(value*100)/100;
  			var importance="";
  			if(value>=50)
  				importance="success";
  			else
  				importance="danger";
  			stats.push({"name":keys[i],"value":value,"importance":importance});
  		}
		
  		$scope.stats = stats;
  		
  	});


}])