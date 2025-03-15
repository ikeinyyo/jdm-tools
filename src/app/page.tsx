import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <Image
        src="/images/logo.png"
        width={400}
        height={200}
        alt="Logo de Juernes de Mesa"
      />
    </div>
  );
}
