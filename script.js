let buttons = document.querySelectorAll("button");
let input = document.querySelector("#box-input");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (evt) => {
        console.log("Clicked ", evt.target.innerText);
        if(evt.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
          } 
        else if(evt.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        } else if(evt.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            input.value = string;
        } else if (evt.target.innerHTML == "EQN"){
            input.value = string;
        } else{
            string += evt.target.innerHTML;
            input.value = string;
        }
    })
})
