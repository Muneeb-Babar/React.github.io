import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  
  const [questions,setQuestions]=useState([])
  const [currentIndex,setCurrentIndex]=useState(0)
  const [score,setScore]=useState(0)
  const [answered, setAnswered] = useState(false);

  useEffect(function(){
    qustionsFromApi()
  },[])
  qustionsFromApi()
  function qustionsFromApi(){
    fetch('https://mocki.io/v1/443df9a7-e317-4dc9-b7a4-904ac0d439b3')
    .then(res=>res.json())
    .then(res=>setQuestions(res))
  }

function next(){
  setCurrentIndex(currentIndex + 1)
  setAnswered(false)
}
function restart(){
    setCurrentIndex(0)
    setScore(0)
    setAnswered(false)
}
function checkAnswer(option){
  if (option === questions[currentIndex].correct_answer) {
    setScore(score + 1);
  }
}
const isLastQuestion=currentIndex!==questions.length-1

  if(!questions.length){
    return <div className='loder'><img src={logo} className="App-logo" alt="logo" /> </div>
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className='main'>Quiz App</h1>
        <h4>{currentIndex + 1}) {questions[currentIndex].question}</h4>
        {questions[currentIndex].options.map((option, index) => (
              <p><input type='radio' key={index} onClick={() => checkAnswer(option)} name='loop'/>
              {option}
            </p>
            ))}
        {isLastQuestion ? <button onClick={next}style={{padding:'10px'}}>Next</button>
        : <div style={{fontSize:'50px'}}>Your Score is : {score*100/questions.length}% <br/> <button onClick={restart} style={{padding:'10px', marginTop:'50px'}}>Restart</button></div>}
        
        
      </header>
    </div>
  );
}

export default App;
