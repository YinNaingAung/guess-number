let mesg1 = document.getElementById("mesg1");
let chanceNum = document.getElementById("chance-num");
let guessNum = document.getElementById("guess-num");
let Chance =10;
let Guessed = [];
let Container = document.getElementById("container");

 let random = Math.floor(Math.random()*50) +1;
    console.log(random);
    chanceNum.textContent = "Number of chance to guess :" + Chance;
    //  document.getElementById("guess-btn").disabled = true;
function play(){
   
let num = Number(document.getElementById("add-num").value);
    
    if( num <1 || num>50){
        alert ("You must write the number between 1 to 50!")
    }else if(num === random){
        mesg1.textContent = "Congratulation! You won the game";
        Container.classList.add("true");
         document.getElementById("guess-btn").disabled = true;


    }
    else if(num>random){
        mesg1.textContent = "Your number is high";
        Chance--;
        chanceNum.textContent = "Number of chance to guess :" + Chance;
        Guessed.push(num);
        guessNum.textContent = "Guessed number :" + Guessed;
        Container.classList.add("wrong");
        document.getElementById("add-num").value= "";
        
    }else{
        mesg1.textContent = "Your number is low";
        Chance--;
        chanceNum.textContent = "Number of chance to guess :" + Chance;
        Guessed.push(num);
        guessNum.textContent = "Guessed number :" + Guessed;
        Container.classList.add("wrong");
        document.getElementById("add-num").value= "";
    }
 
 
 if(Chance<=0){
    document.getElementById("guess-btn").disabled = true;
    alert("You must restart the game to guess again.");
    restart();
 }
}

function restart(){
   random = Math.floor(Math.random()*50) +1;
   console.log(random);
   mesg1.textContent = "You restarted the game sussessfully!!";
   Chance =10;
   chanceNum.textContent = "Number of chance to guess :" + Chance;
   Guessed = [];
    guessNum.textContent = "Guessed number :" + Guessed;
    Container.classList.remove("true");
    Container.classList.remove("wrong"); 
    document.getElementById("guess-btn").disabled = false;
     document.getElementById("add-num").value= "";
}