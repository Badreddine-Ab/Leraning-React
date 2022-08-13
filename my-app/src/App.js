import { useState } from "react"



function App(){
  
  const [thingsArray,setThingArray] = useState(["thing 1","thing 2"])
  
function addItem(){
  setThingArray(prevState =>{
    return [...prevState, `Thing ${prevState.length +1}`]
  } )
  const thingsElement = thingsArray.map(thing=><p>{thing}</p>)
  
return (
  
  <div>
   <button onClick={addItem} >add a thing</button>
   {thingsElement}
  </div>
)
}
}
export default App