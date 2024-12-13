export default function Header() {
  const date = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="text-white text-2xl font-bold p-5">
      <p>Today's Tasks</p>
      <p className="font-thin">{date}</p>
    </div>
  );
}
