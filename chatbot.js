<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anand & Deepika's Wedding</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card-container">
    <img src="wedding_card.jpg" alt="Wedding Card" class="wedding-card">
  </div>

  <div class="chatbox">
    <div id="chatlog"></div>
    <input type="text" id="userInput" placeholder="Ask something...">
    <button onclick="handleUserInput()">Send</button>
  </div>

  <div class="map">
    <iframe
      src="https://www.google.com/maps?q=R+R+Dussa+Events+(Garden),+Solapur&output=embed"
      width="100%" height="300" style="border:0;" allowfullscreen=""
      loading="lazy"></iframe>
  </div>

  <audio autoplay loop>
    <source src="wedding_song.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>

  <script>
    let expectingWish = false;

    function handleUserInput() {
      const inputField = document.getElementById("userInput");
      const input = inputField.value.trim();
      const inputLower = input.toLowerCase();
      const chatlog = document.getElementById("chatlog");
      let response = "";

      if (expectingWish) {
        response = `Your wish has been recorded: “${input}” 💌 Thank you for your blessings!`;
        expectingWish = false;
        chatlog.innerHTML += `<div><b>You:</b> ${input}</div>`;
        chatlog.innerHTML += `<div><b>Bot:</b> ${response}</div>`;
        inputField.value = "";
        return;
      }

      if (/^(hi|hello|hey)/.test(inputLower)) {
        response = "Hi there! I’m your wedding assistant 😊 Ask me anything about Anand & Deepika's big day!";
      } else if (inputLower.includes("when") || inputLower.includes("date") || inputLower.includes("time") || inputLower.includes("shubhamuhurtam")) {
        response = "The wedding is on Wednesday, 14th May 2025 at 10:58 A.M. Hope you’ll join us! 💐";
      } else if (inputLower.includes("who") && inputLower.includes("married") || inputLower.includes("bride") || inputLower.includes("groom")) {
        response = "It’s Anand and Deepika tying the knot 💍";
      } else if (inputLower.includes("venue") || inputLower.includes("place") || inputLower.includes("address")) {
        response = "The wedding venue is R. R. Dussa Events (Garden), Opp. Laxminarayan Talkies, M.L.D.C., Solapur.";
      } else if (inputLower.includes("map") || inputLower.includes("location") || inputLower.includes("send me") || inputLower.includes("share")) {
        response = "Of course! You’ll find the map just below 👇";
      } else if (inputLower.includes("congrats") || inputLower.includes("congratulations") || inputLower.includes("happy") || inputLower.includes("blessings")) {
        response = "Aww, thank you! That means a lot 🥰";
      } else if (inputLower.includes("wish") || inputLower.includes("bless") || inputLower.includes("message")) {
        response = "That’s so sweet of you! 💖 Please type your message now, and I’ll send it to Anand & Deepika!";
        expectingWish = true;
      } else {
        response = "I’m here to help with anything about the wedding — feel free to ask about timing, location, or even send your blessings!";
      }

      chatlog.innerHTML += `<div><b>You:</b> ${input}</div>`;
      chatlog.innerHTML += `<div><b>Bot:</b> ${response}</div>`;
      inputField.value = "";
    }
  </script>
</body>
</html>
