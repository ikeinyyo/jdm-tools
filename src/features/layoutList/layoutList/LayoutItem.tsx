import { LayoutItemProps } from "../layouts/domain";

type Props = { layout: LayoutItemProps; isSelected: boolean };

const LayoutItem = ({ layout, isSelected }: Props) => (
  <div
    className={`flex items-center cursor-pointer border h-12 p-4 gap-2 hover:bg-dark hover:text-light ${
      isSelected
        ? "border-dark bg-primary text-light"
        : "border-light-high bg-light-medium text-dark"
    }`}
  >
    <div>{layout.icon}</div>
    <div className="line-clamp-2 text-wrap">{layout.name}</div>
  </div>
);

export { LayoutItem };
