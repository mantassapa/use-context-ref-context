import React, { useCallback, useEffect, useMemo, useState } from 'react'

const UseMemo = () => {
    const [textSize, setTextSize]=useState(16)

    const cat = useMemo(()=>({big:"yep",Black:"nope"}),[])

    const hello=useCallback(()=>{
      console.log("hello", cat);
    },[cat])

    useEffect(()=>{
      hello()
    },[hello])

    return (
      <div>
        <p onClick={()=>setTextSize(prev=>prev===16?40:16)} style={{fontSize:textSize + "px"}}>lorem something reaaly wonderful</p>
      </div>
    )
}

export default UseMemo