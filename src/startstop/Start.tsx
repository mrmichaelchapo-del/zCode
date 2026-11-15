import PlayIcon from "./start.svg";

export default function Start({ onClick }: { onClick?: () => void }) {
  return (
    <button type="button" onClick={onClick} aria-label="Start">
      <PlayIcon />
    </button>
  );
}