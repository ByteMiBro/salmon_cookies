//just list of stores
//calculates daily projection sales for each location
function generateRandomCustomersByHour()
{
  var randomCustomersPerHour = [];

  for (var i = 0 ; i < this.hours.length ; i++) {
    // TODO: We should not have fractional customers
    randomCustomersPerHour[i] = Math.random() * (this.max - this.min) + this.min;
  }
//ok
  //create a new array with same number of items but runs this code for each item
  this.simulatedCustomersByHour = randomCustomersPerHour;
}

/*function customersForEachhour(getRandomCustomerCount)
{
  var calculatedProduct = 1;
  for (var i = 0 ; i < this.hours.length ; i++)
  {
    var newArray = this.hours.length;
    calculatedProduct = multiply(newArray,randomCustomer)[0];
  }
  return [calculatedProduct];
}*/
//testRandomCount(getRandomCustomerCount)
// take number of average cookies times
function cookiesPerHour()
{
  /*
  return this.hours.map(function (hour, i) {
    return this.simulatedCustomersByHour[i] * this.cookiesPerSale;
  });
  */

  var result = [];
  for (var i = 0; i < this.hours.length; i++) {
    var hour = this.hours[i];

    result[i] = this.simulatedCustomersByHour[i] * this.cookiesPerSale;
  }
  this.simulatedCookiesByHour = result;
}
//ceck the amount of hours at every store then multipy that by
function cookiesPerDay(generatedCookiesByDay)
{
  var calculatedSum = 0;
  for(i = 0 ; i < this.hours.length ; i++)
  {
    var valueFromArray = this.getRandomCustomerCount[i];
    calculatedSum = sum(valueFromArray, calculatedSum)[0];
  }
  return generatedCookiesByDay;
}

//put in if open or if colsed

// TODO: Add function to format 24-hour time as AM/PM
// TODO: Maybe update hours on all locations to use 24-hour time

var firstAndPike = {min:23,
  max:65,
  cookiesPerSale:6.3,
  //hours: specify the actual hours the store is open not the number of hours
  //hours: start at the first hour store opens and end with the last hour the store is open
  hours:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  generateCustomersByHour: generateRandomCustomersByHour,
  generatedCookieCountByHour:cookiesPerHour,
  generatedCookiesByDay:cookiesPerDay,
};
console.log(firstAndPike.hours.length);
//shouldbe15

var seaTacAirport = {min:3,
  max:24,
  cookiesPerSale:1.2,
  hours:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  generateCustomersByHour: generateRandomCustomersByHour,
  generatedCookieCountByHour:cookiesPerHour,
  generatedCookiesByDay:cookiesPerDay,
};
var seattleCenter = {min:11,
  max:38,
  cookiesPerSale:3.7,
  hours:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  generateCustomersByHour: generateRandomCustomersByHour,
  generatedCookieCountByHour:cookiesPerHour,
  generatedCookiesByDay:cookiesPerDay,
};

var capitolHill = {min:20,
  max:38,
  cookiesPerSale:2.3,
  hours:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  generateCustomersByHour: generateRandomCustomersByHour,
  generatedCookieCountByHour:cookiesPerHour,
  generatedCookiesByDay:cookiesPerDay,
};
var alki = {min:2,
  max:16,
  cookiesPerSale:4.6,
  hours:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  generateCustomersByHour: generateRandomCustomersByHour,
  generatedCookieCountByHour:cookiesPerHour,
  generatedCookiesByDay:cookiesPerDay,
};

var storeModel = [firstAndPike,
  seaTacAirport,
  seattleCenter,
  capitolHill,
  alki,
];

console.log(storeModel);
