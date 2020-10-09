import React from "react";

function Badge({ color, timeLeft }) {
  const badge = `inline-flex bg-${color}-400 justify-center items-center text-${color}-900 rounded-full px-3 md:text-md text-xs font-black font-mono select-none`;
  return (
    <div className={badge}>
      <i className=" ri-time-line pr-2"></i>
      {timeLeft}
    </div>
  );
}

Badge.defaultProps = {
  color: "gray",
  timeLeft: "---"
};
export default Badge;
