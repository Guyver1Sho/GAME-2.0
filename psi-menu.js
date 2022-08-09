// const burger2 = document.querySelector(".burger2");
const psi = document.querySelector(".psi-links");
const psiLinks = document.querySelectorAll(".psi-links li");
const back = document.getElementById("back");
const next = document.getElementById("Next");

///THINK I'VE FOUND THE CAUSE///
// !!!!without the menu being activated function first1 and second2 never activate!

function first1() {
    // psi.classList.toggle("psi-active");
    // burger2.classList.toggle("toggle");
    if (playerpsiPowers.length > 0) {
        psipowerimage.src = playerpsiPowers[0]._image;
        +"\n" + "\n";
        psipowertext.innerText =
            playerpsiPowers[0]._text +
            "\n" +
            "\n" +
            "Psi Cost: " +
            playerpsiPowers[0]._psiCost +
            "\n" +
            "\n" +
            "Damage: " +
            playerpsiPowers[0]._damage +
            "\n" +
            "\n" +
            "Effect: " +
            playerpsiPowers[0]._special;
    }
}

/*------------------------------------*/
// function second2() {
//     psi.classList.toggle("psi-active");
//     burger2.classList.toggle("toggle");
// }

// var delayInMilliseconds = 1000;

// var delayInMilliseconds2 = 5000;

/*------------------------------------*/
///PAGES///

///THE ADDEVENTLISTNER IS NOT WORKING - I THINK IT MAY HAVE SOMETHING TO DO WITH THE MENU NOT BEING ON SCREEN ALL THE TIME?
// LIKE THE HTML LOADS ONCE AND THE BUTTON DOES NOT EXIST AT THAT TIME?
// IT WORKS WHEN YOU CLOSE THE MENU AND OPEN IT AGAIN
// SEEMS TO BE WORKING NOW!!!!

next.addEventListener("click", nextPower1);

back.addEventListener("click", previousPower);

function nextPower() {
    if (playerpsiPowers.length > 0) {
        console.log("working 2");
        psipowerimage.src = playerpsiPowers[1]._image;
        +"\n" + "\n";
        psipowertext.innerText =
            playerpsiPowers[1]._text +
            "\n" +
            "\n" +
            "Psi Cost: " +
            playerpsiPowers[1]._psiCost +
            "\n" +
            "\n" +
            "Damage: " +
            playerpsiPowers[1]._damage +
            "\n" +
            "\n" +
            "Effect: " +
            playerpsiPowers[1]._special;
    }
}

let y = 0;

function nextPower1() {
    if (
        playerpsiPowers.length > y &&
        // y !== 2 &&
        y !== playerpsiPowers.length - 1
    ) {
        y++;
        psipowerimage.src = playerpsiPowers[y]._image;
        +"\n" + "\n";
        psipowertext.innerText =
            playerpsiPowers[y]._text +
            "\n" +
            "\n" +
            "Psi Cost: " +
            playerpsiPowers[y]._psiCost +
            "\n" +
            "\n" +
            "Damage: " +
            playerpsiPowers[y]._damage +
            "\n" +
            "\n" +
            "Effect: " +
            playerpsiPowers[y]._special;
    } else if (
        y == 2 ||
        y > playerpsiPowers.length ||
        y == playerpsiPowers.length - 1
    ) {
        y = 0;
        psipowerimage.src = playerpsiPowers[0]._image;
        +"\n" + "\n";
        psipowertext.innerText =
            playerpsiPowers[0]._text +
            "\n" +
            "\n" +
            "Psi Cost: " +
            playerpsiPowers[0]._psiCost +
            "\n" +
            "\n" +
            "Damage: " +
            playerpsiPowers[0]._damage +
            "\n" +
            "\n" +
            "Effect: " +
            playerpsiPowers[0]._special;
    }
}

function previousPower() {
    if (y !== 0) {
        y--;
        psipowerimage.src = playerpsiPowers[y]._image;
        +"\n" + "\n";
        psipowertext.innerText =
            playerpsiPowers[y]._text +
            "\n" +
            "\n" +
            "Psi Cost: " +
            playerpsiPowers[y]._psiCost +
            "\n" +
            "\n" +
            "Damage: " +
            playerpsiPowers[y]._damage +
            "\n" +
            "\n" +
            "Effect: " +
            playerpsiPowers[y]._special;
    } else if (y == 0) {
        y = playerpsiPowers.length - 1;
        psipowerimage.src = playerpsiPowers[y]._image;
        +"\n" + "\n";
        psipowertext.innerText =
            playerpsiPowers[y]._text +
            "\n" +
            "\n" +
            "Psi Cost: " +
            playerpsiPowers[y]._psiCost +
            "\n" +
            "\n" +
            "Damage: " +
            playerpsiPowers[y]._damage +
            "\n" +
            "\n" +
            "Effect: " +
            playerpsiPowers[y]._special;
    }
}

// function nextPower1() {
//     if (playerpsiPowers.length > 0) {
//         // for (
//             let i = 0;
//             i < playerpsiPowers.length;
//             i++ // { //     if (playerpsiPowers[i] == 2) { //         playerpsiPowers[i] == 0; //     }
//         // ) {
//             psipowerimage.src = playerpsiPowers[i]._image;
//             +"\n" + "\n";
//             psipowertext.innerText =
//                 playerpsiPowers[i]._text +
//                 "\n" +
//                 "\n" +
//                 "Psi Cost: " +
//                 playerpsiPowers[i]._psiCost +
//                 "\n" +
//                 "\n" +
//                 "Damage: " +
//                 playerpsiPowers[i]._damage +
//                 "\n" +
//                 "\n" +
//                 "Effect: " +
//                 playerpsiPowers[i]._special;
//         }
//     }
// }
// }

// if (playerpsiPowers.length > 0)

// element.attachEvent('onclick', function() { /* do stuff here*/ });
