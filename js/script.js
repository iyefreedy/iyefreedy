const toggle = document.querySelector("#side-toggle");
const sidebar = document.querySelector(".sidebar");
const close = document.querySelector(".fa-times");
const sidebarlink = document.querySelector("#link");

toggle.addEventListener("click", () => {
  sidebar.style.right = 0;
});

close.addEventListener("click", () => {
  sidebar.style.right = "-9999px";
});

sidebarlink.addEventListener("click", () => {
  sidebar.style.right = -9999;
});
