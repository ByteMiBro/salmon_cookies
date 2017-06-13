//just list of stores
//calculates daily projection sales for each location
var storeModel = [{firstAndPike},
                  {seaTacAirport},
                  {seattleCenter},
                  {capitolHill},
                  {alki},
                  ]
function numberofStores()
{
  return storeModel.length;
}

function randomCount(customersArray)
{
  for (var i = 0 ; i < this.hours.length ; i++){
    Math.random() * (this.max - this.min) + this.min;
  }
  return customersArray
  //store values in array with same number of items as hours
}
// take number of average cookies times
function cookiesPerHour(hourlyCookyArray)
{
  for (var i = 0 ; i < this.hours.length ; i++)
  {
    this.cookiesPerSale * this.customersArray[i];
  }
  return hourlyCookyArray
}
//ceck the amount of hours at every store then multipy that by
function cookiesPerDay(totalLocationCookies)
{
  var calculatedSum = 0;
  for(i = 0 ; i < this.hours.length ; i++)
  {
    var valueFromArray = this.customersArray[i];
    calculatedSum = sum(valueFromArray, calculatedSum)[0];
  }
  return totalLocationCookies;
}

//put in if open or if colsed

var firstAndPike = {min:23,
                  max:65,
                  cookiesPerSale:6.3,
                  //hours: specify the actual hours the store is open not the number of hours
                  //hours: start at the first hour store opens and end with the last hour the store is open
                  hours:[6,7,8,9,10,11,12,1,2,3,4,5,6,7,8],
                  getRandomCustomerCount:randomCount,
                  customersArray:[]
                  //firstAndPike.randomCount?
                  //console.log(randomCount);
                  generatedCookyCountByHour:cookiesPerHour,
                  hourlyCookyArray:[]
                  //console.log(cookiesPerHour);
                  generatedCookiesByDay:cookiesPerDay,
                  totalLocationCookies:[]
                  //console.log(cookiesPerDay);
                  }
                  console.log(firstAndPike.min);
                  console.log(firstAndPike.max);
                  console.log(firstAndPike.cookiesPerSale);
                  console.log(firstAndPike.hours.length);
                  console.log(firstAndPike.customersArray);
                  console.log(firstAndPike.hourlyCookyArray);
                  console.log(firstAndPike.totalLocationCookies);

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
                  }
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
                  }

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
                  }
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
                  }
