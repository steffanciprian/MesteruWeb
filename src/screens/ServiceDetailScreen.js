import React from 'react';

const ServiceDetailScreen = props => {
    const serviciuId = props.getParam('serviciuId');
    const serviciuTitle = props.navigation.getParam('serviciuTitle');
    const serviciuUri = props.navigation.getParam('serviciuUri');
    return (
        <div >

            <div>
                <label>{serviciuTitle}</label>
                <img className="img"
                     src={props.uri}
                     style={{height: 100, width: 100}}
                     alt=""/>
            </div>

        </div>
    )
}

export default ServiceDetailScreen;
