"use client";

import { LayoutData } from "../layoutList/layouts/domain";
import { Button } from "../shared/buttons/Button";
import { SectionTitle } from "../shared/sectionTitle/SectionTitle";
import { AiOutlineOpenAI } from "react-icons/ai";
import useGeneratePost from "./useGeneratePost";
import { useState } from "react";

type Props = {
  data: LayoutData;
  system: string;
  setData: (data: LayoutData | ((prev: LayoutData) => LayoutData)) => void;
  setPost: (post: string | ((prev: string) => string)) => void;
};

const PostForm = ({ data, system, setData, setPost }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;

    setData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? target.checked
          : type === "range"
          ? Number(value) || 0
          : value,
    }));
  };

  const { mutate: generatePost } = useGeneratePost(
    (post) => {
      setIsLoading(false);
      setPost(() => post?.post);
    },
    () => {
      setIsLoading(false);
    }
  );

  return (
    <section>
      <SectionTitle title="Post Form" />

      <div className="bg-light-low p-4 text-dark">
        {/* General Information */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Board Game Details</h3>

          <div className="grid grid-cols-4 gap-4">
            {/* Game Name */}
            <label className="flex flex-col col-span-3">
              Board Game Name
              <input
                type="text"
                name="gameName"
                value={data.gameName || ""}
                onChange={handleChange}
                className="border p-2 bg-light text-dark"
              />
            </label>

            {/* Score (Slider) */}
            <label className="flex flex-col">
              Score: {data.score || 0} / 10
              <input
                type="range"
                name="score"
                min="0"
                max="10"
                step="0.25"
                value={data.score || 0}
                onChange={handleChange}
                className="accent-primary"
              />
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {/* Number of Players */}
            <label className="flex flex-col">
              Number of Players
              <input
                type="text"
                name="numPlayers"
                value={data.numPlayers || ""}
                onChange={handleChange}
                className="border p-2 bg-light text-dark"
              />
            </label>

            {/* Time */}
            <label className="flex flex-col">
              Time (minutes)
              <input
                type="text"
                name="time"
                value={data.time || ""}
                onChange={handleChange}
                className="border p-2 bg-light text-dark"
              />
            </label>

            {/* Minimum Age */}
            <label className="flex flex-col">
              Minimum Age
              <input
                type="text"
                name="minAge"
                value={data.minAge || ""}
                onChange={handleChange}
                className="border p-2 bg-light text-dark"
              />
            </label>
          </div>
        </div>

        {/* Section for Image */}
        <div className="bg-light-low mt-6">
          <h3 className="text-lg font-semibold mb-2">Image Adjustments</h3>

          <div className="grid grid-cols-3 gap-4">
            {/* Brightness */}
            <label className="flex flex-col">
              Brightness: {data.brightness || 0} / 2
              <input
                type="range"
                name="brightness"
                min="0"
                max="2"
                step="0.05"
                value={data.brightness || 2}
                onChange={handleChange}
                className="accent-primary"
              />
            </label>

            {/* Contrast */}
            <label className="flex flex-col">
              Contrast: {data.contrast || 0} / 2
              <input
                type="range"
                name="contrast"
                min="0"
                max="2"
                step="0.05"
                value={data.contrast || 2}
                onChange={handleChange}
                className="accent-primary"
              />
            </label>

            {/* Saturation */}
            <label className="flex flex-col">
              Saturation: {data.saturation || 0} / 2
              <input
                type="range"
                name="saturation"
                min="0"
                max="2"
                step="0.05"
                value={data.saturation || 2}
                onChange={handleChange}
                className="accent-primary"
              />
            </label>
          </div>

          {/* Invert Layout */}
          <div className="mt-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="isInvert"
                checked={data.isInvert || false}
                onChange={handleChange}
                className="accent-primary"
              />
              Invert Layout
            </label>
          </div>
        </div>

        {/* Prompt */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Prompt</h3>
          <textarea
            name="prompt"
            value={data.prompt || ""}
            onChange={handleChange}
            className="border p-2 w-full h-64 bg-light text-dark resize-none"
          />
          <div className="flex justify-end">
            <Button
              title="Generate"
              onClick={() => {
                setIsLoading(true);
                generatePost({ system, prompt: data?.prompt || "" });
              }}
              disabled={isLoading}
              icon={<AiOutlineOpenAI className="h-6 w-6" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { PostForm };
