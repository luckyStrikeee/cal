import React from 'react'
import './ContactsDisplay.css'

function ContactsDisplay(props) {
    return (
        <div >
            <div className='contact' id={props.contact['name']} onClick={(e) =>{ 
                props.setcontact(e.target.id)
                // document.getElementById('m-'+props.contact['name']).className = 'x1'
            }
                
                }> {props.contact['name']}</div>
           
            
        </div>
    )
}

export default ContactsDisplay
