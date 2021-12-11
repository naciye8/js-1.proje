let massMark =80;
let heightMark=1.90;

let massJohn =95 ;
let heightJohn =1.80;

let BMIMark = massMark/(heightMark*heightMark)
let BMIJohn=massJohn/(heightJohn*heightJohn)

console.log(BMIMark,BMIJohn);
console.log(Math.floor(BMIJohn),Math.floor(BMIMark));
console.log(Math.round(BMIJohn),Math.round(BMIMark));
console.log(BMIJohn.toFixed(3),BMIMark.toFixed(1));
let markHigherBMI=BMIMark>BMIJohn;
console.log("markin bmisi buyuktur bmijohn"+markHigherBMI)

if (BMIMark > BMIJohn) { 
    console.log('Mark is higher than john'); 
    } else { 
         console.log('marks is lower than john');
     }

