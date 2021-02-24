import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux'
import { setNewsAC } from '../../redux-store/NewsReducer';

import { NewsForm } from './components/NewsForm';

const Dapi = () => {

    ///579f9b87b90940b5b13991bfa09bcb9c - apiNEWS

    return (
        <div>


            <NewsForm />


        </div>
    )
}



const mapStateToProps = (state) => ({
    actualNews: state.NewsPageReducer.newsData
});

export const DapiContainer = connect(mapStateToProps, { setNewsAC })(Dapi)