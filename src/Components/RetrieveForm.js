import React from 'react';

class RetrieveForm extends React.Component {
    constructor() {
        super();
        this.state = {
            forgotReservation: false,
        };

        this.handleForgotClick = this.handleForgotClick.bind(this);
    }
    
    handleForgotClick() {
        this.props.handleForgotReservation(true);
    }

    render() {
        return (
            <form className={!this.props.forgotReservation ? 'row' : 'hidden'}>
                <h1 className="col-xs-12">Retireve Booking Information</h1>
                <div className="form-group col-xs-12">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" className="form-control" id="lastName" />
                </div>
                <div className="form-group col-xs-12">
                    <label htmlFor="resNumber">Reservation Number:</label>
                    <input type="text" className="form-control" id="resNumber" />
                </div>
                <div className="form-group col-xs-12">
                    <a href="#" onClick={this.handleForgotClick}>Forgot Reservation Number?</a>
                </div>
                <div className="form-group col-xs-12 col-sm-6">
                    <button type="submit"
                        className="btn btn-lg btn-primary col-xs-12"
                        data-toggle="modal"
                        data-target="#myModal">
                        Retrieve my Booking
                    </button>
                </div>
            </form>
        );
    }
}
export default RetrieveForm;