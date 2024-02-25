import React,{useState} from 'react'
import './Login.css'
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [profilePic,setProfilePic]=useState("");
    const dispatch= useDispatch();

    const loginToApp=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userauth=>{
            dispatch(login({
                email:userauth.user.email,
                uid:userauth.user.uid,
                displayName:userauth.user.displayName,
                profileUrl:userauth.user.photoURL,
            })
            );
        }).catch(error=>alert(error));


    };
    const register=()=>{
        if(!name){
            return alert("Enter full name!");

        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic,
            })
            .then(()=>{
                dispatch(
                    login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoUrl:profilePic
                }));

            }
            );
        }).catch((error)=>alert(error));

        
    };
  return (
    <div className="login">
     <img 
     src="https://news.hitb.org/sites/default/files/styles/medium/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=ecA8o3uw" alt=""/>
     
    <form>
    <input 
    value={name}
    onChange={(e)=>setName(e.target.value)}
    placeholder="Full name(required if registering)"
    type="text"/>

    <input 
    value={profilePic}
    onChange={(e)=>setProfilePic(e.target.value)}
    placeholder="Profile pic URL(optional)"
    type="text"/>

    <input
     value={email}
     onChange={(e)=>setEmail(e.target.value)} 
     placeholder='Email'
    type="email"/>
    <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password"/>
    <button type='submit' onClick={loginToApp}>Sign In</button>
    </form> 
    <p>Not a member?{" "}
    <span className="login__register" onClick={register}>Register Now</span>
    </p>
     </div>
  )
}

export default Login
