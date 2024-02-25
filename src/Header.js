import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';

function Header() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch();

  const logoutOfApp=() => {
    dispatch(logout());
    auth.signOut();

  }
  return (
    <div className="header">
       

       <div className='header__left'>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alts=""/>


         <div className="header__search">
            <SearchIcon/>
            <input placeholder="Search" type="text"/>
        </div>
       </div>
       <div className='header__right'>
           <HeaderOption Icon={HomeIcon} title='Home'/>
           <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
           <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
           <HeaderOption Icon={ChatIcon} title='Messaging'/>
           <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
           <HeaderOption avatar={true} title='me'
           onClick={logoutOfApp}
           />

       </div>
    
    </div>
  );
}

export default Header;
