document.addEventListener("DOMContentLoaded", function () {
  // Задача 1: Обновление текста в <span> при изменении значения в <input> с id="from"
  const inputFrom = document.getElementById("from");
  const spanOutput = document.querySelector("span");

  inputFrom.addEventListener("input", function () {
    spanOutput.textContent = inputFrom.value;
  });

  // Задача 2: Добавление классов и изменение стиля при клике на кнопку с классом messageBtn
  const messageBtn = document.querySelector(".messageBtn");
  const message = document.querySelector(".message");

  messageBtn.addEventListener("click", function () {
    message.classList.add("animate_animated", "animate_fadeInLeftBig");
    message.style.visibility = "visible";
  });

  // Задача 3: Проверка заполненности полей формы при отправке
  const form = document.querySelector("form");
  const formControls = document.querySelectorAll(".form-control");

  form.addEventListener("submit", function (event) {
    let allFieldsFilled = true;

    formControls.forEach(function (control) {
      if (control.value.trim() === "") {
        control.classList.add("error");
        allFieldsFilled = false;
      } else {
        control.classList.remove("error");
      }
    });

    if (!allFieldsFilled) {
      event.preventDefault();
    }
  });

  // Проверка полей формы при вводе данных
  formControls.forEach(function (control) {
    control.addEventListener("input", function () {
      if (control.value.trim() === "") {
        control.classList.add("error");
      } else {
        control.classList.remove("error");
      }
    });
  });
});
