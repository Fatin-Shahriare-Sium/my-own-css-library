import React from 'react'

const ShowColor = ({ colorUtility, textColor }) => {
    return (
        <div className={`show-color ${colorUtility}`} >
            <p style={{ color: textColor }}>${colorUtility}</p>
        </div>
    )
}

export default ShowColor;
