import React, { useState } from "react";

const LoadingScreen = ({ displayText }) => {
  const [tooLong, setTooLong] = useState(false);
  setTimeout(() => {
    setTooLong(true);
  }, 5000);
  return (
    <div className="flex justify-center items-center font-black h-screen text-5xl animate-pulse text-gray-800">
      <div>
        {displayText}
        {tooLong && (
          <div className="text-xs font-hairline font-mono text-gray-600">
            (this project is hosted on free tier of
            <span className="text-purple-600 font-semibold"> Heroku</span> it
            may take few seconds)
          </div>
        )}
      </div>
    </div>
  );
};

LoadingScreen.defaultProps = {
  displayText: "Loading...",
};
export default LoadingScreen;
