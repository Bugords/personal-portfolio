// Live Quezon City (Asia/Manila) time
function updateClock() {
  const clockEl = document.getElementById('clock');
  if (!clockEl) return;
  const time = new Intl.DateTimeFormat('en-PH', {
    timeZone: 'Asia/Manila',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).format(new Date());
  clockEl.textContent = `Quezon City · ${time}`;
}
updateClock();
setInterval(updateClock, 30000);

// Mailto form handler
const mailForm = document.getElementById('mailform');
if (mailForm) {
  mailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const msg = document.getElementById('msg').value.trim();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name}`);
    window.location.href = `mailto:bjorn@example.com?subject=${subject}&body=${body}`;
  });
}

// Copy email button
const copyBtn = document.getElementById('copy');
const copiedStatus = document.getElementById('copied');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    await navigator.clipboard.writeText('bjorn@example.com');
    copiedStatus.textContent = 'Copied!';
    setTimeout(() => (copiedStatus.textContent = ''), 2000);
  });
}