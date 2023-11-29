import React from "react";
import dynamic from "next/dynamic";
import { SparklineAreaData } from "../../../utils/constants";
const DynamicSidebar = dynamic(() => import("../Charts/SpartLine"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const Charts = () => {
  console.log(SparklineAreaData, "hello world");
  return (
    <div>
      <div className="mt-4">
        <DynamicSidebar
          currentColor="yellow"
          id="area-sparkLine"
          height="160px"
          type="Area"
          data={SparklineAreaData}
          width="320"
          color="rgb(242, 252, 253)"
        />
      </div>
    </div>
  );
};

export default Charts;
