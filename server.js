const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Торт Наполеон", price: 500 },
    { id: 2, name: "Чизкейк Нью-Йорк", price: 650 },
  ]);
});

app.listen(PORT, () => console.log(`Сервер запущен на http://localhost:${PORT}`));



// const jsonServer = require("json-server");
// const cors = require("cors");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();

// server.use(cors()); // Разрешает все CORS-запросы
// server.use(middlewares);
// server.use(router);

// server.listen(5000, () => {
//   console.log("JSON Server is running on http://localhost:5000");
// });

