// we takle the js here step by step!!
// Step:1️⃣ --> i mean to say we(in whole process) had first created a separate switch statement for 
// listening buttons and then step:2 for both ie keyboard presses and buttons
// for(let i = 0; i < document.querySelectorAll(".drum").length; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function handlesClick(){
        
//         let element = this.innerHTML;
//         switch (element) {
//             case "w":
//                 let crash = new Audio("./sounds/crash.mp3");
//                 crash.play();
//                 break;
//             case "a":
//                 let kick = new Audio("./sounds/kick-bass.mp3");
//                 kick.play();
//                 break;
//             case "s":
//                 let snare = new Audio("./sounds/snare.mp3");
//                 snare.play(); 
//                 break; 
//             case "d":
//                 let tom_1 = new Audio("./sounds/tom-1.mp3");
//                 tom_1.play(); 
//                 break;
//             case "j":
//                 let tom_2 = new Audio("./sounds/tom-2.mp3");
//                 tom_2.play(); 
//                 break;
//             case "k":
//                 let tom_3 = new Audio("./sounds/tom-3.mp3");
//                 tom_3.play(); 
//                 break; 
//             case "l":
//                 let tom_4 = new Audio("./sounds/tom-4.mp3");
//                 tom_4.play();
//                 break;         
//             default:
//                 console.log(this.innerHTML);
//                 break;
//         }
//     });
// }

// complete step 2️⃣✅✅ 
// ✨Detecting button press on web page
for(let i = 0; i < document.querySelectorAll(".drum").length; i++){
    // these two gives error, --> reason ...🔴🔴...
    //🔴 reason in udemy note in short--> this is not referring drum buttons rather "this" is undefined 
    //document.querySelectorAll(".drum")[i].addEventListener("click", () => drumSound(this.innerHTML));

    //🔴 you're passing the result of the function drumSound(this.innerHTML) (which gets executed immediately)
    //  rather than passing a function reference for the click event handler.✅rem ma'am has discussed this!!
    //document.querySelectorAll(".drum")[i].addEventListener("click", drumSound(this.innerHTML));

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        drumSound(this.innerHTML);
        drumAnimation(this.innerHTML);
    });
} 
   
// both are correct!!
// document.addEventListener("keydown", (event) => {
//     drumSound(event.key);
//     drumAnimation(event.key);
// });

//✨Detecting keyboard press on the keyboard
document.addEventListener("keydown", function (event) {
    drumSound(event.key);
    drumAnimation(event.key);
});

//✨function to act on the user interaction with the drum kit-->play sound and running animation(through
//adding a new class to the classList when button or key is pressed and then removing it in 0.1 sec!!)
function drumSound(userInput){
    switch (userInput) {
        case "w":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            let kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play(); 
            break; 
        case "d":
            let tom_1 = new Audio("./sounds/tom-1.mp3");
            tom_1.play(); 
            break;
        case "j":
            let tom_2 = new Audio("./sounds/tom-2.mp3");
            tom_2.play(); 
            break;
        case "k":
            let tom_3 = new Audio("./sounds/tom-3.mp3");
            tom_3.play(); 
            break; 
        case "l":
            let tom_4 = new Audio("./sounds/tom-4.mp3");
            tom_4.play();
            break;         
        default:
            console.log(this.innerHTML);
            break;
    }
}

function drumAnimation(userInput2){
    let pressedBtnOrKey = document.querySelector("." + userInput2);
    pressedBtnOrKey.classList.add("pressed");

    setTimeout(function (){
        pressedBtnOrKey.classList.remove("pressed");
    }, 100);
}

// creating random beat
document.querySelector(".btn").addEventListener("click", function (){
    
    for(let i=0; i<=30; i++){
        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * (document.querySelectorAll(".drum").length - 1));
            let randomDrumLetter = document.querySelectorAll(".drum")[randomNumber];
    
            drumSound(randomDrumLetter.innerHTML);
            drumAnimation(randomDrumLetter.innerHTML);
        }, i * 120);
        // purpose of i*120
        // Spacing Out Beats: This approach spaces out the beats, so they don't all play at the same time. Instead, each beat plays 200 milliseconds after the previous one.
    }
});

// can use "setInterval" as:
// document.querySelector(".btn").addEventListener("click", function () {
//     let count = 0;
//     let intervalId = setInterval(() => {
//         if (count >= 20) {
//             clearInterval(intervalId); // Stop the interval after 7 beats
//             return;
//         }

//         let randomNumber = Math.floor(Math.random() * document.querySelectorAll(".drum").length);
//         let randomDrumLetter = document.querySelectorAll(".drum")[randomNumber];

//         drumSound(randomDrumLetter.innerHTML);
//         drumAnimation(randomDrumLetter.innerHTML);

//         count++;
//     }, 200); // Execute every 200 milliseconds
// });
