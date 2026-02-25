function Badge({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <div
          key={tag}
          className="bg-background flex items-center rounded-full px-3 py-[6px]"
        >
          <span className="font-inter text-primary text-sm leading-5 font-medium tracking-[-0.15px]">
            #{tag}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Badge;
