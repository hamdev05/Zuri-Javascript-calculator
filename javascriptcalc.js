 // Value input variable
      const displayScreen = document.getElementById("display");

      // Input number on display screen
      const inputNum = (num) => (displayScreen.textContent += num);

      // Do operation using eval()
      const equalTo = () =>
        displayScreen.textContent
          ? (displayScreen.textContent = eval(displayScreen.textContent))
          : false;

      // Remove 1 val at time
      const removeNum = () =>
        (displayScreen.textContent = displayScreen.textContent.substring(
          0,
          displayScreen.textContent.length - 1
        ));

      // Clear all the input
      const clearInput = () => (displayScreen.textContent = "");
