
class Employee
{

    ename : string 
    eid : number 
    sal : number

    constructor(ename : string , eid : number,sal:number)
    {
        this.eid = eid ; 
        this.ename= ename;
        this.sal = sal;
    }


    empDetails():void{
        console.log("emp name is ",this.ename)
        console.log("emp id is ",this.eid)
    }

    
    calculateSal():void ;
    calculateSal(bonus : number):void ;
    calculateSal(bonus : number,overTime : number):void ;

   


    calculateSal(bonus ?: number , overTime ?: number) : void{

          if(typeof bonus == "undefined" && typeof overTime == "undefined" )
          {

              console.log("emp sal is ",this.sal)
          }
          else if(typeof bonus!="undefined")
          {

              console.log("sal is ", (this.sal + bonus))
          }
          else if(typeof overTime != "undefined" && typeof bonus != "undefined")
          {
               this.sal = this.sal + (overTime * 500) + bonus; 
               console.log("sal is ",this.sal)
          }
    }



}

let e1 = new Employee("john",101,20000)
e1.empDetails()
e1.calculateSal()

console.log('----------------------------')

let e2 = new Employee("miller",131,30000)
e2.empDetails()
e2.calculateSal(5000)

console.log('----------------------------')

let e3 = new Employee("scott",156,35000)
e3.empDetails()
e3.calculateSal(5000,10)
