import React from "react";
import StaticChart from "../components/StaticChart";
import { Helmet } from "react-helmet";

const Statistics = () => {
  return (
    <div>
      <Helmet>
        <title>GadgetMania | Statistic</title>
      </Helmet>
      <StaticChart />
    </div>
  );
};

export default Statistics;
