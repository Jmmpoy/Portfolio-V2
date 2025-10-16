import { useState, useEffect } from "react";

function DateTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <>
      <a className="uppercase text-sm font-sohneBuch text-black hover:text-gray transition-colors duration-300 focus:text-gray-500 tracking-tighter w-full hidden md:block">
        {`© ${date.getFullYear()}`}
      </a>
    </>
  );
}

export default DateTime;
