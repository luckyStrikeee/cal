import React from 'react'
import './Day.css'

function Day(props) {
    return (
        <div>
            <div className='header'><span>{props.dayNum}</span></div>
            <div className='body'>{props.data.filter(e => e['date'] - new Date(props.curYear, props.curMonth, props.dayNum) < 86400000 && e['date'] - new Date(props.curYear, props.curMonth, props.dayNum) > 0)
            .map((e, i) => <div key={i} id={'m-'+e['name']} className={'m-'+e['name']}> { e['date'].getHours()}:{e['date'].getMinutes()} {e['name']}</div>)}</div>
        </div>
    )
}

export default Day
