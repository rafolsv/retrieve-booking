import React from 'react';
import _isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

class ErrorMessage extends React.Component {

    static propTypes : {
        errorMessage: PropTypes.string,
        clearStateResponse: PropTypes.func
    }

    constructor() {
        super();
    }

    render() {
        const message = this.props.errorMessage;
        return (
            <div className={_isEmpty(message) && 'hidden'}>
                <h4>Error Retrieving Data</h4>
                <div className="alert alert-danger">
                    <strong>Error Code:</strong> {message}
                </div>
                <a className="btn btn-lg btn-danger col-xs-12" onClick={() => this.props.clearStateResponse(this)}>Close</a>
            </div>
        );
    }
}
export default ErrorMessage;