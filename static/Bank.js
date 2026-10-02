"use strict";
class Bank {
    static bankName = "ICICI Bank";
    branch;
    acholderName;
    accNo;
    static acBalance = 1000;
    constructor(brach, acholderName, accNo) {
        this.branch = brach;
        this.accNo = accNo;
        this.acholderName = acholderName;
    }
    bankDetails() {
        console.log(`welcome to ${Bank.bankName}`);
        console.log(`branch name is : ${this.branch}`);
    }
    userDeails() {
        console.log(`Account Holder Name is : ${this.acholderName}`);
        console.log(`Account number is : ${this.accNo}`);
        console.log(`Account Balance is : ${Bank.acBalance}`);
    }
    deposit(amount) {
        Bank.acBalance = Bank.acBalance + amount;
        console.log(`your amount has deposited, your current balance is ${Bank.acBalance}`);
    }
}
let user1 = new Bank("vadapalani", "harish", 1234567890123);
user1.bankDetails();
user1.userDeails();
user1.deposit(4000);
// user1.withdrawl(8000)
console.log("---------------------------------");
let user2 = new Bank("arumbakkam", "pavan", 9876543219089);
user2.bankDetails();
user2.userDeails();
// user2.deposit(9000)
// user2.withdrawl(2000)
