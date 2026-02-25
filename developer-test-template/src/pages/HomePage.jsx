import React from 'react';
import Button from '../components/Button';

export default function HomePage() {
  return (
    /* 배경색과 중앙 정렬 레이아웃 */
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#FDF2F8]">
      <div className="text-2xl font-bold text-[#1E2939]">
        나는 어떤 개발자일까??
      </div>

      {/* 버튼 추가 */}
      <Button label="시작하기" size="small" variant="primary" />
    </div>
  );
}
