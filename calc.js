const displayScreen = document.getElementById("display");


const inputNum = (num) => (displayScreen.textContent += num);


const equalTo = () => displayScreen.textContent? (displayScreen.textContent = eval(displayScreen.textContent)) : false;


const removeNum = () => (displayScreen.textContent = displayScreen.textContent.substring(0, displayScreen.textContent.length - 1));


const clearInput = () => (displayScreen.textContent = "");
