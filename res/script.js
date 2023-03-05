console.log("Hello World!");
const prevBtn = document.getElementById('left-button');
const nextBtn = document.getElementById('right-button');
let sections = document.querySelectorAll("section");
sections = document.querySelectorAll("section");
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  if (currentIndex === sections.length - 1) {
    return;
  }
  currentIndex++;
  console.log(currentIndex);
  updateSections();
});

prevBtn.addEventListener('click', () => {
  if (currentIndex === 0) {
    return;
  }
  currentIndex--;
  console.log(currentIndex);
  updateSections();
});

function updateSections() {
  if (currentIndex === 0) {
    prevBtn.style.opacity = "0.5";
  } else if (currentIndex === sections.length - 1) {
    nextBtn.style.opacity = "0.5";
  } else {
    prevBtn.style.opacity = "1";
    nextBtn.style.opacity = "1";
  }

  sections.forEach((section, index) => {
    if (index === currentIndex) {
        section.classList.add('active');
        section.classList.remove('left');
        section.classList.remove('right');
        section.style.left = "0px";
    } else { // not the current section
        section.classList.remove('active');
        if (index > currentIndex) { // section is to the left of the section we want to show
            section.classList.add('right');
            section.classList.remove('left');
        } else { // section is to the right of the section we want to show
            section.classList.remove('right');
            section.classList.add('left');
        }
    }
  });
}

function copyDiscordName(text){
  console.log("copyDiscordName");
  // Copy the text inside the text field
  navigator.clipboard.writeText(text)
    .then(() => {
      alert("Copied the discord name to your clipboard: " + text);
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
    });
}