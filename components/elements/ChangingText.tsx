
import React, { useEffect, useState } from "react";
import { roles } from "../../data";

const ChangingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-center font-montserrat text-3xl font-medium mt-7 tracking-tighter text-white">
      and I am a{" "}
      <span className="underline font-covgrace tracking-wider text-cyan-400 text-4xl">
        {roles[index]}
      </span>
    </p>
  );
};

export default ChangingText;
