document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const textLocationsArray = [];
textLocationsArray[0] = "Texts/Hobbies/hobbyKartText1";
textLocationsArray[1] = "Texts/Hobbies/hobbyWandernText1";
textLocationsArray[2] = "Texts/Hobbies/hobbySportText1";

for (let i = 0; i < textLocationsArray.length; i++) {
  fetch(textLocationsArray[i]).then(response => {
    return response.text();
  })
    .then(fileText => document.getElementById(textLocationsArray[i].split("/").pop()).textContent = fileText);
}

document.querySelectorAll(".hobbyKartClick").forEach(click => {
  click.addEventListener("click", function () {
    hobbyContainerExpansion("hobbyWandernContainer", "hobbySportContainer", "hobbyKartContainer");
  })
});


document.querySelectorAll(".hobbyWandernClick").forEach(click => {
  click.addEventListener("click", function () {
    hobbyContainerExpansion("hobbyKartContainer", "hobbySportContainer", "hobbyWandernContainer");
  })
});
document.querySelectorAll(".hobbySportClick").forEach(click => {
  click.addEventListener("click", function () {
    hobbyContainerExpansion("hobbyKartContainer", "hobbyWandernContainer", "hobbySportContainer");
  })
});

function hobbyContainerExpansion(hideContainerOne, hideContainerTwo, expandContainer) {


  if (document.getElementById(hideContainerOne).style.display === "none") {
    document.getElementById(hideContainerTwo).style.display = "block";
    document.getElementById(hideContainerOne).style.display = "block";
    document.getElementById(expandContainer).style.width = "33%";

  } else {
    document.getElementById(hideContainerOne).style.display = "none";
    document.getElementById(hideContainerTwo).style.display = "none";
    document.getElementById(expandContainer).style.width = "80%";
  }
}






