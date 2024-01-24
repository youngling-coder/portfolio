document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll(".section-content");
  let currentSectionIndex = 0;

  function scrollToSection(index) {
    document.querySelectorAll('.menu-item').forEach(item => {
      item.classList.remove('current');
    });

    document.querySelectorAll('.menu-item')[index].classList.add('current');

    sections[index].scrollIntoView({
      behavior: 'smooth'
    });
  }

  document.querySelectorAll('.menu-item').forEach((anchor, index) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      currentSectionIndex = index;
      scrollToSection(currentSectionIndex);
    });
  });

  let mainSection = document.querySelector(".main-section");

  mainSection.addEventListener('wheel', function (e) {
    if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
      scrollToSection(currentSectionIndex);
    } else if (e.deltaY < 0 && currentSectionIndex > 0) {
      currentSectionIndex--;
      scrollToSection(currentSectionIndex);
    }
  });

  // Touch events
  mainSection.addEventListener('touchmove', function (e) {
    // handle touch movement
  });
});
