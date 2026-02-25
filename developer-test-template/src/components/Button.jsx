import React from 'react';

// 버튼 컴포넌트
const Button = ({ label, size, variant, onClick }) => {
  // 가로 크기 설정
  const widthClass = size === 'small' ? 'w-[262px]' : 'w-[384px]';

  // 디자인 시스템 색상 설정
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-[#FFFFFF] shadow-[0_10px_15px_0_rgba(0,0,0,0.12)] rounded-full'; // 메인 핑크 (시작하기, 결과 공유하기)
      case 'secondary':
        return 'bg-background text-[#EF6D8A] rounded-[16px]'; // 연한 핑크
      default:
        return 'bg-background text-[#364153] shadow-[0_1px_3px_0_rgba(0,0,0,0.20)] rounded-[16px]'; // 질문 선택지용
    }
  };

  return (
    <button
      onClick={onClick}
      className={` ${widthClass} ${getVariantClass()} flex h-14 cursor-pointer items-center justify-center text-lg font-bold transition-all active:scale-95`}
    >
      {/* 버튼 텍스트 */}
      <span>{label}</span>
    </button>
  );
};

export default Button;
