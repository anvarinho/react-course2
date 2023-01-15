import React, { useState } from 'react'

const Challenge = () => {
    const [text, setText] = useState('')
    return (
        <div>
        <div className='square' style={{ backgroundColor: `${text}`} }>
            <h1>{text}</h1>
        </div>
        <input 
            type="text" 
            value={text}
            placeholder='Add Item' 
            onChange={(e) => setText(e.target.value)}/>
        </div>
    )
}

export default Challenge