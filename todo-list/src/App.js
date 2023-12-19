import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
        const [list,setList]=useState([])
        const [inputText,setInputText]=useState('')
        const [editMode,setEditMode]=useState(true)
        const [updatedText,setUpdatedText]=useState()


  function addItem(){
    const copyList=[...list]
    copyList.push(inputText)
    setList(copyList)
    setInputText('')
  }
  function inputItem(e){
    const value=e.target.value
    setInputText(value)
  }
function deleteItem(index){
  const copyList=[...list]
  copyList.splice(index,1)
  setList(copyList)
}
function deleteAllItem(){
    setList([])
}
function editItem(index){
  const value=list[index]
  setInputText(value)
  setUpdatedText(index)
  setEditMode(false)
}
function updateItem(){
  const copyList=[...list]
  copyList[updatedText]=inputText
  setList(copyList)
  setInputText('')
  setEditMode(true)
}

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

        <input placeholder='Enter Any Item' onChange={inputItem} value={inputText}/>
        {editMode ? <button onClick={addItem}>Add</button> :<button onClick={updateItem}>Update</button>}
        <button onClick={deleteAllItem}>Delete All</button>
        

        <ul>
        {list.map(function(item,index){
          return <li>{item}
          <button onClick={()=>deleteItem(index)}>Delete</button>
          <button onClick={()=>editItem(index)}>Edit</button>
          </li>
        })}
        </ul>

        <br/><br/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
