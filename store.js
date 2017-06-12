//individaual stores become sparate objects
var firstAndPike {minCust:23,
                  maxCust:65,
                  avgCookyPerSale:6.3,

                getRandomCustomerCount: function(){
                  return Math.random() * this.max;
                },
                generateCustomerCountByHour: function(){
                  this.cookiesPerHour = [
                    this.getRandomCustomerCount() * this.cookiesPerHour,
                    this.getRandomCustomerCount() * this.cookiesPerHour,
                    this.getRandomCustomerCount() * this.cookiesPerHour,
                    this.getRandomCustomerCount() * this.cookiesPerHour,
                  ];
                }
              };

var seaTacAirport{}
var seattleCenter{}
var capitolHill{}
var alki{}
