import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';
import CharacterIcon from '../components/CharacterIcon';
import { getQuestions } from '../api/services/questions';
import { useTestResult } from '../store/useTestResult';

export default function QuestionPage() {
  const [questions, setQuestions] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const addAnswer = useTestResult((state) => state.addAnswer);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions();
        setQuestions(data);
      } catch (err) {
        console.error('데이터 로드 실패:', err);
      }
    };
    fetchQuestions();
  }, []);

  if (questions.length === 0) return null;

  const currentData = questions[currentStep - 1];
  const totalSteps = questions.length;

  const handleNext = (type) => {
    addAnswer(type);

    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      navigate('/result');
    }
  };

  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <Card className="flex flex-col items-center gap-8">
        <ProgressBar value={currentStep} max={totalSteps} />

        <CharacterIcon type="hamster" />

        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <span className="text-text-heading text-2xl font-medium">
            Q{currentStep}.
          </span>
          <h2 className="text-text-description text-base leading-relaxed font-normal whitespace-pre-wrap">
            {currentData.question || currentData.text}
          </h2>
        </div>

        <div className="mb-4 flex w-full flex-col gap-4">
          {currentData.options.map((option, index) => (
            <Button
              key={index}
              label={option.text}
              variant="default"
              className="text-base"
              onClick={() => handleNext(option.type)}
            />
          ))}
        </div>

        <p className="text-text-muted text-center text-xs">
          made with ❤️ Ozcoding
        </p>
      </Card>
    </div>
  );
}
