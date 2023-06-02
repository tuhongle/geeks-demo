//? Change theme

const changeTheme = document.getElementById("change-theme");

changeTheme.onclick = function () {
  if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
    document.documentElement.setAttribute("data-bs-theme", "light");
    changeTheme.children[0].classList.replace(
      "bi-moon-fill",
      "bi-brightness-high-fill"
    );
  } else {
    document.documentElement.setAttribute("data-bs-theme", "dark");
    changeTheme.children[0].classList.replace(
      "bi-brightness-high-fill",
      "bi-moon-fill"
    );
  }
};
