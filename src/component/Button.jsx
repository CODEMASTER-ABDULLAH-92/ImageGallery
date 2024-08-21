import React from 'react'

const Button = ({text}) => {
  return (
    <>
    <div className="px-[6px] py-[10px] bg-gray-800 w-[120px] text-center text-2xl rounded-md text-slate-300 font-semibold">
        {text}
    </div>
    </>
  )
}

export default Button
