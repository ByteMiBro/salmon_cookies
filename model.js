
function StoreModel(name, minExpectedCustomers, maxExpectedCustomers, cookiesPerSale, hours)
{
  this.min = minExpectedCustomers;
  this.max = maxExpectedCustomers;
  this.cps = cookiesPerSale;
  this.hours = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  this.generateCustomersByHour = generateRandomCustomersByHour;
  this.generatedCookieCountByHour = cookiesPerHour;
  this.generatedCookiesByDay = cookiesPerDay;

};

function generateRandomCustomersByHour()
{
/*  var hour = this.hours[i];
  return this.hours.map(function (hour, i)
  {
    return Math.random() * (this.max - this.min) + this.min;
  });*/
  var randomCustomersPerHour = [];

  for (var i = 0 ; i < this.hours.length ; i++) {
    // TODO: We should not have fractional customers
    randomCustomersPerHour[i] = Math.random() * (this.maxExpectedCustomers - this.minExpectedCustomers) + this.minExpectedCustomers;
  }

  this.simulatedCustomersByHour = randomCustomersPerHour;
}

function cookiesPerHour()
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
}
//check the amount of hours at every store then multipy that by
function cookiesPerDay()
{ //eslint-disable-line
  var calculatedSum = 0;
  for(var i = 0; i < this.hours.length; i++)
  {
    var valueFromArray = this.simulatedCookiesByHour[i];

    calculatedSum = (valueFromArray + calculatedSum);
  }
  this.simulatedCookiesByDay = calculatedSum;}

var listOfStores = [
  new StoreModel('First And Pike', 23, 65, 6.3),
  new StoreModel('SeaTac Airport', 3, 24, 1.2),
  new StoreModel('Seattle Center', 11, 38, 3.7),
  new StoreModel('Capitol Hill', 11, 38, 2.3),
  new StoreModel('Alki', 2, 16, 4.6),
];

console.log(listOfStores);
