//Constructor for craftsman objects
function Craftsman(name, trade, workCost, popularity) {
  this.name = name;
  this.trade = trade;
  this.workCost = workCost;
  this.popularity = popularity === 0 ? popularity : 0; //starts at 0
  this.workWorth = function(market){
    var maxNetDiff = market.maxCostOfGoods - this.workCost;
    if (maxNetDiff <= 0) {
      this.popularity = this.popularity;
      console.log("That's ok, this consumer is probably a peasant");
    }else if(maxNetDiff < 100) {
      this.popularity = this.popularity + market.numSold;
      console.log(this.name + "'s work will sell in " + market.name);
    }else if(250 <= maxNetDiff <= 100){
      this.popularity = this.popularity + market.numSold;
      console.log(this.name + "'s work will sell well in" + market.name);
    }
    else {
      this.popularity = this.popularity + market.numSold;
      console.log("Wow" + this.name + " will probably sell out.");
    }
  };
};

//Constructor for consumer objects
function Consumer(wantedTrade, budget){
  this.wantedTrade = wantedTrade;
  this.budget = budget;
  this.afford = function(craftsman) {
    var budgetDiff = this.budget - craftsman.workCost
    if (this.wantedTrade == craftsman.trade && budgetDiff < 0){
      console.log(craftsman.name + " makes what you want but his/her work is too bourgie for you, peasant");
    }else if (this.wantedTrade == craftsman.trade && budgetDiff === 0){
      console.log(craftsman.name + " makes what you want but his/her work barely within your budget");
    }else if (this.wantedTrade == craftsman.trade && budgetDiff > 0){
      console.log(craftsman.name + " makes what you want and his/her work is affordable for you");
    }else{
      console.log(craftsman.name + " does not work in " + this.wantedTrade);
    }
  };
};

//Constructor for different market places
function marketPlace(name, minCostOfGoods, maxCostOfGoods, numSold) {
  this.name = name;
  this.minCostOfGoods = minCostOfGoods;
  this.maxCostOfGoods = maxCostOfGoods;
  this.numSold = numSold === 0 ? numSold : 0;
  this.canSell = function(consumer){
    var minDiff = consumer.budget - this.minCostOfGoods;
      if (minDiff < 0) {
        this.numSold = this.numSold;
        console.log("That's ok, this consumer is probably a peasant");
      }else if(minDiff <= 100) {
        this.numSold = this.numSold + 2;
        console.log("This consumer can barely afford anything in " + this.name);
      }else if(300 > minDiff > 100){
        this.numSold = this.numSold + 5;
        console.log("This consumer just bought an item and is probably pretty happy about it.");
      }
      else {
        this.numSold = this.numSold + 8;
        console.log(this.name + " should probably raise its prices.");
      }
    };

};


//Craftsman instances
var John = new Craftsman("John", "woodwork", 300, 0);
var Jack = new Craftsman("Jack", "woodwork", 500, 0);
var Jill = new Craftsman("Jill", "woodwork", 700, 0);
var Alex = new Craftsman("Alex", "painting", 900, 0);
var Jack = new Craftsman("Jack", "painting", 400, 0);
var Sam = new Craftsman("Sam", "painting", 200, 0);
var Jill = new Craftsman("Jill", "pottery", 500, 0);
var Alex = new Craftsman("Alex", "pottery", 800, 0);
var Sam = new Craftsman("Sam", "pottery", 200, 0);

//marketPlace instances
var farmerMarket = new marketPlace("Farmer's Market", 100, 500, 0);
var antiqueStore = new marketPlace("Antiques", 500, 1000, 0);
var gallery = new marketPlace("Gallery", 300, 900, 0);
var countryStore = new marketPlace("Country Store", 100, 400, 0);
var anotherGallery = new marketPlace("Fancy Gallery", 600, 1000, 0);

//Consumer instances
var one = new Consumer("woodwork", 500);
var two = new Consumer("woodwork", 1200);
var three = new Consumer("woodwork", 450);
var four = new Consumer("painting", 300);
var five = new Consumer("painting", 1200);
var six = new Consumer("painting", 650);
var seven = new Consumer("pottery", 600);
var eight = new Consumer("pottery", 800);
var nine = new Consumer("pottery", 350);
