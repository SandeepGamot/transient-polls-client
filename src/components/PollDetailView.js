import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Question from "./Question";
import Answer from "./Answer";
import LoadingScreen from "./LoadingScreen";
import { api } from "../config";
import getHoursRemaining from "../utils/getHoursRemaining";
import getPercentage from "../utils/getPercentage";

function PollDetailView() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ choices: [] });
  const [voted, setVoted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

  useEffect(() => {
    axios
      .get(`${api.baseUrl}/${id}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        handleError(err);
      });
  }, []);

  const handleError = (err) => {
    console.log({ ...err });
    if (err.response.status === 404) window.location.href = "/404";
    else window.location.href = "/500";
  };

  function handleVoteSubmit(choiceId) {
    setLoading(true);
    setIsSubmitting(true);

    axios
      .patch(`${api.baseUrl}/${id}/${choiceId}`)
      .then((response) => {
        setVoted(true);
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => handleError(err));
  }

  return loading ? (
    <LoadingScreen
      displayText={isSubmitting ? "Submitting..." : "Loading..."}
    />
  ) : (
    <div>
      <Question
        question={data.question}
        {...getHoursRemaining(data.expiry_time)}
      />
      <div className="text-center mt-4 md:text-xl">
        Total Votes: <span className="font-bold ">{data.total_votes}</span>
      </div>
      {data.choices.map((choice) => (
        <Answer
          key={choice._id}
          choiceId={choice._id}
          voted={voted}
          text={choice.text}
          percent={getPercentage(choice.votes, data.total_votes)}
          handleVoteSubmit={(choideId) => handleVoteSubmit(choideId)}
        />
      ))}
    </div>
  );
}

export default PollDetailView;
