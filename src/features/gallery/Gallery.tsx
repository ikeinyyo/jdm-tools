"use client";

import { useState, useCallback } from "react";
import { Button } from "../shared/buttons/Button";
import { SectionTitle } from "../shared/sectionTitle/SectionTitle";
import { FaUpload } from "react-icons/fa";
import { ImageGrid } from "./gallery/ImageGrid";

type Props = {
  onImageSelect: (url: string) => void;
  selectedImage: string;
};

const Gallery = ({ onImageSelect, selectedImage }: Props) => {
  const [images, setImages] = useState<string[]>([]);

  const handleUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const urls = Array.from(event.target.files).map((file) =>
          URL.createObjectURL(file)
        );
        setImages((prev) => [...prev, ...urls]);
        onImageSelect(urls[urls.length - 1]);
      }
    },
    [onImageSelect]
  );

  return (
    <section className="flex flex-col">
      <SectionTitle title="Gallery" />
      <ImageGrid
        images={images}
        selectedImage={selectedImage}
        onImageSelect={onImageSelect}
      />
      <div className="flex justify-end">
        <input
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          id="file-upload"
          onChange={handleUpload}
        />
        <label htmlFor="file-upload">
          <Button
            title="Upload Images"
            icon={<FaUpload className="h-4 w-4" />}
          />
        </label>
      </div>
    </section>
  );
};

export { Gallery };
