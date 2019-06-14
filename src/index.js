import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Time from './Horloge/Time';
import Toggle from "./Toggle/Toggle"
import Converter from './CurrencyConverter/Converter';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Time/>, document.getElementById('time'));
ReactDOM.render(<Toggle/>, document.getElementById('toggle'));
ReactDOM.render(<Converter/>, document.getElementById('converter'));
// ReactDOM.render(<TodoList/>, document.getElementById('test'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
