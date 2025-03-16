import { FaCalendarAlt } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { RiLayout2Line } from "react-icons/ri";
import { LayoutItemProps } from "./layouts/domain";
import { TfiLayoutSidebarNone } from "react-icons/tfi";

const iconClassName = "w-8 h-8";
const layouts: LayoutItemProps[] = [
  {
    name: "Blank",
    icon: <TfiLayoutSidebarNone className={iconClassName} />,
    type: "none",
  },
  {
    name: "General",
    icon: <RiLayout2Line className={iconClassName} />,
    type: "general",
  },
  {
    name: "Top",
    icon: <FaTrophy className={iconClassName} />,
    type: "top",
  },
  {
    name: "Monthly summary",
    icon: <FaCalendarAlt className={iconClassName} />,
    type: "monthly",
  },
];

export { layouts };
