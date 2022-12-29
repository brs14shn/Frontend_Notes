var tempInput = document.getElementById("input");
console.log(tempInput);

var warningText = document.getElementById("warning-text");
console.log(warningText);
let keyupEvent = new KeyboardEvent("keyup");
function myFunction(event) {
   
    if(event.getModifierState("CapsLock")){
        warningText.innerHTML = "Caps Lock activated: " ;
        console.log("Caps Lock activated: " )
    }
    else{
        warningText.style.display="none";
        console.log("Caps Lock deactivated: " )}
}



// let keyupEvent = new KeyboardEvent("keyup");

// tempInput.addEventListener("keydown", function (e) {

//   if (e.getModifierState("CapsLock")) {
//     warningText.style.display = "block";
//   } else {
//     warningText.style.dispLay = "none";
//   }
// });

// let checkCaps = () => {
//     let tempInput = document.getElementById("password");
//     let keyupEvent = new KeyboardEvent('keydown')
//     console.log(keyupEvent)
//     //tempInput.type = 'hidden';
//     tempInput.id = 'check-caps';
//     let capsOn = false;
//     tempInput.addEventListener('keyup', e => {
//         e.which = 65;
//         capsOn = e.getModifierState('Control');
//         console.log(capsOn);
//     })
    
//     //tempInput.remove();
//     return capsOn;
// }

// checkCaps(); // testing the function
