import axios from "axios";
import React, { useEffect, useState } from "react";

const serviceKey =
  "mzQLO4pwV5jMlS%2Ftx0D4%2BYourIDNX6LattjXHzoAmXtI%2FzZRM%2F7Us5rkTvkvhsq36eayBwfXXC7zZQmjGxo%2FZQ%3D%3D";
const Holiday = (solYear: string, solMonth: string) => {
  const [data, setData] = useState<XMLHttpRequest>();
  const kk = `http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?serviceKey=${serviceKey}&solYear=${solYear}&solMonth=${solMonth}`;
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?serviceKey=${serviceKey}&solYear=${solYear}&solMonth=${solMonth}`
      );
      return res.data;
    };
    fetchData().then((res) => setData(res));
  }, []);
  return data?.response?.body?.totalCount;
};

export default Holiday;
