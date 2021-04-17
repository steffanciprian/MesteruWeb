import React from 'react';

const ServiceDetailScreen = props => {
    const serviciuTitle = props.location.state.serviciuTitle;
    const serviciuUri = props.location.state.serviciuUri;
    return (
        <div>

            <div>
                <label>{serviciuTitle}</label>
                <img className="img"
                     src={serviciuUri}
                     style={{height: 100, width: 100}}
                     alt=""/>
            </div>

        </div>
    )
}

export default ServiceDetailScreen;
