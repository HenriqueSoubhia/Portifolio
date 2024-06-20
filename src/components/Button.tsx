import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"button"> & {
  text: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

const Button = ({
  text,
  icon,
  href,
  onClick,
  className,
}: Props) => {
  const classDefault = twMerge(
    "flex items-center py-3 px-4 text-white bg-blue-500 justify-center gap-2 w-30 font-bold transition duration-300 cursor-pointer hover:text-neutral-300",
    className
  );

  if (href) {
    return (
      <a href={href} target="_blank" className={classDefault}>
        {icon && <span className="text-2xl">{icon}</span>}
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classDefault}>
      {icon && <span className="text-2xl">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
