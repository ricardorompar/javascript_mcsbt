// This app has the basic functionality to make the thingy 
// appear and disappear


const parentDiv = document.getElementById("parentElem");
let clickCount = 0;

const dButton = document.getElementById("displayButton");
dButton.addEventListener("click", displayButton);

function createThingy(){
    let objectVar = document.getElementById("objectId");
    objectVar.innerHTML="JS loaded successfully!";

    let newP = document.createElement("p");
    newP.innerHTML = "This is a child &lt;p&gt; element created in JS. </br>Here's a bunch of text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. What the dog doin? Natus consectetur sequi laborum. Saepe praesentium blanditiis quod dolorum itaque commodi sint necessitatibus quasi? Vel labore perspiciatis fugiat, repudiandae dolorum dicta.</br>Here's a picture of a cute cat:";

    let newTitle = document.createElement("h1");
    newTitle.innerHTML = "This is the title of the new thingy";

    let image = document.createElement("img");
    image.src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg";
    image.style="height: 300px; border-radius: 1vh";
    
    parentDiv.style = "padding: 5%"; //This is just for aesthetical reasons

    parentDiv.appendChild(newTitle);
    parentDiv.appendChild(newP);
    parentDiv.appendChild(image);
}

function deleteThingy(){
    parentDiv.innerHTML="";
    parentDiv.style = "padding: 0"; //This is just for aesthetical reasons
}

function displayButton(){
    clickCount++;
    if(clickCount%2==0){
        deleteThingy();
        dButton.innerHTML = "Display Thingy";
    }
    else{
        createThingy();
        dButton.innerHTML = "Hide Thingy";
    }
    console.log(`Button pressed ${clickCount} times`);
}



