import React from 'react';
import RetrieveForm from './RetrieveForm';
import ForgotReservationForm from './ForgotReservationForm';
import BookingInfo from './BookingInfo';
import ErrorMessage from './ErrorMessage';
import SendEmailInfo from './SendEmailInfo';
import _isEmpty from 'lodash/isEmpty';

class RetrieveBooking extends React.Component {
    constructor() {
        super();
        this.state = {
            forgotReservation: false,
            response: {
                confirmation: '',
                pickupDepot: {},
                pickUp: {},
                returnDepot: {},
                return: {},
                bookingUrl: {},
                bookingStatus: {},
            },
            isRetrieving: true,
            showForms: false,
            emailSuccess: {},

        };

        this.handleForgotReservation = this.handleForgotReservation.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
        this.showForm = this.showForm.bind(this);
        this.showRetrieveForm = this.showRetrieveForm.bind(this);
        this.handleSendEmailResponse = this.handleSendEmailResponse.bind(this);
        this.clearEmailSuccess = this.clearEmailSuccess.bind(this);
    }

    handleForgotReservation(isClicked) {
        this.setState({
            forgotReservation: isClicked,
        });
    }

    handleResponse(response) {
        this.setState({
            response: response,
        });
    }

    handleSendEmailResponse(response) {
        this.setState({
            emailSuccess: response,
        });
    }

    showForm(showHide) {
        this.setState({
            showForms: showHide,
        });
        if(!showHide){
            this.showRetrieveForm();
            this.clearEmailSuccess();
            this.handleForgotReservation(false);
        }
    }

    showRetrieveForm() {
        this.setState({
            response: {
                confirmation: '',
                pickupDepot: {},
                pickUp: {},
                returnDepot: {},
                return: {},
                bookingUrl: {},
                bookingStatus: {},
                message: '',
            }
        });
    }

    clearEmailSuccess() {
        this.setState({
            emailSuccess: {},
        });
    }

    render() {
        const response = this.state.response;
        return (
            <div className="container-fluid">
                {!this.state.showForms ?
                    <a className="btn btn-lg btn-primary"
                       onClick={() => this.showForm(true)}>
                        Retrieve My Booking
                    </a>
                    :
                    <div className="row" id="retrieveModal">
                        <a className="btn btn-default pull-right"onClick={() => this.showForm(false)}>x</a>
                        {this.state.forgotReservation ?
                            ( !_isEmpty(this.state.emailSuccess) ) ?
                                <SendEmailInfo
                                    status={this.state.emailSuccess.success}
                                    clearEmailSuccess={this.clearEmailSuccess} />
                                :
                                <ForgotReservationForm
                                    forgotReservation={this.state.forgotReservation}
                                    handleForgotReservation={this.handleForgotReservation}
                                    handleSendEmailResponse={this.handleSendEmailResponse}/>
                            :
                            ( !_isEmpty(response.confirmation) || !_isEmpty(response.message) ) ?
                                !_isEmpty(response.message) ?
                                    <ErrorMessage
                                        errorMessage={response.message}
                                        clearStateResponse={this.showRetrieveForm} />
                                    :
                                    <BookingInfo
                                        response={response}
                                        clearStateResponse={this.showRetrieveForm} />
                                :
                                <RetrieveForm
                                    handleForgotReservation={this.handleForgotReservation}
                                    handleResponse={this.handleResponse}
                                    showForm={this.showForm}/>
                        }
                    </div>
                }
            </div>
        );
    }
}
export default RetrieveBooking;