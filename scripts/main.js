// Store a reference to the <h1> in a variable
// const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
// myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox1.png") {
    myImage.setAttribute("src", "images/firefox.png");
  } else {
    myImage.setAttribute("src", "images/firefox1.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome here, ${myName}!`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome here, ${storedName}!`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
