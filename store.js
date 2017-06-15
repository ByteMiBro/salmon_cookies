'use strict';
//individaual stores become sparate objects
/*first colum is location second colum is hours third columb is expected customers
and fouthr colum is expected cookies per hour fifth colum is totol cookies in day*/
var listOfStores = [
  new StoreModel('First And Pike', 23, 65, 6.3, [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
  new StoreModel('SeaTac Airport', 3, 24, 1.2, [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
  new StoreModel('Seattle Center', 11, 38, 3.7, [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
  new StoreModel('Capitol Hill', 11, 38, 2.3, [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
  new StoreModel('Alki', 2, 16, 4.6, [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),
];
console.log(listOfStores);
//create a way for each stores array of cookies per hour
//to be logged in table
//to do this I need to create a row with the stores name
//then I need to take the values from that array and log them on a table cell
//so I need to create a table cell for each item
for each listOfStores
var storeRow = document.createElement('tr')
var storeNameCell = document.createElement('td')
storeNameCell.textContent = listOfStores.name;
for each hour collumn
var document.createElement('td');
