/* eslint-disable */


// const person ={
//     name:'hhh',
//     age:18
// }

// const arr=[2,3,4,5,67,5]

// const arr=[2,4,3,4,5,67,5,2,2,2,2,33,4,5,6,6,7]


// 去除众数的函数  
//Num [2,3,4,5,67,5]  retun  [2,3,4,67]
// [2,3,4,5,67,5,2,2,2,2] return [3,4,5,67,5]
// const count ={
//     2:5,
//     3:1,
//     4:1,
//     5:2,
//     67:1
// }
// 对象有两种访问方式

// const person={
//     name:'xiaoli',
//     age:12
// }

//  给对象添加属性

// person[sex]===undefined

//person.sex='man'
// person[sex]


//console.log(person.name)
// const arr= ['name','age','name','name']
// const temp={}
// arr.forEach((el)=>{
//     if(temp[el]){
//         temp[el]=temp[el]+1
//     }else{
//         temp[el]=1
//     }
// })
//console.log('temp',temp)


// 把这个数组里面的值赋给一个对象（对象的属性不重复）
// function num(arr){
//     const obj={}
//     arr.forEach((el)=>{
//         if(obj[el]){
//             obj[el]=obj[el]+1
//         }else{
//             obj[el]=1
//         }
//     })
//     let bigNum={key:0,cnt:0}
//     for(i in obj){
//         if(obj[i]>bigNum.cnt){
//             bigNum.key=i
//             bigNum.cnt=obj[i]
            
//         }
//        // console.log(obj[i],obj)
//     }
//  return   arr.filter((el)=>{
//       return  el!==Number(bigNum.key)
//     })
//     //console.log('bigNum', bigNum)
// }


// console.log( num([1,2,4,3,2,1,2,2]))

//  

// const friut={
//     apple:3,
//     orange:3,
//     pear:1
// }

// =>  [apple,orange,pear]
// function toArray(obj){
//     let newArr=[]
//     for(el in obj){
//         newArr.push(el)
//     }
//     return newArr
// }

// Object.keys(friut)
// console.log('Object.keys(friut)', Object.keys(friut))
// console.log('toArray', toArray(friut))

// 如何判断一个对象为空

// 空数组

// const obj = {}

// function isNull(obj){
//    // console.log('Object.keys(obj)', !Object.keys(obj))
//     if(Object.keys(obj).length===0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isNull(obj))

// console.log('isNull', isNull(obj))

// 写一个人,有名字，有一个 say 方法，打印，'你好，我是xxx'



// class Person{
//     constructor(name){
//         this.name = name;
//     }    
//     sayName(){
//         console.log(`你好，我是${this.name}`)
//     }
// }

// const sunc =new Person('sunc')
// sunc.sayName()

// const name="kkk"
// let nameCopy = name
// nameCopy='lll'
// // =========
// const Person = {name:"nnn"}
// let personCopy =Object.assign({},Person) 
// personCopy.name='ooo'
// console.log('newPerson',Person )
const obj1={a:"1",b:"2"}
const obj2 = Object.assign({a:"3",c:"6"},obj1)
console.log(obj2.a)//1









// const xxx =function test(){
//     console.log('hi')
// }

// xxx()
