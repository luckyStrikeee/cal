import React, {useEffect, useState} from 'react'
import './Calander.css'
import ContactsDisplay from './ContactsDisplay';
import Day from './Day'
import MeetingDisplay from './MeetingDisplay';

function Calander() {
    
    const [pickedDate, setpickedDate] = useState(new Date());
    const [contact, setcontact] = useState(null)
    
    const sign =['<', '>']
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const header = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let data = [
        {name: 'avi', date: new Date(2021, 3, 15, 15)}, {name: 'ben', date: new Date(2021, 3, 15, 11)}, {name: 'gad', date: new Date(2021, 3, 15, 10)}, 
        {name: 'gad', date: new Date(2021, 3, 15, 14, 30)}, {name: 'dan', date: new Date(2021, 3, 1, 9)}, {name: 'dan', date: new Date(2021, 3, 12, 13)}, 
        {name: 'dan', date: new Date(2021, 3, 15, 16)}]
    let contacts = [{name: 'avi', phone: '0501111111'}, {name: 'ben', phone: '0502222222'}, 
                    {name: 'gad', phone: '0503333333'}, {name: 'dan', phone: '0504444444'}]
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
        document.getElementById('m-'+contact).className = 'x1'
      }
  }, [contact]);

   
    return (
        <div>
            <button onClick={() => console.log(contact)}> log</button>
            <button onClick={() => document.getElementById('m-gad').className = 'x1'}> log2</button>
            <div className='calander-bar'>
                <h2>{monthNames[pickedDate.getMonth()]} - {pickedDate.getFullYear()}</h2>
                <button onClick={() => setpickedDate(new Date(pickedDate.setMonth(pickedDate.getMonth() - 1)))}>{sign[0]}</button>{' '}
                <button onClick={() => setpickedDate(new Date(pickedDate.setMonth(pickedDate.getMonth() + 1)))}>{sign[1]}</button>

            </div>
            <div>
                <table><tbody>
                    <tr>
                        <td className='contacts-list'> 
                            {contacts.map((c,i) => <ContactsDisplay key={i} contact={c} setcontact={setcontact}></ContactsDisplay>)}
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
                                <td className='td-day' key={i}>{<Day key={i} dayNum={e} curYear={pickedDate.getFullYear()} curMonth={pickedDate.getMonth()} data={data}></Day>}</td>)}</tr>)}
                            </tbody>
                        </table>              
                        </td>
                        <td className='meeting-list'> 
                            <button onClick={() => setcontact(null)}> All </button>
                            {data.filter(e => contact === null ? 1 === 1 : e['name'] === contact ).map((e,i) => <MeetingDisplay key={i} meeting={e}></MeetingDisplay>)}
                        </td>
                    </tr>
                </tbody>
                </table>  
            </div>
            
        </div>
    )
}
 
export default Calander
