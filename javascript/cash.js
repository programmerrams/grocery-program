"use strict";

let timeString = document.querySelector(".current-time");
// for the timer
let StopWatchString = document.querySelector(".stopwatch current-time");

// for the more button
let moreButton = document.querySelector(".more-button");

// for the delete button
let deleteButton = document.querySelector(".delete-button");

let validInput = document.querySelectorAll(".input-field").value;

let submitButton = document.querySelector(".submit-button");

// for the the x button
let xButton = document.querySelector(".x-btn");

// for the x button clone
let xButtonClone = document
  .querySelector(".x-btn")
  .cloneNode(true)
  .addEventListener("click", function () {
    document.querySelector(".grocery-list").remove();
  });

// for change Prices with the submit button
let grossPriceTag = document.querySelector(".gross-value");
let TaxPriceTag = document.querySelector(".tax-value");
let TotalPriceTag = document.querySelector(".total-value");

// allows us to javascript to recognize the node of "grocery-list"
const node = document.querySelector(".grocery-list");
const nodeMultiple = document.querySelectorAll(".grocery-list");

let quantityValue = document.querySelector(".input-field.quantity").value;
let quantityBox = document.querySelector(".input-field.number");

function showTime() {
  const now = new Date(); // Create a new Date object representing the current date and time
  const timeString_outcome = now.toLocaleTimeString(); // Convert the time to a human-readable string

  // timeString.textContent= showTime(); // Display the time in an element with the ID "time"
  //  console.log(timeString_outcome);
  // return timeString_outcome;
  timeString.textContent = timeString_outcome;
  // console.log(minutes, seconds);
}

timeString.textContent = setInterval(showTime, 1000); // Update the time every second

// console.log(timeString);

// allows the delete button  to work
deleteButton.addEventListener("click", function () {
  document.querySelector(".item-list").remove();
  if (TypeError) {
    try {
      document.querySelector(".item-list").remove();
    } catch (TypeError) {
      location.reload();
    }
  }
});

// allows the more button to add an extra row

moreButton.addEventListener("click", function () {
  // clones the targeted elements(including child elements )
  // if more is clicked;
  const nodeClone = document.querySelector(".grocery-list").cloneNode(true);
  const categoryListClone = document
    .querySelector(".categories")
    .cloneNode(true);
  // const newSelect = document.querySelector(".categories").cloneNode(true);

  // Add event listener to the xButton inside the cloned node
  const xButtonClone = nodeClone.querySelector(".x-btn");
  const selectedOptionClone = nodeClone.querySelector(".categories");

  selectedOptionClone.addEventListener("change", priceIdentifier);

  categoryListClone.addEventListener("change", priceIdentifier);

  xButtonClone.addEventListener("click", function () {
    nodeClone.remove();
  });

  document.querySelector(".item-list").appendChild(nodeClone);
});

// all objects with their type and price

let selectedOption = document.querySelectorAll(".categories");

selectedOption.forEach((option) => {
  option.addEventListener("change", priceIdentifier);
});

// allows prices to change
function priceIdentifier() {
  let priceValue = document.querySelectorAll(".input-field.price");
  priceValue.forEach((price, option) => {
    price.value = selectedOption[option].value;
  });
}

// allows the submit button to work

function calculatePrice() {
  //########################
  // recording values
  //########################
  nodeMultiple.forEach((row) => {

    console.log(row);
    // weight value
    let weightValue = document.querySelector(".input-field.weight").value;

    // quantity value
    let quantityValue = document.querySelector(".input-field.quantity").value;

    let priceValue = document.querySelector(".input-field.price").value;

    let salesTax = 0.0,
      totalPrice = 0;

    // converting strings to numbers
    let weightValueNum = Number(weightValue);
    let quantityValueNum = Number(quantityValue);
    let priceValueNum = Number(priceValue);
    let salesTaxNum = Number(salesTax);
    let grossPrice;
    let grossPriceNum = Number(grossPrice);
    let TotalPriceNum = Number(totalPrice);
    // if no quantity is entered.
    if (quantityValueNum == 0) {
      quantityValueNum = 1;
      grossPrice = priceValueNum * quantityValueNum * weightValueNum;
    } else {
      weightValueNum = 1;
      // quantityValueNum = 1;
      
      grossPrice = parseFloat(
        priceValueNum * quantityValueNum * weightValueNum
      );
    }

    totalPrice = grossPrice + salesTax;
    console.log(weightValue);
    console.log(quantityValue);
    console.log(priceValue);
    console.log(grossPrice);

    // displaying results to customer

    grossPriceTag.textContent = `$ ${grossPrice.toFixed(2)}`;
    TaxPriceTag.textContent = `$ ${salesTax}`;
    TotalPriceTag.textContent = `$ ${totalPrice.toFixed(2)}`;

    // location.replace("transactionResults.html");
  });
}

submitButton.addEventListener("click", calculatePrice);
