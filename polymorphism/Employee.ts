

class Employee
{
    ename : string 
    eid : string 
    private sal : number

    constructor(ename : string , eid : string , sal : number){
        this.eid = eid ; 
        this.sal = sal 
        this.ename = ename 
    }

    public getSal():number{
        return this.sal
    }

    public setSal(sal : number):void{
        this.sal = sal ;
    }

    calculateBonus():void{
        console.log("calulating bonus for employee")
    }

    empDetails():void{
        console.log(
                    `
                    |  ename        | ${this.ename}|
                    --------------------------------
                    |   eid         | ${this.eid}  |
                    --------------------------------
                    `)
                    
    }
}


class Develoer extends Employee
{

    constructor(ename : string , eid : string , sal : number)
    {
         super(ename , eid , sal)
    }

    override calculateBonus(): void {
        console.log("\n\t\tcalculating bonus for Developer\n")
        console.log("salary is ",this.getSal())
        let bonus = this.getSal() * 0.2 
        console.log("total salary is ",(this.getSal() + bonus))
    }
}


class Tester extends Employee
{
    
    constructor(ename : string , eid : string , sal : number)
    {
        super(ename , eid , sal)
    }
    
    override calculateBonus(): void {
        console.log("\n\t\tcalculating bonus for Tester\n")
        console.log("salary is ",this.getSal())
        let bonus = this.getSal() * 0.1
        console.log("total salary is ",(this.getSal() + bonus))
    }
}


let emp : Employee

emp = new Develoer("john","abc123",30000)
emp.empDetails()
emp.calculateBonus()

emp = new Tester("miller","abc461",30000)
emp.empDetails()
emp.calculateBonus()