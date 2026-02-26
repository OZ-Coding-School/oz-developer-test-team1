import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router';
import Card from '../components/Card';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <div className="h-[524px] w-[326.02px]">
        <Card className="flex flex-col items-center overflow-hidden p-0">
          <div className="flex h-[228px] w-full items-center justify-center">
            <img
              src="/src/assets/Icon.webp"
              alt="Hamster"
              className="h-[128px] w-[128px] object-contain"
            />
          </div>

          <div className="w-full text-center">
            <h1 className="text-text-heading text-[24px] leading-[36px] font-medium tracking-[0.4px]">
              나는 어떤 개발자일까 ?
            </h1>
            <p className="text-text-muted mt-1 text-[16px] leading-[24px] font-normal tracking-[-0.31px]">
              햄스터 개발자 유형 테스트
            </p>
          </div>

          <div className="mt-8 flex h-[72px] w-[262.02px] items-center justify-center rounded-[14px] bg-[#FDF2F8] px-4">
            <p className="text-center text-[14px] leading-[20px] font-semibold text-[#EF6D8A]">
              ✨ 5개의 질문으로 알아보는
              <br />
              나의 개발자 성향
            </p>
          </div>

          <div className="mt-4 h-[48px] w-[262.02px]">
            <Button
              label="시작하기"
              variant="primary"
              onClick={() => navigate('/question')}
            />
          </div>

          <div className="mt-auto mb-[32px] flex w-full justify-center">
            <p className="text-text-muted text-[12px] font-normal tracking-widest uppercase">
              made with ❤️ Ozcoding
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
