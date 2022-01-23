class DarkModeToggleButton {
  $DarkModeToggleButton = null;
  $DarkModeToggleButtonLabel = null;
  onClick = null;

  constructor({ $target }) {
    this.$DarkModeToggleButton = document.createElement("input");
    this.$DarkModeToggleButtonLabel = document.createElement("label");

    const isOsDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const theme = isOsDarkMode ? "dark" : "light";
    document.documentElement.dataset.theme = theme;

    this.$DarkModeToggleButton.type = "checkbox";
    this.$DarkModeToggleButton.id = "darkModeButton";

    this.$DarkModeToggleButtonLabel.setAttribute("for", "darkModeButton");
    this.$DarkModeToggleButtonLabel.textContent = isOsDarkMode
      ? "Dark Mode"
      : "Light Mode";
    this.$DarkModeToggleButtonLabel.className = "DarkModeButtonLabel";

    $target.appendChild(this.$DarkModeToggleButton);
    $target.appendChild(this.$DarkModeToggleButtonLabel);

    this.$DarkModeToggleButton.addEventListener("click", () => {
      const isDarkMode = document.documentElement.dataset.theme === "dark";
      const newTheme = isDarkMode ? "light" : "dark";
      const newModeName = isDarkMode ? "Light Mode" : "Dark Mode";

      document.documentElement.setAttribute("data-theme", newTheme);
      this.$DarkModeToggleButtonLabel.textContent = newModeName;
    });
  }
}
