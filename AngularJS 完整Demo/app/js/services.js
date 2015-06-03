var bookStoreServices = angular.module('bookStoreServices', []);

bookStoreServices.service('bookStoreService_1', ['$scope',
    function($scope) {}
]);

bookStoreServices.service('bookStoreService_2', ['$scope',
    function($scope) {}
]);


bookStoreServices.service('userListService', ['$http', function($http){
	var doRequest=function(username)
	{
		var promiseObj=$http({
			method:"Get",
			URL:"data.json"
		});
		return promiseObj;
	}

	return {
		userList:function(username){
			return doRequest(username);
		}
	}

}]);
