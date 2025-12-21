type TabInfoType = {
  label: string;
  Icon: React.ElementType;
};

const Tab = ({
  tabInfo,
  active,
  onClick,
}: {
  tabInfo: TabInfoType;
  active: boolean;
  onClick: () => void;
}) => {
  const { Icon, label } = tabInfo;
  return (
    <div
      className={`flex gap-2.5 items-center p-4 cursor-pointer font-semibold first:rounded-tl-xl last:rounded-tr-xl ${
        active ? "bg-white text-orange-400" : "bg-white/40 text-white"
      } `}
      onClick={onClick}
    >
      <Icon />
      <h5>{label}</h5>
    </div>
  );
};

export default Tab;
