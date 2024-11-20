import React, { useContext, useRef  } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import {PlayerContext}  from './context/PlayerContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const { audioRef ,track} = useContext(PlayerContext)
   
 
  return (
    <div className='h-screen bg-black app ' >
      <ToastContainer/>
        <div className="h-[90%] flex">
           <Sidebar/>
           <Display/>
           </div>
            <Player/>
            <audio ref={audioRef} src={track.file} preload='auto'></audio>
         </div>
  )
}

export default App