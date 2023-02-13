const iconContainers = document.querySelectorAll(".icon-container");

iconContainers.forEach(iconContainer => {
  iconContainer.addEventListener("mouseenter", function() {
    this.children[1].style.display = "block";
  });
  
  iconContainer.addEventListener("mouseleave", function() {
    this.children[1].style.display = "none";
  });
});
