# Alper Banking App

## Test to see how project works!
http://alper1.epizy.com/

## Description

An exercise in Javascript programing. Uses javascript and html to display the interface of a banking app without the use of any database.

## Setup/Installation Requirements

* Open in a Bootstrap-supported browser
* Bootstrap stylesheet is included, so it will not be necessary to download it

## Technologies Used

* HTML
* CSS
* Javascript
* JQuery
* Bootstrap framework

## Project Tools
- Zoom / Skype :
    • You can also create a project team zoom sessions by zoom.
    • You can share screen with it
    • If you create a team session, do not forget to add me to that session too!!!

- Slack:
    • You can write direct messages
    • You can make voice call 
      
- Trello:
    • Create a project card for your team in our FbW10 board
    • Manage your project here
    • Give tasks and track them 
      
- GitHub:
    • Create a team in Organization “FbW10”
    • Create your repository with your  Project Group Name
    • Give read, write rights for your team members ( Be careful! Do not give admin rights to other teams members for your repository ) 
    • Make me admin to your repository too.

- Teamviewer:
    • You can connect to your team colleagues laptop and make remote control

## Project Folder Structure

    • index.html
    • js =>
        • jquery-2.2.4.js
        • scripts.js
    • css  =>
        • bootstrap.css
        • styles.css

## scripts.js ( Main JavaScript File Parts )

1- Business Logic :
    1.1- BankAccount Class "class BankAccount"
        1.1.1 - "constructor(name, initialDeposit)"
        1.1.2 - "transact(amount)" function: Method for adding a deposit or subtracting a withdrawl

    1.2- "function User()" : Store user credential informations under the function 
    1.3- "let displayAccounts =  function(){}" : Display Accounts under the "userDisplay Accounts under the "user" 
        1.3.1 - Think about how to make highlight in the account list
        1.3.2 - When you click, selected account balanca and history will be shown
    1.4- "let displayHistory =  function(){}" : Display transaction history of the account

2- User logic : 
    2.1 - Register the account and set initial deposit
    2.2 - Check the Transaction if there is enough Funds or not, when you click the Transaction button!
    2.3 - When you sing-up, store the user informations and write welcome message!
    2.4 - When you sign-in, show related account. Think about how to change user and show its account!

## Project Phases

Phase 1: 
    1- Just sing-up with a username & password
    2- Create an account for the username and store that account in it
    3- Add a Initial Deposit for the account
    4- Show account in "Accounts" box
    5- Make new Deposit / Wihtdrawl for the account and change the Account Balance
    6- Show Account Balance
    7- Show Transaction History

Phase 2:
    1- Just sing-up with a username & password
        1.1 - Sign-in with your user
        1.2 - You can sign-up with different user and switch your user to second user

    2- Create an account for the username and store that account in it
        2.1 - You can create more than one account

    3- Add a Initial Deposit for the account
        3.1 - You can add another initial Deposit for other accounts

    4- Show account in "Accounts" box
        4.1 - Show all account here
        4.2 - Make "highlight" the selected account

    5- Make new Deposit / Wihtdrawl for the account and change the Account Balance
        5.1 -  When you make new Deposit / Wihtdrawl, it will store selected account

    6- Show Account Balance
        6.1 - show last balance for the selected account

    7- Show Transaction History
        7.1 - show last Transaction History for the selected account
        7.2 - when the user click second(other) account, it's transaction history will be shown
    
## Teams for FbW10
    1st Group: 
        - Tim
        - Kris
        - Parsa
        - Bistrat

    2nd Group:
        - Marcio
        - Daniel
        - Younes
        - Annas

    3rd Group:
        - Majd
        - Cristian
        - Costel
