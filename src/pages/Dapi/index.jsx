import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';


export const Dapi = (props) => {
        return (
            <div>
                <FontAwesomeIcon icon={faWrench} color='#fff' size="9x" pulse style={{ dislay: "block", margin: "50px 45%" }} />
                <p style={{ fontSize: "55px", textAlign: "center" }}>COMING SOON!</p>
            </div>
        )
};

