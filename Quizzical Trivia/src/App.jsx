import { useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import Quiz from "./components/Quiz";

function App() {
  const [quizStart, setQuizStart] = useState(false);

  const startQuiz = () => {
    setQuizStart(true);
  };
  // console.log(quizStart);
  return (
    <div className="App">
      {!quizStart ? <Intro startQuiz={startQuiz} /> : <Quiz />}
    </div>
  );
}

export default App;
