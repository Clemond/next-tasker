"use client";

import React, { ChangeEvent, useState } from "react";
import Header from "../components/header";
import TextField from "../components/textField";
import Button from "../components/button";
import Task from "../components/task";

export default function Home() {
  const [tasksList, setTasksList] = useState<string[]>([]);
  const [newTask, setNewtask] = useState<string>("");

  const addtask = () => {
    if (newTask.trim()) {
      setTasksList([...tasksList, newTask]);
      setNewtask("");
    }
  };

  const completeTask = (index: number) => {
    const updatedTasks = [...tasksList];
    updatedTasks.splice(index, 1);
    setTasksList(updatedTasks);
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/todo-background.jpg')" }}
    >
      <div className="flex-grow">
        <Header />
        <div className="px-5">
          {tasksList.map((task, index) => (
            <Task
              key={index}
              text={task}
              index={index}
              completeTask={completeTask}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center pb-10">
        <TextField
          value={newTask}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewtask(e.target.value)
          }
        />
        <Button onClick={addtask} />
      </div>
    </div>
  );
}
