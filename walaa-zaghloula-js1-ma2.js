// question 1
let myFunctionExpression = function(){
    console.log("walaa");
};

// question 2
let button = document.querySelector(".btn");
button.addEventListener("click",function(){
    console.log("I was clicked");
});


// question 3
const input = document.querySelector("#firstName");
input.addEventListener("keydown", function valu(event){
    console.log("value:", event.target.value);
});

// question 4
let button = document.querySelector("button");
button.addEventListener("mouseover", function (){
    button.classList.add("hover");
});

// question 5
let button = document.querySelector("[data-animal='dog']");
button.addEventListener("mouseout",function() {
    button.classList.remove("hover");
});

//question 6

const liTags = document.querySelectorAll("li");
for (let i = 0; i < liTags.length; i++) {
    liTags[i].addEventListener("mouseover",function() {
        console.log( "value: ", liTags[i].dataset.animal);
    });
}

// question 7
switch (animal) {
    case "cat":
       console.log("meow");
        break;
    case "cow":
    console.log("Moo");
        break;
    case "brid":
    console.log("Tweet");
        break;

    default:
    console.log("Tweet");
}

// question 8
function nameItem(item) {
    console.log(item);
};
sheep.forEach(nameItem);

// question 9
function sayHello() {
    console.log("Hello");
    if(counter === 6){
        clearInterval(intervalId);
    }
    counter++;
}
let counter = 1;
const intervalId = setInterval(sayHello,500);


// question 10
const div = document.querySelector(".container");
function updateDiv() {
    div.innerHTML = "Text updated";
};
setTimeout(updateDiv, 2000);