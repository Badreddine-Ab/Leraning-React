import { useState } from "react"
import React from "react"


function App(){
const [thingsArray,setThingsArray] = useState(["thing 1", "Thing 2"])
const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
function AddItem(){
  setThingsArray(prevThingsArray =>{

 return  [...prevThingsArray,`Thing ${prevThingsArray.length + 1}`]})
}



return (
  
  <div>
   <button onClick={AddItem} >add a thing</button>
   {thingsElements}
  </div>
)
}

export default App