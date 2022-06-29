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
