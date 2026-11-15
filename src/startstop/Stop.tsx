import StopIcon from "./stop.svg";

export default function Stop({ onClick }: { onClick?: () => void }) {
  return (
    <button type="button" onClick={onClick} aria-label="Stop">
      <StopIcon />
    </button>
  );
}