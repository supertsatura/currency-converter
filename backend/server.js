const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Разрешение доступа к серверу
app.use(cors());

// Таблица с курсами валют на сервере
const rates = [
    { code: "USD", value: 76.5 },
    { code: "EUR", value: 90.40 },
    { code: "GBP", value: 103.32 },
    { code: "CNY", value: 11.09 },
    { code: "JPY", value: 0.49 }
];

// Отправка данных клиенту
app.get("/rates", (req, res) => {
    res.json(rates);
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});