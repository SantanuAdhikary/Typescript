

class Student{

    static schoolName = "ABC School"


    display1():void{

        console.log("this is display1 method")
        console.log(Student.schoolName)
    }
    static display2():void{

        console.log(Student.schoolName)
    }
}


// display1(); 
//Student.display1();

let stu1 = new Student()
stu1.display1()

Student.display2()




class Person
{

    display3() : void
    {
         console.log(Student.schoolName)
    }
}