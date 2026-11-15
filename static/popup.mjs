// popup.mjs
const popup = window.open(
  "https://zcode.dev/projects/1",
  "project1",
  "width=800,height=600"
);

if (!popup) {
  alert("Popup blocked — allow popups for this site.");
}