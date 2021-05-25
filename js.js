const navTabOne = document.querySelector(".navTabOne");
const navTabTwo = document.querySelector(".navTabTwo");
const navTabThree = document.querySelector(".navTabThree");
const tabOne = document.querySelector(".tabOne");
const tabTwo = document.querySelector(".tabTwo");
const tabThree = document.querySelector(".tabThree");
const questionOne = document.querySelector(".questionOne");
const questionTwo = document.querySelector(".questionTwo");
const questionThree = document.querySelector(".questionThree");
const questionFour = document.querySelector(".questionFour");
const answerOne = document.querySelector(".answerOne");
const answerTwo = document.querySelector(".answerTwo");
const answerThree = document.querySelector(".answerThree");
const answerFour = document.querySelector(".answerFour");
const ham = document.querySelector(".ham");
const hamMenu = document.querySelector(".hamMenu");
const close = document.querySelector(".close");
const arrowOne = document.querySelector(".arrowOne");
const arrowTwo = document.querySelector(".arrowTwo");
const arrowThree = document.querySelector(".arrowThree");
const arrowFour = document.querySelector(".arrowFour");
navTabOne.addEventListener("click", function () {
    tabOne.style.display = "flex";
    tabTwo.style.display = "none";
    tabThree.style.display = "none";


});
navTabTwo.addEventListener("click", function () {
    tabOne.style.display = "none";
    tabTwo.style.display = "flex";
    tabThree.style.display = "none";
});
navTabThree.addEventListener("click", function () {
    tabOne.style.display = "none";
    tabTwo.style.display = "none";
    tabThree.style.display = "flex";
});
questionOne.addEventListener("click", function () {
    if (answerOne.style.display == "none") {
        answerOne.style.display = "flex";
    }
    else {
        answerOne.style.display = "none";

    }


    answerTwo.style.display = "none";
    answerThree.style.display = "none";
    answerFour.style.display = "none";
}, true);
questionTwo.addEventListener("click", function () {

    if (answerTwo.style.display == "none") {
        answerTwo.style.display = "flex";
    }
    else {
        answerTwo.style.display = "none";
    }

    answerOne.style.display = "none";
    answerThree.style.display = "none";
    answerFour.style.display = "none";
});
questionThree.addEventListener("click", function () {
    if (answerThree.style.display == "none") {
        answerThree.style.display = "flex";
    }
    else {
        answerThree.style.display = "none";
    }
    answerOne.style.display = "none";
    answerTwo.style.display = "none";
    answerFour.style.display = "none";
});
questionFour.addEventListener("click", function () {
    if (answerFour.style.display == "none") {
        answerFour.style.display = "flex";
    }
    else {
        answerFour.style.display = "none";
    }
    answerOne.style.display = "none";
    answerTwo.style.display = "none";
    answerThree.style.display = "none";

});
ham.onclick = function () {
    hamMenu.style.display = "flex";
};
close.onclick = function () {
    hamMenu.style.display = "none";
}
