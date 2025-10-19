import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card';

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1)

  const getData = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=28`)

    setUserData(response.data);
  }

  useEffect(()=>{
    getData();
  },[index])

  let printUserData = <h3 className='text-gray-400 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if(userData.length>0){
    printUserData = userData.map((e,idx)=>{
      return <div key={idx}>
        <Card e = {e}/>
      </div>
    })
  }
  return (
    <div className='bg-[url("https://images.unsplash.com/photo-1760844892036-2df963316ea3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687")] h-screen overflow-auto p-4  text-white'>

      <h3 className='flex justify-center font-bold  text-gray-900 text-2xl italic'>Gallery Project</h3>
       <div className='flex flex-wrap  justify-evenly gap-3 p-4'>
        {printUserData}
       </div>

       <div className='flex justify-center gap-6 p-4 items-center italic'>
        <button onClick={()=>{
          if(index>1){
            setIndex(index-1);
            setUserData([])
          }
          
        }}
        style={{opacity: index == 1? 0.6 : 1}}
        className='bg-cyan-600 cursor-pointer active:scale-95 text-sm text-black rounded px-4  py-2 font-bold '
        >Prev</button>

        <h4 className='font-semibold text-amber-50'>Page {index}</h4>
        <button onClick={()=>{
          setUserData([])
          setIndex(index+1)
          
        }}
        className='bg-cyan-600 cursor-pointer active:scale-95 text-sm text-black rounded px-4 py-2 font-bold'
        >Next</button>
       </div>
    </div>
  )
}

export default App