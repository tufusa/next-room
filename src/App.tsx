import { useState } from "react";
import { Door } from "./components/Door";

export const App = () => {
  const [floor, setFloor] = useState(0);
  const onClick = () => {
    setFloor(Math.floor(Math.random() * 100 + 1));
  };

  return (
    <div
      className="
        flex h-screen
        w-screen flex-row items-center
        justify-center gap-12
        bg-white
      "
    >
      <Door onClick={onClick} />
      <Door onClick={onClick} />
      <Door onClick={onClick} />
      <p className="fixed bottom-20 text-xl text-slate-500">Floor {floor}</p>
    </div>
  );
};
