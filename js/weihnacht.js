"use strict";

// Buttons
let signUp = document.querySelector("#sign-up-btn");
let register = document.querySelector("#registerbtn");
let transaction = document.querySelector("#transactbtn");
// SignUp inputs
let userName = document.querySelector("#input-username");
let password = document.querySelector("#input-password");
// sign up content
let userInfo = document.querySelector("#welcome");
// Account info inputs
let accountName = document.querySelector("#register-name");
let initialDeposit = document.querySelector("#register-initial");
// Accounts
let accountListItems = document.querySelector("#accounts");
// withdraw input
let withdrawInput = document.querySelector("#transact-amount");
// Account balance content
let accountBalance = document.querySelector("#current-balance");
//Transaction history
let transactionHistory = document.querySelector("#history");
// Accounts Deposits
let accountDeposits = [];

signUp.addEventListener("click", function () {
  let passwordLength = [];
  if (userName.value) {
    for (let i = 0; i < password.value.length; i++) {
      passwordLength.push("*");
    }
    userInfo.textContent = `USERNAME:${
      userName.value
    } | PASSWORD: ${passwordLength.join("")}`;
  } else {
    userInfo.textContent = "Please valid account information's enter!";
  }
});
let liItem = document.createElement("li");

register.addEventListener("click", function (e) {
  e.preventDefault();
  if (userName.value) {
    // Accounts part
    liItem = document.createElement("li");
    liItem.classList.add("account-list", "highlight");
    liItem.textContent = accountName.value;
    accountListItems.appendChild(liItem);
    accountListItems.appendChild(document.createElement("br"));
    for (
      let i = 0;
      i < document.querySelectorAll(".account-list").length - 1;
      i++
    ) {
      document
        .querySelectorAll(".account-list")
        [i].classList.remove("highlight");
    }
    //? Balance part
    // browser
    accountBalance.value = initialDeposit.value;
    // store data
    accountDeposits.push({
      name: accountName.value,
      deposit: Number(initialDeposit.value),
    });
  }
});

// transaction button
transaction.addEventListener("click", function (e) {
  e.preventDefault();
  //adding transactions to history
  let transactionListItem = document.createElement("li");
  transactionListItem.classList.add("trans");
  transactionListItem.textContent = withdrawInput.value;
  transactionHistory.appendChild(transactionListItem);
  // account balance outlook update
  function lastBalance(process) {
    return (accountBalance.value = Number(accountBalance.value) + process);
  }
  lastBalance(Number(withdrawInput.value));
  // account balance data update
  function transactionAdd(amount) {
    for (let i = 0; i < accountDeposits.length; i++) {
      if (
        document.querySelector(".highlight").textContent ==
        accountDeposits[i].name
      ) {
        console.log(accountDeposits[i].deposit);
        console.log(Number(withdrawInput.value));
        return (accountDeposits[i].deposit += amount);
      }
    }
  }
  transactionAdd(Number(withdrawInput.value));
});

// Transaction history disappears
accountListItems.addEventListener(
  "click",
  // highlight class add
  function (event) {
    if (event.target.classList.contains("account-list")) {
      for (
        let i = 0;
        i < document.querySelectorAll(".account-list").length;
        i++
      ) {
        document
          .querySelectorAll(".account-list")
          [i].classList.remove("highlight");
      }
      event.target.classList.add("highlight");
    }
    // calling balance of highlighted account
    for (let i = 0; i < accountDeposits.length; i++) {
      if (event.target.textContent == accountDeposits[i].name) {
        accountBalance.value = accountDeposits[i].deposit;
      }
    }
    // deleting trans history  when change account
    for (
      let i = document.getElementsByClassName("trans").length - 1;
      i >= 0;
      i--
    ) {
      document.getElementsByClassName("trans")[i].remove();
    }
  },
  true
);
