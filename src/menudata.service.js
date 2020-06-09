(function () {
    'use strict';

    angular.module('MenuData')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var service = this;

        service.getAllCategories = function () {
            return $http({
                url:'https://davids-restaurant.herokuapp.com/categories.json',
                method: 'GET'
            }).then(function (response) {
                return response.data;
            }).catch(function (error) {
                console.log(error);
            });
        };

        service.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName
            }).then(function (response) {
                return response.data.menu_items;
            }).catch(function (error) {
                console.log(error);
            });
        };
    }

})();
