const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let handler = (event) => {
  let iterations = 0;

  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }

        return LETTERS[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations >= event.target.dataset.value.length)
      clearInterval(interval);

    iterations += 1;
  }, 30);
};

document.querySelectorAll("h1").forEach((element) => {
  element.onmouseover = handler;
});
