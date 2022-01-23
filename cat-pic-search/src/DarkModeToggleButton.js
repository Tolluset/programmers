class DarkModeToggleButton {
  $DarkModeToggleButton = null;
  onClick = null;

  constructor({ $target }) {
    const $DarkModeToggleButton = document.createElement("input");
    this.$DarkModeToggleButton = $DarkModeToggleButton;
    this.$DarkModeToggleButton.type = "checkbox";

    $target.appendChild($DarkModeToggleButton);

    $DarkModeToggleButton.addEventListener("click", () => {
      const isOsDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
      const theme = !isOsDarkMode ? "dark-theme" : "light-theme";

      document.body.classList.toggle(theme);
    });
  }
}
