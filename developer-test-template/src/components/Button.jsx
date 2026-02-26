import React from 'react';

const Button = ({ label, size, variant, onClick }) => {
  const widthClass = size === 'small' ? 'w-[262px]' : 'w-[384px]';

  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-white shadow-[0_10px_15px_0_rgba(0,0,0,0.12)] rounded-full';
      case 'secondary':
        return 'bg-background text-primary rounded-2xl';
      default:
        return 'bg-background text-text-body shadow-[0_1px_3px_0_rgba(0,0,0,0.20)] rounded-2xl';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`${widthClass} ${getVariantClass()} flex h-12 shrink-0 cursor-pointer items-center justify-center text-lg font-bold transition-all active:scale-95`}
    >
      <span>{label}</span>
    </button>
  );
};

export default Button;
