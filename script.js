const pages = document.querySelectorAll('.page');
let currentIndex = 0;

function showPage(newIndex) {
  if (newIndex === currentIndex) return;

  if (newIndex < 0 || newIndex >= pages.length) return;

  const currentPage = pages[currentIndex];
  const nextPage = pages[newIndex];

  // Animate current page sliding out left
  currentPage.classList.remove('active');
  currentPage.classList.add('exit-left');

  // After animation, hide old page and reset classes
  setTimeout(() => {
    currentPage.classList.remove('exit-left');
  }, 500);

  // Show next page sliding in from right
  nextPage.classList.add('active');

  currentIndex = newIndex;
}

document.querySelector('.container').addEventListener('click', (e) => {
  if (e.target.closest('.next-btn')) {
    e.preventDefault();
    if (currentIndex < pages.length - 1) {
      showPage(currentIndex + 1);
    }
  }
  if (e.target.closest('.prev-btn')) {
    e.preventDefault();
    if (currentIndex > 0) {
      showPage(currentIndex - 1);
    }
  }
});

// Keyboard navigation support
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    if (currentIndex < pages.length - 1) {
      showPage(currentIndex + 1);
    }
  } else if (e.key === 'ArrowLeft') {
    if (currentIndex > 0) {
      showPage(currentIndex - 1);
    }
  }
});

// Allow profile picture to rotate on click for extra interaction
const profileImage = document.querySelector('.profile-content img');
if (profileImage) {
  profileImage.addEventListener('click', () => {
    profileImage.style.transition = 'transform 1s ease';
    profileImage.style.transform = 'rotateY(360deg)';
    setTimeout(() => {
      profileImage.style.transform = 'rotateY(0deg)';
    }, 1000);
  });
}

// Initialize first page visible
pages.forEach((page, i) => {
  if (i === currentIndex) {
    page.classList.add('active');
  } else {
    page.classList.remove('active');
  }
});
