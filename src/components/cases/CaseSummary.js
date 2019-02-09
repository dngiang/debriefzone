import React from 'react'

const CaseSummary = ({file}) => {
    return (

    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">{file.title}</span>
            <p>Post by Dinh Giang</p>
            <p className="grey-text">Today</p>
        </div>
    </div>
    )
}

export default CaseSummary