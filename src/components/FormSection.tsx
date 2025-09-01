import React from 'react'

export default function FormSection() {
  return (
    <div>
      <form className='flex flex-col w-auto p-10 bg-darkViolet rounded-lg space-y-9'>
    <input type='text' id = 'link-input' className='flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none' placeholder='shorten a link '/>
     <button className='px-10 py-3 text-white bg-cyan-600 rounded-lg hover:bg-amber-700 focus:outline-neutral-950'>Shorten</button>
      </form>
      <div className='flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg'>
        <p className='font-bold text-center text-veryDarkViolet md:text-left'>
            https://gghgh.in
        </p>
        <div className='flex flex-col items-center justify-end flex-1 space-x-4 space-y-2'>
            <div className='font-bold text-cyan'>https://yuguyg.in</div>
            <button className='p-2 px-8 text-white bg-cyan-400 rounded-lg:hover:opacity-70 focus:outline-none'>Copy</button>
        </div>
      </div>
    </div>
  )
}
