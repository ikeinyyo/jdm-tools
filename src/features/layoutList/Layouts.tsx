import { FaCalendarAlt } from "react-icons/fa";
import { FaStar, FaTrophy } from "react-icons/fa6";
import { LayoutItemProps } from "./layouts/domain";
import { TfiLayoutSidebarNone } from "react-icons/tfi";
import { blank, review, top, monthly } from "./layouts/systemPrompts";

const iconClassName = "w-8 h-8";
const layouts: LayoutItemProps[] = [
  {
    name: "Blank",
    icon: <TfiLayoutSidebarNone className={iconClassName} />,
    type: "none",
    system: blank,
  },
  {
    name: "Review",
    icon: <FaStar className={iconClassName} />,
    type: "general",
    system: review,
  },
  {
    name: "Top",
    icon: <FaTrophy className={iconClassName} />,
    type: "top",
    system: top,
  },
  {
    name: "Monthly summary",
    icon: <FaCalendarAlt className={iconClassName} />,
    type: "monthly",
    system: monthly,
  },
];

export { layouts };
