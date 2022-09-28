import { Avatar } from '@mui/material'
import React from 'react'
import './Css/Middle_header.css'
import EmailIcon from '@mui/icons-material/Email';
function Middle_header(props) {
  return (
    <div className='Middle_header'>
        <table style={{width:'100%',height:'100%',marginBottom:'10px'}}>
            <tr>
                <td style={{width:'15%',height:'100%'}}>
                    <div style={{marginLeft:'10px'}}><Avatar>{props.msg.to_name?.[0]}</Avatar></div>
                </td>
                <td style={{width:'85%',height:'100%'}}><EmailIcon/>  Message to : {props.msg?.to_name}</td>
            </tr>
        </table>
    </div>
  )
}

export default Middle_header