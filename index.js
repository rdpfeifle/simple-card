const container = document.querySelector(".container");

const moveContainerUp = () => {
  container.style.transform = "translateY(-10px)";
  container.style.transition = "transform 0.4s ease-in-out";
};

const resetContainerPosition = () => {
  container.style.transform = "translateY(0)";
};

container.addEventListener("mouseover", moveContainerUp);
container.addEventListener("mouseleave", resetContainerPosition);
