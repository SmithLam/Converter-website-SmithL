
//1. define variables
let amount = document.getElementById("amount")
let fromCurrency = document.getElementById("fromCurrency")
let toCurrency = document.getElementById("toCurrency")
let result = document.getElementById("result")
let convertButton = document.getElementById("convertButton")
let swapButton = document.getElementById("swapButton")


//2. format Currency function
function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
  }
  
//3. Currency Exchange rate
const ExchangeRate = {
      "usd": 1,
      "gbp": 0.810996,
      "vnd": 23235.5,
      "inr": 75.5018,
      "jpy": 107.541,
      "dkr": 6.89021
    }


  
//4. Convert currency function
function convertCurrency(){
    let amountValue= amount.value;
    let inputValue = document.getElementById("fromCurrency").value;
    let outputValue = document.getElementById("toCurrency").value;
    let convertedAmount = (amountValue *(ExchangeRate[outputValue] / ExchangeRate[inputValue])).toFixed(2)
    let formatedInputAmount = formatCurrency(inputValue, amountValue)
    let formatedOutputAmount = formatCurrency(outputValue,convertedAmount)
    result.innerHTML=`Your ${formatedInputAmount} is ${formatedOutputAmount}`
}

//5. Swap function
function swapCurrency(){
    let inputValue = document.getElementById("fromCurrency").value;
    let outputValue = document.getElementById("toCurrency").value;
    document.getElementById("fromCurrency").value = outputValue; 
    document.getElementById("toCurrency").value = inputValue;
    return;
}
