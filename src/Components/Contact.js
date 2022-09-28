import { Avatar } from '@mui/material'
import React from 'react'
import './Css/Contact.css'
function Contact(props) {
  return (
    <div className='Contact' onClick={()=>{props.selectContact(props.user)}}>
        <table style={{width:'100%',height:'100%'}}>
            <tr>
                <td style={{width:'25%'}}>
                    <div className="Avatar"><Avatar>{props.user.name[0]}</Avatar></div>
                </td>
                <td style={{width:'5%'}}/>
                <td style={{width:'70%'}}>
                    <div className="titles">
                        <table style={{width:'100%',height:'100%'}}>
                            <tr className='email'>
                                <td>{props.user.name}</td>
                            </tr>
                            <tr className='message'>
                                <td>{props.user.email}</td>
                            </tr>
                        </table>
                    </div>
                </td>
            </tr>
        </table>
    </div>
  )
}

export default Contact