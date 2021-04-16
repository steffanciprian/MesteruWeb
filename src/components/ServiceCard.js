import React from 'react';

const ServiceCard = props => {
    return (
        <div
            onClick={props.onPress}
        >
            <div>
                <div>
                    <img
                        source={{uri: props.uri}}
                    />
                </div>
                <label>{props.title} </label>
            </div>
        </div>
    )
}

export default ServiceCard;
