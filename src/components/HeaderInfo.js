import React from 'react';

const HeaderInfo = (props) => {
    return (
        <div>
            <h3>Погода online</h3>
            <p>Погода: {props.city}</p>
        </div>
    )

}

export default HeaderInfo;