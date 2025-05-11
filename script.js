let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let newgam = document.querySelector("#newgame")
let msg = document.querySelector(".msg")
let main = document.querySelector(".main")
let msgcontianer = document.querySelector(".msgcontianer")

let tern_O = true; 

const winPettorn = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (tern_O) {
            box.innerText = "O"
            box.style.color = "#FF073A"
            tern_O = false;
        }
        else {
            box.innerText = "X"
            box.style.color = "#00BFFF"
            tern_O = true;
        }
        box.disabled = true
        console.log("box was click");

        cheakwinner();

    })
})
let cheakwinner = () => {
    for (let pettorn of winPettorn) {
        let posi1 = boxes[pettorn[0]].innerText
        console.log(boxes[pettorn[0]]);

        let posi2 = boxes[pettorn[1]].innerText
        let posi3 = boxes[pettorn[2]].innerText
        if (posi1 != "" && posi2 != "" && posi3 != "")
            if (posi1 === posi2 && posi2 === posi3) {
                console.log(posi1);
                for (let i = 0; i < 3; i++) {

                    boxes[pettorn[i]].style.backgroundColor = "#A8FF9E"
                }

                setTimeout(() => {
                    msgcontianer.style.display = "block"
                    main.style.display = "none"
                    msg.innerHTML = `Congratulation You Are Winner :<span> "${posi1}"</span>`
                    msg.classList.remove("hide")
                }, 1000)
                disabled();
            }
    }

}

let disabled = () => {
    for (box of boxes) {
        box.disabled = true
    }
}

// Reset function
let resetgame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.style.backgroundColor = "";
    });
    msg.classList.add("hide")
    main.style.display = "block"
    msgcontianer.style.display = "none"
    tern_O = true;

}; resetgame();

// Reset button event listener
reset.addEventListener("click", resetgame);
newgam.addEventListener("click", resetgame);



