import { LayoutData } from "./domain";

type Props = {
  data: LayoutData;
};

const MonthlySummaryLayout = ({ data }: Props) => {
  return (
    <div>
      <div
        className={`${
          data?.isInvert ? "left-0" : "right-0"
        } absolute h-full bottom-0 mt-100 bg-primary text-light text-4xl font-bold px-4 py-2 shadow-md shadow-black uppercase z-10`}
        style={{
          writingMode: data?.isInvert ? "sideways-lr" : "sideways-rl",
        }}
      >
        Las partidas del mes
      </div>

      <div
        className={`${
          data?.isInvert ? "right-5" : "right-20"
        } absolute bottom-0 mt-100 bg-dark text-light text-4xl font-bold px-4 py-2 shadow-md shadow-black uppercase z-10`}
      >
        {data.gameName}
      </div>
    </div>
  );
};

export { MonthlySummaryLayout };

/*
import { LayoutData } from "./domain";

type Props = {
  data: LayoutData;
};

const MonthlySummaryLayout = ({ data }: Props) => {
  return (
    <div className="relative h-screen">
      <div
        className={`absolute top-0 bottom-0 ${
          data?.isInvert ? "left-0" : "right-0"
        } bg-primary w-2`}
      ></div>
      <div
        className={`absolute ${
          data?.isInvert ? "left-4" : "right-4"
        } bottom-0 text-light text-4xl font-bold px-4 py-2 shadow-md shadow-black uppercase z-10 rotate-180 origin-bottom`}
      >
        Las partidas del mes
      </div>
    </div>
  );
};

export { MonthlySummaryLayout };
*/
