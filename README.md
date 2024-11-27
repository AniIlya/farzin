# Redux Toolkit 
    цель Redux Toolkit — помочь упростить распространенные варианты использования 
    Redux. Он не предназначен для того, чтобы быть полным решением для всего, что вы,
    возможно, захотите сделать с Redux, но он должен сделать большую часть кода, связанного
    с Redux, который вам нужно написать, намного проще
----
    Redux Toolkit экспортирует несколько отдельных функций, которые вы можете использовать
    в своем приложении, и добавляет зависимости от некоторых других пакетов,
    которые обычно используются с Redux
----
#####   Пакет Redux Toolkit предназначен для стандартного способа написания 
#####   логики Redux.Первоначально он был создан для решения 
#####   трех распространенных проблем, связанных с Redux:  
------

            «Настройка хранилища Redux слишком сложна»

            «Мне нужно добавить много пакетов, чтобы заставить Redux делать 
            что-то полезное»
            
            «Redux требует слишком много шаблонного кода»
----
## Hекоторые способы, которыми Redux Toolkit может 
## помочь улучшить ваш код:
    
+   Store
    Каждое приложение Redux необходимо настроить и создать хранилище Redux.
    Обычно это включает в себя несколько шагов:
    + Импорт или создание функции корневого редуктора
    + Настройка промежуточного программного обеспечения, вероятно, включая по крайней мере одно    промежуточное программное обеспечение для обработки асинхронной логики.
    + Настройка расширения Redux DevTools
    + Возможно изменение некоторой логики в зависимости от того, создается ли приложение для разработки или производства.
    
+   Writing Reducers
    Редьюсеры — самая важная концепция Redux. Типичная функция редуктора должна:
    +   Посмотрите на typeполе объекта действия, чтобы увидеть, как он должен реагировать
    +   Постоянно обновляйте его состояние, создавая копии тех частей состояния, которые              необходимо изменить, и изменяя только эти копии
----

#   RTK Query
##### << RTK Query — это мощный инструмент для выборки и кэширования данных. Он предназначен для упрощения распространенных случаев загрузки данных в веб-приложение, избавляя от необходимости вручную писать логику выборки и кэширования данных. >>

-----

            Отслеживание состояния загрузки для отображения счетчиков 
        пользовательского интерфейса
            Избегайте дублирования запросов одних и тех же данных
            Оптимистичные обновления, чтобы сделать пользовательский интерфейс более быстрым
            Управление временем жизни кеша при взаимодействии пользователя с пользовательским
        интерфейсом

----