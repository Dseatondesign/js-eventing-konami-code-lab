const alphabet = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    if (key === alphabet[index]) {
      index++;
      if (index === alphabet.length) {
        alert("Congratulations you have entered the Konami Code correctly!");
        index = 0;
        console.log ("code worked")
      }
    } else {
      index = 0;
      console.log ("code failed")
    }
  }

  document.body.addEventListener("keydown", onKeyDownHandler)