import { useState } from "react";

function CurrencyConverter({ rates }) {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(rates[0].code);

    const currentRate = rates.find(
        (item) => item.code === currency
    ).value;

    const result = amount
        ? (amount * currentRate).toFixed(2)
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
                {rates.map((item) => (
                    <option key={item.code} value={item.code}>
                        {item.code}
                    </option>
                ))}
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

export default CurrencyConverter;