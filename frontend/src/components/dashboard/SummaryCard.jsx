import React from 'react'

const SummaryCard = ({icon, text, number, color}) => {
  return (
    <div className='rounded flex bg-white h-18'>
        <div className={`text-3xl flex items-center justify-center ${color} text-white px-4`}>
            {icon}
        </div>

        <div className='pl-4 py-1'>
            <p className='text-lg font-semibold'>{text}</p>
            <p className='text-xl font-bold'> {number} </p>
        </div>
    </div>
  )
}

export default SummaryCard