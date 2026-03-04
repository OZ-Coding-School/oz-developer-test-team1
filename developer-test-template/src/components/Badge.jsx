function Badge({ tags }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {tags.map((tag) => (
        <div
          key={tag}
          className="bg-background flex h-[28px] items-center rounded-full px-2"
        >
          <span className="text-primary text-[14px] leading-[20px] font-normal tracking-[-0.15px]">
            #{tag}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Badge;
