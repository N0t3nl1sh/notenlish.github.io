function copyDiscordName(e) {
  navigator.clipboard
    .writeText(e)
    .then(() => {
      alert("Copied the discord name to your clipboard: " + e);
    })
    .catch((e) => {
      console.error("Could not copy text: ", e);
    });
}
addEventListener("DOMContentLoaded", () => {
  let e = document.getElementById("left-button"),
    t = document.getElementById("right-button"),
    o = document.querySelectorAll("section");
  o = document.querySelectorAll("section");
  let l = 0;
  function s() {
    0 === l
      ? (e.style.opacity = "0.5")
      : l === o.length - 1
      ? (t.style.opacity = "0.5")
      : ((e.style.opacity = "1"), (t.style.opacity = "1")),
      o.forEach((e, t) => {
        t === l
          ? (e.classList.add("active"),
            e.classList.remove("left"),
            e.classList.remove("right"),
            (e.style.left = "0px"))
          : (e.classList.remove("active"),
            t > l
              ? (e.classList.add("right"), e.classList.remove("left"))
              : (e.classList.remove("right"), e.classList.add("left")));
      });
  }
  t.addEventListener("click", () => {
    l !== o.length - 1 && (l++, s());
  }),
    e.addEventListener("click", () => {
      0 !== l && (l--, s());
    });
});
const footer = document.getElementById("footer"),
  lol = document.getElementById("lol");
footer.addEventListener("mouseover", () => {
  lol.classList.add("visible");
}),
  footer.addEventListener("mouseout", () => {
    lol.classList.remove("visible");
  });
