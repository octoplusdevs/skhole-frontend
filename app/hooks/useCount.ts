import { useEffect, useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { count };
};
