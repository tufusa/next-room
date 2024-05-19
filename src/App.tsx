import { useState } from "react";
import { Door } from "./components/Door";

export const App = () => {
  const [room, setRoom] = useState(0);
  const onClick = () => {
    setRoom(Math.floor(Math.random() * 100 + 1));
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
      <p className="fixed bottom-20 text-xl text-slate-500">Room {room}</p>
    </div>
  );
};
