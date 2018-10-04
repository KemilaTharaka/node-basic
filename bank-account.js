var account = {
    balance: 0
};

//deposit(acount,amout)
function deposit(account,amout){
    account.balance = account.balance + amout;

}
//withdraw(account,amout)
function withdraw(account,amout){
    account.balance = account.balance - amout;

}
//getBalance(account)
function getBalance(account){
    return account.balance;
}
deposit(account, 1000);

console.log(getBalance(account));

withdraw(account, 121);
console.log(getBalance(account));