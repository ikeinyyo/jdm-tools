"use client";

import { ImageThumbnail } from "./imageGrid/ImageThumbnail";

type Props = {
  images: string[];
  selectedImage: string;
  onImageSelect: (url: string) => void;
};

const ImageGrid = ({ images, selectedImage, onImageSelect }: Props) => {
  return (
    <div className="flex flex-row gap-2 overflow-x-auto p-4 bg-light-low justify-start items-center w-full flex-nowrap">
      {images && images.length ? (
        images.map((image, index) => (
          <ImageThumbnail
            key={index}
            imageUrl={image}
            isSelected={image === selectedImage}
            onClick={() => {
              onImageSelect(image);
            }}
          />
        ))
      ) : (
        <div className="text-dark text-center h-24 flex items-center justify-center w-full">
          Your gallery is empty. Upload some to fill your gallery!
        </div>
      )}
    </div>
  );
};

export { ImageGrid };
