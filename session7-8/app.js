const resultText = document.getElementById("result");


function generateNumber(){
    number = Math.ceil(1+99*Math.random());
    console.log(`The actual number is ${number}`);
    return number;
}

    
window.onload = (event) => {
    let storedNumber = localStorage.getItem("storedNumber");
    console.log(`Stored number was ${storedNumber}`);
    if (!storedNumber){
        myNumber = generateNumber();
        //this is for storing in the localstorage:
        localStorage.setItem("storedNumber", myNumber);
    } else {
        myNumber = storedNumber;
    }
}

function compare(){
    const myInput = document.getElementById("inValue").value;
    if (myInput == myNumber){
        resultText.innerHTML="Correct!";
        console.log("Correct!");
    }
    else if (myInput<myNumber){
        console.log(myInput);
        resultText.innerHTML="Too low";
        console.log("Too low")
    }
    else{
        console.log(myInput);
        resultText.innerHTML="Too high";
        console.log("Too high")
    }
}
