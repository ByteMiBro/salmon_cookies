//just list of stores
//calculates daily projection sales for each location
var storeModel = [{firstAndPike},
                  {seaTacAirport},
                  {seattleCenter},
                  {capitolHill},
                  {alki}]
function numberofStores()
{
  return storeModel.length
}

function randomCount()
{
  return Math.random() * (this.max() - this.min()) + this.min();
};
// take number of average cookies times
function cookiesPerHour();
{
  return this.getRandomCustomerCount() * this.cookiesPerSale();
}
function cookiesPerDay();
{
  return this.generatedCookyCountByHour() * this.hours();
}
for
//put in if open or if colsed
var hoursPerStore{this.hours * numberofStores}
var firstAndPike = {min:23,
                  max:65,
                  cookiesPerSale:6.3,
                  //hours: specify the actual hours the store is open not the number of hours
                  //hours: start at the first hour store opens and end with the last hour the store is open
                  hours:[6,7,8,9,10,11,12,1,2,3,4,5,6,7,8]
                  getRandomCustomerCount: randomCount,
                  generatedCookyCountByHour: cookiesPerHour,
                  generatedCookiesByDay: cookiesPerDay
                  };

var seaTacAirport{}
var seattleCenter{}
var capitolHill{}
var alki{}
