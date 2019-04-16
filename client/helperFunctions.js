import React, { Fragment } from 'react';

const formInputCreator = ( stateProp, onChangeProp, placeholder) => {
    return (
        <Fragment>
        <span>
            <input
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
