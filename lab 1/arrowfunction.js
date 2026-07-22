//write afunction to take number bw 0 to 9 and return number in words
const toWords = (digit) =>{
  switch (digit) {
    case 0:
    return "zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "Invalid Number";
  }
}

console.log(toWords(5));
console.log(toWords(3));
console.log(toWords(8));


//create another function that takes number and show 

const rollNum = "250031000497";
const digits = String(rollNum).split("");
console.log(digits);
let inWords ="";
  digits.forEach((d) => {
   inWords +=" " + toWords(Number(d));
 });
 console.log(inWords);