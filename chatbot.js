function handleUserInput() {
  const inputField = document.getElementById('userInput');
  const input = inputField.value.toLowerCase().trim();
  const chatlog = document.getElementById('chatlog');
  let response = "";

  // Keyword groups
  const timeWords = ["when", "timing", "shubhamuhurtam", "time"];
  const venueWords = ["venue", "where", "address", "location", "place"];
  const mapWords = ["map", "show me location", "send me location", "google map"];
  const coupleWords = ["who", "groom", "bride", "married", "getting married", "name"];

  if (timeWords.some(word => input.includes(word))) {
    response = "The wedding is at 10:58 A.M. on Wednesday, 14th May 2025.";
  } else if (venueWords.some(word => input.includes(word))) {
    response = "The wedding will take place at R. R. Dussa Events (Garden), Opp. Laxminarayan Talkies, M.L.D.C., Solapur.";
  } else if (mapWords.some(word => input.includes(word))) {
    response = "Sure! Here's the Google Maps location shown below.";
  } else if (coupleWords.some(word => input.includes(word))) {
    response = "The bride is Deepika and the groom is Anand 💐";
  } else {
    response = "I'm here to help! You can ask things like: When is the wedding? Who is getting married? Send me the location.";
  }

  chatlog.innerHTML += `<div><b>You:</b> ${input}</div>`;
  chatlog.innerHTML += `<div><b>Bot:</b> ${response}</div>`;
  inputField.value = "";
}
