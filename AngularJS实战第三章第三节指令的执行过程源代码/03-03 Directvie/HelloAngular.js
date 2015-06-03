var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
        restrict: 'E',
        template: '<div>Hi everyone!</div>',
        replace: true,
        link:function(scope,element,attrs,controller){
        	element.on('mouseenter', function() {
        		console.log('mouse enter');
       		});
        }
    }
});