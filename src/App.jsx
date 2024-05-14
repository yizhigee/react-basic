import {useState} from "react";
import './App.css'
function App() {
    const count = 100
    const getName = ()=>{
        return '小刘'
    }
    const list = [
        {id:1001, name:'Vue'},
        {id:1002, name:'react'},
        {id:1003, name:'angular'},
    ]
    const isLogin  = true
    const articleType = 0
    const getArticle = ()=>{
       switch (articleType){
           case 1:
               return <div>无图模式</div>
           case 2:
               return <div>单图模式</div>
           case 3:
               return <div>三图模式</div>
           default:
               return <div>无图模式</div>
       }
    }
    const handleClick = (name,e) => {
        console.log('name', name)
        console.log('e', e)
    }
    const [counts, setCount] = useState(0)
    const [form, setForm] = useState({
        name:'jack'
    })
    const [array, setArray] = useState([0,1,2])
    const handleClickCount = () => {
        setCount(counts+1)
    }
    const handleClickForm = () => {
        setForm({
            ...form,
            name:'tom'
        })
    }
    const handleClickArray = (item) => {
        setArray(array.map(i => i === item ? i+1 : i))
    }
    const style = {
        color: 'green',
        fontSize:'50px'
    }
    return (
    <>
      <div style={style}>this is app</div>
        {count}
        {getName()}
        {new Date().getDate()}
        <ul>
            {list.map(item=><li key={item.id}>{item.name}</li>)}
        </ul>
        {isLogin && <span>this is span</span>}
        {isLogin ? <span>this is span</span> : <span>none</span>}
        {getArticle()}
        <button onClick={(e)=>handleClick('jack',e)}>点击</button>
        <br/>
        <button onClick={handleClickCount}>{counts}</button>
        <br/>
        <button onClick={handleClickForm}>{form.name}</button>
        <button onClick={handleClickArray}>点击</button>
        <ul className='foo'>
            {array.map((item, index)=><li key={index} onClick={()=>handleClickArray(item)}>{item}</li>)}
        </ul>
    </>
  )
}

export default App
