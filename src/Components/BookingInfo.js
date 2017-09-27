import React from 'react';
import _isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

class BookingInfo extends React.Component {

    static propTypes : {
        response: PropTypes.object,
        clearStateResponse: PropTypes.func
    }

    constructor() {
        super();
    }

    render() {
        const response = this.props.response;
        return (
            <div className={_isEmpty(response.confirmation) && 'hidden'}>
                <h4>Booking Information</h4>
                <div className="alert alert-success">
                    <strong>Confirmation Number: </strong> {response.confirmation}<br/>
                    <strong>Booking Status: </strong> {response.bookingStatus.name}<br/>
                    <strong>Pickup Depot: </strong> {response.pickupDepot.name}<br/>
                    <strong>Pickup Date: </strong> {response.pickUp.date}<br/>
                    <strong>Pickup Time: </strong> {response.pickUp.time}<br/>
                    <strong>Return Depot: </strong> {response.returnDepot.name}<br/>
                    <strong>Return Date: </strong> {response.return.date}<br/>
                    <strong>Return Time: </strong> {response.return.time}<br/>
                    <strong>Booking URL: </strong> <a target="_blank" href={response.bookingUrl}>View Booking</a><br/>
                </div>
                <a className="btn btn-lg btn-danger col-xs-12" onClick={() => this.props.clearStateResponse(this)}>Close</a>
            </div>
        );
    }
}
export default BookingInfo;