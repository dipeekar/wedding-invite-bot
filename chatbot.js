function handleUserInput() {
  const input = document.getElementById('userInput').value.toLowerCase();
  const chatlog = document.getElementById('chatlog');
  let response = "";

  if (input.includes("time") || input.includes("shubhamuhurtam")) {
    response = "The wedding is at 10:58 A.M. on Wednesday, 14th May 2025.";
  } else if (input.includes("venue") || input.includes("where")) {
    response = "Venue: R. R. Dussa Events (Garden), Opp. Laxminarayan Talkies, M.L.D.C., Solapur.";
  } else if (input.includes("map") || input.includes("location")) {
    response = "Here's the map location just below the chatbot.";
  } else if (input.includes("who") || input.includes("bride") || input.includes("groom")) {
    response = "The wedding is between Anand and Deepika!";
  } else {
    response = "Sorry, I didn’t get that. You can ask about time, venue, map or names.";
  }

  chatlog.innerHTML += `<div><b>You:</b> ${input}</div>`;
  chatlog.innerHTML += `<div><b>Bot:</b> ${response}</div>`;
  document.getElementById('userInput').value = "";
}
