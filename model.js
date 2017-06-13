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
function cookiesPerHour(generatedCookyCountByHour)
{

  for (var i = 0 ; i < this.getRandomCustomerCount.length ; i++)
  {
    calculatedProduct = multipy(this.cookiesPerSale, this.getRandomCustomerCount[i])[0];
  }
  return [calculatedProduct];
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

var firstAndPike = {min:23,
  max:65,
  cookiesPerSale:6.3,
  //hours: specify the actual hours the store is open not the number of hours
  //hours: start at the first hour store opens and end with the last hour the store is open
  hours:[6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
  getRandomCustomerCount:[],
  //firstAndPike.randomCount?
  //console.log(randomCount);
  generatedCookyCountByHour:[],
  //console.log(cookiesPerHour);
  generatedCookiesByDay:[],
  //console.log(cookiesPerDay);
};
console.log(firstAndPike.min);
console.log(firstAndPike.max);
console.log(firstAndPike.cookiesPerSale);
console.log(firstAndPike.hours.length);
//shouldbe15
console.log(firstAndPike.getRandomCustomerCount.length);
//shouldbe15
//console.log(firstAndPike.getRandomCustomerCount);
console.log(firstAndPike.generatedCookyCountByHour.length);
//shouldbe15
//console.log(firstAndPike.generatedCookyCountByHour);
console.log(firstAndPike.generatedCookiesByDay.length);
//shouldbe1
//console.log(firstAndPike.generatedCookiesByDay);

var seaTacAirport = {min:3,
  max:24,
  cookiesPerSale:1.2,
  hours:[6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
  getRandomCustomerCount:randomCount,
  //console.log(randomCount);
  generatedCookyCountByHour:cookiesPerHour,
  //console.log(cookiesPerHour);
  generatedCookiesByDay:cookiesPerDay,
  // console.log(cookiesPerDay);
};
var seattleCenter = {min:11,
  max:38,
  cookiesPerSale:3.7,
  hours:[6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
  getRandomCustomerCount:randomCount,
  //console.log(randomCount);
  generatedCookyCountByHour:cookiesPerHour,
  //console.log(cookiesPerHour);
  generatedCookiesByDay:cookiesPerDay,
  //console.log(cookiesPerDay);
};

var capitolHill = {min:20,
  max:38,
  cookiesPerSale:2.3,
  hours:[6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
  getRandomCustomerCount:randomCount,
  //console.log(randomCount);
  generatedCookyCountByHour:cookiesPerHour,
  //console.log(cookiesPerHour);
  generatedCookiesByDay:cookiesPerDay,
  //console.log(cookiesPerDay);
};
var alki = {min:2,
  max:16,
  cookiesPerSale:4.6,
  hours:[6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
  getRandomCustomerCount:randomCount,
  //console.log(randomCount);
  generatedCookyCountByHour:cookiesPerHour,
  //console.log(cookiesPerHour);
  generatedCookiesByDay:cookiesPerDay,
  //console.log(cookiesPerDay);
};

var storeModel = [firstAndPike,
  seaTacAirport,
  seattleCenter,
  capitolHill,
  alki,
];

console.log(storeModel.length);
