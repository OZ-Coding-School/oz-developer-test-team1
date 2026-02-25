function Badge({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-background flex h-[32px] w-[70.67px] items-center rounded-full"
        >
          <span className="font-inter text-primary h-[20px] w-[47px] pl-[12px] text-[14px] leading-[20px] font-medium tracking-[-0.15px]">
            #{tag}
          </span>
        </span>
      ))}
    </div>
  );
}

export default Badge;
