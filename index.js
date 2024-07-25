let calculation = '0';
updateDisplay()

function numberClicked(x) {
  if (calculation 
    === "0"
  ){
    calculation="";
  }
  calculation += x;
  console.log(calculation);
  updateDisplay();
  return calculation;   
}

function buttonClicked(buttonClass) {
  if(buttonClass === 'signButton'){
    calculation = calculation * (-1);
    updateDisplay();
    console.log(calculation);
  }else if (buttonClass === 'acButton'){
    if(calculation.length === 1){
      calculation = "0";
    }else{
      calculation = calculation.slice(0, -1);
    }
    updateDisplay();
    console.log(calculation);
  } 

}

function signClicked(x) {
  calculation += x ;
  updateDisplay()   
  console.log(calculation);
  return calculation;
}

function updateDisplay() {
  document.querySelector('.js-calculation-display').value = calculation;
}



//this calculates the equation
function showResult() {
  try {
    calculation = String(eval(calculation));
    calculation = Number(parseFloat(calculation).toFixed(2));
    updateDisplay();
    console.log(calculation);
    calculation = '';
  } catch (e) {
    calculation = 'Error';
    updateDisplay();
    console.log('Error');
  }
}

function keyDownDisplay(event){
  if(event.key === 'Backspace'){
    if(calculation.length === 1){
      calculation = "0";
    }else{
      calculation = calculation.slice(0, -1);
    }
    updateDisplay();
    console.log(calculation);
  }else if (event.key === 'Enter'){
    try {
      calculation = String(eval(calculation));
      calculation = Number(parseFloat(calculation).toFixed(2));
      updateDisplay();
      console.log(parseFloat(calculation).toFixed(2));
      calculation = '';
    } catch (e) {
      calculation = 'Error';
      updateDisplay();
      console.log('Error');
    }
  }


  if(event.key === "0" || event.key === "1" || event.key === "2" || event.key === "3" || event.key === "4" || event.key === "5" ||event.key === "6" || event.key === "7" || event.key === "8" || event.key === "9" || event.key === "." ){
    if (calculation 
      === "0"
    ){
      calculation="";
    }
    calculation += event.key;
    console.log(calculation);
    updateDisplay()
    return calculation;
  }

  if(event.key === "*" || event.key === "-" || event.key === "+" || event.key === "/" ){
    calculation += event.key ;
    updateDisplay()   
    console.log(calculation);
    return calculation;
  }
}




