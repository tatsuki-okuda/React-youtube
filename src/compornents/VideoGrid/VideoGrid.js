
import React from 'react'
import Style from './VideoGrid.module.scss'
// const { readFileSync } = require("fs");

const VideoGrid = ({children}) => {
    return (
        <div className={Style.container}>
            {children}
        </div>
    )
}

export default VideoGrid
