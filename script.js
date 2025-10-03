document.addEventListener("DOMContentLoaded", () => {
  const welcome = document.getElementById("welcome");
  const content = document.getElementById("content");

  // Fade out after 3s
  setTimeout(() => {
    welcome.classList.add("hide");
  }, 3000);

  // Remove and show content after 4s
  setTimeout(() => {
    welcome.style.display = "none";
    content.style.display = "block";
  }, 4000);
});
