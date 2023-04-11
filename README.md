# Содержание

SPA приложение интернет-магазин кроссовок с сервером, без бэка.
Папка server находиться в папке проекта, cd server, npm i, npm start - port 3030
Из основной папки запуск фронта, на порту 3000.

Приложение имеет следующий функционал:

1. Главная страница с хедером, где есть корзина, избранное и история заказов пользователя.
2. На карточке товара, в правом нижнем углу +, для добавления товара в корзину.
3. при добавлении в корзину также отображаеться сумма стоимости товаров в корзине.
4. При обновление страницы, товар остаеться в корзине тк записан в бэк.
5. Аналогичная ситуация с добавлением в избранное, в верхнем левом углу heart для добавления в избранное.
6. При обновление страницы, товар остаеться в избранном тк записан в бэк, можно удалять из избранного.
7. Из избранного нельзя добавить в корзину, специально ограничен функционал.
8. По нажатию на корзину, отображаються все твоары находящиеся в ней, с общей стоимостью.
9. По нажатию на x в корзине можно удалять товар из корзины, с одновременным пересчетом стоимости.
10. При удалении товара из корзины, отдновременно убираеться галочка на главной странице на карточке товара.
11. По нажатию на кнопку оформить заказ, генериться номер заказа, и на бэк записываеться товар из заказа.
12. По нажатию на иконку юзера, отображаються все офромленные заказы.
13. Все запросы get, post, put, delete синхронизированны с бэком.
14. На бэке объект DB, внутри массив с карточками, массивы: item, cart, favorites, orders (http://localhost:3030/orders - заказы, http://localhost:3030/cart - корзина, http://localhost:3030/favorites - избранное, http://localhost:3030/item - все карточки)
15. Для запросов на фронте использован хук useEffect и библиотека axios.
16. На бэке cors, uuidv4, urlencodedParser/
17. Роутинг v6, для страницы Favorites, Home, Orders.
18. Созлан кастомный хук useCart - с использованием стейта корзины и контекста для пересчета стоимости.
19. Стили scss, для компонентов корзины и карточки использованы module.scss
20. Использован пакет npm macro-css.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
