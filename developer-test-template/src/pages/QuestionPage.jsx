import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';
import questionList from '../mocks/data/question';
import CharacterIcon from '../components/CharacterIcon';

export default function QuestionPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const currentData = questionList[currentStep - 1];

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    } else {
      navigate('/result');
    }
  };

  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <Card className="flex flex-col items-center gap-8">
        <ProgressBar value={currentStep} max={5} />

        <CharacterIcon type="hamster" />

        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <span className="text-text-heading text-2xl font-medium">
            Q{currentStep}.
          </span>
          <h2 className="text-text-description text-base leading-relaxed font-normal whitespace-pre-wrap">
            {currentData.text}
          </h2>
        </div>

        <div className="mb-4 flex w-full flex-col gap-4">
          {currentData.options.map((option, index) => (
            <Button
              key={index}
              label={option.text}
              variant="default"
              className="text-base"
              onClick={handleNext}
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
