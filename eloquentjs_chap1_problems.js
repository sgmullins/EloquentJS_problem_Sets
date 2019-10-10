//Build a triangle of hashes length amount tall
var length = 7;
var line = '';
for (var i = 1; i <= length; i++){
    for (var j = 1; j<=i; j++){
        line += '#';
    }
    line += "\n";
}
console.log(line);



//FizzBuzz challenge, print numbers 1-100 with numbers divisible by 3, 5 and 3 and 5 printing words
const num = 100;
  for(let i = 1; i <= num; i++){
    if(i % 3 === 0 && i % 5 ===0){
      console.log("fizzbuzz")
    } else if(i % 5 === 0){
      console.log('buzz')
    } else if (i % 3 === 0){
      console.log('fizz')
    } else {
      console.log(i);
    }
  }


//Chessboard challenge
const size = 8;
let result = "";

  for (let i = 0; i < size; i++){
    for (let j = 0; j < size; j++){
      result += (i+j) % 2 === 0 ? '#' : " ";
      
    }
   result += "\n";
   
  }
  console.log(result);
  
