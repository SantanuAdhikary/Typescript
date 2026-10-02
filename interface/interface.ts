

interface Student {
    sname: string,
    sid: number | string,
    sage: number,
    skills: string[],
    address: {
        city: string,
        pin: number
    }
}


let stu1 : Student = {
    sname: "john",
    sid: "bca101",
    sage: 21,
    skills: ["java", "python", "ds"],
    address: {
        city: "chennai",
        pin: 123456
    }
}


let stu2: Student = {
    sname: "miller",
    sid: "bca106",
    sage: 23,
    skills: ["ts", "js", "ds"],
    address: {
        city: "bangalore",
        pin: 218930
    }
}


console.log('---------------------------------------')


interface Person {
    name : string,
    age : number,
    adhaarNo : number,
}


interface Employee extends Person{
    eid : number ,
    sal : number
}


let emp1 : Employee = {
    eid : 101,
    sal : 23456,
    name : "john",
    age : 43,
    adhaarNo : 9012345678787
}