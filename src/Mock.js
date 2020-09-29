import React from "react";
import Question from "./components/Question";
import Answer from "./components/Answer";
import mockdata from "./mockdata";
import CreatePoll from "./components/CreatePoll";
import PollDetailView from "./components/PollDetailView";
import { w_all } from "./style-config";
import _404 from "./components/_404";
import _5xx from "./components/_5xx";

function Mock({ answer }) {
  return (
    <>
      <PollDetailView />
    </>
  );
}

export default Mock;
