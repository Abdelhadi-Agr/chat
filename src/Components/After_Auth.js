import React, { useState,useEffect} from 'react'
import Left from './Left';
import Middle from './Middle';
import { Avatar } from '@mui/material';
import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";
import {signOut } from "firebase/auth";
import { auth,db } from "../firebase-config";


function After_Auth() {
  const [users, setUsers] = useState([]);
  var [msg,SetMsg]=useState({});
  var [bol,setBol]=useState(false);
  function change(){setBol(!bol)}
  const usersCollectionRef = collection(db, "users");
  const createUser = async () => {
    let date=Date.now();
    await addDoc(usersCollectionRef, {uid:auth.currentUser.uid,name:auth.currentUser.displayName , email:auth.currentUser.email,DateCreation:date });
  };
  //return all users in db
  const get=async ()=>{
    const data = await getDocs(usersCollectionRef);
    let list=data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setUsers(list);
    return list;
  }
  const first = async () => {
    console.log('first');
    let list=get();
    let res=false;
    for(let i=0;i<list.length;i++){
      if(list[i].uid==auth.currentUser.uid){res=true;break;}
    }
    if(!res) {
      createUser();
    };
  };
  useEffect(() => {
    setTimeout(change,5000);
    get();
  }, [bol]);
  
  useEffect(()=>{
    first();
  },[])
   
  function selectContact(to){
    let start={
      from:auth.currentUser.email,
      from_uid:auth.currentUser.uid,
      from_name:auth.currentUser.displayName,
      to:to.email,
      to_uid:to.uid,
      to_name:to.name
    }
    SetMsg(start);
  }

  const logout=async ()=>{
    await signOut(auth);
  }
  return (
    <div>
        <div className="header">
            <table style={{height:'100%',width:'95%'}}>
              <tr>
                <td style={{height:'25%'}}>
                  <div className="card_height">
                    <div className="Avatar"><Avatar sx={{ width: 50, height: 50 }}>{auth.currentUser?.displayName[0]}</Avatar></div>
                    <div className="name">{auth.currentUser?.displayName}</div>
                  </div>
                </td>
                <td style={{height:'50%'}} className='title'>R3D-H@T</td>
                <td style={{height:'25%'}}>
                  <div className="button">
                    <button type="button" className="btn btn-warning" onClick={logout}>logout</button>
                  </div>
                </td>
              </tr>
            </table>
           </div>
           <table style={{width:'100%',height:'400px'}}>
            <tr>
              <td style={{width:'30%'}}><Left users={users}  selectContact={selectContact}></Left></td>
              <td style={{width:'15%'}}></td>
              <td style={{width:'50%',marginTop:'0px'}}><Middle msg={msg}></Middle></td>
            </tr>
           </table>
    </div>
  )
}
export default After_Auth