import { ChangeEvent } from "react";

export default function TextField(props: {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      className="text-gray-700 py-3 px-4 rounded-full border border-gray-400 w-64 mr-2 "
      type="text"
      placeholder="Type task here..."
      value={props.value}
      onChange={props.onChange}
    />
  );
}
