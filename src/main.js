import React from 'react';
import ReactDOM from 'react-dom';
import RetrieveBooking from './Components/RetrieveBooking';
import './Styles/style.scss';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(RetrieveBooking),
        document.getElementById('retrieveBooking')
    );
});