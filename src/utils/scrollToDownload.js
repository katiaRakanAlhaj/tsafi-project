export const scrollToDownload = () => {
  const target = document.getElementById("download-app");
  if (!target) return;

  target.scrollIntoView({ behavior: "smooth", block: "center" });

  // Brief highlight so the user sees where to tap
  const btn = document.getElementById("google-play-btn");
  if (btn) {
    btn.classList.add("scale-110");
    setTimeout(() => btn.classList.remove("scale-110"), 1200);
  }
};