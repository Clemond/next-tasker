"use client";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  // Initialize the next.js router
  const router = useRouter();

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/todo-background.jpg')" }}
    >
      <div className="h-screen flex flex-col items-center justify-center gap-2">
        <p className="p-4 text-xl font-bold">Welcome to Next Tasker!</p>

        <button
          className="bg-blue-600 p-4 w-40 rounded-md hover:bg-blue-500"
          type="button"
          onClick={() => router.push("/signup")}
        >
          Create account
        </button>
        <button
          className="bg-blue-600 p-4 w-40 rounded-md hover:bg-blue-500"
          type="button"
          onClick={() => router.push("/login")}
        >
          Log in
        </button>
      </div>
    </div>
  );
}
