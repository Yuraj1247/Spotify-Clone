import React, { useContext } from 'react'
import {assets} from "../assets/assets"
import { useNavigate } from 'react-router-dom'
import { PlayerContext } from '../context/PlayerContext';

const Sidebar = () => {

    const navigate = useNavigate();
    const {errorHandler} = useContext(PlayerContext)

  return (

    <div className="w-[25%] h-full p-2 text-white hidden gap-2 flex-col lg:flex">

    <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div onClick={()=>navigate("/")} className="flex items-center gap-3 pl-8 cursor-pointer">
            <img  src={assets.home_icon} alt="" className="w-6" />
            <p className="font-bold">HOME</p>
        </div>

        {/* <div className="flex items-center gap-3 pl-8  cursor-pointer">
            <img src={assets.search_icon} alt="" className="w-6" />
            <p className="font-bold">SEARCH</p>
        </div> */}
    </div>

    <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img src={assets.stack_icon} alt="" className="w-8" />
                <p className="font-semibold">YOUR LIBRARIES</p>
            </div>
            <div className="flex items-center gap-3">
                <img src={assets.arrow_icon} alt="" className="w-5" />
                <img src={assets.plus_icon} alt="" className="w-5" />
            </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
            <h1 className="">Create Your first Playlist</h1>
            <p className="font-light">Its to easy to get started</p>
            <button  onClick={errorHandler} className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Create Playlist</button>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
            <h1 className="">Lets findsome podcasts to follow</h1>
            <p className="font-light">Its to easy to get started</p>
            <button onClick={errorHandler} className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Browse Podcasts</button>
        </div>
    </div>


    </div>
  )
}

export default Sidebar