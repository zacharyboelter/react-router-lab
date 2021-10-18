import React from 'react'
import stocks from '../data.json'
import { Link } from 'react-router-dom'


function Dashboard(props) {
  return (
    <div className="stocks">
      {stocks.map((stock) => {
        const { name, symbol } = stock;

        return (
          <Link to={`/stocks/${symbol}`}>
            <h2>{name} ${symbol}</h2>
          </Link>
        );
      })}
    </div>
  );
};


export default Dashboard;