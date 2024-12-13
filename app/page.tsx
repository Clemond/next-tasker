import React from "react";
import Header from "./components/header";
import TextField from "./components/textField";
import Button from "./components/button";

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/todo-background.jpg')" }}
    >
      <div className="h-screen flex flex-col justify-between">
        <Header />
        <div className="flex justify-center pb-10">
          <TextField />
          <Button />
        </div>
      </div>
    </div>
  );
}
