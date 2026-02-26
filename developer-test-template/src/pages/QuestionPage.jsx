import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router';
import Card from '../components/Card';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    /* 배경색 */
    <div className="bg-background flex min-h-screen flex-col items-center justify-center p-10">
      {/* 파란색 테두리설정 */}
      <Card
        style={{
          width: '326.02px',
          height: '524px',
          padding: '32px',
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
        }}
        className="flex flex-col items-center rounded-[24px] bg-white"
      >
        {/* 캐릭터 이미지 */}
        <div
          style={{ width: '262.02px', height: '228px' }}
          className="flex items-center justify-center"
        >
          <img
            src="/src/assets/Icon.webp"
            alt="Hamster"
            style={{ width: '128px', height: '128px' }}
            className="object-contain"
          />
        </div>

        {/* 텍스트 영역 */}
        <div style={{ width: '262.02px' }} className="text-center">
          <h1
            style={{ width: '262.02px', height: '36px' }}
            className="text-text-heading text-[22px] font-bold"
          >
            나는 어떤 개발자일까 ?
          </h1>
          <p
            style={{ width: '262.02px', height: '24px' }}
            className="text-text-muted text-[14px] font-medium"
          >
            햄스터 개발자 유형 테스트
          </p>
        </div>

        {/* 설명 영역 */}
        <div
          style={{
            width: '262.02px',
            height: '72px',
            backgroundColor: '#FDF2F8',
            borderRadius: '14px',
          }}
          className="flex items-center justify-center px-[16px]"
        >
          <p className="text-primary text-center text-[13px] leading-relaxed font-semibold">
            ✨ 5개의 질문으로 알아보는
            <br />
            나의 개발자 성향
          </p>
        </div>

        {/* 시작하기 버튼*/}
        <div
          style={{
            width: '262.02px',
            height: '48px',
          }}
          className="flex flex-col items-center"
        >
          <Button
            label="시작하기"
            size="small"
            variant="primary"
            className="h-full w-full"
            onClick={() => navigate('/question')}
          />
        </div>

        {/* 푸터 영역 */}
        <div
          style={{
            width: '262.02px',
            height: '16px',
          }}
          className="flex items-center justify-center"
        >
          <p className="text-text-muted text-[10px] font-medium tracking-widest uppercase">
            made with ❤️ Ozcoding
          </p>
        </div>
      </Card>
    </div>
  );
}
