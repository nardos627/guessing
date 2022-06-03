const readline = require("readline");
let up = 2
 const input = prompt("What's your username?");
const ql = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
alert(`Your username is ${input}`);
while(true) {
  let guess = prompt(`Enter a number between 1 - ${up}: (stage ${up-1}) `);
  let random = Math.ceil(Math.random() * up)
  if(guess == random) {
    up++
    console.log('Correct Levelling Up!')
  } else {
    console.log('Wrong Guess, Sorry Game Over. you guessed', guess,'. The correct answer is', random)
    break
  }
}