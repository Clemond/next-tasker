import Image from "next/image";

export default function Home() {
  const date = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/todo-background.jpg')" }}
    >
      <div className="text-white text-2xl font-bold p-5">
        <p>Today's Tasks</p>
        <p className="font-thin">{date}</p>
      </div>
    </div>
  );
}
