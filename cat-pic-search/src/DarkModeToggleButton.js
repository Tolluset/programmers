class DarkModeToggleButton {
  $DarkModeToggleButton = null;
  $DarkModeToggleButtonLabel = null;
  onClick = null;

  constructor({ $target }) {
    const $DarkModeToggleButton = document.createElement("input");
    const $DarkModeToggleButtonLabel = document.createElement("label");

    const isOsDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const theme = isOsDarkMode ? "dark" : "light";
    document.documentElement.dataset.theme = theme;

    this.$DarkModeToggleButton = $DarkModeToggleButton;
    this.$DarkModeToggleButton.type = "checkbox";
    this.$DarkModeToggleButton.id = "darkModeButton";

    this.$DarkModeToggleButtonLabel = $DarkModeToggleButtonLabel;
    this.$DarkModeToggleButtonLabel.setAttribute("for", "darkModeButton");
    this.$DarkModeToggleButtonLabel.textContent = isOsDarkMode
      ? "Dark Mode"
      : "Light Mode";
    $DarkModeToggleButtonLabel.className = "DarkModeButtonLabel";

    $target.appendChild($DarkModeToggleButton);
    $target.appendChild($DarkModeToggleButtonLabel);

    $DarkModeToggleButton.addEventListener("click", () => {
      const isDarkMode = document.documentElement.dataset.theme === "dark";
      const newTheme = isDarkMode ? "light" : "dark";
      const newModeName = isDarkMode ? "Light Mode" : "Dark Mode";

      document.documentElement.setAttribute("data-theme", newTheme);
      $DarkModeToggleButtonLabel.textContent = newModeName;
    });
  }
}
