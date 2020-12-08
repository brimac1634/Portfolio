import React from 'react';

import { camelCaseToString } from '../../utils';
import additionalData from './additional-information.data';

import './additional-information.styles.scss';

const AdditionalInformation = ({ match }) => {
    const information = additionalData[match.params.work][match.params.additional];
    console.log(information);
    return ( 
        <div className='additonal-information'>
            <h2>{camelCaseToString(match.params.work)} {match.params.additional}</h2>
            <p>{information}</p>
        </div>
     );
}
 
export default AdditionalInformation;