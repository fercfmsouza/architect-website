interface FacebookSvgProps {
  className?: string;
}

const FacebookSvg = ({ className }: FacebookSvgProps) => {
  return (
    <svg
      width="16"
      height="25"
      viewBox="0 0 10 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-current ${className}`}
    >
      <path d="M9.18359 10.875H6.54688V18.75H3.03125V10.875H0.148438V7.64062H3.03125V5.14453C3.03125 2.33203 4.71875 0.75 7.28516 0.75C8.51562 0.75 9.81641 0.996094 9.81641 0.996094V3.77344H8.375C6.96875 3.77344 6.54688 4.61719 6.54688 5.53125V7.64062H9.67578L9.18359 10.875Z" />
    </svg>
  );
};

export default FacebookSvg;
