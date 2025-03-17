"use client";

import { SectionTitle } from "../shared/sectionTitle/SectionTitle";
import { ImagePreview } from "./postPreview/ImagePreview";
import { LayoutHost } from "./postPreview/LayoutHost";
import { LayoutData, LayoutType } from "../layoutList/layouts/domain";
import { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Button } from "../shared/buttons/Button";
import { FaRegCopy } from "react-icons/fa6";

type Props = {
  imageUrl?: string;
  layout: LayoutType;
  data: LayoutData;
  post: string;
};

const PostPreview = ({ imageUrl, layout, data, post }: Props) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [localPost, setLocalPost] = useState(post);

  useEffect(() => {
    setLocalPost(post);
  }, [post]);

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

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(localPost);
    } catch {}
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
      <div className="w-full flex flex-col bg-light-low relative pt-4 p-4">
        <h3 className="text-lg font-semibold mb-2 text-dark">Post text</h3>
        <textarea
          name="prompt"
          value={localPost}
          onChange={(e) => setLocalPost(e.target.value)}
          className="border p-2 w-full h-70 bg-light text-dark resize-none mb-1"
        />
        <div className="flex justify-end">
          <Button
            title="Clipboard"
            onClick={copyToClipboard}
            icon={<FaRegCopy className="h-5 w-5" />}
          />
        </div>
      </div>
    </section>
  );
};

export { PostPreview };
