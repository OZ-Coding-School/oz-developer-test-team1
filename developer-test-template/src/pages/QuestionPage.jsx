import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';
import questionList from '../mocks/data/question';

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
    <div className="bg-background flex min-h-screen items-center justify-center p-4">
      <Card className="flex h-[600px] w-[448px] flex-col justify-between p-10">
        <ProgressBar value={currentStep} max={5} />

        <div className="flex flex-1 flex-col items-center justify-center gap-10">
          <img
            src="/src/assets/Icon.webp"
            alt="Hamster"
            className="h-[130px] w-[130px] object-contain"
          />

          <div className="space-y-3 text-center">
            <span className="text-primary block text-2xl font-bold">
              Q{currentStep}.
            </span>
            <h2 className="text-text-heading text-2xl leading-relaxed font-bold whitespace-pre-wrap">
              {currentData.text}
            </h2>
          </div>
        </div>

        <div className="mb-4 flex w-full flex-col gap-4">
          {currentData.options.map((option, index) => (
            <Button
              key={index}
              label={option.text}
              variant="default"
              className="py-5 text-base"
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
