import React from 'react'
import { useState } from 'react'
import { list } from '../public/FOOD ASSETS/assets'

const App = () => {
  const [first, setfirst] = useState(list);
  const fun = (str)=>{
    if(str === 'all'){
      setfirst(list)
    }
    else{
        
      setfirst(list.filter((item)=>
            item.category.toLowerCase().includes(str.toLowerCase())
        ))
        }
  }
  return (
    <div>
      <h2 className='text-4xl font-bold text-center mt-4 text-gray-700 mb-[-20px] underline'>Image Gallery</h2>
      <div className="flex justify-center items-center min-h-56   gap-2">
        <button onClick={()=>fun('Deserts')} className='px-[4px] py-[10px] bg-slate-400 rounded-md w-[120px]'>Deserts</button>
        <button onClick={()=>fun('pasta')} className='px-[4px] py-[10px] bg-slate-400 rounded-md w-[120px]'>pasta</button>
        <button onClick={()=>fun('Sandwich')} className='px-[4px] py-[10px] bg-slate-400 rounded-md w-[120px]'>Sandwich</button>
        <button onClick={()=>fun('Rolls')} className='px-[4px] py-[10px] bg-slate-400 rounded-md w-[120px]'>Rolls</button>
        <button onClick={()=>fun('all')} className='px-[4px] py-[10px] bg-slate-400 rounded-md w-[120px]'>all</button>
      </div>
      <div className='grid-cols-3 grid max-w-[1400px] h-full justify-center items-center m-auto'>
        {
           first.map((item,index)=>{
            return (
                <div className="p-3 w-[350px] bg-zinc-500 rounded-md mb-1 " key={index}>
                    <img src={item.image} className='min-w-[80%] rounded-md ' alt="" />
                    <p className='text-white font-bold text-2xl mt-2'>{item.name}</p>
                    <p className='text-white font-bold text-xl mt-1'>{item.price}</p>
                    <p className='text-slate-200'>{item.description}</p>
              </div>
            )
           }) 
        }
    </div>
    </div>
  )
}

export default App

