import React from 'react';

import BreatheCalm from './breathe-calm/breathe-calm.component';

import { camelCaseToString } from '../../utils';

import './privacy-policy.styles.scss';

const PrivacyPolicy = ({ match }) => {
    
    const renderPolicy = app => {
        switch(app) {
            case 'BreatheCalm':
                return <BreatheCalm />
            default:
                return <span>Policy cannot be found.</span>
        }
    }

    return ( 
        <div className='privacy-policy'>
            <h1>{camelCaseToString(match.params.work)} Privacy Policy</h1>
            {renderPolicy(match.params.work)}
        </div>
     );
}
 
export default PrivacyPolicy;