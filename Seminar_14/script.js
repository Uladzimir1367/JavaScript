/*Задачи:
 1. Ко всем элементам, имеющим класс dropdown-item, добавьте еще один класс
 super-dropdown. Используйте методы forEach и querySelectorAll, а
 также свойство classList у элементов.*/

  /*2. Уэлемента с классом btn необходимо убрать класс btn-secondary, если он
 присутствует у этого элемента, либо добавить, если такого класса у элемента
 не было.*/

 /*3. Необходимо удалить класс dropdown-menu у элемента, у которого
 присутствует класс menu.*/ 

 /*4. Используя метод insertAdjacentHTML, добавьте после div с классом
 dropdown следующую разметку: <a href="#">link</a>.*/

 /*5. Уэлемента с id="dropdownMenuButton" замените id на superDropdown.*/

 /*6. Добавьте атрибут data-dd со значением 3 элементу, у которого существует
 атрибут aria-labelledby, равный dropdownMenuButton, используя
 dataset.*/

 // 7. Удалите атрибут type у элемента с классом dropdown-toggle */

"use strict";
 // 1. Ко всем элементам с классом "dropdown-item" добавить класс
 "super-dropdown"
 const dropdownItems = document.querySelectorAll('.dropdown-item');
 dropdownItems.forEach(item => {
   item.classList.add('super-dropdown');
 });
 // 2. У элемента с классом btn убрать или добавить класс
 "btn-secondary"
 const btnElement = document.querySelector('.btn');
 if (btnElement.classList.contains('btn-secondary')) {
   btnElement.classList.remove('btn-secondary');
   } else {
      btnElement.classList.add('btn-secondary');
   }
// 3. У элемента с классом "menu" удалить класс "dropdown-menu"
 const menuElement = document.querySelector('.menu');
 if (menuElement) {
   menuElement.classList.remove('dropdown-menu');
 }
 // 4. Добавить после div с классом "dropdown" разметку <a
 // 4. Добавьте после div с классом "dropdown" разметку <a href="#">link</a>
const dropdownDiv = document.querySelector('.dropdown');
dropdownDiv.insertAdjacentHTML('afterend', '<a href="#">link</a>');


 // 5. Заменить id "dropdownMenuButton" на "superDropdown"
 const dropdownButton =
 document.getElementById('dropdownMenuButton');
 if (dropdownButton) {
   dropdownButton.id = 'superDropdown';
 }
 // 6. Добавить атрибут data-dd со значением 3 элементу с атрибутом
 // 6. Добавьте атрибут data-dd со значением 3 элементу, у которого существует атрибут aria-labelledby, равный "dropdownMenuButton"
const ariaElement = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
if (ariaElement) {
  ariaElement.dataset.dd = '3';
}

 // 7. Удалить атрибут type у элемента с классом "dropdown-toggle"
 const dropdownToggle = document.querySelector('.dropdown-toggle');
 if (dropdownToggle) {
   dropdownToggle.removeAttribute('type')

 }