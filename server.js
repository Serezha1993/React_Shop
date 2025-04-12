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

app.listen(PORT, () =>
  console.log(`Сервер запущен на http://localhost:${PORT}`)
);
