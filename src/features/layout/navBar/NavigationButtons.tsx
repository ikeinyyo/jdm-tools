"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { items: { title: string; path: string }[] };

const NavigationButtons = ({ items }: Props) => (
  <div className="flex flex-row justify-center items-center gap-4">
    {items.map((item) => (
      <Link
        key={item.path}
        href={item.path}
        title={item.title}
        className={`${
          usePathname() == item.path ? "bg-primary" : ""
        } p-2 uppercase hover:bg-light hover:text-dark`}
      >
        {item.title}
      </Link>
    ))}
  </div>
);

export { NavigationButtons };
