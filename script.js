function showMore() {
  var moreProjects = document.getElementById("moreProjects");
  var showMoreBtn = document.getElementById("showMoreBtn");

  if (showMoreBtn.innerHTML === "Show less") {
    showMoreBtn.innerHTML = "Show more";
    moreProjects.style.display = "none";
  } else if (showMoreBtn.innerHTML === "Show more") {
    showMoreBtn.innerHTML = "Show less";
    moreProjects.style.display = "flex";
  }
}

// reveal elements  on scroll
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
//
