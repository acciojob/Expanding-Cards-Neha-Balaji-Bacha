//your JS code here. If required.
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActive();
    panel.classList.add('active');
  });
});

function removeActive() {
  panels.forEach(p => p.classList.remove('active'));
}

