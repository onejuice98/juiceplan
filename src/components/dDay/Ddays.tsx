import React, { useEffect, useState } from "react";

const DDays = () => {
  const [days, setDays] = useState(0);
  useEffect(() => {
    const toDay: any = new Date();
    const dDay: any = new Date("2023-06-30 00:00:00");
    const gapNum = dDay - toDay;
    setDays(Math.ceil(gapNum / (1000 * 60 * 60 * 24)));
  }, []);
  return <div className="font-mono font-bold text-sm">전역까지 D-{days}</div>;
};

export default DDays;
