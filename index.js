// Select the button
const btn = document.querySelector(".btn-toggle");

// Listen for a click on the button
btn.addEventListener("click", function () {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.documentElement.classList.toggle("dark");

  console.log("CLICKED");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
});
