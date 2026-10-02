 

 class Employee
 {
   private ename : string 
   private eid : string 
   private salary : number ;

   constructor(ename : string , eid : string , salary : number)
   {
     this.ename = ename ; 
     this.eid = eid ; 
     this.salary = salary ; 
   }

   public getEname():string{
    return this.ename ; 
   }

   public getEid():string{
    return this.eid;
   }

   public getSalary():number{
    return this.salary;
   }

   public setEname(ename : string) : void{
     this.ename = ename;
   }

   public setEid(eid : string) : void{
     this.eid = eid;
   }

   public setSalary(salary : number) : void{
     this.salary = salary;
   }

 }


 class Developer extends Employee
 {
    role : string 

    constructor(role : string,ename : string , eid : string , salary : number)
    {
         super(ename,eid,salary);
         this.role = role
    }

    developerDetails():void{
        console.log("developer name ",this.getEname())
        console.log("developer salary ",this.getSalary())
        console.log("developer id ",this.getEid())
        console.log("developer role ",this.role)
    }
 }

 class Manager extends Employee
 {

    constructor(ename : string , eid : string , salary : number)
    {
        super(ename,eid,salary);
    }

    meeting():void{
        console.log("manages meeting and employees")
    }


     managerDetails():void{
        console.log("manager name ",this.getEname())
        console.log("manager salary ",this.getSalary())
        console.log("manager id ",this.getEid())
       
    }
 }

 console.log("----------------------- Employee Management System------------------")


 let dev1 = new Developer("frontend","miller","ABC101",20000);
 let dev2 = new Developer("backend","scott","ABC173",30000);

 dev1.setSalary(25000)
 dev1.developerDetails()
 console.log("-----------------")
 dev2.developerDetails()
 console.log("-----------------")



 let m1 = new Manager("blake","ABC001",50000)
 m1.managerDetails()
