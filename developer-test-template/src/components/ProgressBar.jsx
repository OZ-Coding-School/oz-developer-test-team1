function ProgressBar({ value = 4, max = 10, className = '', ...props }) {
  const currentRatio = (value / max) * 100;

  return (
    <div className={`w-full space-y-2 ${className}`} {...props}>
      <div className="flex w-full justify-between text-sm">
        <span className="text-text-muted">진행률</span>
        <span className="text-primary">
          {value}/{max}
        </span>
      </div>
      <div className="bg-progress-track h-2 w-full overflow-hidden rounded-full">
        <div
          className={`bg-primary h-full rounded-full transition-all ease-out`}
          style={{ width: `${currentRatio}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
