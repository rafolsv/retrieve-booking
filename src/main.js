console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Components/Counter';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(Counter),
        document.getElementById('mount')
    );
});