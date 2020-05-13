
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
function convertCurrency() {
    let amountValue = amount.value;
    let inputValue = document.getElementById("fromCurrency").value;
    let outputValue = document.getElementById("toCurrency").value;
    let convertedAmount = amountValue * (ExchangeRate[outputValue] / ExchangeRate[inputValue])
    let formatedInputAmount = formatCurrency(inputValue, amountValue)
    let formatedOutputAmount = formatCurrency(outputValue, convertedAmount)
    result.innerHTML = `Your ${formatedInputAmount} is ${formatedOutputAmount}`
}

//5. Swap function
function swapCurrency() {
    let inputValue = document.getElementById("fromCurrency").value;
    let outputValue = document.getElementById("toCurrency").value;
    document.getElementById("fromCurrency").value = outputValue;
    document.getElementById("toCurrency").value = inputValue;
    return;
}


//---Coin change Problem---//
//1. Define variables
let coinAmount = document.getElementById("coinAmount")
let coinChangeButton = document.getElementById("coinChangeButton")
let coinResult = document.getElementById("coinResult")
let history =[]
let i = history.length
//2. Check input function

function checkInputValue(x){
    if (i>=0 && Number(x)<=999){
        alert("You must input a bigger number than a Thousand VND!")
        document.getElementById("coinAmount").value=null
       return true
    }
    else {
       return false;
    }
   }



//3. Coin change function
function changeCoin() {
    let coinAmountValue = coinAmount.value; 
    let text = "";
    if (checkInputValue(coinAmountValue)){
        return 0
    }
    let coins = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000];
    let res = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < coins.length; i++) {
        while (coinAmountValue>=coins[i]) {
            res[i] += 1;
            coinAmountValue = coinAmountValue - coins[i];
        }
        text += res[i] + "x " + coins[i] + "<br>";
    }
    coinResult.innerHTML = `${text}`;
}
