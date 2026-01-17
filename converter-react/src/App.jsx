import { useState } from "react";
import "./App.css";

function App() {
    const rates = {
        USD: 90,
        EUR: 98,
        GBP: 114,
        CNY: 12,
        JPY: 0.6
    };

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("USD");

    const result = amount
        ? (amount * rates[currency]).toFixed(2) + " ₽"
        : "";

    return (
        <div className="converter">
            <h1>Конвертер валют</h1>

            <input
                type="number"
                placeholder="Введите сумму"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
            >
                <option value="USD">Доллар (USD)</option>
                <option value="EUR">Евро (EUR)</option>
                <option value="GBP">Фунт стерлингов (GBP)</option>
                <option value="CNY">Юань (CNY)</option>
                <option value="JPY">Иена (JPY)</option>
            </select>

            <input
                type="text"
                placeholder="Результат"
                value={result}
                readOnly
            />
        </div>
    );
}

export default App;
