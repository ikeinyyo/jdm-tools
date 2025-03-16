import { ReactNode } from "react";

type Props = {
  title: string;
  icon?: ReactNode;
  onClick?: () => void;
};

const Button = ({ title, icon, onClick }: Props) => (
  <div
    className="flex items-center justify-start gap-4 my-2 p-4 bg-primary hover:bg-dark text-light w-52 h-10 cursor-pointer"
    onClick={onClick}
  >
    {icon && <span>{icon}</span>}
    <span className="text-m uppercase">{title}</span>
  </div>
);

export { Button };
