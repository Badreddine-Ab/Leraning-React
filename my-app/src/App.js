import { useState } from "react"



function App(){
const [count,change]= useState(0)
  function add(){
    change(count+1)
  }
  function mince(){
    change(count-1)
  }
return (
  
  <div>
   <button onClick={add}>+</button>
   <h1>{count}</h1>
   <button onClick={mince}>-</button>
  </div>
)
}

export default App