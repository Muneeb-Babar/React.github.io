import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  
  const [questions,setQuestions]=useState([])
  const [currentIndex,setCurrentIndex]=useState(0)
  const [score,setScore]=useState(0)
  const [toggle, settoggle] = useState(false);
  const [selectedOption, setselectedOption] = useState(null)

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
}
function restart(){
    setCurrentIndex(0)
    setScore(0)
}
function start() {
  settoggle(true)
}
function checkAnswer(option){
  setselectedOption(option)
  if (option === questions[currentIndex].correct_answer) {
    setScore(score + 1);
  }
}
const isLastQuestion=currentIndex!==questions.length

  if(!questions.length){
    return <div className='loder'><img src={logo} className="App-logo" alt="logo" /> </div>
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className='main'>Quiz App</h1>
        {!toggle ? (<button className='btn' onClick={start}>Start Quiz</button>
        ) : (
          <div className="quiz">
            {isLastQuestion ? (
              <div className="question-div" style={{textAlign:'left'}}>
                <h2>
                  Q{currentIndex + 1}: {questions[currentIndex].question}
                </h2>
                {questions[currentIndex].options.map(function (option) {
                  return (
                    <p >
                      <input type="radio" name='options' checked={selectedOption === option} onClick={() => checkAnswer(option)} />
                      {option}
                    </p>
                  );
                })}
                <button className='btn' onClick={next}>Next</button>
              </div>
            ) : (
              <div>
                <p>Your Score Is {(score * 100) / questions.length}%</p>
                <button className='btn' onClick={restart}>Restart</button>
              </div>
            )}
          </div>
        )}
      </header>
    </div>
  );
}
export default App;
