let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msg = document.querySelector(".msg");
let msgcon = document.querySelector("#msgcon");
let count = 0;

let turnO = true;

let winpatter = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
            count++;
            box.classList.add("blue"); 
        }
        else{
            box.classList.remove("blue"); 
            box.innerText = "X";
            turnO = true;
            count++;
        }
        box.disabled = true;
        if(count >= 9){
            draw();
        }
        else{
            checkWinner();
        }
    })
});

const showWinner = (winner) => {
    msgcon.innerHTML = `Congratulations, Winner is ${winner}`;
    msg.classList.remove("msg");
    for (let index of boxes) {
        index.disabled = true;
    }
};

const draw = () => {
    for(let box of boxes){
        if(box.innerText != ""){
            msgcon.innerHTML = `Match is Draw`;
            msg.classList.remove("msg");
            for (let index of boxes) {
                index.disabled = true;
            }        
        }
    }
};

const checkWinner = () => {
    for (let pattern of winpatter){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val && pos2val && pos3val){
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }
        }
    }
};


const resetGame = () => {
    turnO = true;
    for (let index of boxes) {
        index.disabled = false;
        index.innerText = " ";
        count = 0
    }
    msg.classList.add("msg");
}

newbtn.addEventListener("click" , resetGame);
reset.addEventListener("click" , resetGame);
