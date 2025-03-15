import Link from "next/link";
import { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

type Size = "big" | "small";

type Props = {
  url: string;
  size?: Size;
  component?: ReactNode;
};

const WebPageLink = ({ url, component, size = "big" }: Props) => (
  <Link
    href={url}
    target={url.startsWith("/") ? "" : "_blank"}
    className={`flex flex-row items-center w-full px-4 ${
      size == "small" ? "justify-center" : "justify-between"
    }`}
  >
    {component ? component : <></>}
    {size == "big" ? <FaArrowRight className="h-8 w-8" /> : <></>}
  </Link>
);

export { WebPageLink };
