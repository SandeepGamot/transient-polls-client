import React from "react";

function Badge({ color, text }) {
  const badge = `inline-flex bg-${color}-400 justify-center items-center text-${color}-900 rounded-full px-3 md:text-md text-xs font-black font-mono`;
  return (
    <div className={badge}>
      <i className="ri-time-line pr-2"></i>
      {text}
    </div>
  );
}

Badge.defaultProps = {
  color: "gray",
  text: "---"
};
export default Badge;
