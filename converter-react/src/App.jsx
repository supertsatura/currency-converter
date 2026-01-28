import CurrencyConverter from "./CurrencyConverter";
import "./App.css";

function App() {
    const rates = [
        { code: "USD", value: 1 },
        { code: "EUR", value: 0.92 },
        { code: "GBP", value: 0.79 },
        { code: "CNY", value: 7.2 },
        { code: "JPY", value: 156 }
    ];

    return <CurrencyConverter rates={rates} />;
}

export default App;
