// import CurrencyConverter from "./CurrencyConverter";
// import "./App.css";
//
// function App() {
//     const rates = [
//         { code: "USD", value: 1 },
//         { code: "EUR", value: 0.92 },
//         { code: "GBP", value: 0.79 },
//         { code: "CNY", value: 7.2 },
//         { code: "JPY", value: 156 }
//     ];
//
//     return <CurrencyConverter rates={rates} />;
// }
//
// export default App;

// TSX
import CurrencyConverter from "./CurrencyConverter";
import "./App.css";

// тип валюты и ее курса
export type Rate = {
    code: string;
    value: number;
};

// таблица валют и курсов
function App() {
    const rates: Rate[] = [
        { code: "USD", value: 1 },
        { code: "EUR", value: 0.92 },
        { code: "GBP", value: 0.79 },
        { code: "CNY", value: 7.2 },
        { code: "JPY", value: 156 }
    ];

    // передача таблицы через props в компонент
    return <CurrencyConverter rates={rates} />;
}

export default App;
