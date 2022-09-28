import React from 'react'
import { auth } from '../firebase-config'
import './Css/message.css'
function message(props) {
  return (
    <div className='Message'>
      <div className={props.msg.from==auth.currentUser.email?"Text2":"Text1"}><div style={{marginLeft:'10px'}}>{props.msg.message}</div></div>
    </div>
  )
}

export default message