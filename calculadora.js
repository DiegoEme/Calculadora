const input = document.getElementById("input");
const teclado = document.querySelector("#teclado");
const historial = document.getElementById("historial");

teclado.addEventListener("click", teclas);

function teclas(e) {
  //detecto la tecla cliqueada y su valor
  let tecla = e.target;

  if (!tecla.matches("button")) {
    return;
  }

  if (tecla.classList.contains("digit")) {
    console.log("numero", tecla.value);
    inputDigit(tecla.value);
    return;
  }

  if (tecla.classList.contains("operator")) {
    inputOperator(tecla.value);
    return;
  }

  if (tecla.classList.contains("decimal")) {
    inputDecimal(tecla.value);
    return;
  }
  if (tecla.classList.contains("resultado")) {
    resultado();
    return;
  }
  if (tecla.classList.contains("inversa")) {
    inversa();
    return;
  }
  if (tecla.classList.contains("sqrt")) {
    sqrt();
    return;
  }
  if (tecla.classList.contains("raiz")) {
    raiz();
    return;
  }
  if (tecla.classList.contains("clear")) {
    clear();
    return;
  }
  if (tecla.classList.contains("borrar")) {
    borrar();
    return;
  }
}

/**** FUNCIONES ****/
function inputDecimal(dot) {
  if (!input.value.includes(dot)) {
    input.value += dot;
  }
}

function inputDigit(digit) {
  if (input.value === "0") {
    input.value = digit;
  } else {
    input.value += digit;
  }
}

function inputOperator(operator) {
  /*   if (
    input.value.includes("/") ||
    input.value.includes("x") ||
    input.value.includes("-") ||
    input.value.includes("+")
  ) {
    input.value = operator;
  } else {
    input.value += operator;
  } */

  if (input.value.charAt(input.value.length - 1) !== operator) {
    input.value += operator;
  } else if (
    input.value.charAt(input.value.length - 1) == "-" ||
    input.value.charAt(input.value.length - 1) == "+" ||
    input.value.charAt(input.value.length - 1) == "&#247" ||
    input.value.charAt(input.value.length - 1) == "x"
  ) {
    input.value = input.value;
  }
}

function resultado() {
  input.value = eval(input.value);
  //historial.textContent += `${input.value}\n`;
}

function inversa() {
  input.value = eval(1 / input.value);
}

function sqrt() {
  input.value = eval(input.value * input.value);
}

function raiz() {
  input.value = Math.sqrt(parseFloat(input.value));
}

function clear() {
  input.value = "0";
}

function borrar() {
  if (input.value.length === 1) {
    input.value = "0";
  } else {
    input.value = input.value.substring(0, input.value.length - 1);
  }
}
