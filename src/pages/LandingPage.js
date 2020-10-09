import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function LandingPage() {
  const fade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1800 }
  });

  return (
    <div className="bg-black">
      <animated.div style={fade}>
        <nav className="flex pl-4 pt-4">
          <div className=" flex items-center bg-gray-200 rounded-md font-black font-mono px-2 py-1 text-sm sm:text-md md:text-lg lg:text-xl">
            <img className="pr-2 py-1" alt="logo" src="assets/polls_20.png" />
            Transient Polls
          </div>
          )}
        </nav>
        <div className="flex flex-col justify-center items-center h-screen pb-16">
          <div
            className="w-10/12 md:w-9/12 lg:w-8/12 text-gray-200 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black"
            style={{ textShadow: "5px 5px 15px rgba(255,255,255,0.5)" }}
          >
            <span className="">Create instant,</span>
            <p> anonymous polls for free.</p>
            <Link to="/polls/create">
              <button
                className="flex items-center bg-gray-200 mt-8 px-4 py-2 md:px-6 lg:px-8 font-mono font-bold rounded text-black text-sm sm:text-lg md:text-xl lg:text-2xl"
                style={{ boxShadow: "5px 5px 15px rgba(255,255,255,0.5)" }}
              >
                Create a poll <i className=" pl-2 ri-arrow-right-line"></i>
              </button>
            </Link>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default LandingPage;
