import { nanoid } from "nanoid";
import "../styles/singlequestion.css";

const SingleQuestion = ({
  question,
  correctAnswers,
  setCorrectAnswers,
  setWrongAnswers,
  wrongAnswers,
  submit,
  setUserSelectedAnswers,
  userSelectedAnswers,
}) => {
  //store the correct answer at the random index else it will be obvious to guess the answer
  const correctAnswer = Math.ceil(Math.random() * 3);
  const options = [...question.incorrect_answers];
  //   const [selected, setSelected] = useState(false);
  options.splice(correctAnswer, 0, question.correct_answer);

  //    console.log(question);

  const handleChooseOption = (option) => {
    setUserSelectedAnswers((prevState) => [...prevState, option]);

    let select = correctAnswers.includes(question.correct_answer);
    let wrongAnswer = question.incorrect_answers.includes(option);
    // let checkWrongExist = options.includes(option)
    let wrongExist = wrongAnswers.includes(option);

    if (select) {
      return;
    }
    if (wrongExist) {
      return;
    }

    if (wrongAnswer) {
      setWrongAnswers((prevState) => {
        return [...prevState, option];
      });
    }

    if (option === question.correct_answer) {
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
            if (submit && option === question.correct_answer) {
              return (
                <div key={nanoid()} style={{ backgroundColor: "#94D7A2" }}>
                  {option}
                </div>
              );
            } else if (submit && userSelectedAnswers.includes(option)) {
              return (
                <div key={nanoid()} style={{ backgroundColor: "#F8BCBC" }}>
                  {option}
                </div>
              );
            }

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
