import React, { useState, useEffect } from 'react'
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import { CalendarViewDay, EventNote, Image, Subscriptions } from '@mui/icons-material';
import InputOption from './InputOption';
import Posts from './Posts';
import { db } from './firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';



function Feed() {
    const user=useSelector(selectUser);
    const [posts, setPosts] = useState([]);
    const[input,setInput]=useState('');

    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) => (
            setPosts(snapshot.docs.map(doc => (
              {
              id: doc.id,
                    data: doc.data(),
                 }
             )))
         ))
     }, []);
    
    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name :user.displayName,
            description :user.email,
            message:input,
            photoUrl:user.photoUrl || "",
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    };
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input value={input}onChange={e=>setInput(e.target.value)}type="text" />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={Image} title='Photo' color="#70B5F9" />
                    <InputOption Icon={Subscriptions} title='Video' color="#E7A33E" />
                    <InputOption Icon={EventNote} title='Event' color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDay} title='Write article' color="#7FC15E" />

                </div>
            </div>
            <FlipMove>
            {posts.map(({id,data:{name,description,message,photoUrl}}) => (
                <Posts 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}/>))
            }
            </FlipMove>

        </div>
    )


}


export default Feed
