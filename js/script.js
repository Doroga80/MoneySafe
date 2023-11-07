'use strict';

import { convertStringNumber } from "./convertStringNumber.js";

const financeForm = document.querySelector('.finance__form');
// console.log("financeForm: ", financeForm);
const financeAmount = document.querySelector('.finance__amount');
// console.log("financeAmount", financeAmount);

let amount = 0;

financeAmount.textContent = amount;

financeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(event);

    const typeOperation = event.submitter.dataset.typeOperation;
    // console.log("typeOperation ", typeOperation);


    const changeAmount = Math.abs(convertStringNumber(financeForm.amount.value));
    // console.log("changeAmout ", typeof changeAmount);

    let totalAmount = 0;

    if(typeOperation === 'income') {
        amount += changeAmount;
    }

    if(typeOperation === 'expenses') {
        amount -= changeAmount;
    }

    financeAmount.textContent = `${amount.toLocaleString()} ₽`; 


});