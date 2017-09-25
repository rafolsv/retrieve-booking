import React from 'react';

class InfoModal extends React.Component {
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
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Booking Information</h4>
                        </div>
                        <div className="modal-body">
                            <p>Lorem Ipsum Dolor Sit Amet</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default InfoModal;