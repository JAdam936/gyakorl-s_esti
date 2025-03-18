import React, {useState} from 'react'

const Rotatecomponent = () => {
    const [rotateDeg, setRotateDeg] = useState(-50)
  return (
    
    <div style={{rotate: rotateDeg + "deg"}}>
        ==========
    </div>
  )
}

export default Rotatecomponent