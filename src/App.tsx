// import { Button } from "./components/ui/button";
// import { Card } from "./components/ui/card";
// import { Progress } from "@radix-ui/react-progress";
// import { Toggle } from "@radix-ui/react-toggle";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const questions = quiz.questions;

  const handleAnswerSelection = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 100);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };
  return (
    <>
      <div>
        {isQuizComplete ? (
          <p>Your score is {score} out of 400</p>
        ) : (
          <div>
            <p>{questions[currentQuestionIndex].name}</p>
            {questions[currentQuestionIndex].variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => handleAnswerSelection(variant.isCorrect)}
              >
                {variant.name}
              </button>
            ))}
          </div>
        )}
      </div>
      );
    </>
  );
}

export default App;
