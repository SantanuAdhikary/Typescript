

class Employee
{
   static companyName = "ABC company"
   ename : string ;
   eid : number ;

   constructor(ename : string , eid : number)
   {
     this.ename = ename ; 
     this.eid = eid ;
   }

   empDetails():void{
     console.log(`emp name is ${this.ename}`)
     console.log(`emp id is ${this.eid}`)
     console.log(`company name is ${Employee.companyName}`)
   }

   static play():void{
     console.log(` ${Employee.companyName} likes to play cricket`)
   }
}


// console.log(Employee.companyName)


let emp1 = new Employee("miller",1023)
emp1.empDetails()
Employee.play()


console.log("--------------------------")

let emp2 = new Employee("david",9878)
emp2.empDetails();