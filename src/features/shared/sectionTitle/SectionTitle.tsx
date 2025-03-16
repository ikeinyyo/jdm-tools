type Props = { title: string };

const SectionTitle = ({ title }: Props) => (
  <div className="my-2">
    <h2 className="text-2xl text-dark">{title}</h2>
    <hr className="h-0.25 border-t-0 bg-light-high opacity-80" />
  </div>
);

export { SectionTitle };
