var elForm = document.querySelector('.form');
var elSelect = elForm.querySelector('.bread-select');
var elSize = elForm.querySelector('.pizza-size');
var elToppingList = elForm.querySelector('.pizza-topping');
var elMore = elForm.querySelector('.pizza-more');

var elBreadOutput = elForm.querySelector('.bread-output');
var elSizeOutput = elForm.querySelector('.size-output');
var elToppingOutput = elForm.querySelector('.toppinng-output');
var elToppingListOutput = elForm.querySelector('.topping-list-output');
var elMoreOutput = elForm.querySelector('.more-output');
var elMoreOutputList = elForm.querySelector('.more-output-list');



var typeBread = ['Yupqa', 'Qalin', 'Buxanka'];

var pizzaSize = [25, 30, 35];

var pizzaTopping = ['Pomidor', 'Kurka goshti', 'Zaytun', 'Tuzlangan bodring', 'Qo\'ziqorin', 'Qazi'];

var pizzaMore = ['achchiq', 'sosiskali']

var pizzaToppingArr = [];

var pizzaMoreArr = [];

// =====================Type bread===================

for( var i = 0; i < typeBread.length; i++ ) {
  var elOption = document.createElement('option');
  elOption.value = typeBread[i];
  elOption.textContent = typeBread[i]
  elSelect.appendChild(elOption);

  elSelect.addEventListener('change', function(){
    elBreadOutput.innerHTML = this.value

  });

}

// =======================Pizza Size==================

for( var i = 0; i < pizzaSize.length; i++ ) {
  
  var radioLabel = document.createElement('label');
  var radioInput = document.createElement('input');
  radioInput.type = 'radio';
  radioInput.name = 'radio';
  radioInput.value = pizzaSize[i];
  var radioSpan = document.createElement('span');
  radioSpan.textContent = `${pizzaSize[i]} sm`;

  radioLabel.appendChild(radioInput);
  radioLabel.appendChild(radioSpan)

  elSize.appendChild(radioLabel)

  radioInput.addEventListener('change', function() {
    elSizeOutput.textContent = `${this.value}`

  });

}

// ========================Topping Pizzaa===================

for( var i = 0; i < pizzaTopping.length; i++ ) {
  
  var elCheckboxLabel = document.createElement('label');
  var elCheckboxTopping = document.createElement('input');
  elCheckboxTopping.name = pizzaTopping[i];
  elCheckboxTopping.value = pizzaTopping[i];
  elCheckboxTopping.type = 'checkbox';
  var elCheckboxBig = document.createElement('span');
  var elCheckboxController = document.createElement('span');
  elCheckboxController.textContent = pizzaTopping[i];

  elCheckboxLabel.appendChild(elCheckboxTopping);
  elCheckboxLabel.appendChild(elCheckboxBig);
  elCheckboxLabel.appendChild(elCheckboxController);

  elToppingList.appendChild(elCheckboxLabel);

  elCheckboxTopping.addEventListener('click', function() {

    if(pizzaToppingArr.includes(this.name)) {
      var itemIndex = pizzaToppingArr.indexOf(this.name);
      pizzaToppingArr.splice(itemIndex, 1);
    } else {
      pizzaToppingArr.push(this.name)
    }

    elToppingListOutput.innerHTML = '';

    for( var i = 0; i < pizzaToppingArr.length; i++) {

      var toppingItem = document.createElement('li');
      toppingItem.textContent = pizzaToppingArr[i];
      elToppingListOutput.appendChild(toppingItem);
    }

  });

}

// ===================More Pizza==================

for( var i = 0; i < pizzaMore.length; i++ ) {
  
  var checkboxLabel = document.createElement('label');
  var checkboxInput = document.createElement('input');
  checkboxInput.type = 'checkbox';
  checkboxInput.name = pizzaMore[i];
  checkboxInput.value = pizzaMore[i];
  var checkboxSpan = document.createElement('span');
  checkboxSpan.textContent = `${pizzaMore[i]}`;

  checkboxLabel.appendChild(checkboxInput);
  checkboxLabel.appendChild(checkboxSpan)

  elMore.appendChild(checkboxLabel)
  checkboxInput.addEventListener('click', function() {
    elMoreOutputList.textContent = `${this.value}`

    if(pizzaMoreArr.includes(this.name)) {
      var itemIndex = pizzaMoreArr.indexOf(this.name);
      pizzaMoreArr.splice(itemIndex, 1);
    } else {
      pizzaMoreArr.push(this.name)
    }

    elMoreOutputList.innerHTML = '';

    for( var i = 0; i < pizzaMoreArr.length; i++) {
      var moreItem = document.createElement('li');
      moreItem.textContent = pizzaMoreArr[i];
      elMoreOutputList.appendChild(moreItem);
    }

  });

}