//just list of stores
//calculates daily projection sales for each location
var storeModel = [firstAndPike,
  seaTacAirport,
  seattleCenter,
  capitolHill,
  alki,
];
function numberofStores()
{
  return storeModel.length;
}
//console.log(numberofStores)
function randomCount(getRandomCustomerCount)
{
  var calculatedSum = 0;
  for (var i = 0 ; i < this.hours.length ; i++)
  {
    calculatedSum = sum(Math.random() * (this.max - this.min),this.min)[0];
  }
  return [calculatedSum];
  //store values in array with same number of items as hours
}
//testRandomCount(getRandomCustomerCount)
// take number of average cookies times
function cookiesPerHour(generatedCookyCountByHour)
{
  var calculatedProduct = 1;
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
console.log(fristAndPike.getRandomCustomerCount.length);
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
