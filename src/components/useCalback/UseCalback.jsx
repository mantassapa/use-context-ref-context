import React, { useCallback, useEffect, useState } from 'react'

const UseCalback = () => {
  const [textSize, setTextSize]=useState(16)
  const hello=useCallback(()=>{
    console.log("hello");
  },[])
  useEffect(()=>{
    hello()
  },[hello])
  return (
    <div>
      <p onClick={()=>setTextSize(prev=>prev===16?40:16)} style={{fontSize:textSize + "px"}}>lorem something reaaly wonderful</p>
    </div>
  )
}

export default UseCalback