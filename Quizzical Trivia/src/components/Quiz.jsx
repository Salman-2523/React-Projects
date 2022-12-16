import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import "../styles/quiz.css";
import SingleQuestion from "./SingleQuestion";
const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=27&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then(({ results }) => setQuestions(results));
  }, []);
//   console.log(questions);
  return (
    <main className="quiz--container">
      {questions.length > 0 &&
        questions.map((question) => {
          return <SingleQuestion question={question} key = {nanoid()}/>;
        })}
      <div className="quiz--button--container">
        <button className="quiz--button">Check answers</button>
      </div>
    </main>
  );
};

export default Quiz;
