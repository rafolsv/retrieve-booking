import React from 'react';
import RetrieveForm from './RetrieveForm';
import ForgotReservationForm from './ForgotReservationForm';
import InfoModal from './InfoModal';

class RetrieveBooking extends React.Component {
    constructor() {
        super();
        this.state = {
            forgotReservation: false,
        };

        this.handleForgotReservation = this.handleForgotReservation.bind(this);
    }

    handleForgotReservation(isClicked) {
        this.setState({
            forgotReservation: isClicked,
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <RetrieveForm forgotReservation={this.state.forgotReservation} handleForgotReservation={this.handleForgotReservation} />
                <ForgotReservationForm forgotReservation={this.state.forgotReservation} handleForgotReservation={this.handleForgotReservation}/>
                <InfoModal forgotReservation={this.state.forgotReservation} handleForgotReservation={this.handleForgotReservation}/>
            </div>
        );
    }
}
export default RetrieveBooking;