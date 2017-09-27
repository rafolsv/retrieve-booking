import React from 'react';
import _isUndefined from 'lodash/isUndefined';
import PropTypes from 'prop-types';

class SendEmailInfo extends React.Component {

    static propTypes : {
        status: PropTypes.bool,
        clearEmailSuccess: PropTypes.func
    }

    constructor() {
        super();
    }

    render() {
        const status = this.props.status.toString();
        return (
            <div className={_isUndefined(status) && 'hidden'}>
                <h4>Sending Status</h4>
                <div className="alert alert-warning">
                    <strong>Success: </strong>{status}<br/>
                </div>
                <a className="btn btn-lg btn-danger col-xs-12" onClick={() => this.props.clearEmailSuccess(this)}>Close</a>
            </div>
        );
    }
}
export default SendEmailInfo;