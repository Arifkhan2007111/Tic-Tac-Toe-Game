let buttons = document.querySelectorAll(".button")
let resetBTN = document.querySelector(".reset")
let msg = document.querySelector(".winner")
let newGameBTN = document.querySelector(".newGame-btn")
let win_msg_container = document.querySelector(".msg-container")

let turnO = true; //playerX playerO

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const reset_btn = () => {
    win_msg_container.classList.add("hidden")
    enable_button()
}

const disable_button = ()  =>{
    for(let button of buttons){
        button.disabled = true
    }
}

const enable_button = ()  =>{
    for(let button of buttons){
        button.disabled = false
        button.innerText = ""
    }
}

const show_winner  = (winner) =>{
    msg.innerText = `Winner is ${winner}`
    win_msg_container.classList.remove("hidden")
}

buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        console.log("button was clicked")
        if(turnO){
            button.innerText = "O"
            turnO = false
        }
        else{
            button.innerText = "X"
            turnO = true
        }
        button.disabled = true
        winChecker();
    })
})

const winChecker = () =>{
    for(let pattern of winPatterns){
            let btnPosition1 = buttons[pattern[0]].innerText
            let btnPosition2 = buttons[pattern[1]].innerText
            let btnPosition3 = buttons[pattern[2]].innerText
            if(btnPosition1 != "" && btnPosition2 != "" && btnPosition3 != ""){
                if(btnPosition1===btnPosition2 && btnPosition2===btnPosition3){
                    console.log("winner", btnPosition1)
                    disable_button()
                    show_winner(btnPosition1)
                }
            }
    }
}

newGameBTN.addEventListener("click" , reset_btn )
resetBTN.addEventListener("click" , reset_btn )