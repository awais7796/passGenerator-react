import { useState } from 'react'


function App() {

  return (
 <>
 <div 
      className='flex items-center justify-center h-screen'
        style={{backgroundColor:""}} >

<div className=' border-4 border-pink-900'>
        <div className='border-none overflow w-auto '>
        <input className='p-2' type="text" placeholder='your Password is generating '/>
        <button>Copy</button>
        </div>
        <div className='border-none overflow w-auto '>
        <input className='p-2' type="text" placeholder='your Password is generating '/>
        <button>Copy</button>
        </div>
        <div className='border-none overflow w-auto '>
        <input className='p-2' type="text" placeholder='your Password is generating '/>
        <button>Copy</button>
        </div>
        <div className='border-none overflow w-auto '>
        <input className='p-2' type="text" placeholder='your Password is generating '/>
        <button>Copy</button>
        </div>
        <div className='border-none overflow w-auto '>
        <input className='p-2' type="text" placeholder='your Password is generating '/>
        <button>Copy</button>
        </div>

        <div className='
        flex gap-4
        '>
          <input type="range" />
          <label htmlFor="checkbox">Length</label>
          <input type="checkbox"  />
          <label > Number</label>
          <input type="checkbox"  />
          <label > Special Characters</label>
        </div>
</div>

</div>
 
 </>
  )
}

export default App
