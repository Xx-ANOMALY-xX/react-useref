import { useRef } from 'react'
import Input from './components/Input'

const App = () => {
  const showERR = useRef()
  const changehandeler = ()=> {
    console.log(showERR)
    const inp = showERR.current
    if(inp.value.length < 4){
      inp.style.border = "1px solid red"
    }
  }
  
  return (
    <Input type={'text'} placeholder={"Enter your name"} name={'hello'}/>
  )
}

export default App