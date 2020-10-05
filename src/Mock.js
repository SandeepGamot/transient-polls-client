import React, { useState } from "react";
import Question from "./components/Question";
import Answer from "./components/Answer";
import mockdata from "./mockdata";
import CreatePoll from "./components/CreatePoll";
import PollDetailView from "./components/PollDetailView";
import { w_all } from "./style-config";
import _404 from "./components/_404";
import _5xx from "./components/_5xx";
import LoadingScreen from "./components/LoadingScreen";
import ShareUrl from "./components/ShareUrl";
import getPercentage from "./utils/getPercentage";
import getHoursRemaining from "./utils/getHoursRemaining";

function Mock({ answer }) {
  return (
    <>
      <div className="bg-orange-600 text-white text-center ">Dev Mode On</div>
      <PollDetailView />
    </>
  );
}

export default Mock;
