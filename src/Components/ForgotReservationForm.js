import React from 'react';
import fetchJson from 'node-fetch-json';
import PropTypes from 'prop-types';

const config = {
    API_URL : 'https://test-api.vroomvroomvroom.com/json/v1.2',
    API_TOKEN : 'Basic NzEwODRmUWY5Q3c5SjFRbmJFajE6UFdoRldqNDVSWDU1U2lodGRYWndQbHNuVVNsNVZESkZXalltVUdCeEtYbHhPMHBCTmxWVlZIWXZOQ0pOZVhvdFBuTThZa0FzSlNJcFBtMTk=',
};

class ForgotReservationForm extends React.Component {

    static propTypes : {
        handleForgotReservation: PropTypes.func,
        handleSendEmailResponse: PropTypes.func,
    }

    constructor() {
        super();
        this.state = {
            userEmail: '',
        };
        
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sendToEmail = this.sendToEmail.bind(this);
    }

    handleCancelClick() {
        this.props.handleForgotReservation(false);
        // https://test-api.vroomvroomvroom.com/json/v1.2/email/forgot-reservation
    }

    handleChange(event) {
        const target = event.target;
        this.setState({
            [target.id]: target.type === 'checkbox' ? target.checked : target.value,
        });
    }

    sendToEmail() {
        fetchJson(config.API_URL +
            '/email/forgot-reservation', {
            method: "POST",
            headers: {
                Authorization: config.API_TOKEN
            },
            body: {
                email: this.state.userEmail,
            }
        }).then((response) => {
            this.props.handleSendEmailResponse(response);
        }).catch((error) => {
            console.error(error);
        });
        return false;
    }


    render() {
        return (
            <form className="row">
                <div className="form-group col-xs-12">
                    <label htmlFor="userEmail">Email address:</label>
                    <input type="email" className="form-control" id="userEmail" onChange={this.handleChange} />
                </div>
                <div className="form-group col-xs-12">
                    <button type="submit" className="btn btn-lg btn-primary col-xs-12" onClick={this.sendToEmail}>Send Booking Details</button>
                </div>
                <div className="form-group col-xs-12">
                    <button type="submit" className="btn btn-lg btn-danger col-xs-12" onClick={this.handleCancelClick}>Cancel</button>
                </div>
            </form>
        );
    }
}
export default ForgotReservationForm;