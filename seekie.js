// let currentIndex = 0;

// const items = document.querySelectorAll(".carousel-item");
// const carousel = document.querySelector(".carousel-images");
// const prevButton = document.querySelector(".prev");
// const nextButton = document.querySelector(".next");

// function showImage(index) {
//   const totalItems = items.length;
//   if (index < 0) {
//     currentIndex = totalItems - 1;
//   } else if (index >= totalItems) {
//     currentIndex = 0;
//   }

//   const offset = -currentIndex * 100; // Shift the entire row
//   carousel.style.transform = `translateX(${offset}%)`;
// }

// prevButton.addEventListener("click", () => {
//   currentIndex--;
//   showImage(currentIndex);
// });

// nextButton.addEventListener("click", () => {
//   currentIndex++;
//   showImage(currentIndex);
// });

// showImage(currentIndex); // Show the first image initially

let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item"); // Select all items
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

// Function to show the correct image and paragraph based on the current index
function showItem(index) {
  const totalItems = items.length;

  // Hide all items
  items.forEach((item, idx) => {
    item.style.display = idx === index ? "block" : "none"; // Only show the current item
  });
}

// Show the previous item
prevButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = items.length - 1; // Wrap around to the last item
  showItem(currentIndex);
});

// Show the next item
nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= items.length) currentIndex = 0; // Wrap around to the first item
  showItem(currentIndex);
});

// Initialize the carousel to show the first item
showItem(currentIndex);
