import React from 'react'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const DisplayHome = () => {

  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <div className="p-6 py-12 bg-violet-700 dark:text-gray-50 border mt-3">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl tracking-tighter font-bold">Up to
				<br  className="sm:hidden" /> 20% Off
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>For Family Plan! Use code:</span>
				<span className="font-bold text-lg underline">OFF20</span>
			</div>
			<a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600" onClick={()=>navigate("/plans")} >Subscribe Now</a>
		</div>
	</div>
</div>
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Albums</h1>
        <div className="flex overflow-auto ">
        {
            albumsData.map((item,index)=>(
            <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}  />
        ))}
        </div>
    </div>
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Songs</h1>
        <div className="flex overflow-auto ">
        {
            songsData.map((item,index)=>(
            <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}  />
        ))}
        </div>
    </div>
    </>
  )
}

export default DisplayHome