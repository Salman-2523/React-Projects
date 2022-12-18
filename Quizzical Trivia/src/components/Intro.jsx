import "../styles/intro.css";

const Intro = ({ startQuiz }) => {
  return (
    <header className="intro--header">
      <h1>Quizzical</h1>
      <p>Check your general knowledge</p>
      <button onClick={startQuiz}>Start Quiz</button>
    </header>
  );
};

export default Intro;
