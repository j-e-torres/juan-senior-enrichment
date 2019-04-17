import React, { Fragment } from 'react';

const formInputCreator = ( stateProp, value, onChangeProp, placeholder, ) => {
    return (
        <Fragment>
        <span>
            <input
                value={value}
                type="text"
                name={stateProp}
                onChange={onChangeProp}
                placeholder={placeholder}
            />
        </span>
        <br />
        </Fragment>
    )
}


export {
    formInputCreator
};
