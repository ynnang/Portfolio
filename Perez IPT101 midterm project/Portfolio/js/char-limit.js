document.addEventListener('DOMContentLoaded', () => {
  const message = document.getElementById('message');
  const charCount = document.getElementById('charCount');
  const MAX = parseInt(message.getAttribute('maxlength') || '150', 10);

  function update() {
    const len = message.value.length;
    charCount.textContent = `${len} / ${MAX}`;
    if (len >= MAX) {
      charCount.style.color = 'var(--accent)';
    } else {
      charCount.style.color = '';
    }
  }

  message.addEventListener('input', update);
  update();
});
