myApp.controller("BlogController",function($scope,$http,$rootScope,$location)
{
	$scope.blog={'blogId':0,'blogName':'','blogContent':'','createDate':'','likes':0,'loginName':'','status':''};
	
	//$scope.blogData;
	$scope.allBlogData;
	//$scope.myBlogs;
	
	$scope.insertBlog=function()
	{
		console.log('Adding Blog Information');
		$scope.blog.loginName=$rootScope.currentUser.loginName;
		alert($scope.blog.loginName);
		$http.post('http://localhost:8080/CollRestController/addBlog',$scope.blog)
		.then(function(response)
		{
			
			$location.path('/blog');
		});
	}
	/*
	$scope.blogComment(blogid)
	{
		$rootScope.blogid=blogid;
		$location.path("/blogComment");
	}
	*/
	$scope.incLikes=function(blogid)
	{
		console.log('Incrment Likes');
		$http.get('http://localhost:8080/CollRestController/incrementLike/'+blogid)
		.then(function(response)
				{
				$location.path('/blog');
				});
	}
	/*
	 $scope.blogComment=function(blogid)
	 {
		 $rootScope.blogid=blogid;
		 $location.path("/");
		 
	 }
	*/
	$scope.approve=function(blogId)
	{
		console.log('Approve the Blog');
		$http.get('http://localhost:8080/CollRestController/approveBlog/'+blogId)
		.then(function(response)
		{
			alert("approved");
		});
	}
		
	$scope.reject=function(blogId)
	{
		console.log('Reject the Blog');
		$http.get('http://localhost:8080/CollRestController/rejectBlog/'+blogId)
		.then(function(response)
				{
					alert("rejected");
				});
	 
	}
	
	function listAllBlogs()
	{
		console.log('List All Blog');
		$http.get('http://localhost:8080/CollRestController/listAllBlogs')
		.then(function(response)
				{
					console.log(response.data);
					$scope.allBlogData=response.data;
				});
	}
	
	/*function myBlogs()
	{
		console.log('List of My Blog');
		$http.get('http://localhost:8080/CollRestController/showAllBlogs')
		.then(function(response)
				{
				console.log(response.data);
				$scope.myBlogs=response.data;
				});
	}*/
	
	$scope.deleteBlog=function(blogId)
	{
		$http.get('http://localhost:8080/CollRestController/deleteBlog/'+blogId)
		.then(function(response)
				{
				console.log(response.data);
				});
	}

	listAllBlogs();
//	myBlogs();
});
		