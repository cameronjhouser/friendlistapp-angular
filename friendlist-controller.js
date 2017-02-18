(function(){
	angular.module('friendlist')

	.controller('FriendListController', ['$scope', 'FriendListService', function($scope, FriendListService){
		var friendlist = this;
		var vm = $scope;
		//Need an array of friends
		friendlist.clearForm = function(){
			vm.newFriend.name = "";
			vm.newFriend.age = "";
		}
		friendlist.friend = {};
		friendlist.friends = FriendListService.getFriends();
		friendlist.addFriend = function(newFriend) {
			//console.log(newFriend);
			FriendListService.save(newFriend)
				.then(function(results){
					//console.log(results);
					//friendlist.friends.push(results.data);
					friendlist.clearForm();

				});
		};

			

		//need remove friend function
		friendlist.removeFriend = function(friend) {
			//console.log(friend);
			FriendListService.deleteFriend(friend);
			friendIndex = friendlist.friends.indexOf(friend);
			friendlist.friends.slice(friend, 1);
		}

	}]);
})();