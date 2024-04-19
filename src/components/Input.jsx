import React, { useRef } from 'react'

const Input = (props) => {
    const showERR = useRef()
    const changehandeler = ()=> {
      console.log(showERR.current)
      const inp = showERR.current
      if(inp.value.length < 4){
        inp.style.border = "1px solid red"
      }
      else{
        inp.style.border = "1px solid green"
      }
    }
  return (
    <div>
      <input ref={showERR} style={{outline: "none"}} onChange={changehandeler}  {...props} />
    </div>
  )
}

export default Input