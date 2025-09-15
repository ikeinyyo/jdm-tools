import { FaStar } from "react-icons/fa6";
import { LayoutData } from "./domain";

type Props = {
  data: LayoutData;
};

const SentenceLayout = ({ data }: Props) => {
  return (
    <>
      {data.showScore && (
        <div
          className={`${
            data.isInvert ? "right-8 top-10" : "left-8 top-88"
          } absolute flex justify-start gap-2 bg-dark text-light text-3xl font-bold px-4 py-2 shadow-md shadow-black uppercase z-10 shadow-md`}
        >
          <FaStar className="text-light" />
          {data.score}/10
        </div>
      )}

      <div
        className={`${
          data.isInvert ? "right-8 top-26" : "left-8 top-104"
        } absolute w-120 bg-primary text-light text-2xl font-bold px-4 py-2 shadow-md shadow-black uppercase z-10 shadow-md whitespace-pre-line`}
      >
        {data.prompt}
      </div>
    </>
  );
};

export { SentenceLayout };
