export default function Button(props: { onClick: () => void }) {
  return (
    <button
      className=" text-gray-500 w-14 h-14 bg-white rounded-full border border-gray-400 ml-2"
      onClick={props.onClick}
    >
      +
    </button>
  );
}
