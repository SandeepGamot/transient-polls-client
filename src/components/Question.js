import React from "react";
import Badge from "./Badge";
import { w_all } from "../style-config";

function Question({ question, color, badgeText }) {
  // const style=`${w_all} px-4 md:px-16 mb-20`
  return (
    <div className="px-4 md:px-16 mt-20">
      <h1 className="text-2xl lg:text-4xl xl:text-6xl text-gray-800 font-black pb-2 pt-4 overflow-x-auto mb-2">
        {question}
      </h1>
      <Badge color={color} text={badgeText} />
    </div>
  );
}

Question.defaultProps = {
  question: "Failed to fetch"
};
export default Question;
