import { useState } from "react";
import "./App.css";
import Intro from "./components/Intro";

function App() {
  const [quizStart, setQuizStart] = useState(false);

  const startQuiz = () => {
    setQuizStart(true);
  };
  // console.log(quizStart);
  return (
    <div className="App">
      {!quizStart ? (
        <Intro startQuiz={startQuiz} />
      ) : (
        <h1>Complete The Quiz</h1>
      )}
    </div>
  );
}

export default App;
