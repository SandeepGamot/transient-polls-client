import React, { useRef, useState } from "react";

function CreatePoll() {
  const [question, setQuestion] = useState("");
  const [choiceText, setChoiceText] = useState("");
  const [choices, setChoices] = useState([]);
  const choiceInputRef = useRef(null);

  const isMinValidationSatisfied = choices.length >= 2;

  const questionInputStyle =
    "text-lg rounded-md md:text-xl lg:text-2xl w-11/12 md:w-/12 lg:w-9/12 max-w-xl text-center border-2 focus:border-4 focus:border-gray-800  text-gray-700 font-semibold focus:text-gray-800 focus:font-bold overflow-x-auto";
  const questionDisplayStyle =
    "w-11/12 md:w-/12 lg:w-9/12 max-w-xl text-center text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800";
  const choiceInputStyle =
    "text-sm md:text-md lg:text-xl w-11/12 md:w-/12 lg:w-9/12 max-w-xl text-center rounded-md border-2 focus:border-4 focus:border-gray-800  text-gray-700 focus:text-gray-800 focus:font-semibold overflow-x-auto";

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleChoiceTextChange = (event) => {
    setChoiceText(event.target.value);
  };

  const addChoice = () => {
    if (choiceText.trim().length > 0) {
      setChoices([...choices, { id: choices.length, text: choiceText }]);
      setChoiceText("");
    }
  };

  const removeChoice = (id) => {
    setChoices(choices.filter((choice) => choice.id !== id));
  };

  const handleSubmit = () => {};

  const allChoices = choices.map((choice) => (
    <div key={choice.id} className="flex justify-center my-4">
      <div className=" flex items-center md:py-2 lg:py-3 text-sm md:text-md lg:text-xl text-gray-700 w-11/12 md:w-/12 lg:w-9/12 max-w-xl border rounded shadow-md">
        <div className="overflow-x-auto w-full px-4 font-bold">
          {choice.text}
        </div>
        <div
          onClick={() => removeChoice(choice.id)}
          className="pr-4 text-2xl text-red-600 cursor-pointer"
        >
          <i className="ri-close-line"></i>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="w-screen text-center">
      <div className="mt-24 mb-12 overflow-x-auto w-full">
        <input
          className={
            question.trim().length > 0
              ? questionDisplayStyle
              : questionInputStyle
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
            className="mt-4 text-white bg-blue-600 hover:bg-blue-500 px-8 py-2 rounded"
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
      <div className="{w_all}">
        <button
          onClick={isMinValidationSatisfied ? handleSubmit : undefined}
          className={
            isMinValidationSatisfied
              ? "mt-16 bg-green-600 hover:bg-green-500 text-white py-2 px-16 md:px-20 lg:px-32 rounded text-lg font-semibold"
              : "mt-16 bg-gray-300 text-white py-2 px-16 md:px-20 lg:px-32 rounded text-lg font-semibold focus:outline-none cursor-not-allowed"
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
}
export default CreatePoll;
