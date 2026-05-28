const yearElement = document.getElementById('year');
const reveals = document.querySelectorAll('.reveal');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const observer = new IntersectionObserver((entries, observerInstance) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observerInstance.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.18,
});

reveals.forEach((element) => observer.observe(element));
