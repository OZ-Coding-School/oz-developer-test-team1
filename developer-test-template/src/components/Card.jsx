function Card({ className, children, ...props }) {
  return (
    <div
      className={`size-fit rounded-3xl bg-white p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
