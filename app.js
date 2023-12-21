let boxes=document.querySelectorAll(".box");
let rst_btn=document.querySelector("#rst-button");
let new_btn=document.querySelector("#new-button");
let mesg_cont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;
let trun=true;

const winning_pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
 

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(trun){
            console.log("Player 1 done (X) ");
            box.innerText="X";
            trun=false;
        }
        else{
            console.log("Player 2 done (O) ");
            box.innerText="O";
            trun=true;
        }
        box.disabled=true;
        ++count;
        checkWinner();
    });
});

const resetGame=()=>{
    enableBoxes();
    mesg_cont.classList.add("hide");
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(pos1Val)=>{
    msg.innerText=`Congratulations, Winner is ${pos1Val}`;
    mesg_cont.classList.remove("hide");
    disableBoxes();
}

const drawFun=()=>{
    msg.innerText=`Game is Draw`;
    mesg_cont.classList.remove("hide");
}
const checkWinner=()=>{
   for(let pattern of winning_pattern){
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val !="" && pos2Val!="" && pos3Val!=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            console.log(`Winner is ${pos1Val}`);
            count=0;
            showWinner(pos1Val);
        }
        if(count==9){
            drawFun();
        }
    }
   }
};

new_btn.addEventListener("click",resetGame);
rst_btn.addEventListener("click",resetGame);