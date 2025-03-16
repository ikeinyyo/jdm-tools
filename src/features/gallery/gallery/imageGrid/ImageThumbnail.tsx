import Image from "next/image";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";

type Props = {
  imageUrl: string;
  isSelected: boolean;
  onClick?: () => void;
};

const ImageThumbnail = ({ imageUrl, isSelected, onClick }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`w-24 h-24 min-w-24 p-2 border-1 overflow-hidden hover:bg-dark flex items-center justify-center relative ${
        isSelected ? "bg-primary border-dark" : "bg-light border-light-high"
      }`}
      onClick={onClick}
    >
      {isLoading && (
        <FaSpinner className="animate-spin text-primary text-2xl absolute" />
      )}
      <Image
        src={imageUrl}
        alt="Image thumbnail"
        width={120}
        height={120}
        className={`object-cover w-full h-full transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
    </div>
  );
};

export { ImageThumbnail };
