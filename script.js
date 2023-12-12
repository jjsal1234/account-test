// Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
const apiKey = 'YOUR_OPENAI_API_KEY';
const endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    appendMessage('user', userInput);

    const botResponse = await getBotResponse(userInput);
    appendMessage('bot', botResponse);
}

async function getBotResponse(userInput) {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            prompt: userInput,
            max_tokens: 150,
        }),
    });

    const data = await response.json();
    return data.choices[0].text.trim();
}

function appendMessage(sender, text) {
    const chatDisplay = document.getElementById('chat-display');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.innerText = text;
    chatDisplay.appendChild(messageElement);
}
