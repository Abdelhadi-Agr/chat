import React, { useState } from 'react'
import Contact from './Contact'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import './Css/Left.css'
function Left(props) {
  return (
    <div className="Left">
        <div className="card_contact">
          <PermContactCalendarIcon/>
          <div className='contact_title'>Contact</div>
        </div>
        <div className="contacts">
            {props.users.map((user,index)=><Contact key={index} user={user} selectContact={props.selectContact}/>)}
        </div>
    </div>
  )
}

export default Left