document.addEventListener('DOMContentLoaded', function () {
  // list of all the slides
  const sections = document.querySelectorAll(".section-content");


  sections.forEach((slide, indx) => {
    slide.style.transform = `translateY(${(indx) * 100}%)`;
  });

  let currentSectionIndex = 0;

  function scrollToSection(index) {
    // Remove 'current' class from all menu items
    document.querySelectorAll('.menu-item').forEach(item => {
      item.classList.remove('current');
    });

    // Add 'current' class to the corresponding menu item
    document.querySelectorAll('.menu-item')[index].classList.add('current');

    // Scroll into view with smooth behavior
    sections[index].scrollIntoView({
      behavior: 'smooth'
    });
  }

  // Add smooth scrolling behavior to the menu links
  document.querySelectorAll('.menu-item').forEach((anchor, index) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      currentSectionIndex = index;
      scrollToSection(currentSectionIndex);
    });
  });

  // Handle scrolling with the mouse wheel
  let mainSection = document.getElementsByClassName("main-section")[0];

  document.addEventListener('wheel', function (e) {
    if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
      // Scrolling down
      currentSectionIndex++;
      scrollToSection(currentSectionIndex);
    } else if (e.deltaY < 0 && currentSectionIndex > 0) {
      // Scrolling up
      currentSectionIndex--;
      scrollToSection(currentSectionIndex);
    }
  });
});
