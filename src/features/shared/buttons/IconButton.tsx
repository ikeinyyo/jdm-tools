import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  onClick?: () => void;
  isSecondary?: boolean;
};

const IconButton = ({ icon, onClick, isSecondary }: Props) => (
  <div
    className={`flex items-center justify-start p-2 text-light w-10 h-10 cursor-pointer ${
      isSecondary ? "bg-dark hover:bg-primary" : "bg-primary hover:bg-dark"
    }`}
    onClick={onClick}
  >
    {icon}
  </div>
);

export { IconButton };
