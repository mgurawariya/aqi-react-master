import React from 'react';

import AirQualityData from './AirQualityData';
import NoDataFound from './NoDataFound';

const CityList = props => {
    let  cityList = [];    
    if (props.data) {
        cityList = props.data;
    }
        
    return (
        <div className="cityList">
            <ul>
            {
                cityList.length > 0
                ?
                cityList.map((cityInfo, i) => (
                    <li key={i}>
                        <AirQualityData cityInfo={cityInfo} />
                    </li>
                ))
                :
                <NoDataFound />
            }
            </ul>
        </div>
    )
};

export default CityList;