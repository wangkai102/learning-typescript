// 'xxx: number' 表示声明一个number类型 
const a:number = 123;
const b:string = '123';
// 声明一个函数的参数类型(number以及any)和返回值(void)
function fn(x:number,y:any,z?:string):number{
    return 123
} 
const c:(x:number,y:any)=>void = (x:number,y:any) =>{
    
} 
//  声明一个接口 Person 
// name属性，类型是string 
// age属性: 类型number 
// family属性，类型是数组，数组里面都是string类型的数据 
// 可选sex属性，值为'男'或者’女’
interface IPerson{
    name:string;
    age:number;
    family:string[];
    sex?:"男"|"女"
}
const person:IPerson ={
    name: "小李",
    age:18,
    family:["爸爸","妈妈"],
    sex:"男"
}
// type类似interface，以下写法等同用interface声明IPerson
type IPerson2 = {
    name:string;
    age:number;
    family:string[];
    sex?:"男"|"女"
}
type Name = string;

type NameOrIPerson2 = Name | IPerson2;
const person2:NameOrIPerson2 = '123';
