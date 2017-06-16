'use strict';
//create a way for each stores array of cookies per hour
//to be logged in table
var listOfStores = [
  new StoreModel('First And Pike', 23, 65, 6.3, [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
  new StoreModel('SeaTac Airport', 3, 24, 1.2, [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
  new StoreModel('Seattle Center', 11, 38, 3.7, [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
  new StoreModel('Capitol Hill', 11, 38, 2.3, [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
  new StoreModel('Alki', 2, 16, 4.6, [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
];
console.log(listOfStores);

//to do this I need to create a row with the stores name
//then I need to take the values from that array and log them on a table cell
//so I need to create a table cell for each item
//create an empty element for the first column to store the rows

for (var i = 0 ; i < listOfStores.length ; i++)
{
//create a variable that stores the items in list of stores
  var store = listOfStores[i];
  //for every item run it through a funtion to add a row for every store
  addStoreRow(store);
}

function addStoreRow()
{
  //create a row in the body of the table
  var storeRow = document.createElement('tr');
  var storeRow = document.createTextNode();
  //create a cell for the store name
  var storeNameCell = document.createElement('td');
  //for every cell provide the name of store from list of stores in text
  storeNameCell.textContent = store.name;
  //add a store name cell to every store row
  storeRow.appendChild(storeNameCell);
  //don't need to append store name because it goes through row
  addCellForEachHour(storeRow, store.cookiesPerHour);
}
//for each hour collumn
//var document.createElement('td');
