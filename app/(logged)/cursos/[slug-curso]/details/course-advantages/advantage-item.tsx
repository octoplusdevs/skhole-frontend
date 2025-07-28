interface IAdvantageItem {
  content: string;
  Icon: any;
  highlight: boolean;
}

export const AdvantageItem = ({
  content,
  Icon,
  highlight = false,
}: IAdvantageItem) => {
  return (
    <span
      className={`flex gap-2 items-center text-[14px] font-medium ${
        highlight ? "text-white font-semibold" : "text-description"
      }`}
    >
      <Icon size={24} weight="fill" color={highlight ? "#F9FD47" : "#fff"} />
      {content}
    </span>
  );
};
