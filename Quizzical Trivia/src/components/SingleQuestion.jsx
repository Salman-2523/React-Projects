import { nanoid } from "nanoid";
import "../styles/singlequestion.css";

const SingleQuestion = ({question}) => {
    //store the correct answer at the random index else it will be obvious to guess the answer
    const correctAnswer = Math.ceil(Math.random() * 3)
    const options = [...question.incorrect_answers]
    options.splice(correctAnswer,0,question.correct_answer)
//    console.log(options); 
//    console.log(question.correct_answer);
   
  return (
      <div className = "singlequestion">
        <h2>{question.question}</h2>
        <div className="options--container">
           {options.length && options.map(option=>{
            return <div key = {nanoid()}>{option}</div>
           })}
        </div>
        <hr />
      </div>
  )
}

export default SingleQuestion