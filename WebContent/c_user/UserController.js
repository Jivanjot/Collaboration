myApp.controller("UserController",function($scope,$http,$rootScope,$location)
		{
	
		$scope.User={loginName:'',password:'',name:'',email:'',mobile:'',address:'',role:''};
		$scope.ProfilePicture={loginName:'',image:''};
		$scope.image1;
		
		
		$scope.uploadImage=function()
		{
			$scope.ProfilePicture.loginName=$rootScope.currentUser.loginName;
			$http.post('http://localhost:8080/CollRestController/uploadImage',$scope.ProfilePicture)
			.then(function(response)
					{
				alert("updated");
					});
			
		}
		
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
						$cookieStore.put("User",response.data);//data writtrn into cookie store
						$location.path("/");
					});
			
			$http.get('http://localhost:8080/CollRestController/getPicture/'+$rootScope.currentUser.loginName)
			.then(function(response)
					{
				$scope.image1=response.data;
					});
			
		}
		
		$scope.logout=function(){
			
			delete $rootScope.currentUser;
			$location.path("/");
			
		}
	
		});