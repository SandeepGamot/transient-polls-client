import React, { useState } from "react";

function Answer({ answer }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="mx-2 md:mx-8">
      <div className="flex-none md:flex justify-between items-center shadow-md px-4 md:px-16 hover:shadow-lg my-4 border-2">
        <div className="overflow-x-auto mb-2">
          <h2 className="text-sm md:text-lg lg:text-xl text-gray-800 font-bold pb-2 pt-4">
            {answer}
          </h2>
        </div>
        <div className="flex pb-2 md:ml-4">
          {!clicked ? (
            <button
              className="py-1 px-4 md:px-8 bg-blue-600 text-blue-100 rounded hover:bg-blue-500"
              onClick={() => setClicked(true)}
            >
              Vote
            </button>
          ) : (
            <>
              <div className="h-8 w-16 md:py-2 md:px-8 flex justify-center items-center rounded border-2 border-green-800 bg-green-300 mr-2 text-green-800 text-xl hover:bg-green-200 cursor-pointer">
                <i className="ri-check-line"></i>
              </div>
              <div
                className="h-8 w-16 md:py-2 md:px-8 flex justify-center items-center rounded border-2 border-red-800 bg-red-300 text-red-800 text-xl hover:bg-red-200 cursor-pointer"
                onClick={() => setClicked(false)}
              >
                <i className="ri-close-line"></i>
              </div>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

Answer.defaultProps = {
  answer: "An error occurred"
};

export default Answer;
