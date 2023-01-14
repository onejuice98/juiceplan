import React from "react";
import Today from "./components/dDay/Today";
import DDays from "./components/dDay/Ddays";
import Box from "./components/box";
import Layout from "./components/layout/Layout";
import Profile from "./components/profile/Profile";
import Line from "./components/line";

function App() {
  return (
    <Layout>
      <Profile />

      <hr className="mx-4ㅣ my-4 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex flex-col items-center gap-4 mt-4">
        <Today />
        <DDays />
      </div>
    </Layout>
  );
}

export default App;
