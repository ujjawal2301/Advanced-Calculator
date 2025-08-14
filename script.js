let buttons = document.querySelectorAll("button");
let input = document.querySelector("#box-input");

let string = "";
let arr = Array.from(buttons);

let a;
let b;
let c;

let eqnMode = false;  // flag for quadratic input mode
let eqnCount = 0;     // to count how many inputs (a,b,c) entered

arr.forEach(button => {
    button.addEventListener("click", (evt) => {
        console.log("Clicked ", evt.target.innerText);
        if (evt.target.innerHTML == "=") {
            string = eval(string);
            input.value = string;
        }
        else if (evt.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        } else if (evt.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (evt.target.innerHTML == "EQN") {
            // input.value =  a;
            eqnMode = true;
            eqnCount = 0;
            string = "";
            input.value = "A : ";
            return;
        } else if (eqnMode) {
            if (evt.target.innerHTML === "=") {
                if (eqnCount === 0) {
                    a = parsefloat(string);
                    eqnCount++;
                    string = "";
                    input.value = "B : ";
                } else if (eqnCount === 1) {
                    b = parseFloat(string);
                    eqnCount++;
                    string = "";
                    input.value = "C : ";
                } else if (eqnCount === 2) {
                    c = parseFloat(string);
                    eqnMode = false;
                    string = "";
                    input.value = `A : ${A}, B : ${B}, C : ${C}`;
                }
            }
        }
        else {
            string += evt.target.innerHTML;
            input.value = string;
        }
    })
})
