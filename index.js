var readline=require('readline-sync');
var score=0
var user=readline.question("Welcome to the world of quiz\nCan I know your name:\n");

user=user.charAt(0).toUpperCase() + user.slice(1);

console.log("Welcome ",user+" Let's start wit know me quiz :)");

var question=[
  {
    ques:"Where do I live?",
    ans: "PATNA"
  },
  {
    ques: "What's my favorite food?",
    ans: "DOSA"
  },
  {
    ques: "Where do I currently work?",
    ans: "HOLOSUIT"
  },
  {
    ques: "Who's my favorite hero",
    ans: "IRONMAN"
  }
];

function checkAnswers(data,res){
  if(data.ans==res.toUpperCase()){
    score++;
    console.log("Correct Answer :)\n Score="+score);
  }else{
    score--;
    console.log("Wrong Answer :(\n Score="+score);
  }
}

for(var i in question){
  var res=readline.question(question[i].ques+"\n");
  checkAnswers(question[i],res);
}

console.log(`\n.\n.\nThanks ${user} for using the quiz app\nYour final score is ${score} Have a great day!`);