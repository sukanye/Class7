function setup() {
  
}

function draw() {
  
}

var listOfNames0 = ["Talia","Joanna","Amy"];
var listOfNames1 = ["bill", "Bill", "Bill"];
var listOfNames2 = ["Joe", "bill", "George"];
var listOfNames3 = ["Amy", "Jane", "Bill"];
var listOfNames4 = ["Bill"]

function checkThings(someArray) {
  for(var i = 0; i < someArray.length ; i++) {
    if(someArray[i] === someArray[i + 1]) {
      return true;
    }
    if(someArray.length === 1){
      return false;
    }
  }
  return false;
}

