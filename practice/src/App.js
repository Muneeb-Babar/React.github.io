import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomBtn from './components/CustomBtn';

function App() {

  // const obj = {name: "Hello World Object"}
  // const data = ['We', 'are', 'United']
  // const list = [{name: "Hello World 1"},
  //               {name: "Hello World 2"},
  //               {name: "Hello World 3"}]
  // const complex = [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs','Ionic']}] 

  // const [text,settext]=useState('Muneeb')
  // function reverseText(){
  //   const reverse=text.split('').reverse().join('')
  //   settext(reverse)
  // }

  // const [show,setShow]=useState(true)
  // const onImg='https://img.freepik.com/free-vector/light-bulb-realistic_1284-4662.jpg'
  // const offImg='https://img.freepik.com/free-vector/realistic-light-bulb-isolated_1284-41741.jpg?w=826&t=st=1702490017~exp=1702490617~hmac=690997459ee6385f7ed8deaa30b704a6f72842c01436b7ffced83d046d90b9ab'
  
  // const [text,setText]=useState(true)
  // const txt1='Hello World'
  // const txt2='Hello Pakistan'

  const [color, setColor] = useState(0)
  const [show, setShow] = useState(true)

  return (
    <div className="App">
    
    {show && <CustomBtn text='Click Me' bgColor={color}/>}
    <br/>
    <button onClick={() => setShow(!show)}>Show/Hide</button>
    <br/><br/><br/>
        <button onClick={() => setColor(0)}>Red</button>
        <button onClick={() => setColor(1)}>Green</button>
        <button onClick={() => setColor(2)}>Blue</button>
        {/* <img src={show ? onImg :offImg}  alt="logo" width='300' />
        <br/>
        <p>{text ? txt1 : txt2}</p> */}

        {/* <p>{obj.name}
        </p>
        <p>
        {data.map(function(item){
          return <h5>{item}</h5>
        })}
        </p>
        <p>
          {list.map(function(item){
            return  <h5>{item.name}</h5>
          })}
        </p>
        <table border="1">
          <tr>
            <th>Company Name</th>
            <th>Jobs</th>
          </tr>
            {complex.map(function(item){
            return <tr><td>{item.company}</td>
            <td>
            <ol>
              {item.jobs.map(function(item){
                return <li>{item}</li>
              })}
            </ol></td>
            </tr>
          })}
          </table> */}
          {/* <button onClick={reverseText}>Click Me</button> */}
        {/* <button onClick={()=>setText(!text)}>Click Me</button>
          <br/>
          <button onClick={()=>setShow(true)}>On</button>
          <br/>
          <button onClick={()=>setShow(false)}>Off</button> */}
          
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
    </div>
  );
}

export default App;
