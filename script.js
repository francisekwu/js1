const buttons = document.querySelectorAll('button');
const display = document.getElementById('result');

let currentValue = "";

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        let value = button.textContent;

        if(value === "CE"){
            currentValue = "";
            display.textContent = "0";
        }else if(value === "="){
            try{
                let result = eval(currentValue);
                display.textContent = result;
            }catch{
                display.textContent = "Error";
                currentValue = "";
            }
        }else{
            if(display.textContent === "0"){
                currentValue = value;
            }else{
                currentValue += value;
            }
            display.textContent = currentValue;
        }
    })
})