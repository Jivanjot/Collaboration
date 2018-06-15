var myApp=angular.module("myApp",['ngRoute','ngCookies']);

myApp.config(function($routeProvider)
		{
	        alert("I am route module");
	          $routeProvider.when("/",{templateUrl:"/index.html"})
	         .when("/login",{templateUrl:"c_user/Login.html"})
			 .when("/register",{templateUrl:"c_user/Register.html"})
			 .when("/aboutus",{templateUrl:"pages/AboutUs.html"})
		     .when("/contactus",{templateUrl:"pages/ContactUs.html"})
	         .when("/adminBlog",{templateUrl:"c_blog/AdminBlog.html"})
	         .when("/blog",{templateUrl:"c_blog/Blog.html"})
	         .when("/blogComment",{templateUrl:"c_blog/BlogComment.html"})
	         
		    .when("/myBlog",{templateUrl:"c_blog/MyBlog.html"})
		    .when("/showBlog",{templateUrl:"c_blog/ShowAllBlog.html"})
	        .when("/AdminForum",{templateUrl:"c_forum/AdminForum.html"})
	    	.when("/AddForum",{templateUrl:"c_forum/Forum.html"})
	    	.when("/ShowForum",{templateUrl:"c_forum/ShowForum.html"})
		    .when("/showFriendList",{templateUrl:"c_friend/showFriendList.html"})
		    .when("/showPendingFriendRequest",{templateUrl:"c_friend/showPendingFriendRequest.html"})
		   .when("/showSuggestedFriend",{templateUrl:"c_friend/showSuggestedFriend.html"})
		   .when("/chat",{templateUrl:"c_chat/Chat.html"})
		   .when("/uploadImage",{templateUrl:"c_user/uploadImage.html"})
		});

    myApp.run(function($rootScope,$cookieStore)
   {
     console.log(" i am in run function");
     console.log($rootScope.currentUser);
     
     if($rootScope.currentUser==undefined)
    	 {
           $rootScope.currentUser=$cookieStore.get("User");  	 
    	 }
    });