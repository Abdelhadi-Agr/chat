import React from 'react'
import { auth } from '../firebase-config'
import './Css/message.css'
function message(props) {
  return (
    <div className='Message' style={{width:Math.min(props.msg.message.length*12+10,350)+'px'}}>
      <div className={props.msg.from==auth.currentUser.email?"Text2":"Text1"} style={{width:'100%'}}>
        <div style={{marginLeft:'10px',width:'90%'}}>
          {props.msg.message}
        </div>
      </div>
    </div>
  )
}

export default message