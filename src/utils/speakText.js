export const speakText = (
  text,
  { lang = "en-US", rate = 0.9, pitch = 1, cancelCurrent = true } = {},
) => {
  if (
    typeof window === "undefined" ||
    !("speechSynthesis" in window) ||
    typeof window.SpeechSynthesisUtterance === "undefined" ||
    !text
  ) {
    return;
  }

  if (cancelCurrent) {
    window.speechSynthesis.cancel();
  }

  const utterance = new window.SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = rate;
  utterance.pitch = pitch;

  window.speechSynthesis.speak(utterance);
};
