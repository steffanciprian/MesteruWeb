import React from 'react';

const ServiceCard = props => {
    return (
        <div
            onClick={props.onPress}
        >
            <div>
                <div>
                    <img className="img"
                         src={props.uri}
                         style={{height: 100, width: 100}}
                         alt=""/>
                </div>
                <label>{props.title} </label>
            </div>
        </div>
    )
}

export default ServiceCard;
