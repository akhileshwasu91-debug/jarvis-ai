const mic = document.getElementById("mic");
const chat = document.getElementById("chat");

mic.onclick = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    chat.innerHTML += "<p>❌ Voice recognition is not supported in this browser.</p>";
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";

  recognition.start();

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;

    chat.innerHTML += `<p><b>You:</b> ${text}</p>`;

    let reply = "I heard: " + text;

    if (text.toLowerCase().includes("hello")) {
      reply =
