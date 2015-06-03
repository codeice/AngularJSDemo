var bookStoreFilters = angular.module('bookStoreFilters', []);

bookStoreFilters.filter('bookStoreFilter_1', ['$scope',
    function($scope) {}
]);

bookStoreFilters.filter('bookStoreFilter_2', ['$scope',
    function($scope) {}
]);

bookStoreFilters.filter('filter1',function(){
	return function(item){
		return item+" test filter";
	};
});