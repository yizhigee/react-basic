import {useRef, useState} from 'react'

const GetRef = () => {
    const [value, setValue] =useState('')
    const inputRef = useRef(null)
    const showDom = () => {
        console.log('show', inputRef)
    }
    return (
        <div>
            <input type="text" value={value} ref={inputRef} onChange={(e)=>setValue(e.target.value)} />
            <br/>
            <button onClick={showDom}>showDom</button>
        </div>
    )
}

export default GetRef
