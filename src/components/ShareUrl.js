import React, { useState } from "react";

function ShareUrl({ url }) {
  const [copied, setCopied] = useState(false);
  console.log(window.location);
  let buttonStyle = `ml-1 px-4 md:px-8 md:text-xl text-white overflow-hidden rounded ${
    !copied
      ? "bg-blue-500 focus:bg-blue-400"
      : "bg-green-500 focus:bg-green-400"
  }`;
  return (
    <div className="flex flex-col justify-center items-center h-screen text-gray-800">
      <div className="flex items-center w-11/12 md:w-/12 lg:w-9/12 max-w-xl border shadow-lg rounded">
        <i className="px-2 border-r ri-link-m mr-2"></i>
        <span className="overflow-x-auto whitespace-no-wrap shadow-inset px-4 w-full my-2 py-1 rounded">
          {url}
        </span>
        <span className="p-2">
          <button
            onClick={() => {
              navigator.clipboard.writeText(url);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 3000);
            }}
            className={buttonStyle}
          >
            {copied ? "copied" : "copy"}
          </button>
        </span>
      </div>
      <div className="mt-8 mb-16">
        <button
          onClick={() => {
            window.location.replace(url);
          }}
          className="border text-blue-500 font-semibold px-6 py-1"
        >
          Go to your poll
          <span className="pl-2">
            <i className="ri-external-link-line"></i>
          </span>
        </button>
      </div>
    </div>
  );
}

export default ShareUrl;
