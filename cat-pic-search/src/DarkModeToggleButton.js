class DarkModeToggleButton {
  $Checkbox = null;
  $Label = null;
  onClick = null;

  constructor({ $target }) {
    this.$Checkbox = document.createElement("input");
    this.$Label = document.createElement("label");

    const isOsDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const theme = isOsDarkMode ? "dark" : "light";
    document.documentElement.dataset.theme = theme;

    this.$Checkbox.type = "checkbox";
    this.$Checkbox.id = "darkModeButton";

    this.$Label.setAttribute("for", "darkModeButton");
    this.$Label.textContent = isOsDarkMode
      ? "Dark Mode"
      : "Light Mode";
    this.$Label.className = "DarkModeButtonLabel";

    $target.appendChild(this.$Checkbox);
    $target.appendChild(this.$Label);

    this.$Checkbox.addEventListener("click", () => {
      const isDarkMode = document.documentElement.dataset.theme === "dark";
      let theme, modeName;

      if (isDarkMode) {
        theme = "light";
        modeName = "Light Mode";
      } else {
        theme = "dark";
        modeName = "Dark Mode";
      }

      document.documentElement.setAttribute("data-theme", theme);
      this.$Label.textContent = modeName;
    });
  }
}
