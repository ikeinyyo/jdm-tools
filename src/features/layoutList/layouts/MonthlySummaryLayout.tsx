import { LayoutData } from "./domain";

type Props = {
  data: LayoutData;
};

const MonthlySummaryLayout = ({ data }: Props) => {
  return (
    <div>
      <div
        className={`${
          data?.isInvert ? " left-0" : " right-0"
        } absolute top-10 bg-primary text-light text-4xl font-bold px-4 py-2 shadow-md shadow-black uppercase z-10 shadow-md`}
      >
        Work in progress
      </div>
    </div>
  );
};

export { MonthlySummaryLayout };
