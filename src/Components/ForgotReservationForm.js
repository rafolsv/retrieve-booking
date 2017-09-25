import React from 'react';

class ForgotReservationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            sampleState: false,
        };
        
        this.handleCancelClick = this.handleCancelClick.bind(this);
    }

    handleCancelClick() {
        this.props.handleForgotReservation(false);
    }

    render() {
        return (
            <form className={this.props.forgotReservation ? 'row' : 'hidden'}>
                <h1 className="col-xs-12">Forgot Reservation Number</h1>
                <div className="form-group col-xs-12">
                    <label htmlFor="retrieveEmail">Email address:</label>
                    <input type="email" className="form-control" id="retrieveEmail" />
                </div>
                <div className="form-group col-xs-12 col-sm-6">
                    <button type="submit" className="btn btn-lg btn-danger col-xs-12" onClick={this.handleCancelClick}>Cancel</button>
                </div>
                <div className="form-group col-xs-12 col-sm-6">
                    <button type="submit"
                        className="btn btn-lg btn-primary col-xs-12"
                        data-toggle="modal"
                        data-target="#myModal">
                        Send Booking Details
                    </button>
                </div>
            </form>
        );
    }
}
export default ForgotReservationForm;