'use strict';
console.log('app.js loaded');

/*function print () {
  window.print();
}*/
//create a way for each stores array of cookies per hour
//to be logged in table
//to do this I need to create a row with the stores name
//then I need to take the values from that array and log them on a table cell
//so I need to create a table cell for each item
//create an empty element for the first column to store the rows
var storeLocationsContainer = document.getElementById('store-locations');
console.log(storeLocationsContainer);
for (var i = 0 ; i < listOfStores.length ; i++)
{
//create a variable that stores the items in list of stores
  var store = listOfStores[i];
  //for every item run it through a funtion to add a row for every store
  addStoreRow(storeLocationsContainer, store);
}

function addStoreRow(store)
{
  //create a row in the body of the table
  var storeRow = document.createElement('tr');
  //var container = document.createTextNode('tr');
  //create a cell for the store name
  var storeNameCell = document.createElement('td');
  //var NameCell = document.createTextNode('td');
  //for every cell provide the name of store from list of stores in text
  storeNameCell.textContent = store.name;
  //add a store name cell to every store row
  storeRow.appendChild(storeNameCell);
  //don't need to append store name because it goes through row
  addCellForEachHour(storeRow, store.cookiesPerHour);
  //storeLocationsContainer.appendChild(storeRow);
}

function addCellForEachHour(cookiesPerHour)
{
  for(var m = 0; m < cookiesPerHour.length; m++)
  {
    var hourCell = document.createElement('td');
    var row = document.createElement()
    hourCell.textContent = cookiesPerHour[m];
    //row.appendChild(hourCell);
  }
}
//for each hour collumn
//var document.createElement('td');
