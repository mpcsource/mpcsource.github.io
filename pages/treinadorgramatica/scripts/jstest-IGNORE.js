const { read } = require("fs");

// Node.js imports.
const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Menu options.
const menuOptions = [
    "1. Morning",
    "2. Afternoon",
    "3. Evening"
];

const morningTasks = [
    "1. Brush Teeth",
    "2. Go to toilet"
];

const afternoonTasks = [
    "1. Eat",
    "2. Play"
];

const eveningTasks = [
    "1. Rest",
    "2. Sleep"
];

function menuIntro() {
    // Ask for option.
    console.log("Which menu do you want to go to?");
    
    // Print options.
    for (let i = 0; i < menuOptions.length; i++) {
        console.log(menuOptions[i])
    };
    
    // Get user input.
    readLine.question("", userOption => {
        
        if(userOption == 1) {
            console.log("");
            for (let i = 0; i < morningTasks.length; i++) {
                console.log(morningTasks[i])
            };
            goToMenuIntro();
        };
        if(userOption == 2) {
            console.log("");
            for (let i = 0; i < afternoonTasks.length; i++) {
                console.log(afternoonTasks[i])
            };
            goToMenuIntro();
        };
        if(userOption == 3) {
            console.log("");
            for (let i = 0; i < eveningTasks.length; i++) {
                console.log(eveningTasks[i])
            };
            goToMenuIntro();
        };
        
    });
    goToMenuIntro();
};

function goToMenuIntro() {
    console.log("");
    console.log("9. Go back.");
    
    readLine.question("", backOption => {
        if(backOption == "9") {
            menuIntro();
        } else {
            goToMenuIntro();
        }
    })

    readLine.close();
}

menuIntro();