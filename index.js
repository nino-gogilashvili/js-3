// მასივში მეორე ყველაზე დიდი ელემენტის დაბრუნება
let arr = [1, 2, 4, 6, 43, 43, 43, 5] 

function moveNumbers(a, b) {

  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
}

function test(arr) {
   arr.sort(moveNumbers).reverse();
   let uniqueArray = [];
   for(let value of arr) {
   if(uniqueArray.indexOf(value) === uniqueArray.indexOf(value -1)){
        uniqueArray.shift(value);
         } 
    } return console.log(uniqueArray[1]);
 } 

test(arr);

// სტრინგი ხმოვნების გარეშე

function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter(char => !vowels.includes(char)).join('');
}

console.log(disemvowel('Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur'));


// grid

let countNegatives = function(grid) {
let count = 0;
for(let i = 0; i < grid.length;i++) {
for(let j = 0; j < grid[i].length; j++) {
    if(grid[i][j] < 0) {
       count++;
      }
   } 
  }
    return count;  
};

console.log( countNegatives([[-1, 2, -2, -8],
        [1, -1, 3, 2],]));


// reverse

const  reverseNum = function (x) {
    if (x < 0) return -1 * reverse(-x);
    let num = (x + "").split('').reverse().join('');
    return (num > 2**31 -1) ? 0 : num
} 

console.log(reverseNum(-2341));

// html style

function myFunction() {
  let x = document.getElementById("myDIV");
  let y = x.getElementsByClassName("child");
  let i;
  for (i = 0; i < y.length; i+=2) {
    y[i].style.backgroundColor = "red";
  }
}

myFunction();