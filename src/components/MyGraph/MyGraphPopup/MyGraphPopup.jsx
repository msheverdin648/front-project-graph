import React from 'react'
import classes from './MyGraphPopup.module.css'

const MyGraphPopup = ({text, coordinates}) => {
  return (
    <div className={classes.container} style={{top: coordinates.y, left: coordinates.x}}>
        <div className={classes.body}>
            {text}
        </div>
    </div>
  )
}

export default MyGraphPopup