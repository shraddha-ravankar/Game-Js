let gameseq=[];
let userseq=[];

let Started=false;
let level=0;

let h2=document.querySelector("h2");

let btns=["yellow","green","red","purple"]


document.addEventListener("keypress",function(){
    if(Started==false){
        console.log("game is stared")
        Started=true;

        levelUp();
    }


})


function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`
    
    let ranInx=Math.floor(Math.random()*3);
    let randColor=btns[ranInx]
    let randBtn=document.querySelector(`.${randColor}`)
    // console.log(ranInx)
    // console.log(randColor)
    // console.log(randBtn)

    gameseq.push(randColor);
    console.log(gameseq)
    gameFlash(randBtn);

}



function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");

    },250);

}

function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");

    },250);

}
 


function checkAns(idx){

    

    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
           setTimeout(levelUp,1000)
        }
        // console.log("same value")
    }else{
        h2.innerHTML=`Game Over Your Score was <b>${level}</b> <br>press any key to start`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150)
    
        reset();

    }
   
//    console.log("current level",level);

}



function btnPress(){
    // console.log(this)
    let btn = this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userColor);

    checkAns(userseq.length-1);

}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress)

}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}


