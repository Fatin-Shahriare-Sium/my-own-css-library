import React from 'react'

const ShowColorHeader = ({ colorname, hex }) => {
    return (
        <div className={`show-color-header ${colorname}-500`}>
            <p>{`$${colorname}`}</p>
            <p>{hex}</p>
        </div>
    )
}


export default ShowColorHeader;
