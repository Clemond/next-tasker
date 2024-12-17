"use client";
import { CustomUser } from "@/app/_type/ICustomUser";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LogIn() {
  const [customUser, setCustomUser] = useState<CustomUser>({
    username: "",
    password: "",
  });

  // Initialize the next.js router
  const router = useRouter();

  async function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const loginRequest: CustomUser = {
      username: customUser.username,
      password: customUser.password,
    };

    // POST request to login endpont
    const result = await fetch("http://localhost:8080/api/v1/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(loginRequest),
    });

    if (result.ok) {
      const data = await result.text();
      console.log(data);

      alert("Login successful!");

      router.push("/home"); // Redirect to home page
    } else {
      const resultErrorText = await result.text();
      console.log(resultErrorText);

      alert("Failed to login: " + resultErrorText);
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCustomUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/todo-background.jpg')" }}
    >
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="p-4 text-xl font-bold">Log In</p>
        <form
          onSubmit={handleOnSubmit}
          method="post"
          className="flex flex-col max-w-sm gap-4"
        >
          {/* Username */}
          <label htmlFor="username">Username</label>
          <input
            className="text-black"
            type="text"
            name="username"
            value={customUser.username}
            onChange={handleChange}
          />
          {/* Password */}
          <label htmlFor="password">Password</label>
          <input
            className="text-black"
            type="password"
            name="password"
            value={customUser.password}
            onChange={handleChange}
          />

          <button
            className="bg-blue-600 p-4 rounded-md hover:bg-blue-500"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
