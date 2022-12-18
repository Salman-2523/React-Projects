import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import "../styles/quiz.css";
import SingleQuestion from "./SingleQuestion";
const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [playAgain, setPlayAgain] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const handleSubmit = () => {
    // console.log("submit", count);
    setSubmit(true);
  };

  const handlePlayAgain = () => {
    setPlayAgain(true);
    setSubmit((prevState) => !prevState);
    setCorrectAnswers([]);
    setWrongAnswers([]);
  };

  //   console.log(count);
  // we have questions array through which we can check if the user had submitted wrong answer
  // if yes don't let user submit another answer and keep the count of correct answers
  // check with another if condition and then keep the count

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=27&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then(({ results }) => setQuestions(results));
  }, [playAgain]);
  console.log("CA", correctAnswers);
  console.log("WA", wrongAnswers);
  return (
    <>
      {questions.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>App Loading</h1>
      ) : (
        <>
          <main className="quiz--container">
            {questions.length > 0 &&
              questions.map((question) => {
                return (
                  <SingleQuestion
                    question={question}
                    key={nanoid()}
                    correctAnswers={correctAnswers}
                    setCorrectAnswers={setCorrectAnswers}
                    setWrongAnswers={setWrongAnswers}
                    wrongAnswers={wrongAnswers}
                  />
                );
              })}

            <div className="quiz--button--container">
              {submit ? (
                <>
                  <span style={{ paddingRight: "25px" }}>
                    You have Scored {correctAnswers.length} out of{" "}
                    {questions.length}
                  </span>
                  <button className="quiz--button" onClick={handlePlayAgain}>
                    Play again
                  </button>
                </>
              ) : (
                <button
                  className="quiz--button"
                  onClick={handleSubmit}
                  disabled={
                    correctAnswers.length + wrongAnswers.length <
                    questions.length
                  }
                >
                  Check answers
                </button>
              )}
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Quiz;
