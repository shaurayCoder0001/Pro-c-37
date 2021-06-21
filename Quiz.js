class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
   
  background("yellow")

  textSize(25)
    text ("Result of the quiz",340,50)
    text ("-------------------------",320,65)
    Contestant.getPlayerInfo()

    if(allContestants !== undefined){
      var display_Answers = 230
      fill("blue")
      textSize(20);
      text("*Note: contestants who answered correct are hightlied in green colour!", 130, 230)
      for(var plr in allContestants){
        var correctAns = "2"
        if (correctAns ===  allContestants[plr].answer)
          fill("Green");
        else
          fill("red");

       display_Answers+=20;
        textSize(15);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 120,display_Answers)
      }
  }
}

}