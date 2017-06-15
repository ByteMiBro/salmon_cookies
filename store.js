'use strict';
//individaual stores become sparate objects
/*first colum is location second colum is hours third columb is expected customers
and fouthr colum is expected cookies per hour fifth colum is totol cookies in day*/
var stores = [
  {
    name: 'First And Pike',
    cookiesPerHour: [10, 19, 8],
  },
  {
    name: 'SeaTac Airport',
    cookiesPerHour: [12, 15, 25],
  },
  {
    name: 'Seattle Center',
    cookiesPerHour: [10, 19, 8],
  },
  {
    name: 'Capitol Hill',
    cookiesPerHour: [12, 15, 25],
  },
  {
    name: 'Alki',
    cookiesPerHour: [12, 15, 25],
  },
];
console.log(stores);

var storeLocationsContainer = document.getElementById('store-locations');
console.log(storeLocationsContainer);
var storeLocationsContainer = document.getElementById('store-locations');
console.log(storeLocationsContainer);
var storeLocationsContainer = document.getElementById('store-locations');
console.log(storeLocationsContainer);
var storeLocationsContainer = document.getElementById('store-locations');
console.log(storeLocationsContainer);
var storeLocationsContainer = document.getElementById('store-locations');
console.log(storeLocationsContainer);
for (var i = 0; i < stores.length; i++) {
  var store = stores[i];

  console.log(store);
  addStoreRow(storeLocationsContainer, store);
}

function addStoreRow(container, store) {
  var storeRow = document.createElement('tr');

  var storeNameCell = document.createElement('td');
  storeNameCell.textContent = store.name;
  storeNameCell.setAttribute('colspan', 2);
  storeRow.appendChild(storeNameCell);

  addCellForEachHour(storeRow, store.avgCustomersByHour);

  container.appendChild(storeRow);
}

function addCellForEachHour(row, cookiesPerHour) {
  for (var j = 0; j < cookiesPerHour.length; j++) {
    var hourCell = document.createElement('td');
    hourCell.textContent = cookiesPerHour[j];
    row.appendChild(hourCell);
  }
}
