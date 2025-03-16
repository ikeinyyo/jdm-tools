"use client";

import { useState } from "react";
import { SectionTitle } from "../shared/sectionTitle/SectionTitle";
import { LayoutItem } from "./layoutList/LayoutItem";
import { layouts } from "./Layouts";
import { LayoutItemProps } from "./layouts/domain";

type Props = {
  onLayoutSelect: (layoutItemProps: LayoutItemProps) => void;
};
const LayoutList = ({ onLayoutSelect }: Props) => {
  const [selectedLayoutIndex, setSelectedLayoutIndex] = useState<number>(0);

  return (
    <section>
      <SectionTitle title="Layouts" />
      <div className="flex flex-row gap-2 overflow-x-auto p-4 bg-light-low justify-start items-center min-w-full snap-x snap-mandatory">
        {layouts.map((layout, index) => (
          <div
            key={index}
            className="snap-start"
            onClick={() => {
              setSelectedLayoutIndex(index);
              onLayoutSelect(layout);
            }}
          >
            <LayoutItem
              layout={layout}
              isSelected={index == selectedLayoutIndex}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export { LayoutList };
