// drawer-menu
const target = document.getElementById("menu");
target.addEventListener('click', () => {
  const target = document.getElementById("menu");
  target.classList.toggle('open');
  const nav = document.getElementById("drawer-nav");
  nav.classList.toggle('in');
});

// scrollTop
function scrollTop(elem) {
  const target = document.getElementById(elem);
  target.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

scrollTop('button');
