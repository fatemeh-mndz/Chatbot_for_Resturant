document.getElementById('reserveBtn').addEventListener('click', () => {
  const phone = '33668613978'; // your number (no + or 0)
  const message = encodeURIComponent("Hi! I'd like to book a table at your restaurant.");
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
});
