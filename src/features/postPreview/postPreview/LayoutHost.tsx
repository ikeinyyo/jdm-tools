import { LayoutData, LayoutType } from "@/features/layoutList/layouts/domain";
import { GeneralLayout } from "@/features/layoutList/layouts/GeneralLayout";
import { MonthlySummaryLayout } from "@/features/layoutList/layouts/MonthlySummaryLayout";
import { SentenceLayout } from "@/features/layoutList/layouts/SentenceLayout";
import { TopLayout } from "@/features/layoutList/layouts/TopLayout";

type Props = {
  layout: LayoutType;
  data: LayoutData;
};

const LayoutHost = ({ layout, data }: Props) => {
  return (
    <>
      {layout === "general" ? (
        <div>
          <GeneralLayout data={data} />
        </div>
      ) : layout === "top" ? (
        <div>
          <TopLayout data={data} />
        </div>
      ) : layout === "monthly" ? (
        <div>
          <MonthlySummaryLayout data={data} />
        </div>
      ) : layout === "sentence" ? (
        <div>
          <SentenceLayout data={data} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export { LayoutHost };
