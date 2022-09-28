import React, { useState } from 'react'
import './Css/Texting.css'
import SendIcon from '@mui/icons-material/Send';
import { db } from "../firebase-config";
import {
  collection,
  addDoc,
} from "firebase/firestore";
function Texting(props) {
    const messagesCollectionRef = collection(db, "messages");
    let [clicked,setClicked]=useState(false);
    let [text,setText]=useState('');
    const valider = async () => {
        setText('');
        try{
            await addDoc(messagesCollectionRef, {
                from:props.msg.from,
                from_name:props.msg.from_name,
                to:props.msg.to,
                to_name:props.msg.to_name,
                message:text,
                date:Date.now()
             });
        }
        catch(e){
            alert('please select a contact to text with')
        }
      };
    function changeClick(){
        setClicked(true);
        valider();
        setTimeout(()=>{setClicked(false)},100)
    }
  return (
    <div className='Texting'>
        <table style={{width:'100%',height:'100%'}}>
            <tr>
                <td style={{width:'90%'}}>
                    <div className="form-group">
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="message ..." 
                        onChange={(e)=>setText(e.target.value)} value={text}/>
                    </div>
                </td>
                <td style={{width:'10%'}} className={clicked ? 'headIcon' : 'not'} onClick={changeClick}>
                    <div className="submit"><SendIcon/></div>
                </td>
            </tr>
        </table>
    </div>
  )
}

export default Texting