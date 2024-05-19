import { useCallback, useEffect, useRef, useState } from "react";
import { Door } from "./components/Door";

export const App = () => {
  const [room, setRoom] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const fadeIn = useCallback(
    () =>
      ref.current?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300 }),
    [ref]
  );
  const onClick = () => {
    setRoom(Math.floor(Math.random() * 100 + 1));
    fadeIn();
  };

  useEffect(() => {
    const animation = fadeIn();
    return () => animation?.cancel();
  }, [fadeIn]);

  return (
    <div
      className="
        flex
        h-screen w-screen
        flex-row items-center
        justify-center
        gap-12
        bg-white
      "
      ref={ref}
    >
      <Door onClick={onClick} />
      <Door onClick={onClick} />
      <Door onClick={onClick} />
      <p className="fixed bottom-20 text-xl text-slate-500">Room {room}</p>
    </div>
  );
};
