//just list of stores
//calculates daily projection sales for each location
function randomCount(getRandomCustomerCount)
{

  for (var i = 0 ; i < this.hours.length ; i++) {
    var people = Math.random() * (this.max - this.min) + this.min;
  }

  //create a new array with same number of items but runs this code for each item
  return ;
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
function cookiesPerHour(generatedCookieCountByHour)
{
  /*
  return this.hours.map(function (hour) {
    return this.getRandomCustomerCount() * this.cookiesPerHour;
  });
  */

  var result = [];
  for (var i = 0; i < this.hours.length; i++) {
    var hour = hours[i];

    result[i] = this.getRandomCustomerCount() * this.cookiesPerHour;
  }
  return result;
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
  getRandomCustomerCount:randomCount,
  generatedCookieCountByHour:cookiesPerHour,
  generatedCookiesByDay:cookiesPerDay,
};
console.log(firstAndPike.hours.length);
//shouldbe15

var seaTacAirport = {min:3,
  max:24,
  cookiesPerSale:1.2,
  hours:[6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
  getRandomCustomerCount:randomCount,
  generatedCookieCountByHour:cookiesPerHour,
  generatedCookiesByDay:cookiesPerDay,
};
var seattleCenter = {min:11,
  max:38,
  cookiesPerSale:3.7,
  hours:[6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
  getRandomCustomerCount:randomCount,
  generatedCookieCountByHour:cookiesPerHour,
  generatedCookiesByDay:cookiesPerDay,
};

var capitolHill = {min:20,
  max:38,
  cookiesPerSale:2.3,
  hours:[6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
  getRandomCustomerCount:randomCount,
  generatedCookieCountByHour:cookiesPerHour,
  generatedCookiesByDay:cookiesPerDay,
};
var alki = {min:2,
  max:16,
  cookiesPerSale:4.6,
  hours:[6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
  getRandomCustomerCount:randomCount,
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
