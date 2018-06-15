myApp.controller("BlogCommentController",function($scope,$http,$rootScope,$location)
{
	$scope.blogCommentData;
	$scope.blogData;
	
	function listMyBlogComment()
	{
		$http.get('http://localhost:8084/ChatMiddleware/listAllBlogComments/'+$rootScope.blogid)
		.then(function(response)
				{
					$rootScope.blogCommentData=response.data;
					$rootScope.blogId=blogId;
					$location.path("/blogComment");
				});
	}
	
	function myBlog()
	{
		$http.get(""+$rootScope.blogId)
		.then(function(response)
				{
			$scope.blogData=response.data;
				});
	}
	
	myyBlog();
	
	listMyBlogComment();
});