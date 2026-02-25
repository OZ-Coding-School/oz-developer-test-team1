import React from 'react';

// 버튼 컴포넌트
const Button = ({ label, size, variant, onClick }) => {
  // 가로 크기 설정
  const widthClass = size === 'small' ? 'w-[262px]' : 'w-[384px]';

  // 디자인 시스템 색상 설정
  const colorClass =
    variant === 'primary'
      ? 'bg-[#EF6D8A] text-white' // 메인 핑크 (시작하기, 결과 공유하기)
      : variant === 'secondary'
        ? 'bg-[#FDF2F3] text-[#EF6D8A]' // 연한 핑크
        : 'bg-[#F8F0F2] text-[#1E2939]'; // 질문 선택지용

  return (
    <button
      onClick={onClick}
      className={` ${widthClass} ${colorClass} flex h-[56px] cursor-pointer items-center justify-center rounded-full text-[18px] font-bold transition-all active:scale-95`}
    >
      {/* 버튼 텍스트 */}
      <span>{label}</span>
    </button>
  );
};

export default Button;
