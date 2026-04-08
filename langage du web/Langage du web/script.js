const mcHelpButton = document.getElementById("mc-help-button");
const mcChatPanel = document.getElementById("mc-chat-panel");
const mcChatInput = document.getElementById("mc-chat-input");
const mcChatMessages = document.getElementById("mc-chat-messages");

// Ouvrir / fermer
mcHelpButton.addEventListener("click", () => {
  mcChatPanel.classList.toggle("mc-open");
});

// Envoi message
mcChatInput.addEventListener("keydown", async (e) => {
  if (e.key === "Enter" && mcChatInput.value.trim() !== "") {
    const userMessage = mcChatInput.value.trim();
    mcChatInput.value = "";

    mcAddMessage("mc-user", userMessage);

    // IA factice
    const response = await mcFakeAI(userMessage);
    mcAddMessage("mc-ai", response);
  }
});

// Ajouter message
function mcAddMessage(sender, text) {
  const wrapper = document.createElement("div");
  wrapper.className = `mc-message ${sender}`;

  const bubble = document.createElement("span");
  bubble.textContent = text;

  wrapper.appendChild(bubble);
  mcChatMessages.appendChild(wrapper);
  mcChatMessages.scrollTop = mcChatMessages.scrollHeight;
}

// Faux chatbot
async function mcFakeAI(message) {
  return "Tu as dit : « " + message + " ». (Réponse de test)";
}