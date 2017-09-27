import React from 'react';
import fetchJson from 'node-fetch-json';
import PropTypes from 'prop-types';

const config = {
    API_URL : 'https://test-api.vroomvroomvroom.com/json/v1.2',
    API_TOKEN : 'Basic NzEwODRmUWY5Q3c5SjFRbmJFajE6UFdoRldqNDVSWDU1U2lodGRYWndQbHNuVVNsNVZESkZXalltVUdCeEtYbHhPMHBCTmxWVlZIWXZOQ0pOZVhvdFBuTThZa0FzSlNJcFBtMTk=',
};

class RetrieveForm extends React.Component {

    static propTypes : {
        handleForgotReservation: PropTypes.func,
        handleResponse: PropTypes.func,
        showForm: PropTypes.func,
    }

    constructor() {
        super();
        this.state = {
            resNumber: '',
            lastName: '',
        };

        this.handleForgotClick = this.handleForgotClick.bind(this);
        this.getBookingDetails = this.getBookingDetails.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.hideForm = this.hideForm.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        this.setState({
            [target.id]: target.type === 'checkbox' ? target.checked : target.value,
        });
    }
    handleForgotClick() {
        this.props.handleForgotReservation(true);
    }

    getBookingDetails() {
        const formData = this.state;
        fetchJson(config.API_URL +
            '/booking/retrieve?supplierConfirmation=' + formData.resNumber +
            '&lastName=' + formData.lastName, {
            method: "GET",
            headers: {
                Authorization: config.API_TOKEN
            }
        }).then((response) => {
            this.props.handleResponse(response);
        }).catch((error) => {
            console.error(error);
        });
        return false;
    }

    hideForm() {
        this.props.showForm(false);
    }

    render() {
        return (
            <form className="row">
                <div className="form-group col-xs-12">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" className="form-control" id="lastName" onChange={this.handleChange} />
                </div>
                <div className="form-group col-xs-12">
                    <label htmlFor="resNumber">Reservation Number:</label>
                    <input type="text" className="form-control" id="resNumber" onChange={this.handleChange} />
                </div>
                <div className="form-group col-xs-12">
                    <a href="javascript:void(0)" onClick={this.handleForgotClick}>Forgot Reservation Number?</a>
                </div>
                <div className="form-group col-xs-12">
                    <button className="btn btn-lg btn-primary col-xs-12" onClick={this.getBookingDetails}>Show Booking Details</button>
                </div>
                <div className="form-group col-xs-12">
                    <button className="btn btn-lg btn-danger col-xs-12" onClick={this.hideForm}>Cancel</button>
                </div>
            </form>
        );
    }
}
export default RetrieveForm;