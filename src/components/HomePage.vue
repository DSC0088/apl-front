<template>
    <div>
    <h4>Тестовое задание</h4> 
   <pre>
    **************************************
    BACKEND
    **************************************
    Миграция:
    Product[int id, string name, string category_name, string brand_name, int price, int rrp_price, int status (1 - В наличие, 2 - Под заказ)]

    Реализовать REST API на Yii2:
    - GET    /api/products             - возвращает все товары из базы
    - GET    /api/product/{id}         - возвращает товар по ID
    - POST   /api/product/create       - создает товар с переданными полями
    - PATCH  /api/product/update/{id}  - обновляет переданные поwля товара по ID
    - GET    /api/product/brand/{name} - возвращает 2 товара для указанного бренда c самой дешевой и самой дорогой ценой, пример:

    [
        {
            "min": {
                "id": 1,
                "price": 1000
            }
        },
        {
            "max": {
                "id": 20,
                "price": 50000
            }
        }
    ]

    Доступы:
    - GET методы доступны всем
    - POST, PATCH методы доступны авторизованному пользователю

    **************************************
    FRONTEND
    **************************************
    Реализовать мини-приложение на Vue.js под все методы API.
    Аутентификация в приложении не обязательна, но не запрещена.

    Обязательное условие:
    Для всех товаров цену отображаем из поля price, кроме:
    - товаров бренда "Dell" и "Lenovo", цену берем из поля rrp_price
    - если товар под заказ, то вместо цены отображаем текст "цена по запросу"



    Примечание:
    Выложить рабочий проект на Github.com с пошаговой инструкцией по запуску.

    </pre>
    </div>
</template>


<script>

</script>


<style>

</style>