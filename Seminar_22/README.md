### Урок 22. Семинар. Работа с медиа

 1. Продолжите работу с проектом из прошлого задания
 2. В файле index.html добавьте блок для корзины с классом cart.
3. В файле script.js добавьте функциональность для добавления товара в
 корзину при клике на кнопку "Add to Cart".
 4. Реализуйте функциональность для удаления товаров из корзины при нажатии
 на кнопку "X".

Реализация:

Добавление товаров в список продуктов:

В цикле forEach создаются элементы списка <li> для каждого продукта и добавляются в элемент <ul id="product-list">.

Функция addToCart:

Находит продукт по его id и создает элемент списка <li> для корзины.

Добавляет кнопку "X" для удаления товара из корзины.

Добавляет обработчик клика для кнопки "X", который удаляет товар из корзины.

Обработчик клика для добавления товара в корзину:

Слушает события клика на кнопки "Add to Cart".

Получает id продукта из атрибута data-id и вызывает функцию addToCart.

Этот код добавляет функциональность для добавления товаров в корзину при клике на кнопку "Add to Cart" и удаления товаров из корзины при нажатии на кнопку "X".