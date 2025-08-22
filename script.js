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
                 if (screen.innerText.length < 9) {
                    screen.innerText += number.innerText;
                }
            }
        });
    });

    const equal = document.querySelector(".equal");
    equal.addEventListener("click", () => {
           try {
            let expression = screen.innerText;
            
            if (expression.includes("%")) {
                
                expression = expression.replace(/(\d+)([\+\-\*\/])(\d+)%/g, (_, num1, operator, num2) => {
                    return `${num1}${operator}(${num1}*${num2}/100)`;
                });
            }

            screen.innerText = eval(expression);
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