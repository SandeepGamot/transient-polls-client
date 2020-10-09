import React, { useState } from "react";
import Question from "./components/Question";
import Answer from "./components/Answer";
import CreatePoll from "./pages/CreatePoll";
import PollDetailView from "./pages/PollDetailView";
import _404 from "./pages/_404";
import _5xx from "./pages/_5xx";
import LoadingScreen from "./components/LoadingScreen";
import ShareUrl from "./components/ShareUrl";
import getPercentage from "./utils/getPercentage";
import getHoursRemaining from "./utils/getHoursRemaining";
import LandingPage from "./pages/LandingPage";

function Mock({ answer }) {
  return (
    <>
      <div className="bg-orange-600 text-white text-center ">Dev Mode On</div>
    </>
  );
}

export default Mock;
