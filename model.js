//just list of stores
//calculates daily projection sales for each location
function StoreModel(name, minExpectedCustomers, minExpectedCustomers, cookiesPerSale, hours)
{
  this.min = minExpectedCustomers;
  this.max = minExpectedCustomers;
  this.cps = cookiesPerSale;
  this.hrs = hours;
  StoreModel.prototype.generateCustomersByHour = generateRandomCustomersByHour();
  StoreModel.prototype.generatedCookieCountByHour = cookiesPerHour();
  StoreModel.prototype.generatedCookiesByDay = cookiesPerDay();
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
    randomCustomersPerHour[i] = Math.random() * (this.max - this.min) + this.min;
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
  this.simulatedCookiesByDay = calculatedSum;

}

//put in if open or if colsed

// Add function to format 24-hour time as AM/PM
// Maybe update hours on all locations to use 24-hour time

/*var firstAndPike = {min:23,
  max:65,
  cookiesPerSale:6.3,
  //hours: specify the actual hours the store is open not the number of hours
  //hours: start at the first hour store opens and end with the last hour the store is open
  hours:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  generateCustomersByHour: generateRandomCustomersByHour,
  generatedCookieCountByHour: cookiesPerHour,
  generatedCookiesByDay: cookiesPerDay,
} ;

var seaTacAirport = {min:3,
  max:24,
  cookiesPerSale:1.2,
  hours:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  generateCustomersByHour: generateRandomCustomersByHour,
  generatedCookieCountByHour: cookiesPerHour,
  generatedCookiesByDay: cookiesPerDay,
};
var seattleCenter = {min:11,
  max:38,
  cookiesPerSale:3.7,
  hours:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  generateCustomersByHour: generateRandomCustomersByHour,
  generatedCookieCountByHour: cookiesPerHour,
  generatedCookiesByDay: cookiesPerDay,
};

var capitolHill = {min:20,
  max:38,
  cookiesPerSale:2.3,
  hours:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  generateCustomersByHour: generateRandomCustomersByHour,
  generatedCookieCountByHour: cookiesPerHour,
  generatedCookiesByDay: cookiesPerDay,
};
var alki = {min:2,
  max:16,
  cookiesPerSale:4.6,
  hours:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  generateCustomersByHour: generateRandomCustomersByHour,
  generatedCookieCountByHour: cookiesPerHour,
  generatedCookiesByDay: cookiesPerDay,
};*/

var listOfStores = [
  new StoreModel('First And Pike', 23, 65, 6.3),
  new StoreModel('SeaTac Airport', 3, 24, 1.2),
  new StoreModel('Seattle Center', 11, 38, 3.7),
  new StoreModel('Capitol Hill', 11, 38, 2.3),
  new StoreModel('Alki', 2, 16, 4.6),
];

console.log(listOfStores);
