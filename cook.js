angular.module("myapp",['ngCookies'])
.controller("c1",function($scope,$cookies){
	$scope.fun=function(){
		$scope.t2=$cookies.get($scope.t1)
	}
        $scope.funlogin=function(){
        	if($scope.chk1==true)
        	{
        		$cookies.put($scope.t1,$scope.t2)
        	}
        
 }
	})