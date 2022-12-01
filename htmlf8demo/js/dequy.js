// bai10. Implicit return dai hoc dong a

// ##########################
// const a = (a,b) =>  a + b
// let b = a(3,5)

// let ac = (value) => {
//     return value * 3
// }

// let multify  = (a,b) => a * b
// console.log(multify(2,3))
// ***********************

// ##########################
// Array filter(callback)
/// phuong thuc dung filter nay no se tra ve kieu du lieu la 1 array
// const a = [ 1.2,42,5,2,]
// //  let b = a.filter(a => a>= 3)  //  cach viet ngan
// let b  = a.filter((a) => {
//     if (a>=3){
//         return a
//     }
// })
// console.log(b)
// ***********************

//####################
// array find callback 
// const name = ['hanh','hieu','lanh']

// let result = name.find(name => name === 'hanh' ) // cach viet ngan 
// ///neu muon cach de hieu thi viet cach tren
// /// phuong thuc dung find nay no se tra ve kieu du lieu la string
// console.log(typeof result)
// Not only is it much shorter, but arguably it's much clearer (at least when you get used to the syntax).
// Here's how you can read it: We filter the numbers where the number is bigger than or equals 10.
// ***********************



// ##########################
// Array map(callback)
// const num = [1.2,3,45,5]
// // let a = num.map(num => num *2)
// let a = num.map( function hna(num){
// return num *2
// }
// )
// console.log(a)
// ***********************


// ###################
// bai tap ve array map
// const grade = grades => {
//     return grade.map((grade) => {
//         if (grade +1 > 20){
//             return 20
//         }
//         return grade +1
//     }).join(', ')
// }
// console.log(grade)
// ******************


// ###############
// bai tap ve array filter
// const a = (tempa => tempa.filter(tempsa => tempsa > 0))
// console.log(a([12,23,32]))

// const b = (values) => values.filter( values =>{
//     if (values > 10)
//     {
//         return values
//     }
// }) 
// console.log(b([12,23,4]))

// ----------------
// example: Complete the function getFreezingTemperatures 
// such that it returns an array containing the freezing 
// temperatures (the temperatures that are below 0).
//  Use an arrow function (implicit return is optional).

// const a = (templace) => templace.filter((hanh) => {
//     if (hanh <= 0){
//         return templace
//     }
// })
// console.log(a([12,-2,15,-20,6-25,0])) // truyen tham so templace at here

// ---------------------------
// example difference: Your Answer:Complete the function getPositiveTemperatures 
// such that it returns an array containing the positive temperatures 
// (the temperatures that are above 0).
// Use an arrow function (implicit return is optional).



// const getPositiveTemperatures = (temperates=>
//     temperates.filter(temperate => temperate >0));
//     console.log(getPositiveTemperatures([-5, 12, 3]));
// ************


// ###############
// example: Complete the function getYear such that
//  it returns the searchYear (passed as 2nd parameter) 
//  when it's found in the array. Otherwise, it should return undefined.
// Take a look at the sample usage and expected output to better
//  understand how the function should work.
// Use an arrow function (implicit return is optional).

// Test:
// Implements getYear
// Uses arrow function


// the way 1
// let a = (years, seachyear) => 
// years.find((years)=>
//  years === seachyear)


// the way 2: return
// let a = (years, searchyear) => years.find((year) => {
//     if (year === searchyear){
//         return years 
//     }
//     else{
//         return warning
//     }
// })
// console.log(a([2021,2022,2023],2022)) //result 2022

// ****************

// example: Complete the function getStringSizes such that it returns an array of 
// the number of characters for every string it receives in the strings parameter.
// This means, for the array ["abc", "d"] it should return [3, 1] that's because 
// the first string is made up of 3 characters and the second string is
// made up of 1 character.
// Use an arrow function (implicit return is optional).

// the way 1 return
// let a = (getstring) => {
//     return getstring.map ((getstring) => getstring.length)
// }

// // the way 2:  
// let a = (getString) => getString.map((getString) => getString.length)
// console.log(a(['hanh', 'dsfads'])) // result 4, 6

// // khi khong dung dau mui ten o ham arrow function la do no chi thuc thi dc 1 dong cau lenh thoi
// ***************************


// ##############################
// Viết chương trình nhập mảng một
//  chiều A với n phần tử
// (n>=15).Xuất mảng A ra màn hình
// Xuất ra các số chia hết cho 5.


// let a = [1,12,13,15,46,55,15]
// for (let i = 0 ; i < a.length; i++){
//     if (a[i]%5 ===0 ){
//         console.log(a[i])
//     }
//     else{
//         console.log('deo')
//     }
// }
 

// let a = [12,134,53,6546,24,6,12,32,4,345,76543]
// let b = a.filter((as) => {
//     if (as%2==1){
//         console.log(as)
//     }
// })

let a  = [
{
    coin: 12,
    name: 'javascript'
},
{
    coin: 13,
    name: 'c#'
},
{
    coin: 14,
    name: 'php'
},
{
    coin: 15,
    name: 'course'
}
]
 let sum = 0;

// su dung reduce()
// no se thuc hien luu tru gia tri trong bien 
// va thuc hien luu tru bien.
let i = 0
function red(accumulator, currentValues, currentsIndex, originAreay){
i++;
// thu in ra gia tri cua i 
// console.log(i)

// thu in ra gia tri khai bao o bien b ben duoi
// console.log(accumulator)

console.table({
    'luot chay: ': i,
    'Bien luu tru: ': accumulator,
    'giatri hientai': currentValues,
    'indexhientai trong object': currentsIndex,
    'vi tri mang': originAreay
})

}


let b = a.reduce(red, 1)


//  for ( let sums of a ){
//      sum += sums.coin
//     }
//     console.log(sum)
