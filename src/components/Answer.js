import React, { useState } from "react";
import ResultBar from "./ResultBar";

function Answer({ text, choiceId, percent, voted, handleVoteSubmit }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="mx-2 md:mx-8 flex justify-center">
      <div className="w-11/12 md:w-10/12 lg:w-9/12 max-w-xl  shadow-md px-4 md:px-6 hover:shadow-lg my-4 border-2">
        <div className="overflow-x-auto mb-2">
          <h2 className="text-sm md:text-lg lg:text-xl text-gray-800 font-bold pb-2 pt-4">
            {text}
          </h2>
        </div>
        {voted ? (
          <ResultBar percent={percent} />
        ) : (
          <div className="flex pb-2 ">
            {!clicked ? (
              <button
                className="py-1 px-4 md:px-8 bg-blue-600 text-blue-100 rounded hover:bg-blue-500"
                onClick={() => setClicked(true)}
              >
                Vote
              </button>
            ) : (
              <>
                <div
                  onClick={() => {
                    handleVoteSubmit(choiceId);
                  }}
                  className="h-8 w-16 md:py-2 md:px-8 flex justify-center items-center rounded border-2 border-green-800 bg-green-300 mr-2 text-green-800 text-xl hover:bg-green-200 cursor-pointer"
                >
                  <i className="ri-check-line"></i>
                </div>
                <div
                  className="h-8 w-16 md:py-2 md:px-8 flex justify-center items-center rounded border-2 border-red-800 bg-red-300 text-red-800 text-xl hover:bg-red-200 cursor-pointer"
                  onClick={() => setClicked(false)}
                >
                  <i className="ri-close-line"></i>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

Answer.defaultProps = {
  text: "An error occurred"
};

export default Answer;
