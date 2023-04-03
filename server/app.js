const express = require('express');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const app = express();
const PORT = 3030;
const urlencodedParser = express.urlencoded({extended: false});

let DB = {
  item: [
    {
    id: uuidv4(),
    title: "Мужские Кроссовки Nike Blazer Mid Suede Green",
    price: 12999,
    imageUrl: "/img/sneakers/a2.jpg"
    },
    {
      id: uuidv4(),
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 16369,
    imageUrl: "/img/sneakers/a1.jpg"
    },
    {
      id: uuidv4(),
    title: "Мужские Кроссовки Nike Blazer Mid Suede Beige",
    price: 12999,
    imageUrl: "/img/sneakers/a3.jpg"
    },
    {
      id: uuidv4(),
    title: "Мужские Кроссовки Under Armour Curry 8",
    price: 8300,
    imageUrl: "/img/sneakers/a4.jpg"
    },
    {
      id: uuidv4(),
    title: "Мужские Кроссовки Nike LeBron XVIII",
    price: 18999,
    imageUrl: "/img/sneakers/a5.jpg"
    },
    {
      id: uuidv4(),
    title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    price: 14250,
    imageUrl: "/img/sneakers/a6.jpg"
    },
    {
      id: uuidv4(),
    title: "Мужские Кроссовки Nike Lebron XVIII Low",
    price: 22199,
    imageUrl: "/img/sneakers/a7.jpg"
    },
    {
      id: uuidv4(),
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    price: 13799,
    imageUrl: "/img/sneakers/a9.jpg"
    },
    {
      id: uuidv4(),
    title: "Мужские Кроссовки Nike Blazer Mid Suede Green Low",
    price: 12999,
    imageUrl: "/img/sneakers/a8.jpg"
    },
    {
      id: uuidv4(),
    title: "Мужские Кроссовки Nike Kyrie 7",
    price: 16500,
    imageUrl: "/img/sneakers/a10.jpg"
    },
    {
      id: uuidv4(),
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 19399,
    imageUrl: "/img/sneakers/a11.jpg"
    },
    {
      id: uuidv4(),
    title: "Кроссовки Puma X Aka Boku Future Rider Lw",
    price: 19399,
    imageUrl: "/img/sneakers/a12.jpg"
    }
    ], 

    cart: [
 
    ],

    favorites: [

    ],
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/item', (req, res) => {
  return res.json(DB.item);
});

app.get('/cart', (req, res) => {
  return res.json(DB.cart);
});

app.get('/favorites', (req, res) => {
  return res.json(DB.favorites);
});


app.post('/cart', urlencodedParser, (req, res) => {
  if(!req.body) return res.sendStatus(400);
  const newItem = req.body
  DB.cart.push(newItem);
  return res.json(newItem);
});

app.post('/favorites', urlencodedParser, (req, res) => {
  if(!req.body) return res.sendStatus(400);
  const newItem2 = req.body
  DB.favorites.push(newItem2);
  return res.json(newItem2);
});

// // app.patch('/api/v1/todos', (req, res) => {
// //   const currentTodo = DB.todos.find((todo) => todo.id === req.body.id);
// //   currentTodo.completed = !currentTodo.completed;
// //   return res.json(currentTodo);
// // });


app.delete('/cart/:id', (req, res) => {
  DB.cart = DB.cart.filter((el) => el.id !== req.params.id);
  res.status(200).json({message: 'deleted successfull'})
});

app.delete('/favorites/:id', (req, res) => {
  DB.favorites = DB.favorites.filter((el) => el.id !== req.params.id);
  res.status(200).json({message: 'deleted successfull'})
});

app.listen(PORT, () => {
  console.log('Server has been started on port ', PORT);
});
