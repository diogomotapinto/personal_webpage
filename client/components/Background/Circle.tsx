const Circle = (props: { className: string }) => {
  return (
    <svg
      className={props.className}
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="28" r="26" stroke="#8FD7FF" strokeWidth="4" />
    </svg>
  );
};

export default Circle;
