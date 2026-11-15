// extensions/TextToSayPlugin.tsx
export default function TextToSayPlugin({ text }: { text: string }) {
  const say = () => speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  return <button type="button" onClick={say}>🔊</button>;
}