function copyText() {
    const fieldArray = [];
    var source = document.getElementById("hiddenTemplate"),
    destination = document.getElementById("output");
// (C2) CREATE & APPEND EVIL CLONE 
    let evilclone = source.innerHTML;
    fieldArray.push(evilclone);
    
    for(i = 0; i < fieldArray.length; i++)
    {
        destination.innerHTML = fieldArray[i];
    }
}

//Hide Fields 
//Let the button press copy the hidden field
//The hidden field opens a prompt to allow user to name the field
//The new prompt field will have to be in a seperate column
//

function myFunction() {
    var x = document.getElementById("hiddenTemplate");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    
}

