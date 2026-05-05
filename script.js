const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});
