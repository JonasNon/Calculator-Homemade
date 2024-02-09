
// let displayText = document.getElementById("top-display");
let opPress = false
// let once = false


// let firstNum = ""
// let secondNum = ""
// let operator = ""


// let numList = []
// let operatorList = []
// let currentNum = ""
// let finalEquation = []
// let finalAnswer = 0
// let accumulation = 0
// let newAns

let testAnswer = ""

const updateDisplay = () => {
  document.getElementById('top-display').innerText = testAnswer
}

const backPress = () => {
  testAnswer = testAnswer.slice(0, -1);
  updateDisplay()
}

const periodPress = () => {
  testAnswer += "."
  updateDisplay()
}

const clearPress = () => {
  testAnswer = ""
  updateDisplay()
}

const numPress = (num) => {
  testAnswer += num
  updateDisplay()
  opPress = false
  // num = "" + num
  // currentNum += num
  // console.log(currentNum)
  // document.getElementById('top-display').innerText = currentNum


  // if (opPress == false) {
  //   currentNum += num
  //   console.log("added num")
  // } else {
    
  //   opPress = false
    
  //   currentNum += num
  //   console.log(numList)
  //   // console.log(numList)
  // }
}


const operationPress = (operation) => {
  if (opPress == false) {
    testAnswer += operation
    opPress = true
  } else {
    testAnswer = testAnswer.slice(0, -1) + operation

  }
  updateDisplay()


  // opPress = true
  // operatorList.push(operation)
  // numList.push(currentNum)
  // currentNum = ""
  // console.log(operatorList)
}


const equalsPress = () => {
  // let oldEquation = document.createElement('p')
  // oldEquation.innerHTML = testAnswer
  // document.getElementById('top-display').appendChild(oldEquation)
  console.log(testAnswer)
  document.getElementById('top-display').innerText = eval(testAnswer)
  testAnswer = eval(testAnswer)
}
  
  //do numlist[0] + operater[0] + numlist[1] + operater[1]

//   numList.push(currentNum)

//   for (let i = 0; i < numList.length; i++) {
//     finalEquation.push(numList[i])
//     if (operatorList[i] !== undefined) {
//       finalEquation.push(operatorList[i])
//     }
//     console.log(finalEquation)
//   }


//   for (let i = 0; i < finalEquation.length; i++) {
//     finalAnswer += finalEquation[i]
//   }
//   console.log(eval(finalAnswer))



// } 
//above code worked but was way overcomplicated
//below code is all garbage that didn't work


  // for (let i = 0; i < finalEquation.length; i++) {
  //   if (i % 2 == 1) {

      
      
  //     switch (finalEquation[i]) {
  //       case "+" :   
  //       if (newAns == null) {
  //         newAns = numList[i-1] + numList[i+1]
  //       } else {
  //         newAns = finalAnswer + numList[i+1]
  //       }
  //       // console.log(newAns)
  //       break;
  //       case "-" : 
  //       numList[i] - numList[i+1]
  //       break;
  //       case "&times;" : 
  //       numList[i] * numList[i+1]
  //       break;
  //       case "&divide;" : 
  //       numList[i] / numList[i+1]
  //       break;
  //       case "%" : 
  //       numList[i] % numList[i+1]
  //       break;
  
        
  //     }
  //   }
  // }



  // let operationListInitial = operatorList
  // for (let i = 0; i < operationListInitial; i++) {
  //   let numOne = Number(numList[i])
  //   let numTwo = Number(numList[i+1])
  //   let op = operatorList[i]

  //   console.log(numOne)
  //   console.log(numTwo)

    
  //   numList.shift()
  //   numList.shift()
  //   operatorList.shift()
    

  //   switch (op) {
  //     case "+" :  
  //     numList.unshift(numOne + numTwo);
  //     break;
  //     case "-" : 
  //     numList[i] - numList[i+1]
  //     break;
  //     case "&times;" : 
  //     numList[i] * numList[i+1]
  //     break;
  //     case "&divide;" : 
  //     numList[i] / numList[i+1]
  //     break;
  //     case "%" : 
  //     numList[i] % numList[i+1]
  //     break;

      
    // }
  //   console.log("numlist:")
  //   console.log(numList)
    // console.log(finalEquation[0])
  // }
  // console.log(finalEquation[0])

// }





// -------------------------------------------------

// const numPress = (num) => {
//   num = "" + num
//   if (opPress == false) {
//     firstNum += num
//     console.log(firstNum)

//   } else {
//     secondNum += num
//     console.log(secondNum)
//   }

// }

// const operationPress = (operation) => {
//   opPress = true
//   operator = operation
//   console.log(operator)
// }

// -------------------------------------------------


// const numPress = (num) => {
//   // displayText.innerText;
//   if (opPress == true) {
//     secondNum += toString(num);
//     console.log(secondNum)
//   }
//   if (opPress = false) {
//     firstNum += toString(num);
//     console.log(firstNum)
//   }
//   document.getElementById("top-display").innerText += num
//   // console.log(document.getElementById("top-display").innerText);
//   // console.log(firstNum)
//   // console.log(secondNum)
// }

// const operationPress = (operation) => {

//   if (once == false) {


//   }
//   once = true
//   // firstNum = document.getElementById("top-display").innerText;
//   let opSign = document.createElement('p');
//   opSign.innerHTML = operation ;
//   document.getElementById("top-display").appendChild(opSign);
//   // console.log(operation)
//   // let secondNum = document.createElement('p');
//   // document.getElementById("top-display").appendChild(secondNum);
//   opPress = true;
// }

// ------------------------------------------------