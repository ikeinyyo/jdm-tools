import Image from "next/image";
import { NavigationButtons } from "./navBar/NavigationButtons";
import Link from "next/link";

type Props = { items: { title: string; path: string }[] };

const NavBar = ({ items }: Props) => (
  <section className="bg-dark h-14 flex flex-row gap-2">
    <Link href="/">
      <Image
        src="/images/logo.png"
        width={100}
        height={50}
        alt="Logo de Juernes de Mesa"
        className="p-2 pl-4"
      />
    </Link>
    <NavigationButtons items={items} />
  </section>
);

export { NavBar };
