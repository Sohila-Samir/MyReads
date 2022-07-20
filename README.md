# MyReads Project

## About

full-stack application mainly depending on react.js for the client side and using Udacity books API from
react cross-skill nanodegree. the app can navigate books and display books from 3 different shelves in a main page depending on the states of the single book instance.

To get started developing right away:

-   install all project dependencies with `npm install`
-   start the development server with `npm start`

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

-   [`getAll`](#getall)
-   [`update`](#update)
-   [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

-   Returns a Promise which resolves to a JSON object containing a collection of book objects.
-   This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

-   book: `<Object>` containing at minimum an `id` attribute
-   shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
-   Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

-   query: `<String>`
-   Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
-   These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).
