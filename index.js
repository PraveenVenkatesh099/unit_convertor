/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

let feetValue = 0;
let gallonValue = 0;
let poundValue = 0;
let meterValue = 0;
let literValue = 0;
let kilogramValue = 0;

convertBtn.addEventListener("click", function(){
    let inputValue = Number(inputEl.value);
    if(!Number.isFinite(inputValue)){
        inputValue = 0;
        alert("Please enter a valid number");
    }else{
        inputEl.value = "";
    // console.log(inputValue);
        feetValue = (inputValue * 3.281).toFixed(3);
        gallonValue = (inputValue * 0.264).toFixed(3);
        poundValue = (inputValue * 2.204).toFixed(3);
        meterValue = (inputValue / 3.281).toFixed(3);
        literValue = (inputValue / 0.264).toFixed(3);
        kilogramValue = (inputValue / 2.204).toFixed(3);
    }
    
    lengthEl.textContent = `${inputValue} meters = ${feetValue} feet | 
                            ${inputValue} feet = ${meterValue} meters`;
    volumeEl.textContent = `${inputValue} liters = ${gallonValue} gallons | 
                            ${inputValue} gallons = ${literValue} liters`;
    massEl.textContent = `${inputValue} kilograms = ${poundValue} pounds | 
                            ${inputValue} pounds = ${kilogramValue} kilograms`;
})