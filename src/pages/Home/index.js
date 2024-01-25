import React from 'react'
import {useState, useCallback} from 'react' 
import { useNavigate } from 'react-router-dom';

export default function HomePage() {

  const [value, setValue] = useState();
  const navigate = useNavigate();

  const handleonJoin = useCallback(()=>{
    navigate(`/room/${value}`)
  }, [navigate ,value] )
  return (
    <>
    <div className='items-center h-[560px]  shadow-lg relative flex mt-12'>

      <div className='p-64 overflow-x-hidden '>
        <input className='justify-between rounded-xl focus:ring-0 p-5 mr-5 flex text-black' type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Enter Room Code' />
        <button className='text-2xl m-3 justify-between font-bold font-Dancing mt-6 hover:text-red-300 hover:scale-110 transition-transform duration-200 ease-out' onClick={handleonJoin}>Join</button>
      </div>

     

    <div className='-translate-x-1'>
        <img className='h-[560px] rounded-full' src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="img-source" />
      </div>
    </div>
    </>
  )
}
