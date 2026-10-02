
class Bank
{
   static bankName : string = "ICICI Bank"

   branch : string 
   acholderName : string 
   accNo : number 
   static acBalance: number = 1000

   constructor(brach:string , acholderName : string , accNo:number)
   {
     this.branch = brach;
     this.accNo = accNo;
     this.acholderName = acholderName;
   }

   bankDetails() : void
   {
     console.log(`welcome to ${Bank.bankName}`)
     console.log(`branch name is : ${this.branch}`)
   }

   userDeails() :  void{
     console.log(`Account Holder Name is : ${this.acholderName}`)
     console.log(`Account number is : ${this.accNo}`)
     console.log(`Account Balance is : ${Bank.acBalance}`)
   }

   deposit(amount : number) : void
   {
          Bank.acBalance = Bank.acBalance + amount;
          console.log(`your amount has deposited, your current balance is ${Bank.acBalance}`)
   }

//    withdrawl(amount : number) : void{

//        if(amount <= this.acBalance)
//        {
//          this.acBalance = this.acBalance - amount;
//          console.log(`amount has withdrawl successfully`)
//          console.log(`now your account balance is ${this.acBalance}`)
//        }
//        else{
//          console.log("insufficient balance")
//        }
//    }

}

let user1 = new Bank("vadapalani","harish",1234567890123)

user1.bankDetails()
user1.userDeails()
user1.deposit(4000)
// user1.withdrawl(8000)

console.log("---------------------------------")


let user2 = new Bank("arumbakkam","pavan",9876543219089)
user2.bankDetails()
user2.userDeails()
// user2.deposit(9000)
// user2.withdrawl(2000)
