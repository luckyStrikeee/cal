import React, {useState} from 'react'
import './Modal.css'

function Modal(props) { // rfce
    const [inputName, setinputName] = useState('')
    const [inputDate, setinputDate] = useState('')



    return (
        <div>
        <button onClick={() => document.getElementById('modal').style.display = 'block'}> {props.btnName} </button>
        <div id='modal' className='modal'>
        <div className="modal-content">
            <span className="close" onClick={() =>  document.getElementsByClassName("modal")[0].style.display = 'none'}>&times;</span>
            <p>New Meeting</p>
            <input type="text" placeholder='Name' value={inputName} onChange={(e) => setinputName(e.target.value)} />{' '}
            <input type="datetime-local" placeholder='Date' value={inputDate} onChange={(e) => setinputDate(e.target.value)} />
            <button onClick={() => props.newMeeting(prevState => [...prevState, {name: inputName, date: new Date(inputDate)}])}>Add</button>
            
        </div>
        </div>  
        </div>
    )
}

export default Modal


