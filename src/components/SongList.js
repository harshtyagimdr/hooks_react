import React,{useState,useEffect} from 'react';
import {v1 as uuidv1} from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
   const [songs,setSongs]= useState([
        {title:'the wild darkness',id:1},
        {title:'almost home',id:2},
        {title:'memory gosse',id:3},
    ]);
    const [age,setAge]=useState(10);
    const addSong=(title)=>{
        setSongs([...songs,{title,id:uuidv1()}]);
        console.log(songs)
    }
    useEffect(()=>{
        console.log("use effect ran",songs);
    },[songs])
    useEffect(()=>{
        console.log("use effect ran",age);
    },[age])

    return ( 
        <div className="song-list">
            <ul>
              {songs.map(song=>{
                  return (<li key={song.id}>{song.title}</li>)
              })}
            </ul>
           <NewSongForm addSong={addSong}/>
           <button onClick={()=>setAge(age+1)} >Add 1 to age : {age}</button>
        </div>
     );
}
 
export default SongList;