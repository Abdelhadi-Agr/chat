import React, { useEffect, useState } from 'react'
import './Css/Middle_body.css'
import Message from './Message'
import { query, where, orderBy, limit,onSnapshot } from "firebase/firestore";
import {
  collection,
  getDocs,doc
} from "firebase/firestore";
import {db } from "../firebase-config";
function Middle_body(props) {
  var [messages,setMessages]=useState([]);
  var [sync,setSync]=useState(false);
  function update(){
    setSync(!sync);
  }
  const messagesCollectionRef = collection(db, "messages");
  const getMessages =async()=>{
    let list=[];
    const q = query(messagesCollectionRef,orderBy('date'));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if((doc.data().from==props.msg.from && doc.data().to==props.msg.to)||(doc.data().from==props.msg.to && doc.data().to==props.msg.from))
          list.push(doc.data()) 
      });
      setMessages(list);
    });
  }
  useEffect(()=>{
    setTimeout(update,1000)
    getMessages();
  },[props.msg.to,sync])
  return (
    <div className='Middle_body scrollgrey'>
        {props.msg.to ==null ? <div className="unknown">choose contact</div>:
        <div>
          {messages?.map((m,i)=><Message key={i} msg={m}/>)}
        </div>}
    </div>
  )
}

export default Middle_body