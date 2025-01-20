/*1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все
 теги будут созданы браузером.
 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все
 ресурсы страницы будут загружены.
 3. При клике на какой-либо тег на странице в консоль должно выводиться
 сообщение следующего вида:
 ○ Класс"super_element" присутствует в элементе "div".
 ○ Сообщениедолжно определять присутствует ли класс "super_element" у
 элемента и выводить в нижнем регистре верный тег в данной строке, по
 которому был совершен клик.
 ○ Необходимо использовать делегирование.
 4. Сделайте так, чтобы при наведении на <textarea> в консоли появлялось
 сообщение: "Вы навели на textarea."
 5. Необходимо повесить событие клика на тег <ul>. В обработчике события в
 консоль выводите текст, который записан внутри элемента кнопки, по которой
 был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно.
 Необходимо использовать делегирование.
 6. Вопрос: Почему в console.log сначала пишется текст из 5 задания и только
 потом текст из 3 задания, если мы кликаем по кнопкам в <ul>? Ответ
 необходимо написать здесь же, под этим комментарием, своими словами.

 Это происходит из-за порядка выполнения событий в JavaScript. Когда вы кликаете по кнопке внутри <ul>, сначала срабатывает обработчик события клика, который вы добавили на <ul>. Этот обработчик выводит текст кнопки в консоль. Затем срабатывает обработчик события клика, который вы добавили на весь body, и он выводит сообщение о наличии или отсутствии класса super_element.

Порядок выполнения событий следующий:

Обработчик события клика на <ul> срабатывает первым и выводит текст кнопки в консоль.

Обработчик события клика на body срабатывает после этого и выводит сообщение о классе super_element.

Таким образом, текст из 5 задания выводится в консоль первым, а текст из 3 задания — вторым. Это связано с тем, что обработчик события на <ul> находится ближе к целевому элементу (кнопке), чем обработчик события на body. В JavaScript события распространяются от целевого элемента вверх по дереву DOM (это называется "всплытие событий"), и обработчики событий срабатывают в порядке их нахождения в дереве DOM.

 7. СпомощьюJSнеобходимо изменить цвет заднего фона каждого второго тега
 <li>*/

 document.addEventListener('DOMContentLoaded', function() {
   console.log('все теги прогрузились');
});

window.addEventListener('load', function() {
   console.log('страница загрузилась');
});

document.addEventListener('DOMContentLoaded', function() {
   document.body.addEventListener('click', function(event) {
       const element = event.target;
       const tagName = element.tagName.toLowerCase();
       if (element.classList.contains('super_element')) {
           console.log(`Класс "super_element" присутствует в элементе "${tagName}".`);
       } else {
           console.log(`Класс "super_element" отсутствует в элементе "${tagName}".`);
       }
   });
});

document.addEventListener('DOMContentLoaded', function() {
   document.body.addEventListener('mouseover', function(event) {
       if (event.target.tagName.toLowerCase() === 'textarea') {
           console.log('Вы навели на textarea.');
       }
   });
});

document.addEventListener('DOMContentLoaded', function() {
   document.querySelector('ul').addEventListener('click', function(event) {
       if (event.target.tagName.toLowerCase() === 'button') {
           console.log(event.target.textContent);
       }
   });
});

document.addEventListener('DOMContentLoaded', function() {
   const listItems = document.querySelectorAll('li');
   listItems.forEach((item, index) => {
       if ((index + 1) % 2 === 0) {
           item.style.backgroundColor = 'lightblue'; // Вы можете изменить цвет на любой другой
       }
   });
});








