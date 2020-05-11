
function convertCurrency(){
// define result
let text;

//1. Define amount
let amount = prompt("How much do you amount do you convert")

//2. Define number
let checkNumber = parseInt(amount)

//2. Define From currency
let fromCurrency = prompt("Which currency do you use")

//3. Define To currency
let toCurrency = prompt("Which currency do you to exchange")

//4. Define currency ratio (23,161.39)
const exchangeRateUSDandVND = 23161.39
const exchangeRateUSDandGBP = 0.808591
const exchangeRateGBPandVND = 28645.68

//5. Define converting Functions

//fromUSDtoVND
function USDtoVND(){
    //5-a. amount * currency ratio = result
    //6. Define result
    return (amount * exchangeRateUSDandVND)
}

//fromVNDtoUSD
function VNDtoUSD(){
    //5-a. amount * currency ratio = result
    //6. Define result
    return (amount / exchangeRateUSDandVND)
}

//fromUSDtoGBP
function USDtoGBP(){
    //5-a. amount * currency ratio = result
    //6. Define result
    return (amount * exchangeRateUSDandGBP)
}

//fromGBPtoUSD
function GBPtoUSD(){
    //5-a. amount * currency ratio = result
    //6. Define result
    return (amount / exchangeRateUSDandGBP)
}

function GBPtoVND(){
    //5-a. amount * currency ratio = result
    //6. Define result
    return (amount * exchangeRateGBPandVND)
}

//fromVNDtoUSD
function VNDtoGBP(){
    //5-a. amount * currency ratio = result
    //6. Define result
    return (amount / exchangeRateGBPandVND)
}



//format-and-icon-for-currency
function formatUSD(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: 'USD',
      style: "currency"
    });
    return formatter.format(value);
  }

function formatVND(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: 'VND',
      style: "currency"
    });
    return formatter.format(value);
  }


function formatGBP(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: 'GBP',
      style: "currency"
    });
    return formatter.format(value);
  }


//if clause
if (Object.is(checkNumber, NaN)){
    text = "Please input a number"
}
else if (fromCurrency ==="USD" && toCurrency ==="VND"){
    text =amount + " "+ fromCurrency + " in " + toCurrency + " is  " + formatUSD('en-US',USDtoVND(amount))
}
else if (fromCurrency ==="VND" && toCurrency ==="USD"){
    text =amount + " "+ fromCurrency + " in " + toCurrency + " is " + formatVND('en-US',VNDtoUSD(amount))
}
else if (fromCurrency ==="USD" && toCurrency ==="GBP"){
    text =amount + " "+ fromCurrency + " in " + toCurrency + " is " + formatGBP('en-GB',USDtoGBP(amount))
}
else if (fromCurrency ==="GBP" && toCurrency ==="USD"){
    text =amount + " "+ fromCurrency + " in " + toCurrency + " is " + formatUSD('en-US',GBPtoUSD(amount))
}
else if (fromCurrency ==="GBP" && toCurrency ==="VND"){
    text =amount + " "+ fromCurrency + " in " + toCurrency + " is " + formatVND('en-US',GBPtoVND(amount))
}
else if (fromCurrency ==="VND" && toCurrency ==="GBP"){
    text =amount + " "+ fromCurrency + " in " + toCurrency + " is " + formatGBP('en-GB',VNDtoGBP(amount))
}
else {
    text="This currency is not yet in our database!";
}
document.getElementById("result").innerHTML = text;
}

//(amount, fromCurrency, "to", toCurrency, "is", VNDtoUSD(amount), toCurrency)

