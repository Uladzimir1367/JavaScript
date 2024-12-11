/*Задача 1
Найдите элемент по id, используя getElementById, элемент с id равным
 "super_link" и выведите этот элемент в консоль.*/

 //Чтобы найти элемент по id и вывести его в консоль, можно использовать метод getElementById. Вот пример кода, который выполняет эту задачу:

 // Найти элемент с id "super_link"
 const superLink = document.getElementById("super_link");
 
 // Вывести элемент в консоль
 console.log(superLink);
 
 /*Этот код выполняет следующие шаги:
 
 1. Использует метод getElementById для поиска элемента с id, равным "super_link".
 2. Сохраняет найденный элемент в const superLink.
 3. Выводит содержимое superLink в консоль. */

 /*2. Внутри всех элементов на странице, которые имеют класс card-link,
 поменяйте текст внутри элемента на "ссылка".*/

 // Найти все элементы с классом "card-link"
const cardLinks = document.querySelectorAll('.card-link');

// Перебрать все найденные элементы и изменить их текст
cardLinks.forEach(link => {
   link.textContent = 'ссылка';
});

/*Этот код выполняет следующие шаги:

1. Использует метод querySelectorAll для поиска всех элементов с классом card-link.
2. Перебирает все найденные элементы с помощью метода forEach.
3. Изменяет текстовое содержимое каждого элемента на "ссылка" с помощью свойства textContent.*/

/*3. Найдите все элементы на странице с классом card-link, которые лежат в
 элементе с классом card-body, и выведите полученную коллекцию в консоль. */

// Найти все элементы с классом "card-body"
const cardBodies = document.querySelectorAll('.card-body');

// Создать пустой массив для хранения найденных элементов
const cardLinksInCardBody = [];

// Перебрать все найденные элементы с классом "card-body"
cardBodies.forEach(cardBody => {
// Найти все элементы с классом "card-link" внутри текущего "card-body"
   const links = cardBody.querySelectorAll('.card-link');

// Добавить найденные элементы в массив
   links.forEach(link => cardLinksInCardBody.push(link));
});

// Вывести полученную коллекцию в консоль
console.log(cardLinksInCardBody);

/*Этот код выполняет следующие шаги:

1. Использует метод querySelectorAll для поиска всех элементов с классом card-body.
2. Создает пустой массив cardLinksInCardBody для хранения найденных элементов.
3. Перебирает все найденные элементы с классом card-body с помощью метода forEach.
4. Внутри каждого элемента card-body ищет все элементы с классом card-link и добавляет их в массив cardLinksInCardBody.
5. Выводит полученную коллекцию элементов в консоль.*/
 
/*4. Найдите первый попавшийся элемент на странице, у которого есть атрибут
data-number со значением 50, и выведите его в консоль. */

// Найти первый элемент с атрибутом data-number="50"
const element = document.querySelector('[data-number="50"]');

// Вывести найденный элемент в консоль
console.log(element);

/*Этот код выполняет следующие шаги:

1. Использует метод querySelector для поиска первого элемента с атрибутом data-number, равным 50.
2. Сохраняет найденный элемент в переменную element.
3. Выводит содержимое переменной element в консоль.*/


/* 5. Выведите содержимое тега title в консоль. */

// Найти элемент <title>
const titleElement = document.querySelector('title');

// Вывести содержимое тега <title> в консоль
console.log(titleElement.textContent);

/*Этот код выполняет следующие шаги:

1. Использует метод querySelector для поиска элемента <title>.
2. Сохраняет найденный элемент в переменную titleElement.
3. Выводит текстовое содержимое элемента <title> в консоль с помощью свойства textContent.*/

/* 6. Получите элемент с классом card-title и выведите его родительский узел в
консоль. */

// Найти элемент с классом "card-title"
const cardTitle = document.querySelector('.card-title');

// Вывести родительский узел элемента в консоль
console.log(cardTitle.parentNode);

/*Этот код выполняет следующие шаги:

1. Использует метод querySelector для поиска элемента с классом card-title.
2. Сохраняет найденный элемент в переменную cardTitle.
3. Выводит родительский узел элемента cardTitle в консоль с помощью свойства parentNode. */

/* 7. Создайте тег <p>, запишите внутри него текст "Привет" и добавьте созданный
тег в начало элемента, который имеет класс card. */

// Создать новый элемент <p>
const newParagraph = document.createElement('p');

// Записать текст "Привет" внутри нового элемента <p>
newParagraph.textContent = 'Привет';

// Найти элемент с классом "card"
const cardElement = document.querySelector('.card');

// Добавить новый элемент <p> в начало элемента с классом "card"
cardElement.insertBefore(newParagraph, cardElement.firstChild);

/*Этот код выполняет следующие шаги:

1. Создает новый элемент <p> с помощью метода document.createElement.
2. Записывает текст "Привет" внутри нового элемента <p> с помощью свойства textContent.
3. Находит элемент с классом card с помощью метода querySelector.
4. Добавляет новый элемент <p> в начало элемента с классом card с помощью метода insertBefore.*/


/* 8. Удалите тег h6 на странице. */

// Найти элемент <h6>
const h6Element = document.querySelector('h6');

// Удалить найденный элемент <h6>
if (h6Element) {
   h6Element.remove();
}

/*Этот код выполняет следующие шаги:

1. Использует метод querySelector для поиска элемента <h6>.
2. Проверяет, найден ли элемент, и если да, удаляет его с помощью метода remove.*/