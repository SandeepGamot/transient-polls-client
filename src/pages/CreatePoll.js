import React, { useRef, useState } from "react";
import axios from "axios";
import { api } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import ShareUrl from "../components/ShareUrl";

function CreatePoll() {
  const [question, setQuestion] = useState("");
  const [choiceText, setChoiceText] = useState("");
  const [choices, setChoices] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [shareUrl, setShareUrl] = useState();
  const [hour, setHour] = useState(1);
  const choiceInputRef = useRef(null);

  const isMinValidationSatisfied = choices.length >= 2;
  const isValidQuestion = question.trim().length > 0;
  const questionInputStyle =
    "w-11/12 md:w-/12 lg:w-9/12 max-w-xl text-center border-2 focus:border-4 overflow-x-auto";
  const questionDisplayStyle =
    " px-2 w-11/12 md:w-/12 lg:w-9/12 max-w-xl text-center text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 overflow-x-auto";
  const choiceInputStyle =
    "text-sm md:text-md lg:text-xl w-11/12 md:w-/12 lg:w-9/12 max-w-xl text-center rounded-md border-2 focus:border-4 focus:border-gray-800  text-gray-700 focus:text-gray-800 focus:font-semibold overflow-x-auto";

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleChoiceTextChange = (event) => {
    setChoiceText(event.target.value);
  };

  const handleHourChange = (event) => {
    setHour(parseInt(event.target.value, 10));
  };
  const addChoice = () => {
    if (choiceText.trim().length > 0) {
      setChoices([...choices, { index: choices.length, text: choiceText }]);
      setChoiceText("");
    }
  };

  const removeChoice = (index) => {
    setChoices(choices.filter((choice) => choice.index !== index));
  };

  const handleSubmit = () => {
    setSubmitting(true);

    const data = {
      question: question,
      choices: choices.map((choice) => choice.text),
      hour: hour
    };
    axios
      .post(`${api.baseUrl}/create`, data)
      .then((response) => {
        setShareUrl(`${window.origin}/polls/${response.data._id}`);
        setSubmitting(false);
      })
      .catch((err) => (window.location.href = "/500"));
  };

  const allChoices = choices.map((choice) => (
    <div key={choice.index} className="flex justify-center my-4">
      <div className=" flex items-center md:py-2 lg:py-3 text-sm md:text-md lg:text-xl text-gray-700 w-11/12 md:w-/12 lg:w-9/12 max-w-xl border rounded shadow-md">
        <div className="overflow-x-auto w-full px-4 font-bold">
          {choice.text}
        </div>
        <div
          onClick={() => removeChoice(choice.index)}
          className="pr-4 text-2xl text-red-600 cursor-pointer"
        >
          <i className="ri-close-line"></i>
        </div>
      </div>
    </div>
  ));

  return submitting ? (
    <LoadingScreen displayText={"Submitting..."} />
  ) : shareUrl == null ? (
    <div className="w-screen text-center">
      <div className="mt-24">
        <input
          className={
            isValidQuestion ? questionDisplayStyle : questionInputStyle
          }
          value={question}
          onKeyDown={(event) => {
            if (event.key === 13 || event.key === "Enter")
              choiceInputRef.current.focus();
          }}
          onChange={handleQuestionChange}
          placeholder="Your question here"
        />
      </div>
      <div className="text-gray-600 mt-4 mb-12 text-sm">
        Choose how many hours this poll will be active
        <div>
          <label className="mx-2">
            <input
              className="mx-1"
              type="radio"
              value={1}
              checked={hour === 1}
              onChange={handleHourChange}
            />
            1
          </label>
          <label className="mx-2">
            <input
              className="mx-1"
              type="radio"
              value={2}
              checked={hour === 2}
              onChange={handleHourChange}
            />
            2
          </label>
          <label className="mx-2">
            <input
              className="mx-1"
              type="radio"
              value={3}
              checked={hour === 3}
              onChange={handleHourChange}
            />
            3
          </label>
          <label className="mx-2">
            <input
              className="mx-1"
              type="radio"
              value={4}
              checked={hour === 4}
              onChange={handleHourChange}
            />
            4
          </label>
        </div>
      </div>
      {allChoices}
      {choices.length < 10 && (
        <>
          <div>
            <input
              className={choiceInputStyle}
              value={choiceText}
              onChange={handleChoiceTextChange}
              placeholder={"Your choice here"}
              ref={choiceInputRef}
              onKeyDown={(event) => {
                if (event.key === 13 || event.key === "Enter") addChoice();
              }}
            />
          </div>
          <button
            onClick={addChoice}
            className="mt-4 text-white bg-blue-600 hover:bg-blue-500 px-8 py-2 rounded shadow-md"
          >
            Add
          </button>
        </>
      )}
      {!isMinValidationSatisfied ? (
        <p className="text-xs text-gray-500">
          <i className="ri-information-fill"></i> Note: atleast add 2 choices
        </p>
      ) : undefined}

      <div className="mb-16">
        <button
          onClick={
            isMinValidationSatisfied && isValidQuestion
              ? handleSubmit
              : undefined
          }
          className={
            isMinValidationSatisfied && isValidQuestion
              ? "mt-16 bg-green-600 hover:bg-green-500 text-white py-2 px-16 md:px-20 lg:px-32 rounded text-lg font-semibold shadow-lg"
              : "mt-16 bg-gray-300 text-white py-2 px-16 md:px-20 lg:px-32 rounded text-lg font-semibold focus:outline-none cursor-not-allowed"
          }
        >
          Create Poll
        </button>
      </div>
    </div>
  ) : (
    <ShareUrl url={shareUrl} />
  );
}
export default CreatePoll;
