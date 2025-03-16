"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { IconButton } from "@/features/shared/buttons/IconButton";
import {
  GrRotateLeft,
  GrRotateRight,
  GrZoomIn,
  GrZoomOut,
} from "react-icons/gr";
import { MdOutlineCleaningServices } from "react-icons/md";
import { LayoutData } from "@/features/layoutList/layouts/domain";
import { FaDownload } from "react-icons/fa6";

type Props = {
  imageUrl?: string;
  data: LayoutData;
  onDownloadClick: () => void;
};

const ImagePreview = ({ imageUrl, data, onDownloadClick }: Props) => {
  const [rotation, setRotation] = useState(0);

  const rotateLeft = useCallback(() => setRotation((prev) => prev - 1), []);
  const rotateRight = useCallback(() => setRotation((prev) => prev + 1), []);
  const resetAll = useCallback((resetTransform: () => void) => {
    resetTransform();
    setRotation(0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {imageUrl ? (
        <TransformWrapper
          initialScale={0.5}
          minScale={0.25}
          maxScale={4}
          wheel={{ step: 0.1 }}
          disablePadding={false}
          limitToBounds={false}
          initialPositionX={0}
          initialPositionY={300}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <div className="relative flex items-center justify-center w-[600px] h-[600px] overflow-hidden bg-light-high">
                <TransformComponent>
                  <div
                    className="flex items-center justify-center transition-transform duration-300"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={imageUrl}
                      alt="Post"
                      width={1200}
                      height={1200}
                      className="max-w-none max-h-none"
                      style={{
                        filter: `brightness(${data.brightness ?? 1}) contrast(${
                          data.contrast ?? 1
                        }) saturate(${data.saturation ?? 1})`,
                      }}
                    />
                  </div>
                </TransformComponent>
              </div>

              <div className="flex justify-center gap-4 mt-4">
                <IconButton
                  onClick={() => resetAll(resetTransform)}
                  icon={<MdOutlineCleaningServices className="h-8 w-8" />}
                />

                <IconButton
                  onClick={() => {
                    zoomIn();
                  }}
                  icon={<GrZoomIn className="h-8 w-8" />}
                />

                <IconButton
                  onClick={() => {
                    zoomOut();
                  }}
                  icon={<GrZoomOut className="h-8 w-8" />}
                />

                <IconButton
                  onClick={rotateLeft}
                  icon={<GrRotateLeft className="h-8 w-8" />}
                />

                <IconButton
                  onClick={rotateRight}
                  icon={<GrRotateRight className="h-8 w-8" />}
                />

                <IconButton
                  isSecondary={true}
                  onClick={() => onDownloadClick()}
                  icon={<FaDownload className="h-8 w-8" />}
                />
              </div>
            </>
          )}
        </TransformWrapper>
      ) : (
        <div className="flex items-center justify-center w-[600px] h-[600px] bg-light-high text-dark">
          Pick an image from the gallery to get started!
        </div>
      )}
    </div>
  );
};

export { ImagePreview };
