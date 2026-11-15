self.onmessage = (e) => {
  speechSynthesis.speak(new SpeechSynthesisUtterance(e.data));
};