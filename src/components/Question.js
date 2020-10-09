import React from "react";
import Badge from "./Badge";

function Question({ question, color, timeLeft }) {
  return (
    <>
      <div className="flex justify-center px-4 md:px-16 mt-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-800 font-black pb-2 pt-4 overflow-x-auto mb-2">
          {question}
        </h1>
      </div>
      <div className="text-center">
        <Badge color={color} timeLeft={timeLeft} />
      </div>
    </>
  );
}

Question.defaultProps = {
  question: "Failed to fetch"
};
export default Question;
