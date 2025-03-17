import { ReactNode } from "react";
import { FaSpinner } from "react-icons/fa6";

type Props = {
  title: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({ title, icon, onClick, disabled }: Props) => (
  <div
    className={`flex items-center justify-start gap-4 my-2 p-4 hover:bg-dark text-light w-52 h-10 cursor-pointer ${
      disabled ? "bg-dark" : "bg-primary"
    }`}
    onClick={onClick}
  >
    {disabled ? (
      <FaSpinner className="animate-spin text-light text-2xl" />
    ) : (
      icon ?? <span>{icon}</span>
    )}
    <span className="text-m uppercase">{title}</span>
  </div>
);

export { Button };
