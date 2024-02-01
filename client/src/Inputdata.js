import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Inputdata() {
  const [data, setData] = useState([])
  // const [data1, setData1] = useState({})

  const [input, setInput] = useState("")
//  useEffect(() => {
 
   
//  },[data,input])
 
 
 function handleChange(event){
setInput(event.target.value)
  }
 function buttonClick(){
axios.get('http://localhost:3001/').then((res)=>{
setData(res.data)
  
})
 }
  return (
    <div>
         <label>Enter Text:</label>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder='enter the name'
        />
        <button type="butrton" onClick={buttonClick}>click</button>
        <h1></h1>
   
     {
      data.map((data,index)=>{
       
        return(
        <div key={index}>Name :{data.name} </div>
        )
})
     }
    </div>
  )
}

export default Inputdata





