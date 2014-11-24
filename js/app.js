cardapp = angular.module('cardapp',[]);

cardapp.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});

cardapp.controller('PlayingCardController', function($scope,$rootScope){
	var cardtype = {suit : ['spades', 'clubs', 'diams', 'hearts'],
					rank: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']};
	

$rootScope.cardlistplayer0 = [	{suit: 'spades', rank: 'K', priority: 2, point: 0},
							{suit: 'clubs', rank: 'A', priority: 1, point: 0},
							{suit: 'diams', rank: 'Q', priority: 3, point: 0},
							{suit: 'clubs', rank: 'J', priority: 4, point: 0},
							{suit: 'spades', rank: '10', priority: 5, point: 0},
							{suit: 'diams', rank: '9', priority: 6, point: 0},
							{suit: 'hearts', rank: 'A', priority: 1, point: 0},
							{suit: 'clubs', rank: '8', priority: 7, point: 0},
							{suit: 'spades', rank: 'J', priority: 4, point: 0},
							{suit: 'hearts', rank: 'Q', priority: 3, point: 0}];



})

cardapp.controller('FirstPersonController', function($scope, $rootScope){
	$scope.cardlist = $rootScope.cardlistplayer0;
	console.log($scope.cardlist);

	$scope.assignClass = function(card){
		return ['rank-'+card.rank, card.suit];
	}

})