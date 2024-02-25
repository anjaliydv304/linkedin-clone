import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function Sidebar() {
    const user= useSelector(selectUser);

    const recentItem=(topic)=>(
        <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
          <p>{topic}</p>
        </div>
    )
  return (
    <div className="sidebar">
      <div className="sidebar__top">
         <img src="https://images.unsplash.com/photo-1708149421696-d9fa65123f10?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alts=""/>
         <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
          </Avatar>
         <h3>{user.displayName}</h3>
         <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
         <div className="sidebar__stat">
           <p >Who viewed you</p>
           <p className="sidebar__statNumber">6658</p>
         </div>
         <div className="sidebar__stat">
            <p >Views on post  </p>
            <p className="sidebar__statNumber">6658</p>
         </div>
       </div>
         <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
            

         </div>

         

    </div>

    

  );
}

export default Sidebar
