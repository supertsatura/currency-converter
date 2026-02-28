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

// // TSX
// import CurrencyConverter from "./CurrencyConverter";
// import "./App.css";
//
// // тип валюты и ее курса
// export type Rate = {
//     code: string;
//     value: number;
// };
//
// // таблица валют и курсов
// function App() {
//     const rates: Rate[] = [
//         { code: "USD", value: 76.5 },
//         { code: "EUR", value: 90.40 },
//         { code: "GBP", value: 103.32 },
//         { code: "CNY", value: 11.09 },
//         { code: "JPY", value: 0.49 }
//     ];
//
//     // передача таблицы через props в компонент
//     return <CurrencyConverter rates={rates} />;
// }
//
// export default App;

import { useEffect, useState } from "react";
import CurrencyConverter from "./CurrencyConverter";
import "./App.css";

// тип валюты и ее курса
export interface Rate {
    code: string;
    value: number;
}

function App() {
    // Курсы с сервера
    const [rates, setRates] = useState<Rate[]>([]);

    // GET-запрос на backend при запуске
    useEffect(() => {
        fetch("http://localhost:3001/rates")
            .then((response) => response.json())
            .then((data) => {
                setRates(data);
            })
            .catch((error) => {
                console.error("Ошибка загрузки курсов:", error);
            });
    }, []);

    if (rates.length === 0) {
        return <div>Загрузка курсов валют...</div>;
    }

    // Передача курсов валют через props
    return <CurrencyConverter rates={rates} />;
}

export default App;