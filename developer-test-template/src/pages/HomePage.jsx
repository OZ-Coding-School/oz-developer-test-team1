import React from 'react';
import Button from '../components/Button';

export default function HomePage() {
  return (
    /* 배경색과 중앙 정렬 레이아웃 */
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-white p-10">
      <h1 className="text-text-heading text-2xl font-bold">
        나는 어떤 개발자일까 ?
      </h1>

      {/* Primary 버튼 */}
      <div className="flex flex-col items-center gap-4">
        <Button label="시작하기" size="small" variant="primary" />
        <Button label="결과 공유하기" size="medium" variant="primary" />
      </div>

      {/* Secondary 버튼 */}
      <div className="flex flex-col items-center">
        <Button label="다시 테스트하기" size="medium" variant="secondary" />
      </div>

      {/* Option 버튼 */}
      <div className="flex flex-col gap-3">
        <Button label="사용자가 볼 화면부터 디자인한다" size="medium" />
        <Button label="데이터베이스 구조를 먼저 설계한다" size="medium" />
      </div>
    </div>
  );
}
