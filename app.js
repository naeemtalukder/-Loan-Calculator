const loanAmountInput = document.querySelector(".loan-amount");
const interestRateInput = document.querySelector(".interest-rate");
const loanTenureInput = document.querySelector(".loan-tenure");

const loanEMIValue = document.querySelector(".loan-emi");
const totalInterestValue = document.querySelector(".total-interest");
const totalAmountValue = document.querySelector(".total-amount");

const calculateBtn = document.querySelector(".calculate-btn");


let loanAmount = parseFloat(loanAmountInput.value);
let interestRate = parseFloat(interestRateInput.value);
loanTenure = parseFloat(loanTenureInput.value);

let interest = interestRate / 12 / 100;

const calculateEMI = () => {
    let emi = 
    loanAmount *
    interest * 
    (Math.pow(1 + interest, loanTenure) / 
    (Math.pow(1 + interest, loanTenure) -1));

    return emi;
}