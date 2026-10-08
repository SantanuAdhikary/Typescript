

class BankAccount
{
    private balance : number 

    constructor(balance : number)
    {
        this.balance = balance;
    }

    public getBalance():number{
        return this.balance
    }

    calculateInterest():void
    {
          console.log("it will calcute the interest")
    }
}

class SavingsAccount extends BankAccount
{
    constructor(balance : number)
    {
        super(balance)
    }

    override calculateInterest(): void {
        console.log("calculating interest for savings account")
        let interest = (this.getBalance() * 0.5 * 1 ) / 100; 
        console.log("interest is ",interest)
        console.log("total balance ",(this.getBalance() + interest))
    }
}

class CurrentAccount extends BankAccount
{
    constructor(balance : number)
    {
        super(balance)
    }

    override calculateInterest(): void {
        console.log("calculating interest for current account")
        let interest = (this.getBalance() * 0.8 * 1 ) / 100 ; 
        console.log("interest is ",interest)
        console.log("total balance ",(this.getBalance() + interest))
    }
}

let ba : BankAccount ; 

ba = new CurrentAccount(50000);
ba.calculateInterest()
console.log("-----------------------------------")

ba = new SavingsAccount(50000)
ba.calculateInterest()

