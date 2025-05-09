let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn= document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let count=0;
const arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetGame=()=>{
    turnO= true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
        if(turnO){
            box.innerText="O";
            box.style.color = "yellow";
            turnO = false;
        }
        else{
                box.innerText="X";
                box.style.color = "white";
                turnO= true;
            }    
        box.disabled = true;
        count++;


        let isWinner= checkWin();
        if(count === 9 && !isWinner){
        showDraw();
    }
  });
});
const showDraw= () => {
    msg.innerText=`GAME IS DRAWN`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
const checkWin = () => {
    for(let patterns of arr){
        let pos1Val=boxes[patterns[0]].innerText;
        let pos2Val=boxes[patterns[1]].innerText;
        let pos3Val=boxes[patterns[2]].innerText;
        if(pos1Val != "" && pos2Val!= "" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                return true;
            }
        }
    }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);