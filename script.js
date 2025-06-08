const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submit = document.getElementById("submit");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiplication = document.getElementById("multiplication")
const division = document.getElementById("division")
const reset = document.getElementById("reset")
let action = "+";

plus.onclick = function () {
  action = "+";
};

minus.onclick = function () {
  action = "-";
};


multiplication.onclick = function () {
  action = "*";
};

division.onclick = function () {
  action = "/";
};


function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}





submit.onclick = function () {
  if (action == "+") {
    const sum = Number(input1.value) + Number(input2.value);
    printResult(sum);
  } else if (action == "-") {
    const sum = Number(input1.value) - Number(input2.value);
    printResult(sum);
  } else if (action == "*") {
    const sum = Number(input1.value) * Number(input2.value);
    printResult(sum); }
    else if (action == "/") {
    const sum = Number(input1.value) / Number(input2.value);
    printResult(sum);
} }




reset.addEventListener('click', function() {
  // 3. Очищаем первое поле ввода
  input1.value = '';
  
  // 4. Очищаем второе поле ввода
  input2.value = '';
  
  // 5. Сбрасываем результат в 0
  result.textContent = '0';
});