export default detectDarkMode = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
  }
};
