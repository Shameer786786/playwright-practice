// if, else if, else
// const balancedue = 750;

// if (balancedue === 750) {
//     console.log("Paid full amount");
// } else if (balancedue > 0 && balancedue <= 1000) {
//     console.log("partial Amount");
// } else {
//     console.log("full Paid")
// }

// Logical operators

// const id = 123;
// const username = "Kiran";

// console.log(id === 123 && typeof username === "string");
// console.log(!id);

// switch

// const status = "Overdue";

// switch (status) {
//     case "Paid":
//     console.log("No Action");
//     break;
//     case "Overdue":
//         console.log("check late fees");
//         break;
//     default:
//         console.log("Unkown Status")
// }

// // The for loop

// for (let i = 1; i <= 3; i++){
//  console.log("instalment", i);
// }

// Looping over a list (arrays preview)

// const amounts = [1250.5, 980, 2100.75];

// for (const amount of amounts) {
//   console.log(amount);
// }
// console.log(amounts.length);   
// console.log(amounts[0]);   

// Task 1
// const balancedue = 0;

// const balancedue = 500;
// if (balancedue === 0){
//     console.log("Paid");

// } else {
//     console.log("Unpaid");
// }
// console.log(balancedue === 500)



// Task2
// const invoiceAmount = 500;

// if (invoiceAmount < 1000) {
//   console.log("Small");
// } else if (invoiceAmount <= 5000) {
//   console.log("Medium");
// } else {
//   console.log("Large");
// }

// const invoiceAmount1 = 1001;

// if (invoiceAmount1 < 1000) {
//     console.log("Small");
// } else if(invoiceAmount1 <= 5000) {
//     console.log("Medium");
// } else {
//     console.log("Large");
// }

// const invoiceAmount2 = 6000;

// if (invoiceAmount2 < 1000) {
//     console.log("Small");
// } else if(invoiceAmount2 <= 5000) {
//     console.log("Medium");
// } else {
//     console.log("Large");
// }

// Task3

// const isActive = true;
// const balanceDue = 240;

// if (isActive || balanceDue > 0) { //when you are using || or &&. OP should be same
//     console.log("Send Reminder");
// } else {
//     console.log("No Reminder");
// }

// Task 4
const paymentStatus = "PAID";

switch (paymentStatus) {
  case "PAID":
    console.log("No action");
    break;
  case "OVERDUE":
    console.log("Check late fee");
    break;
  case "PENDING":
    console.log("Send reminder");
    break;
  default:
    console.log("Unknown status");
}

const paymentStatus1 = "OVERDUE";

switch (paymentStatus1) {
  case "PAID":
    console.log("No action");
    break;
  case "OVERDUE":
    console.log("Check late fee");
    break;
  case "PENDING":
    console.log("Send reminder");
    break;
  default:
    console.log("Unknown status");
}

const paymentStatus2= "PENDING";

switch (paymentStatus2) {
  case "PAID":
    console.log("No action");
    break;
  case "OVERDUE":
    console.log("Check late fee");
    break;
  case "PENDING":
    console.log("Send reminder");
    break;
  default:
    console.log("Unknown status");
}

const paymentStatus3 = "CANCELLATION";

switch (paymentStatus3) {
  case "PAID":
    console.log("No action");
    break;
  case "OVERDUE":
    console.log("Check late fee");
    break;
  case "PENDING":
    console.log("Send reminder");
    break;
  default:
    console.log("Unknown status");
}