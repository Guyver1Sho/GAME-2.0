const psiButtonElement = document.getElementById("psiButton");
const psiInventory = document.getElementById("psi-inventory");
const inventory = document.getElementById("inventory");
const inventoryButtonElement = document.getElementById("inventoryButton");
// const navLinks = document.querySelectorAll(".nav-links li");

//////////////////////////////////

////Okay i cracked it! - the order in which things are called in Javascript is VERY IMPORTANT apparently//////

let state = {};

let items = {};

let fadeMode = {};

// I think this has to be square brackets as it is an object and the array bits have to be pushed in

let playerpsiPowers = [];

let psiLevel = { psiLevel: 5 };

///PSI POWERS////

const psiPowers = [
    {
        _name: "fireBall",
        imgURL: "fireBall.jpg",
        _psiCost: 10,
        _damage: 10,
        _special: "Causes damage over time",
        _image: "bla.jpg",
        _text: "A long ranged pyrotechnic \n attack",
        soundEffect: function () {
            console.log("BRRRRR");
        },
    },

    {
        _name: "frost",
        imgURL: "frost.jpg",
        _psiCost: 10,
        _damage: 10,
        _special: "Causes slow effect over time",
        _image: "uniform.png",
        _text: "A long ranged freezing \n attack",
        soundEffect: function () {
            console.log("BRRRRR");
        },
    },

    {
        _name: "Lightning",
        imgURL: "Lightning.jpg",
        _psiCost: 10,
        _damage: 10,
        _special: "Causes damage over time",
        _image: "gun.png",
        _text: "A short ranged shock \n attack",
        soundEffect: function () {
            console.log("BRRRRR");
        },
    },
];

let psipowerimage = document.getElementById("psipowerimage");
let psipowertext = document.getElementById("psipowertext");

function pushpsiPowers() {
    playerpsiPowers.push(psiPowers[0]);
    console.log("fireball!");
}

function pushpsiPowers2() {
    playerpsiPowers.push(psiPowers[1]);
    console.log("freeze!");
}

function pushpsiPowers3() {
    playerpsiPowers.push(psiPowers[2]);
    console.log("BZZZZZ");
}

const psiEntries = Object.entries(psiPowers);

function usepsiPower() {
    if (psiLevel.psiLevel - psiPowers[0]._psiCost <= -1) {
        return "your psiLevel is too low";
    } else {
        return "cast succesful";
    }
}
//////////////////////////////////////////

psiButtonElement.addEventListener("click", () => {
    psiOn();
    play();
    console.log("working");
    disablePsi();
    // document.getElementById("psiButton").disabled = true;
});

// (first1 is not firing because of playerpsi thingy not being definded)
function psiOn() {
    psiInventory.classList.toggle("psi-links");
    inventory.classList.toggle("inventory");
    first1();
    play();
    // if ((psiInventory.classList = "psi-links-active"))
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function disablePsi() {
    psiButtonElement.onClick = null;
}

function disableInventory() {
    inventoryButtonElement.onClick = null;
}

inventoryButtonElement.addEventListener("click", () => {
    inventoryOn();
    play();
    console.log("working");
    disableInventory();
    // document.getElementById("inventoryButton").disabled = true;
});

function inventoryOn() {
    inventory.classList.toggle("inventory");
    psiInventory.classList.toggle("psi-links");
    // if ((inventory.classList = "inventory-active"))
}

// !!!!!THIS APPEARS TO BE THE PROBLEM FOR SOME REASON!!!??????
optionButtonsElement.addEventListener("click", () => {
    deleteValue2();
    pullValue();
    check();
    check2();
    check3();
    check4();
    check5();
    type();
});

// if (psiInventory.classList.psi - links - active) {
//     document.getElementById("psiButton").onClick = null;
// }
// let toggleFlag = true;

// function first() {
//     nav.classList.toggle("nav-active");
//     deleteValue2();
//     if ("nav-active") pullValue();

//     ///Burger Animation///
//     burger.classList.toggle("toggle");
// }

// ///DELETE ITEMS WHEN OFF SCREEN///
// /*------------------------------------*/
// function second() {
//     nav.classList.toggle("nav-active");
//     burger.classList.toggle("toggle");
//     deleteValue();
// }

// var delayInMilliseconds = 1000;

// var delayInMilliseconds2 = 5000;

// setTimeout(function deleteValue() {
//     document.getElementById("inventory").innerHTML = "";
// }, delayInMilliseconds);

// function deleteValue2() {
//     document.getElementById("inventory").innerHTML = "";
// }

/*------------------------------------*/
