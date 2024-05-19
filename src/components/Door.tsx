type Props = {
  onClick: () => void;
};

export const Door = (props: Props) => (
  <div
    className="
      relative
      flex h-72 min-w-36 flex-col items-center
      justify-center
      border-2 border-gray-400 hover:bg-gray-100 active:bg-gray-200
    "
    onClick={props.onClick}
  >
    <div className="absolute right-4 size-4 rounded-xl border-2 border-gray-400"></div>
  </div>
);
