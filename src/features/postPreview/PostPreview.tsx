"use client";

import { SectionTitle } from "../shared/sectionTitle/SectionTitle";
import { ImagePreview } from "./postPreview/ImagePreview";
import { LayoutHost } from "./postPreview/LayoutHost";
import { LayoutData, LayoutType } from "../layoutList/layouts/domain";
import { useRef } from "react";
import { toPng } from "html-to-image";

type Props = {
  imageUrl?: string;
  layout: LayoutType;
  data: LayoutData;
};

const PostPreview = ({ imageUrl, layout, data }: Props) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleCreateImage = () => {
    if (cardRef.current === null) {
      return;
    }

    toPng(cardRef.current, {
      backgroundColor: "transparent",
      includeQueryParams: true,
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${data.gameName || "image"}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Oops, something went wrong!", err);
      });
  };

  return (
    <section>
      <SectionTitle title="Post Preview" />
      <div className="w-full flex items-center justify-center bg-light-low relative pt-4 pb-18">
        <div
          className="relative w-[600px] h-[600px] flex items-center justify-center"
          ref={cardRef}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none z-100">
            <LayoutHost layout={layout} data={data} />
          </div>
          <div className="mt-14">
            <ImagePreview
              imageUrl={imageUrl}
              data={data}
              onDownloadClick={handleCreateImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { PostPreview };
