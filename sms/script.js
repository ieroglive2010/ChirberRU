const recipientInput = document.getElementById('recipient');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('sendButton');
const resultDiv = document.getElementById('result');

sendButton.addEventListener('click', () => {
  const recipient = recipientInput.value;
  const message = messageInput.value;

  // Замените на свой API-ключ и номер Twilio
  const apiKey = 'YOUR_API_KEY';
  const twilioNumber = '+11234567890'; 

  fetch(`https://api.twilio.com/2010-04-01/Accounts/${apiKey}/Messages.json`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa('ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxx:your_auth_token')}`, // Замените на свой SID и токен
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `To=${recipient}&From=${twilioNumber}&Body=${message}`
  })
  .then(response => {
    if (response.ok) {
      resultDiv.textContent = 'SMS отправлено успешно!';
    } else {
      resultDiv.textContent = 'Ошибка отправки SMS.';
    }
  })
  .catch(error => {
    resultDiv.textContent = 'Произошла ошибка: ' + error;
  });
}); 
