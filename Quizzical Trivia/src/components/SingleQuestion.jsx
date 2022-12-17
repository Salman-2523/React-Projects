import { nanoid } from "nanoid";
import { useState } from "react";
import "../styles/singlequestion.css";

const SingleQuestion = ({
  question,
  incrementCounter,
  correctAnswers,
  setCorrectAnswers,
}) => {
  //store the correct answer at the random index else it will be obvious to guess the answer
  const correctAnswer = Math.ceil(Math.random() * 3);
  const options = [...question.incorrect_answers];
  //   const [selected, setSelected] = useState(false);
  options.splice(correctAnswer, 0, question.correct_answer);

  const handleChooseOption = (option) => {
    let select = correctAnswers.includes(question.correct_answer);
    if (select) {
      return;
    }

    if (option === question.correct_answer) {
      incrementCounter();
      setCorrectAnswers((prevState) => {
        return [...prevState, option];
      });
    }
  };

  return (
    <div className="singlequestion">
      <h2>{question.question}</h2>
      <div className="options--container">
        {options.length &&
          options.map((option) => {
            return (
              <div key={nanoid()} onClick={() => handleChooseOption(option)}>
                {option}
              </div>
            );
          })}
      </div>
      <hr />
    </div>
  );
};

export default SingleQuestion;
