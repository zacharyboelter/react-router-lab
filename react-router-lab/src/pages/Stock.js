import React from "react";
import stocks from "../data.json"

const Stock = (props) => {
    const stock = props.stocks.filter(stock => stock.symbol === props.match.params.symbol)[0]
    const loaded = () => {
        return (
            <div>
                <h2>{stock.symbol}</h2>
                <h2>Name: {stock.name}</h2>
                <h2>Price: {stock.lastPrice}</h2>
            </div>
        );
    };
    const loading = () => {
        return <h1>Wait...</h1>
    };
    return stocks ? loaded() : loading();
}

export default Stock;