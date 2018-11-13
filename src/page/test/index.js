/* eslint-disable */


const person ={
    name:'hhh',
    age:18
}

const arr=[2,3,4,5,67,5]

const arr=[2,4,3,4,5,67,5,2,2,2,2,33,4,5,6,6,7]


// 去除众数的函数  
// [2,3,4,5,67,5]  retun  [2,3,4,67]
// [2,3,4,5,67,5,2,2,2,2] return [3,4,5,67,5]
arr.sort((a,b)=>{
    return a-b;
})
console.log(arr)

function num(){

}