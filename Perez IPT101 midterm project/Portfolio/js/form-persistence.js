document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const NAME_KEY = 'contact_name';
  const EMAIL_KEY = 'contact_email';
  const MSG_KEY = 'contact_message';
  const saveNotice = document.getElementById('saveNotice');

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // load saved values
  nameInput.value = localStorage.getItem(NAME_KEY) || '';
  emailInput.value = localStorage.getItem(EMAIL_KEY) || '';
  messageInput.value = localStorage.getItem(MSG_KEY) || '';

  // show small saved message if anything exists
  function showSavedNote(){
    const any = nameInput.value || emailInput.value || messageInput.value;
    saveNotice.textContent = any ? 'Draft saved locally.' : '';
  }
  showSavedNote();

  // save on input (debounced lightly)
  let timer;
  function saveAll(){
    localStorage.setItem(NAME_KEY, nameInput.value);
    localStorage.setItem(EMAIL_KEY, emailInput.value);
    localStorage.setItem(MSG_KEY, messageInput.value);
    showSavedNote();
  }

  [nameInput, emailInput, messageInput].forEach(el => {
    el.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(saveAll, 300);
    });
  });

  // on submit, pretend to send and then clear saved data
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // simple validation
    if (!emailInput.value || !messageInput.value) {
      alert('Please fill email and message.');
      return;
    }
    // "submit" (here just clear)
    localStorage.removeItem(NAME_KEY);
    localStorage.removeItem(EMAIL_KEY);
    localStorage.removeItem(MSG_KEY);
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
    showSavedNote();
    alert('Message sent (demo).');
  });
});
