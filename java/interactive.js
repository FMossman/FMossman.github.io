
//const button1 = document.querySelector('#oneButton');

var screenDisplay = [];
var figures = [];
var digitArray = [];
var operator = "";
var answer = 0;
var displaynArray = [];

if(screenDisplay.length == 0 ) {

  //ONE BUTTON CONTROLS
  oneButton.addEventListener('click', () => {
      screenDisplay.push(1);
      var displayArray = [];
      for(let i = 0; i < screenDisplay.length; i++){
        displayArray += screenDisplay[i];
      }
      document.getElementById("screenOutput").innerHTML = displayArray;
    });

  //TWO BUTTON CONTROLS
  twoButton.addEventListener('click', () => {
    screenDisplay.push(2);
    var displayArray = [];
    for(let i = 0; i < screenDisplay.length; i++){
      displayArray += screenDisplay[i];
    }
    document.getElementById("screenOutput").innerHTML = displayArray;
  });

  //THREE BUTTON CONTROLS
  threeButton.addEventListener('click', () => {
    screenDisplay.push(3);
    var displayArray = "";
    for(let i = 0; i < screenDisplay.length; i++){
      displayArray += screenDisplay[i];
    }
    document.getElementById("screenOutput").innerHTML = displayArray;
  });

  //FOUR BUTTON CONTROLS
  fourButton.addEventListener('click', () => {
    screenDisplay.push(4);
    var displayArray = "";
    for(let i = 0; i < screenDisplay.length; i++){
      displayArray += screenDisplay[i];
    }
    document.getElementById("screenOutput").innerHTML = displayArray;
  });

  //FIVE BUTTON CONTROLS
  fiveButton.addEventListener('click', () => {
    screenDisplay.push(5);
    var displayArray = "";
    for(let i = 0; i < screenDisplay.length; i++){
      displayArray += screenDisplay[i];
    }
    document.getElementById("screenOutput").innerHTML = displayArray;
  });

  //SIX BUTTON CONTROLS
  sixButton.addEventListener('click', () => {
    screenDisplay.push(6);
    var displayArray = "";
    for(let i = 0; i < screenDisplay.length; i++){
      displayArray += screenDisplay[i];
    }
    document.getElementById("screenOutput").innerHTML = displayArray;
  });

  //SEVEN BUTTON CONTROLS
  sevenButton.addEventListener('click', () => {
    screenDisplay.push(7);
    var displayArray = "";
    for(let i = 0; i < screenDisplay.length; i++){
      displayArray += screenDisplay[i];
    }
    document.getElementById("screenOutput").innerHTML = displayArray;
  });

  //EIGHT BUTTON CONTROLS
  eightButton.addEventListener('click', () => {
    screenDisplay.push(8);
    var displayArray = "";
    for(let i = 0; i < screenDisplay.length; i++){
      displayArray += screenDisplay[i];
    }
    document.getElementById("screenOutput").innerHTML = displayArray;
  });

  //NINE BUTTON CONTROLS
  nineButton.addEventListener('click', () => {
    screenDisplay.push(9);
    var displayArray = "";
    for(let i = 0; i < screenDisplay.length; i++){
      displayArray += screenDisplay[i];
    }
    document.getElementById("screenOutput").innerHTML = displayArray;
  });


  //DECIMAL BUTTON CONTROLS
  decimalButton.addEventListener('click', () => {
    screenDisplay.push("&#46;");
    var displayArray = "";
    for(let i = 0; i < screenDisplay.length; i++){
      displayArray += screenDisplay[i];
    }
    document.getElementById("screenOutput").innerHTML = displayArray;
  });

  //ZERO BUTTON CONTROLS
  zeroButton.addEventListener('click', () => {
    screenDisplay.push(0);
    var displayArray = "";
    for(let i = 0; i < screenDisplay.length; i++){
      displayArray += screenDisplay[i];
    }
    document.getElementById("screenOutput").innerHTML = displayArray;
  });


  //CLEAR BUTTON CONTROLS
  clearButton.addEventListener('click', () => {
    var displayArray = "";
    screenDisplay = [];
    document.getElementById("screenOutput").innerHTML = displayArray;
    var digitArray = [];
    answer = 0;
  });


  //plus pressed
  plusButton.addEventListener('click', () => {
    var digit = parseFloat(screenDisplay.join(''));
    console.log(digit); 
    digitArray.push(digit);
    screenDisplay = [];
    document.getElementById("screenOutput").innerHTML = "";
    operator = "plus";
  });

  //minus pressed
  minusButton.addEventListener('click', () => {
    var digit = parseFloat(screenDisplay.join(''));
    console.log(digit); 
    digitArray.push(digit);
    screenDisplay = [];
    document.getElementById("screenOutput").innerHTML = "";
    operator = "minus";
  });

  //mult pressed
  multButton.addEventListener('click', () => {
    var digit = parseFloat(screenDisplay.join(''));
    console.log(digit); 
    digitArray.push(digit);
    screenDisplay = [];
    document.getElementById("screenOutput").innerHTML = "";
    operator = "mult";
  });

  //divide pressed
  divideButton.addEventListener('click', () => {
    var digit = parseFloat(screenDisplay.join(''));
    console.log(digit); 
    digitArray.push(digit);
    screenDisplay = [];
    document.getElementById("screenOutput").innerHTML = "";
    operator = "divide";
  });

  //sqaure pressed
  squareButton.addEventListener('click', () => {
    var digit = parseFloat(screenDisplay.join(''));
    console.log(digit); 
    document.getElementById("screenOutput").innerHTML = "";
    screenDisplay = [];
    answer = digit * digit;
    screenDisplay.push(answer);
    document.getElementById("screenOutput").innerHTML = answer;
    digitArray = [];
    answer = 0;
  });

  //sqaure root pressed
  squareRootButton.addEventListener('click', () => {
    var digit = parseFloat(screenDisplay.join(''));
    console.log(digit); 
    document.getElementById("screenOutput").innerHTML = "";
    screenDisplay = [];
    answer = Math.sqrt(digit);
    screenDisplay.push(answer);
    document.getElementById("screenOutput").innerHTML = answer;
    digitArray = [];
    answer = 0;
  });
}



 //EQUALS PRESSED
 equalButton.addEventListener('click', () => {
  //ADDING
  if (operator == "plus") {
    var digit = parseFloat(screenDisplay.join(''));
    console.log(digit); 
    digitArray.push(digit);
    screenDisplay = [];
    for(var i = 0; i < digitArray.length; i++) {
      answer = answer + digitArray[i];
    }
    console.log(answer);
    screenDisplay.push(answer);
    document.getElementById("screenOutput").innerHTML = answer;
    digitArray = [];
    answer = 0;
  }
  //SUBTRACTING
  else if (operator == "minus") {
    var digit = parseFloat(screenDisplay.join(''));
    console.log(digit); 
    digitArray.push(digit);
    screenDisplay = [];
    answer = digitArray[0];
    for(var i = 1; i < digitArray.length; i++) {
      answer = answer - digitArray[i];
    }
    console.log(answer);
    screenDisplay.push(answer);
    document.getElementById("screenOutput").innerHTML = answer;
    digitArray = [];
    answer = 0;
  }
  //MULTIPLYING
  else if (operator == "mult") {
    var digit = parseFloat(screenDisplay.join(''));
    console.log(digit); 
    digitArray.push(digit);
    screenDisplay = [];
    answer = digitArray[0];
    for(var i = 1; i < digitArray.length; i++) {
      answer = answer * digitArray[i];
    }
    console.log(answer);
    screenDisplay.push(answer);
    document.getElementById("screenOutput").innerHTML = answer;
    digitArray = [];
    answer = 0;
  }
  //DIVIDING
  else if (operator == "divide") {
    var digit = parseFloat(screenDisplay.join(''));
    console.log(digit); 
    digitArray.push(digit);
    screenDisplay = [];
    answer = digitArray[0];
    for(var i = 1; i < digitArray.length; i++) {
      answer = answer / digitArray[i];
    }
    console.log(answer);
    screenDisplay.push(answer);
    document.getElementById("screenOutput").innerHTML = answer;
    digitArray = [];
    answer = 0;
  }

});

