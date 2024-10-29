"use strict;";
// declared variables
const saveChangesBtn = document.querySelector(".save-btn");
const updatePricesBtn = document.querySelector(".change-btn");
const inputs = document.querySelectorAll("input");
const priceCells = document.querySelectorAll(".Prices");

const radioButtons = document.querySelectorAll('input[name="selection"]');

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", () => {
    if (radioButton.checked) {
      console.log("Selected value:", radioButton.value);
    }
  });
});

updatePricesBtn.addEventListener("click", function () {
  cell = radioButtons.value;
  priceCells.forEach((cell, index) => {
    const inputValue = inputs[index] ? inputs[index].value : ""; // Get value from corresponding input
    if (inputValue !== "") {
      cell.innerHTML = inputValue; // Change the cell value
      // localStorage("NewValues", cell.innerHTML);
      // console.log("NewValues");

    } else {
      console.log("Input is empty for cell index: " + index);
      console.log(cell);
    }
  });
});


// alert("this is working");
