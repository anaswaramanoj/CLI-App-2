var readlineSync = require('readline-sync');
const chalk = require('chalk');
var userName = readlineSync.question(chalk.bgBlack.bold.italic("Your Name? "));
console.log(chalk.bgMagenta.bold("\nHey "+userName+", Welcome to Hogwarts!"));
console.log(chalk.bgCyan("\n> Only a true Potterhead can ace this game.\n> All you have to do is either choose True or False.\n> 1 point will be given for every right answer.\n> Points won't be deducted for wrong answers.\n> No cheating spells allowed!"));

var score = 0;
function quiz(question,answer,more){
  var userAnswer = readlineSync.question(chalk.bgBlue(question));
  if(answer === userAnswer.toUpperCase()){
    console.log(chalk.bold.green("You are right!!!"));
    score = score+1;
  }else{
    console.log(chalk.keyword('red')("You are wrong!!!"));
  }
  console.log(chalk.keyword('lightblue')(more));
  console.log(chalk.inverse("\nCurrent score: "+score));
}

var questions=[
  {question:"\n\n1. According to the books, Hogwarts is located in Scotland.\n(T/F)? ", 
  answer:"T", 
  more:"  Hogwarts is located in Scotland, along with the nearby village of Hogsmeade. Although its exact location is never disclosed, Hermione Granger at one point mentions that it is close to Dufftown."},
  {question:"\n\n2. Tom Riddle's wand is made of Oak.\n(T/F)? ",
  answer:"F",
  more:"  Tom Riddle's wand was made out of yew. His wand had a Phoenix Feather at its core which can be a challenge to master, but it produces powerful magic."},
  {question:"\n\n3. Harry saw his parents when he looked in the Mirror of Erised.\n(T/F)? ",
  answer:"T",
  more:"  Harry saw his parents when he looked into the mirror. The Mirror is used to show anyone who looks in it what they want most in their life."},
  {question:"\n\n4. The title of the first 'Harry Potter' book is different in England from the name it has in the US.\n(T/F)? ",
  answer:"T",
  more:"  Yep! It's called 'The Sorcerer's Stone' in the US, and 'The Philosopher's Stone' in the UK."},
  {question:"\n\n5. The creator of the series, J.K.Rowling, shares her birthday with Hermione.\n(T/F)? ",
  answer:"F",
  more:"  J.K. Rowling shares a birthday with Harry. They were both born on July 31."},
  {question:"\n\n6. Just after Harry Potter's parents died at the hands of Lord Voldemort, Harry was sent to live at Hogwarts School of Witchcraft and Wizardry.\n(T/F)? ",
  answer:"F",
  more:"  Although Harry does attend Hogwarts, he was not sent there until after his eleventh birthday. After his parents died, Harry was sent to live with his cruel aunt and uncle."},
  {question:"\n\n7. The cry of a fully grown Mandrake can kill you.\n(T/F)? ",
  answer:"T",
  more:"  While the cry of a baby Mandrake can only knock a person out, the cry of a fully grown one can kill you."},
  {question:"\n\n8. Sirius Black, Harry's godfather, is not an Animagus.\n(T/F)? ",
  answer:"F",
  more:"  Sirius, along with Professor McGonagall and a few other powerful wizards, is an Animagus (a wizard who can change into a specific animal)"},
  {question:"\n\n9. Harry Potter's wand happens to be the brother (equivalent) of Albus Dumbledore's wand.\n(T/F)? ",
  answer:"F",
  more:"  Harry's wand is the brother of Lord Voldemort's due to them both having a core made from a feather from the same phoenix."},
  {question:"\n\n10. The ElderWand is the most Apowerful wand in the world.\n(T/F)? ",
  answer:"T",
  more:"  The Elder Wand holds an extreme power within it, making it the strongest wand in the world. The materials that make up the wand are Elder wood and Thestral hair, and it was created by Death."},]

for(var i=0;i<questions.length;i++){
  quiz(questions[i].question,questions[i].answer,questions[i].more);
}

console.log(chalk.keyword('hotpink')("\n*** You've finished the game! ***"));
console.log(chalk.bgRed.underline("\nFINAL SCORE: "+score));

let highScore = [{
       user : 'Karina',
       score: 0
},
{
   user : 'Rose',
   score: 8
},
{
    user : 'Irene',
    score: 1
},
{
   user : 'Sana',
   score: 6
}];
function high_score(){
   if(highScore.length === 0){
      highScore.push({
        user : userName,
        score: score
      })
      console.log(chalk.yellow(`\nWoah ${highScore[0].user} , you now own the highest score!`));
   }else{
     highScore[highScore.length] = {
            user  : userName,
            score : score
     }
     highScore.sort((a,b)=> b.score-a.score);
   }
   console.log(chalk.bgGray.underline(`\n\nScore Board`));
   for(let i =0;i<highScore.length;i++){
      console.log(chalk.bgGray(`${highScore[i].user}: ${highScore[i].score}`));
  }
}
high_score();
if(highScore[0].score===0){
  console.log("\nNo one scored high!");
}else{
  console.log(`\n${highScore[0].user} is the highscorer and had scored ${highScore[0].score} Points`);
  console.log(chalk.yellow(`\n\n${userName}, if you are the highscorer send me a screenshot of your score so that I can store it in my temporary database.`));
} 