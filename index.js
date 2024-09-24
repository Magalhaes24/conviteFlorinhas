document.addEventListener('DOMContentLoaded', function() {
  const noButton = document.getElementById('noButton');

  const triggerDistance = 100; 

  document.addEventListener('mousemove', function(e) {
      const rect = noButton.getBoundingClientRect();
      const buttonCenter = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
      };
      const distance = Math.sqrt(Math.pow(buttonCenter.x - e.clientX, 2) + Math.pow(buttonCenter.y - e.clientY, 2));

      if (distance < triggerDistance) {
          moveButtonAway(e.clientX, e.clientY);
      }
  });

  function moveButtonAway(cursorX, cursorY) {
      let newX, newY;
      do {
          newX = Math.random() * (window.innerWidth - noButton.offsetWidth);
          newY = Math.random() * (window.innerHeight - noButton.offsetHeight);
      } while (Math.abs(newX - cursorX) < triggerDistance && Math.abs(newY - cursorY) < triggerDistance);

      noButton.style.position = 'fixed';
      noButton.style.left = `${newX}px`;
      noButton.style.top = `${newY}px`;
  }
});

function nextPage() {
  window.location.href = "yes.html";
}
