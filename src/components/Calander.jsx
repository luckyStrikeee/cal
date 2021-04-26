import React, {useEffect, useState} from 'react'
import './Calander.css'
import ContactsDisplay from './ContactsDisplay';
import Day from './Day'
import MeetingDisplay from './MeetingDisplay';
import Modal from './Modal';

function Calander() {
    let contacts = [{name: 'avi', phone: '0501111111'}, {name: 'ben', phone: '0502222222'}, 
                    {name: 'gad', phone: '0503333333'}, {name: 'dan', phone: '0504444444'}]
    
    let data = [
        {name: 'avi', date: new Date(2021, 3, 15, 15)}, {name: 'ben', date: new Date(2021, 3, 15, 11)}, {name: 'gad', date: new Date(2021, 3, 15, 10)}, 
        {name: 'gad', date: new Date(2021, 3, 15, 14, 30)}, {name: 'dan', date: new Date(2021, 3, 1, 9)}, {name: 'dan', date: new Date(2021, 3, 12, 13)}, 
        {name: 'dan', date: new Date(2021, 3, 15, 16)}, {name: 'dan', date: new Date(2021, 4, 15, 16)}]
    
    const [pickedDate, setpickedDate] = useState(new Date());
    const [contact, setcontact] = useState(null)
    const [newcontact, setnewcontact] = useState('')
    const [inputContactName, setinputContactName] = useState('')
    const [inputContactPhone, setinputContactPhone] = useState('')
    const [contactsList, setcontactsList] = useState(contacts);
    const [meetings, setmeetings] = useState(data);
    
    const sign =['<', '>']
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const header = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    // data = []
    let d = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30]

    let createMonth = () => { // create the structure for calander table format
        let startFrom = new Date(pickedDate.getFullYear(), pickedDate.getMonth(), 1).getDay()
        let daysInMonth = new Date(pickedDate.getFullYear(), pickedDate.getMonth() + 1, 0).getDate()

        let month = []
        let week = []

        for(let x = 0; x < startFrom; x++){
            week.push('-')
        }

        for(let x = 1; x <= daysInMonth; x++){
            if(week.length === 6 || x === daysInMonth){
                week.push(x)
                month.push(week)
                week = []
            }else{
                week.push(x)
            }

        }
        return month

        // console.log(month,curMonth )
    }
    

  useEffect(() => {
      if(contact){
          const class_x = document.getElementsByClassName('x1')
          const class_m = document.getElementsByClassName('m-'+contact)

          for(let x of class_x){
              x.className = x.id
          }
          for(let m of class_m){
              m.className = 'x1'
          }
      }else{
            const class_x = document.getElementsByClassName('x1')

            for(let x of class_x){
                x.className = x.id
            }

      }
  }, [contact]);

   
    return (
        <div>
            <button onClick={() => console.log(meetings)}> log</button>
            <button onClick={() => console.log(document.getElementsByClassName('x1'))}> log2</button>
            <div className='calander-bar'>
                <h2>{monthNames[pickedDate.getMonth()]} - {pickedDate.getFullYear()}</h2>
                <button onClick={() => setpickedDate(new Date(pickedDate.setMonth(pickedDate.getMonth() - 1)))}>&#10094;</button>{' '}
                <button onClick={() => setpickedDate(new Date())}>Today</button>{' '}
                <button onClick={() => setpickedDate(new Date(pickedDate.setMonth(pickedDate.getMonth() + 1)))}>&#10095;</button>

            </div>
            <div>
                <table><tbody>
                    <tr>
                        <td className='contacts-list'>
                            <div className='addContact'>
                            <input type="text" placeholder="Name" value={inputContactName} onChange={(e) => setinputContactName(e.target.value)} /> 
                            <input type="text" placeholder="Phone" value={inputContactPhone} onChange={(e) => setinputContactPhone(e.target.value)} /> 
                            <button disabled={!(inputContactName && inputContactPhone)} onClick={() => {
                                // setnewcontact({name: inputContactName, phone: inputContactPhone})
                                setcontactsList((prevState) =>  [...prevState, {name: inputContactName, phone: inputContactPhone} ])
                                setinputContactName('')
                                setinputContactPhone('')
                            }
                                                                
                            }
                            > + </button>
                            </div>
                            {contactsList.map((c,i) => <ContactsDisplay key={i} contact={c} setcontact={setcontact}></ContactsDisplay>)}
                        </td>
                        <td> 
                        <table className='calander'>
                            <thead>
                            <tr>
                            {header.map((e,i)=> <th key={i} className='t-header'>{e}</th>)}
                            </tr>
                            </thead>
                            <tbody>
                                {createMonth().map((week,i) => <tr key={i}>{week.map((e,i) => 
                                <td className='td-day' key={i}>{<Day key={i} dayNum={e} curYear={pickedDate.getFullYear()} curMonth={pickedDate.getMonth()} data={meetings}></Day>}</td>)}</tr>)}
                            </tbody>
                        </table>              
                        </td>
                        <td className='meeting-list'> 
                            <Modal btnName={'New Meeting'} newMeeting={setmeetings}></Modal>
                            <button onClick={() => setcontact(null)}> All </button>
                            <button onClick={() => document.getElementById('modal-meeting').style.display = 'block'}> + </button>
                            {meetings.filter(e => contact === null ? true : e['name'] === contact ).filter(e => pickedDate.getMonth() === e['date'].getMonth()).map((e,i) => <MeetingDisplay key={i} meeting={e}></MeetingDisplay>)}
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
            
        </div>
    )
}
 
export default Calander
