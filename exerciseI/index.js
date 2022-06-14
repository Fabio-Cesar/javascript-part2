const chatLog = document.querySelector('#chat-overview');
const chatMsg = document.querySelector('#chat-message');
const sendBtn = document.querySelector('#send-message');
const eraseBtn = document.querySelector('#erase-chat-history');

function sendMsg() {
    const chatText = chatMsg.value;
    if (chatLog.value === "") {
        chatLog.textContent += `${chatText}`;
    }
    else {
        chatLog.textContent += `\n${chatText}`;
    }
    chatLog.scrollTop = chatLog.scrollHeight - 154;
}

function sendMsg2(e) {
    if (e.key == 'Enter') {
        const chatText = chatMsg.value;
        if (chatLog.value === "") {
            chatLog.textContent += `${chatText}`;
        }
        else {
            chatLog.textContent += `\n${chatText}`;
        }
    }
    chatLog.scrollTop = chatLog.scrollHeight - 154;
}

function clearChat() {
    chatLog.textContent = "";
}

chatMsg.addEventListener('keydown', sendMsg2);
sendBtn.addEventListener('click', sendMsg);
eraseBtn.addEventListener('click', clearChat);