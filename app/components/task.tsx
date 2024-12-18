"use client";
import React, { useState } from "react";

export default function Task(props: {
  text: string;
  index: number;
  completeTask: (index: number) => void;
}) {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleToggleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  const handleDeletetask = () => {
    props.completeTask(props.index);
  };

  return (
    <div className="flex items-center justify-between bg-white p-5 rounded-lg shadow-xl mb-4">
      <div className="flex items-center">
        <button
          className={`w-6 h-6 flex items-center justify-center rounded-md mr-4 ${
            isCompleted ? "bg-blue-500" : "bg-blue-200"
          }`}
          onClick={handleToggleComplete}
        >
          {isCompleted && <p>✔️</p>}
        </button>
        <div
          className={`text-lg text-black ${
            isCompleted ? "line-through text-gray-500" : ""
          }`}
        >
          {props.text}
        </div>
      </div>
      <button onClick={handleDeletetask} className="text-xl">
        🗑️
      </button>
    </div>
  );
}
