import React from 'react'
import './MeetingDisplay.css'

function MeetingDisplay(props) {
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }
    return (
        <div className='contact' onClick={() => alert(props.meeting['name'])}>
            {props.meeting['name']}{' '}
            {props.meeting['date'].toLocaleDateString(undefined, options)}
           {/* {props.meeting['date'].getHours()} {props.meeting['date'].getHours()}: {props.meeting['date'].getMinutes()} {props.meeting['name']} */}
        </div>
    )
}

export default MeetingDisplay
