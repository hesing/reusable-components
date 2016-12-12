(function() {
    angular.module("myApp")
        .controller('UsersCtrl', function($scope, UserService, alerting) {
        	
            UserService
            	.then(function(res){
            		$scope.photos = res.data;
            		alerting.addAlert('success', 'User fetched successfully');
            	});
        });
})();
