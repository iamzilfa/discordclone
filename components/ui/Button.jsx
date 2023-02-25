import Link from "next/link";

const Button = ({ children, link, style }) => {
  return (
    <Link href={`${link}`} target="_blank">
      <div
        className={`py-4 px-8 rounded-full flex flex-col items-center justify-center ${style}`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
