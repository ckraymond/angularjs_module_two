(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var showToBuy = this;

    showToBuy.items_tobuy = ShoppingListCheckOffService.getToBuy();

    showToBuy.moveToBought = function (itemIndex){
      ShoppingListCheckOffService.moveToBought(itemIndex);
      if (showToBuy.items_tobuy.length == 0) {
        showToBuy.toBuyEmpty = ShoppingListCheckOffService.getBuyEmpty();
      };
    };
  };


  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var showBought = this;

    showBought.items_bought = ShoppingListCheckOffService.getBought();
    showBought.boughtEmpty = function() {
      if (showBought.items_bought.length == 0) {
        return true;
      } else {
        return false;
      }
    }
  };


  function ShoppingListCheckOffService(){
    var service = this;

    // create two seperate arrays with items to buy or bought
    var items_tobuy = [{name: "monkeys", quantity: 10},
                       {name: "hats", quantity: 10},
                       {name: "bells", quantity: 20},
                       {name: "beer", quantity: 20},
                       {name: "television", quantity: 1},
                       {name: "speakers", quantity: 2},
                       {name: "Banana Chips", quantity: 1000}];
    var items_bought = [];

    service.getToBuy = function (){
      return items_tobuy;
    };

    service.getBought = function (){
      return items_bought;
    };

    service.getBuyEmpty = function(){
      if (items_tobuy.length == 0){
        return true;
      } else {
        return false;
      };
    };

    service.moveToBought = function(itemIdex){
      items_bought.push(items_tobuy[itemIdex]);
      items_tobuy.splice(itemIdex,1);
    };
  };

})();

// Minified Javascript test
// !function(){"use strict";function t(t){var e=this;e.items_tobuy=t.getToBuy(),e.moveToBought=function(n){t.moveToBought(n),0==e.items_tobuy.length&&(e.toBuyEmpty=t.getBuyEmpty())}}function e(t){var e=this;e.items_bought=t.getBought(),e.boughtEmpty=function(){return 0==e.items_bought.length?!0:!1}}function n(){var t=this,e=[{name:"monkeys",quantity:10},{name:"hats",quantity:10},{name:"bells",quantity:20},{name:"beer",quantity:20},{name:"television",quantity:1},{name:"speakers",quantity:2},{name:"Banana Chips",quantity:1e3}],n=[];t.getToBuy=function(){return e},t.getBought=function(){return n},t.getBuyEmpty=function(){return 0==e.length?!0:!1},t.moveToBought=function(t){n.push(e[t]),e.splice(t,1)}}angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",t).controller("AlreadyBoughtController",e).service("ShoppingListCheckOffService",n),t.$inject=["ShoppingListCheckOffService"],e.$inject=["ShoppingListCheckOffService"]}();
