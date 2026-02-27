import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';

const questionList = [
  {
    id: 1,
    text: '새로운 프로젝트를 시작할 때\n가장 먼저 하는 일은?',
    options: [
      '사용자가 볼 화면부터 디자인한다',
      '데이터베이스 구조를 먼저 설계한다',
    ],
  },
  {
    id: 2,
    text: '코드 에러가 발생했을 때\n나의 대처 방식은?',
    options: ['구글링과 AI의 도움을 받는다', '공식 문서와 로그를 끝까지 판다'],
  },
  {
    id: 3,
    text: '협업 도중 의견 충돌이 생기면?',
    options: [
      '논리적인 근거로 팀원을 설득한다',
      '팀 전체의 분위기를 먼저 살핀다',
    ],
  },
  {
    id: 4,
    text: '작성한 코드가 잘 돌아간다면?',
    options: [
      '더 효율적인 코드로 리팩토링한다',
      '다음 기능을 구현하러 바로 떠난다',
    ],
  },
  {
    id: 5,
    text: '마감 기한이 코앞으로 다가왔다면?',
    options: [
      '밤을 새워서라도 완벽하게 끝낸다',
      '기능 우선순위를 정해 핵심만 구현한다',
    ],
  },
];

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
              label={option}
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
