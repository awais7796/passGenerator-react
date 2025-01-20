import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <div className="flex h-screen justify-content-center " style={{backgroundColor:"red"}} >
  <div></div>
  <div>
    <input type="range" />
    <label htmlFor="checkbox">Length</label>
    <input type="checkbox"  />
    
  </div>
 </div>
 
 </>
  )
}

export default App
