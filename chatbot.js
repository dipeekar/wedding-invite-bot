<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anand & Deepika's Wedding</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', sans-serif;
      background: #e5ddd5;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .chat-container {
      width: 100%;
      max-width: 480px;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #ffffff;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      position: relative;
    }

    .chat-header {
      background-color: #075e54;
      color: white;
      padding: 16px;
      font-size: 18px;
      text-align: center;
    }

    #chatlog {
      flex: 1;
      padding: 16px;
      overflow-y: auto;
      background: #dcf8c6;
    }

    #chatlog div {
      margin-bottom: 10px;
    }

    .user-msg {
      background-color: #dcf8c6;
      padding: 8px 12px;
      border-radius: 10px;
      max-width: 80%;
      margin-left: auto;
      text-align: right;
    }

    .bot-msg {
      background-color: #ffffff;
      padding: 8px 12px;
      border-radius: 10px;
      max-width: 80%;
      margin-right: auto;
      text-align: left;
      border: 1px solid #ccc;
    }

    .input-area {
      display: flex;
      padding: 10px;
      background-color: #f0f0f0;
    }

    .input-area input {
      flex: 1;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    .input-area button {
      margin-left: 8px;
      padding: 10px 15px;
      background-color: #25d366;
      color: white;
      border: none;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="chat-container">
    <div class="chat-header">
      💬 Anand & Deepika Wedding Bot
    </div>

    <div id="chatlog"></div>

    <div class="input-area">
      <input type="text" id="userInput" placeholder="Type your message...">
      <button onclick="handleUserInput()">Send</button>
    </div>
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

      if (!input) return;

      const userDiv = document.createElement('div');
      userDiv.className = 'user-msg';
      userDiv.textContent = input;
      chatlog.appendChild(userDiv);

      if (expectingWish) {
        response = `Your wish has been recorded: “${input}” 💌 Thank you for your blessings!`;
        expectingWish = false;
      } else if (/^(hi|hello|hey)/.test(inputLower)) {
        response = "Hi there! I’m your wedding assistant 😊 Ask me anything about Anand & Deepika's big day!";
      } else if (inputLower.includes("when") || inputLower.includes("date") || inputLower.includes("time") || inputLower.includes("shubhamuhurtam")) {
        response = "The wedding is on Wednesday, 14th May 2025 at 10:58 A.M. Hope you’ll join us! 💐";
      } else if (inputLower.includes("who") && inputLower.includes("married") || inputLower.includes("bride") || inputLower.includes("groom")) {
        response = "It’s Anand and Deepika tying the knot 💍";
      } else if (inputLower.includes("venue") || inputLower.includes("place") || inputLower.includes("address")) {
        response = "The wedding venue is R. R. Dussa Events (Garden), Opp. Laxminarayan Talkies, M.L.D.C., Solapur.";
      } else if (inputLower.includes("map") || inputLower.includes("location") || inputLower.includes("send me") || inputLower.includes("share")) {
        response = "Sure! Here is the location: https://goo.gl/maps/j4BQRDjgzUjDF9UC7";
      } else if (inputLower.includes("congrats") || inputLower.includes("congratulations") || inputLower.includes("happy") || inputLower.includes("blessings")) {
        response = "Aww, thank you! That means a lot 🥰";
      } else if (inputLower.includes("wish") || inputLower.includes("bless") || inputLower.includes("message")) {
        response = "That’s so sweet of you! 💖 Please type your message now, and I’ll send it to Anand & Deepika!";
        expectingWish = true;
      } else {
        response = "I’m here to help with anything about the wedding — feel free to ask about timing, location, or even send your blessings!";
      }

      const botDiv = document.createElement('div');
      botDiv.className = 'bot-msg';
      botDiv.textContent = response;
      chatlog.appendChild(botDiv);

      inputField.value = "";
      chatlog.scrollTop = chatlog.scrollHeight;
    }
  </script>
</body>
</html>
