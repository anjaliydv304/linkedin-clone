import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { login, logout, selectUser } from './features/userSlice';
import {useSelector } from 'react-redux/es/hooks/useSelector';
import Login from './login';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
       dispatch(login({
        email:userAuth.email,
        uid:userAuth.uid,
        displayName:userAuth.displayName,
        photourl:userAuth.photoURL,

       }))
      }
      else{
        dispatch(logout());

      }
      
    })
  },[])

  return (
    <div className="app">
      
      
      <Header/>

      {!user?
        <Login/>:(
        <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widgets/> 
        </div>
      )}
      
    </div>
  );
}

export default App;
