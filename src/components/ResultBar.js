import React from "react";

const ResultBar = ({ percent }) => (
  <div className="w-full mb-2">
    <span className="text-xs md:text-sm lg:text-md text-gray-800 font-bold">
      {percent}%
    </span>
    <div
      className="shadow w-full bg-gray-300 rounded-full"
      style={{ height: "5px" }}
    >
      <div
        className="bg-blue-500 text-xs leading-none text-center text-white rounded-full"
        style={{ width: `${percent}%`, height: "5px" }}
      ></div>
    </div>
  </div>
);

ResultBar.defaultProps = {
  percent: "No percent props"
};
export default ResultBar;
