import { FaRegClock, FaStar, FaUsers } from "react-icons/fa6";
import { LayoutData } from "./domain";
import { TbMoodKid } from "react-icons/tb";

type Props = {
  data: LayoutData;
};

const GeneralLayout = ({ data }: Props) => {
  return (
    <div>
      <div
        className={`${
          data?.isInvert ? "left-0" : "right-0"
        } absolute top-10 bg-primary text-light text-4xl font-bold px-4 py-2 shadow-md shadow-black uppercase z-10 shadow-md`}
      >
        {data?.gameName}
      </div>

      {(data.numPlayers || data.time || data.minAge) && (
        <div
          className={`${
            data?.isInvert ? "left-0" : "right-0"
          } absolute top-24 bg-white text-gray-800 text-l font-medium px-4 py-2 shadow-md shadow-black flex items-center gap-2 z-10`}
        >
          {data.numPlayers && (
            <>
              <FaUsers className="text-primary" />
              {data.numPlayers}
            </>
          )}
          {data.time && (
            <>
              <FaRegClock className="text-primary" />
              {data.time}
            </>
          )}

          {data.minAge && (
            <>
              <TbMoodKid className="text-primary h-5 w-5" />
              {data.minAge}
            </>
          )}
        </div>
      )}
      {data.score && (
        <div
          className={`${
            data.isInvert ? "right-0" : "left-0"
          } absolute bottom-10 bg-primary text-light px-4 py-2 shadow-md shadow-black z-10`}
        >
          <div className="flex items-center space-x-2">
            <FaStar className="text-light text-xl" />
            <span className="text-lg font-semibold">
              {data.score?.toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export { GeneralLayout };
