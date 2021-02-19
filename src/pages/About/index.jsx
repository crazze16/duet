import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'


class About extends React.Component {
    render() {
        if (this.props.authFlag) {
            return (
                <div>
                    <FontAwesomeIcon icon={faWrench} color='#AF5500' size="9x" pulse style={{ dislay: "block", margin: "50px 45%" }} />
                    <p style={{ fontSize: "55px", textAlign: "center" }}>COMING SOON!</p>
                </div >
            )
        }
        else {
            return <Redirect to={'/Auth'} />

        }
    }
}
const mapStateToProps = (state) => ({
    authFlag: state.AuthPageReducer.isAuth,
})

export const AboutContainer = connect(mapStateToProps, {})(About);
