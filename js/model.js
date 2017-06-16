'use strict';
function StoreModel(name, minExpectedCustomers, maxExpectedCustomers, cookiesPerSale, hours)
{
  this.name = name;
  this.minExpectedCustomers = minExpectedCustomers;
  this.maxExpectedCustomers = maxExpectedCustomers;
  this.cookiesPerSale = cookiesPerSale;
  this.hours = hours;
  this.generateRandomCustomersByHour();
  this.cookiesPerHour();
  this.cookiesPerDay();

};
/*StoreModel.prototype.hours = function(){
  [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
};*/
StoreModel.prototype.generateRandomCustomersByHour = function()
{
/*  var hour = this.hours[i];
  return this.hours.map(function (hour, i)
  {
    return Math.random() * (this.max - this.min) + this.min;
  });*/
  var randomCustomersPerHour = [];

  for (var i = 0 ; i < this.hours.length ; i++) {
    // : We should not have fractional customers
    randomCustomersPerHour[i] = Math.random() * (this.maxExpectedCustomers - this.minExpectedCustomers) + this.minExpectedCustomers;
  }

  this.simulatedCustomersByHour = randomCustomersPerHour;
};

StoreModel.prototype.cookiesPerHour = function()
{
  /*
  return this.hours.map(function (hour, i) {
    return this.simulatedCustomersByHour[i] * this.cookiesPerSale;
  });
  */

  var result = [];
  for (var i = 0; i < this.hours.length; i++) {
    //var hour = this.hours[i];

    result[i] = this.simulatedCustomersByHour[i] * this.cookiesPerSale;
  }
  this.simulatedCookiesByHour = result;
};
//check the amount of hours at every store then multipy that by
StoreModel.prototype.cookiesPerDay = function ()
{ //eslint-disable-line
  var calculatedSum = 0;
  for(var i = 0; i < this.hours.length; i++)
  {
    var valueFromArray = this.simulatedCookiesByHour[i];

    calculatedSum = (valueFromArray + calculatedSum);
  }
  this.simulatedCookiesByDay = calculatedSum;
} ;

var firstAndPike = new StoreModel('First And Pike', 23, 65, 6.3, [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);

var seaTacAirport = new StoreModel('SeaTac Airport', 3, 24, 1.2, [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);

var seattleCenter = new StoreModel('Seattle Center', 11, 38, 3.7, [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);

var capitolHill = new StoreModel('Capitol Hill', 11, 38, 2.3, [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);

var alki = new StoreModel('Alki', 2, 16, 4.6, [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);

var listOfStores = [
  new StoreModel('First And Pike', 23, 65, 6.3, [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
  new StoreModel('SeaTac Airport', 3, 24, 1.2, [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
  new StoreModel('Seattle Center', 11, 38, 3.7, [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
  new StoreModel('Capitol Hill', 11, 38, 2.3, [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
  new StoreModel('Alki', 2, 16, 4.6, [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
];
console.log(firstAndPike);
console.log(seaTacAirport);
console.log(seattleCenter);
console.log(capitolHill);
console.log(alki);
console.log(listOfStores);
