// const policyhlodername = "Kiran Reddy";
// let payref;

// const paymentdue = null;

// console.log(typeof policyhlodername);
// console.log(typeof payref);
// console.log(typeof paymentdue);

// Strings and template literals

// const customername = "Charan Kumar";
// const age = 24;

// console.log(`My name is ${customername} and ${age} years old`);

// String Methods

// const policyholdername = "  vijay-reddy-s ";

// // console.log(policyholdername.trim());
// // console.log(policyholdername.trim().toUpperCase());
// // console.log(policyholdername.toUpperCase());
// // console.log(policyholdername.length);
// // console.log(typeof policyholdername);
// // console.log(policyholdername.includes("VIJAY"));
// // console.log(policyholdername.includes("vijay"));

// const Name = policyholdername.trim().toUpperCase();

// console.log(Name);
// console.log(Name.length);
// console.log(Name.includes("vijay"));
// console.log(Name.includes("VIJAY"));

// concatenation trap

// console.log("12" + 1); // 121
// console.log(Number("12") + 1); //13
// console.log(typeof Number("12" + 1)); // Number
// console.log("14" - 3); //11
// console.log(121 + 1); //122
// console.log(121 - 3); //118
// console.log(12 * 2); //24
// console.log("12" * 2); //24

// Decimal Trap

// console.log(0.1 + 0.2);
// console.log((0.1 + 0.2).toFixed(2));
// console.log(typeof (0.1 + 0.2).toFixed(2));

// Task 6

// const premiumText = "$2,450.75";
// const cleaned = premiumText.replace("$", "").replaceAll(",", "");
// const premium = Number(cleaned);

// console.log(cleaned);
// console.log(typeof cleaned);
// console.log(premium);
// console.log(typeof premium);

// const bigText = "$1,250,500.50";
// const bigClean1 = bigText.replace("$", "").replace(",", "");
// const bigClean2 = bigText.replace("$", "").replaceAll(",", "");

// console.log(bigClean1);
// console.log(Number(bigClean1));
// console.log(bigClean2);
// console.log(Number(bigClean2));

// tax calculation

const premium = 2450.75;
const taxRate = 0.18;
const tax = premium * taxRate;
const totalAmount = premium + tax;

console.log(tax);
console.log(totalAmount);
console.log(tax.toFixed(2));
console.log(totalAmount.toFixed(2));