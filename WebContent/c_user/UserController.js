myApp.controller("UserController",function($scope,$http,$rootScope,$location)
		{
	
		$scope.User={loginName:'',password:'',name:'',email:'',mobile:'',address:'',role:''};
		
		$scope.register=function()
		{	
			$scope.User.role='User';
			
			$http.post('http://localhost:8080/CollRestController/user/register',$scope.User)
			.then(function(response)
					 {
					 console.log('The user registered successfully');
					 alert('User Registered Successfully');
					 console.log(response.statusText);
					 });
			
		}
		
		$scope.checklogin=function()
		{
			alert("Checking Login Process");
			
			$http.post('http://localhost:8080/CollRestController/user/checkcredentials',$scope.User)
			.then(function(response)
					{
						$scope.User=response.data;
						$rootScope.currentUser=$scope.User;
						console.log($rootScope.User);
						$location.path("/");
					});
		}
	
		});