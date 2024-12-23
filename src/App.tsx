import { useState } from 'react';
import { Toggle } from '@radix-ui/react-toggle';
import { QUIZ } from '@/static';
import { Progress } from '@/components/ui/progress';

function App() {
  const questions = QUIZ.questions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [progressValue, setProgressValue] = useState(100 / questions.length);

  const handleAnswerSelection = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 100);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setProgressValue(prev => prev + 25);
    } else {
      setIsQuizComplete(true);
    }
  };

  return (
    <>
      <div className="bg-[#EDE8E3] h-screen flex justify-center items-center  min-w-screen mx-auto">
        {isQuizComplete ? (
          <p>Your score is {score} out of 400</p>
        ) : (
          <div className="min-h-screen flex min-w-screen flex-col w-[500px] space-y-3 justify-center items-center mx-auto ">
            <p className="font-semibold text-black text-[24px]">
              Quiz #{currentQuestionIndex + 1}
            </p>
            <p className="font-semibold text-[28px] mb-20 text-[#191D63]">
              {questions[currentQuestionIndex].name}
            </p>
            {questions[currentQuestionIndex].variants.map(variant => (
              <Toggle
                key={variant.id}
                onClick={() => handleAnswerSelection(variant.isCorrect)}
                className="bg-white w-full rounded-[8px]"
              >
                <div className="flex gap-5 items-center">
                  <span className="  bg-[#EDE8E3] w-10 h-10  flex justify-center items-center rounded-full">
                    {variant.symbol}
                  </span>
                  <span> {variant.name}</span>
                </div>
              </Toggle>
            ))}
            <div className="p-6 max-w-md mx-auto w-full">
              <Progress
                value={progressValue}
                className=" h-7  bg-white"
                max={100}
              />
              <p className="mt-2 text-sm text-gray-500">
                {currentQuestionIndex + 1 + '/'}
                {questions.length}
              </p>{' '}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
