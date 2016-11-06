(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController($scope) {


  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController($scope) {


  };

  ShoppingListCheckOffService.$inject = [''];
  function ShoppingListCheckOffService(){
    var service = this;

    // create two seperate arrays with items to buy or bought
    var items_tobuy = [{name: "monkeys", quantity: 10},
                       {name: "hats", quantity: 10},
                       {name: "bells", quantity: 20}
                       {name: "beer", quantity: 200}
                       {name: "television", quantity: 1}
                       {name: "speakers", quantity: 2}];
    var items_bought = [];

  };

})();
