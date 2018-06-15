myApp.controller("forumController",function($scope,$rootScope,$location,$http)
{
	$scope.forum={'forumId':0,'forumName':'','forumContent':'','createDate':'','likes':0,'loginName':'','status':''};
	
	$scope.listForumData;
	
	$scope.approvedForumList;
	
	$scope.insertForum=function()
	{
		alert("Inserting the Forum Data");
		alert("Forum Name:"+$scope.forum.forumName);
		alert("Forum Content :"+$scope.forum.forumContent);
		$scope.forum.loginName=$rootScope.currentUser.loginName;
		alert("Forum Content :"+$scope.forum.loginName);
		$http.post("http://localhost:8080/CollRestController/addForum",$scope.forum)
		.then(function(response)
				{
					alert("Status Text:"+response.statusText);
					$location.path('/AddForum');
					
				})
	}
	
	$scope.incLikes=function(forumId)
	{
		$http.get("http://localhost:8080/CollRestController/incLikes/"+forumId)
		.then(function(response)
				{
			alert("increment done");
			$location.path("/ShowForum")
			
				})
		
	}
	$scope.approveForum=function(forumId)
	{
		$http.get("http://localhost:8080/CollRestController/approveForum/"+forumId)
		.then(function(response)
				{
			alert("approved");
				});
		
	}
	$scope.rejectForum=function(forumId)
	{
		$http.get("http://localhost:8080/CollRestController/rejectForum/"+forumId)
		.then(function(response)
				{
			alert("rejected");
				});
	}
	
	function showForumList()
	{
		$http.get("http://localhost:8080/CollRestController/listForum")
		.then(function(response)
				{
					$scope.listForumData=response.data;
					console.log($scope.listForumData);
				});
	}
	
	showForumList();
	
});