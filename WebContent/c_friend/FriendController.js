myApp.controller("FriendController",function($scope,$http,$rootScope,$location)
		{
	
	    
	      $scope.Friend={friendId:'',loginName:'',friendLoginName:'',status:''};
	      $scope.showFriendList;
	      $scope.showPendingFriendRequest;
	      $scope.showSuggestedFriend;
	      
	       function showFriendList()
	      {
	    	
	    	//alert("Checking showFriendList");
	    	
	    	$http.get('http://localhost:8080/CollRestController/showFriendList')
	    	.then(function(response){
	    	
	    		$scope.showFriendList=response.data;
	    		console.log($scope.showFriendList);
	    	});
	 	      }
	      
	       
	       function showPendingFriendRequest()
	       {
	    	  // alert("in pending friends")
	    	 $http.get('http://localhost:8080/CollRestController/showPendingFriendRequest')
	    	 .then(function(response){
	    		 
	    		 $scope.showPendingFriendRequest=response.data;
	    	 });
	       }
	       
	       function showSuggestedFriend()
	       {
	    	  
	    	  // alert("in suggested friends")
	    	   $http.get('http://localhost:8080/CollRestController/showSuggestedFriend')
	    	   .then(function(response)
	    		{
	    		   $scope.showSuggestedFriend=response.data;
	    		 
	    		});
	    	   
	    	   
	       }
	       
	       
	       
	       
	       $scope.unfriend=function(friendId)
	       {
	    	   console.log('in function unfriend');
	    	   $http.get('http://localhost:8080/CollRestController/deleteFriendRequest/'+friendId)
	    	   .then(function(response)
	    			   {
	    		      $location.path('/showFriendList');
	    		   
	    			   });
	    	   
	       }
	      
	   $scope.sendFriendRequest=function(loginName){
		   
		   $scope.Friend.friendLoginName=loginName;
		   $scope.Friend.loginName=$rootScope.currentUser.loginName;
		   
		 
		   $http.post('http://localhost:8080/CollRestController/sendFriendRequest',$scope.Friend)
		   .then(function(response)
				   {
			   $location.path('/showFriendList');
		   });
	   }
	       
	   $scope.acceptFriendRequest=function(friendId)
	  {
		   $http.get('http://localhost:8080/CollRestController/acceptFriendRequest/'+friendId)
		   .then(function(response)
				   {
			   $location.path('/showFriendList');
			   
				   });
		   
	  } 
	   
	   showFriendList(),
	   showPendingFriendRequest(),
	   showSuggestedFriend();
	
		});