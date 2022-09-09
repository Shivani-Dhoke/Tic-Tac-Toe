console.log("Welcome to Tic-Tac-Toe Game");
let audioTurn = new Audio("Notification.mp3");
let turn = "X";

const changeTurn = () => {
    return turn = "X"?"0" : "X";
}
const wins = () =>{

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = document.querySelector('boxText');
    element.addEventListener('click', () =>{
        if(boxText.innerText === ''){
        boxText.innerText = turn;
        changeTurn();
        audioTurn.play();
        wins();
        document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
        }
    })

})