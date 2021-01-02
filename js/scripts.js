/* Part 1: Business Logic */

// 1st Way: Class
let welcomeName = document.querySelector("#welcome");
let userName = document.querySelector("#input-username");
let signUp = document.querySelector("#sign-up-btn");

signUp.addEventListener("click", function () {
  welcomeName.innerText = `Welcome , ${userName.value}`;
});
// bank account constructor:

// Method for adding a deposit or subtracting a withdrawl

/* ************************************************************ */
//!left part
let accountName = document.querySelector("#register-name");
let initialDeposit = document.querySelector("#register-initial");
let registerBtn = document.querySelector("#registerbtn");
let accounts = document.querySelector("#accounts");
//! right part
let depositWithdraw = document.querySelector("#transact-amount");
let transactBtn = document.querySelector("#transactbtn");
let accountBalance = document.querySelector("#current-balance");
let transactionHistory = document.querySelector("#history");

// li element

// classList.add("account-List","highlight")
accounts.style.cssText = `text-align-center`;
//? first register button
// registerBtn.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   // Account Name
//   if (userName.value !== "") {
//     if (accountName.value !== "") {
//       let listItem = document.createElement("li");
//       let breakPoint = document.createElement("br");

//       listItem.innerText = accountName.value;
//       accounts.appendChild(listItem);
//       accounts.appendChild(breakPoint);
//       accountName.value = "";
//     }
//     let classAdding = document.querySelectorAll("#accounts li");

//     for (let i = 0; i < classAdding.length; i++) {
//       classAdding[i].classList.add("account-list");

//       classAdding[i].addEventListener("click", function () {
//         let current = document.querySelector(".highlight");
//         current[0].classList = current[0].classList.replace("highlight", "");
//         this.classList += "highlight";
//       });
//     }

//     if (initialDeposit.value == "") {
//       accountBalance.value = NaN;
//     } else {
//       accountBalance.value = initialDeposit.value;
//     }
//     // Initial Deposit

//     depositWithdraw.value = "";
//     let removeNeed = document.querySelectorAll("#history li");
//     for (let i = 0; i < removeNeed.length; i++) {
//       removeNeed[i].remove();
//     }
//   }
// });

//? second register button
//create object classes
let allAccounts = [];
class accountCreator {
  constructor(name, deposit) {
    this.accountName = name;
    this.initialDeposit = deposit;
  }
}
registerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (userName.value !== "") {
    let account = new accountCreator(accountName.value, initialDeposit.value);
    allAccounts.push(account);
  }
  console.log(allAccounts);
});

transactBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  let listItem = document.createElement("li");

  listItem.innerText = depositWithdraw.value;
  transactionHistory.appendChild(listItem);

  accountName.value = "";

  accountBalance.value =
    Number(accountBalance.value) + Number(depositWithdraw.value);
  depositWithdraw.value = "";
});
/* Part 2: User credential information store function */

// Store all "accounts" under the "user"

// Create empty account for more than one account for the same user!

/* ************************************************************ */

/* Part 3.1: Display Accounts under the "user" */

/* ************************************************************ */

/* Part 3.2: Display Accounts under the "user" */

// 1- When you click the account, show transaction history related with account.
// 2- Show current balance for the account
// 3- Make highlight the selected account

/* ************************************************************ */

/* Part 5: Display transaction history for the account  */

/* ************************************************************ */

/* Part 6: User Logic Part */

// 1- Register

// 2- Transaction

// 3- sign-up

// 4- sign-in
