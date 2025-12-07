let selection=document.querySelectorAll(".choice");
let choice=['Rock','Paper','Scissor'];
let yourscore=0,compscore=0;
const computer = (choice) =>{
    let randomchoice=choice[Math.floor(Math.random()*choice.length)];
    return randomchoice;
}
selection.forEach( (btn , index) => {
    btn.onclick=()=>{
        let playerchoice=choice[index];
        let computerchoice=computer(choice);

        let msg=document.querySelector("#msg");
        let yourscoreEL=document.querySelector("#yourscore");
        let compscoreEL=document.querySelector("#compscore");
        // For draw
        if(playerchoice===computerchoice){
            msg.textContent="It's a Draw";
            msg.style.backgroundColor="grey";

        }
        //Rock
        else if(playerchoice==="Rock"){
           if(computerchoice==="Paper"){
            msg.textContent="You Lose , Computer Choose Paper";
            msg.style.backgroundColor="red";
            compscore++;
           } 
           else{
            msg.textContent="You Win , Computer Choose Scissor";
            msg.backgroundColor="blue";
            yourscore++;
           }
        }
        //Paper
        else if(playerchoice==="Paper"){
            if(computerchoice==="Scissor"){
                msg.textContent="You Lose , Computer Choose Scissor"
                msg.style.backgroundColor="red";
                compscore++;
            }
            else{
                msg.textContent="You Win , Computer Choose Rock";
                msg.style.backgroundColor="blue";
                yourscore++;
            }
        }
        //Scissor
        else if(playerchoice==="Scissor"){
            if(computerchoice==="Rock"){
                msg.textContent="You Lose , Computer Choose Rock"
                msg.style.backgroundColor="red";
                compscore++;
            }
            else{
                msg.textContent="You Win , Computer Choose Paper";
                msg.style.backgroundColor="blue";
                yourscore++;
            }
        }
        yourscoreEL.textContent=yourscore;
        compscoreEL.textContent=compscore;
    };
});
