import React from 'react'
import './Css/Middle.css'
import Middle_body from './Middle_body'
import Middle_header from './Middle_header'
import Texting from './Texting'
function Middle(props) {
  return (
    <div className="Middle">
      <table style={{height:'100%',width:'100%'}}>
        <tr style={{height:'10%'}}>
          <td style={{width:'100%',marginTop:'0px'}}><Middle_header msg={props.msg}/></td>
        </tr>
        <tr style={{height:'75%'}}>
          <td style={{width:'100%'}}><Middle_body msg={props.msg}/></td>
        </tr>
        <tr style={{height:'15%'}}>
          <td style={{width:'100%'}}><Texting msg={props.msg}/></td>
        </tr>
      </table>
    </div>
  )
}

export default Middle