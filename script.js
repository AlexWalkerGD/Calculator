function writeNumber(){

    let isTrue = false;
    const inputNumbers = document.querySelectorAll(".numbers, .operadores");
    const screen = document.getElementById("result");
  
    inputNumbers.forEach(number => {
        number.addEventListener("click", () => {
            if(isTrue){
                screen.innerText = "";
                screen.innerText += number.innerText;
                isTrue = false;
            }
            else{
                screen.innerText += number.innerText;
            }
        });
    });

    const equal = document.querySelector(".equal");
    equal.addEventListener("click", () => {
           try {
            screen.innerText = eval(screen.innerText);
            isTrue = true;
        } catch {
            screen.innerText = "Erro";
        }
    });

    const erase = document.querySelector(".erase");
    erase.addEventListener("click", () => {
           screen.innerText  = "";     
    });
};

writeNumber();     