const quadrettiContainer = document.getElementById("quadretti-container");
quadrettiContainer.classList.add("my-container", "dark-blue");
const h1 = document.createElement("h1");
h1.textContent = "FizzBuzzDOM";
h1.classList.add("h1-custom" , "text-center");

const row = document.createElement("div");
row.classList.add("my-row");
quadrettiContainer.append(h1);
quadrettiContainer.append(row);

for (let i = 1; i <= 100; i++) {
  const col = document.createElement("div");
  col.classList.add("my-col");

  const quadretto = document.createElement("div");
  quadretto.classList.add("my-box", "text-center");

  const text = document.createElement("text");
  text.classList.add("line-h-200");

  if (i % 3 === 0 && i % 5 === 0) {
    quadretto.classList.add("red");
    text.textContent = "fizzbuzz";
  } else if (i % 3 === 0) {
    quadretto.classList.add("green");
    text.textContent = "fizz";
  } else if (i % 5 === 0) {
    quadretto.classList.add("yellow");
    text.textContent = "buzz";
  } else {
    quadretto.classList.add("blue");
    text.textContent = i;
  }

  quadretto.append(text);
  col.append(quadretto);
  row.append(col);
}
