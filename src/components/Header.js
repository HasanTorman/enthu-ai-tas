import React from 'react'

export default function Header() {
  return (
    <section className='w-full h-32 flex py-3 px-1 bg-white items-end'>
      <h1 className="text-2xl ml-16 h-9 font-bold flex-auto tracking-tighter">enthu.ai</h1>
      <button  className='bg-blue-500 h-9 w-16 items-center justify-center flex text-center text-white rounded-sm mr-12'>Help</button>
    </section>
  )
}

