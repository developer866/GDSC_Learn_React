import React, { useState } from "react";

function App(){
    const[count,setCount] = useState(0)

    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Increament</button>
            <button onClick={()=>setCount(count-1)}>Decreament</button>
            <button onClick={()=>setCount(0)}>Set to zero</button>
            {count}
        </div>
    )
}
export default App