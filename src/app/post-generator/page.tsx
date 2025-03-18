"use client";

import { useState } from "react";
import { Gallery } from "@/features/gallery/Gallery";
import { LayoutList } from "@/features/layoutList/LayoutList";
import { PostForm } from "@/features/postForm/PostForm";
import { PostPreview } from "@/features/postPreview/PostPreview";
import { layouts } from "@/features/layoutList/Layouts";
import {
  LayoutData,
  layoutDataDefault,
  LayoutItemProps,
} from "@/features/layoutList/layouts/domain";

export default function PostGenerator() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [data, setData] = useState<LayoutData>(layoutDataDefault);
  const [post, setPost] = useState<string>("");
  const [layoutItemProps, setLayoutItemProps] =
    useState<LayoutItemProps | null>(layouts[0]);

  return (
    <div className="flex flex-col">
      <div className="flex gap-4">
        <div className="flex flex-col w-2/5">
          <LayoutList
            onLayoutSelect={(layoutItemProps) =>
              setLayoutItemProps(layoutItemProps)
            }
          />
          <Gallery onImageSelect={setImageUrl} selectedImage={imageUrl} />

          <PostForm
            data={data}
            setData={setData}
            setPost={setPost}
            system={layoutItemProps?.system || ""}
          />
        </div>
        <div className="flex flex-col w-3/5">
          <PostPreview
            imageUrl={imageUrl}
            layout={layoutItemProps?.type || "none"}
            data={data}
            post={post}
          />
        </div>
      </div>
      <div>1</div>
    </div>
  );
}
