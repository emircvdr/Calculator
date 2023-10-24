const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const dote = document.getElementById("dote");
const bölme = document.getElementById("bölme");
const carpma = document.getElementById("carpma");
const cikartma = document.getElementById("cikartma");
const toplama = document.getElementById("toplama");
const equal = document.getElementById("equal");
const reset = document.getElementById("reset");
const negative = document.getElementById("negative");
const yüzde = document.getElementById("yüzde");
let screen = document.getElementById("screen");
const percentage = () => {
  (screen.innerHTML * 10) / 100;
};

one.addEventListener("click", () => {
  screen.value += "1";
});
two.addEventListener("click", () => {
  screen.value += "2";
});
three.addEventListener("click", () => {
  screen.value += "3";
});
four.addEventListener("click", () => {
  screen.value += "4";
});
five.addEventListener("click", () => {
  screen.value += "5";
});
six.addEventListener("click", () => {
  screen.value += "6";
});
seven.addEventListener("click", () => {
  screen.value += "7";
});
eight.addEventListener("click", () => {
  screen.value += "8";
});
nine.addEventListener("click", () => {
  screen.value += "9";
});
zero.addEventListener("click", () => {
  screen.value += "0";
});
dote.addEventListener("click", () => {
  if (screen.value.includes(".")) {
    screen.value = screen.value;
  } else {
    screen.value += ".";
  }
});
reset.addEventListener("click", () => {
  screen.value = "";
});

bölme.addEventListener("click", () => {
  if (screen.value.includes("/")) {
    screen.value = screen.value;
  } else {
    screen.value += "/";
  }
});
carpma.addEventListener("click", () => {
  if (screen.value.includes("*")) {
    screen.value = screen.value;
  } else {
    screen.value += "*";
  }
});
cikartma.addEventListener("click", () => {
  if (screen.value.includes("-")) {
    screen.value = screen.value;
  } else {
    screen.value += "-";
  }
});
toplama.addEventListener("click", () => {
  if (screen.value.includes("+")) {
    screen.value = screen.value;
  } else {
    screen.value += "+";
  }
});
yüzde.addEventListener("click", () => {
  screen.value = screen.value / 100;
});
negative.addEventListener("click", () => {
  screen.value = screen.value * -1;
});

equal.addEventListener("click", () => {
  screen.value = eval(screen.value);
});

// if click the percentage button, it will calculate the percentage of the number how i can do that?
