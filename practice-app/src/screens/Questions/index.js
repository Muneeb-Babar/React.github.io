import { useState,useEffect } from "react";
import Score from "../Score";


function Questions(){

    const [questions,setQuestions]=useState([])
    const [currentIndex,setCurrentIndex]=useState(0)
    const[score,setScore]=useState(0)
    const [selectedOption, setselectedOption] = useState(null)

    useEffect(function(){
        questionsFromApi()
    },[])

    function questionsFromApi(){
        fetch('https://mocki.io/v1/443df9a7-e317-4dc9-b7a4-904ac0d439b3')
        .then(res=>res.json())
        .then(res=>setQuestions(res))
    }
    function next(){
        setCurrentIndex(currentIndex +1)
    }
function checkAns(option){
    setselectedOption(option)
    if(option===questions[currentIndex].correct_answer){
        setScore(score+1)
    }
}
function restart(){
    setScore(0)
    setCurrentIndex(0)
}

const lastQuestion= currentIndex!==questions.length
    if(!questions.length){
        return <div className='loder'>Loading...</div>
    }
    return <div>
    {lastQuestion ? <div>
        <h2>
    Q{currentIndex + 1}: {questions[currentIndex].question}
        </h2>
        <p>
            {questions[currentIndex].options.map(function(option){
                return <p><input type="radio" name="option" checked={selectedOption===option} onClick={()=>checkAns(option)}/>
                {option}</p>
            })}
        </p>
        <button onClick={next}>Next</button>
    </div>:
    <div>
        <Score score={score} text="Restart" onClick={restart} />
    </div>
}
</div>
}
export default Questions