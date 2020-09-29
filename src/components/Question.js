import React from "react";
import Badge from "./Badge";

function Question({ question, color, badgeText }) {
  return (
    <div className="px-4 md:px-16 mt-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-800 font-black pb-2 pt-4 overflow-x-auto mb-2">
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
