/* ---------------------- initiating variables ---------------------- */

// initiate the styleClass variable used in the openContent function.
var styleClass = "topphoto";

// initiate styleMode variables for html elements
var styleMode = document.getElementById("styleswitch");





/* ---------------------- Button functionality ---------------------- */


// add functionality to the chevroncontainer element.

var hideButton = document.getElementById("chevroncontainer");
hideButton.addEventListener("click", openContent);





/* ---------------------- functions ---------------------- */


// function for starting animation

function openContent(){

    // Step 1: toggle the styleClass variable between 2 modes
    if (styleClass == "topphoto"){
        styleClass = "contentmode";
    }
    else {
        styleClass="topphoto";
    }

   // Step 2: change classes of your content to the new styleClass variable
    styleMode.className = styleClass;

}
