const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s `;
      }
    });

    // Toggle visibility of the Instagram icon

    burger.classList.toggle("toggle");
  });
};

navSlide();

// Your existing JavaScript code

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("my-slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

const logoLink = document.querySelector(".logo-link");
const normalLogo = document.querySelector(".logo-image.normal");
const invertedLogo = document.querySelector(".logo-image.inverted");

logoLink.addEventListener("mouseenter", () => {
  normalLogo.classList.add("hidden");
  invertedLogo.classList.remove("hidden");
});

logoLink.addEventListener("mouseleave", () => {
  normalLogo.classList.remove("hidden");
  invertedLogo.classList.add("hidden");
});

const changeMobileImages = () => {
  const slides = document.querySelectorAll(".my-slides img");
  const windowWidth = window.innerWidth;

  slides.forEach((slide) => {
    if (windowWidth <= 780) {
      // Change image sources for mobile size
      if (slide.alt === "Burger Meal") {
        slide.src = "img/burger_meal.webp";
      } else if (slide.alt === "A person holding a burger") {
        slide.src = "img/holding_burger.webp";
      }
    } else {
      // Change back to original image sources for larger screens
      if (slide.alt === "Burger Meal") {
        slide.src = "img/burger_meal_16_by_9.webp";
      } else if (slide.alt === "A person holding a burger") {
        slide.src = "img/holding_burger_16_by_9.webp";
      }
    }
  });
};

// Call the function initially to set images according to screen size
changeMobileImages();

// Listen for window resize events to adjust images if necessary
window.addEventListener("resize", changeMobileImages);
