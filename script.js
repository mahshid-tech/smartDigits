const firstNumberIput= document.getElementById('firstNumber');
const secondNumberIput= document.getElementById('secondNumber');
const operatorSelectInput= document.getElementById('operator');
const calculateButton = document.getElementById('calculate');
const resultParagraph= document.getElementById('result');


function calculate(){
    const firstNumber= parseFloat(firstNumberIput.value);
    const secondNumber= parseFloat(secondNumberIput.value);
    const operator= operatorSelectInput.value;

    if (isNaN(firstNumber) || isNaN(secondNumber)){

    resultParagraph.textContent= 'please enter a valid number'
    return
    }
    
    let result='';
    console.log(typeof result)
    

    if(operator==='+'){
        result= firstNumber+secondNumber;
    }
    else if(operator==='-'){
         result= firstNumber-secondNumber;
    
    }
    else if(operator==='*'){
         result= firstNumber*secondNumber;
        }
    else if(operator==='/'){
        if (secondNumber ===0 ){
            resultParagraph.textContent= 'devision by zero is not allowed'
            return

        }
         result= firstNumber/secondNumber;
        }
    
    resultParagraph.textContent= 'result is '+ result;

}
console.log(typeof firstNumber)

calculateButton.addEventListener('click', calculate);
