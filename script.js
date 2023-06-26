const jobs = document.querySelectorAll('.job');
let currentIndex = 0;

function showJob() {
  const currentJob = jobs[currentIndex];
  fadeIn(currentJob);
  setTimeout(() => {
    fadeOut(currentJob, () => {
      currentIndex = (currentIndex + 1) % jobs.length;
      showJob();
    });
  }, 2000); 
}

function fadeIn(element) {
  element.style.opacity = '0';
  let opacity = 0;
  const interval = setInterval(() => {
    opacity += 0.05; 
    if (opacity >= 1) {
      clearInterval(interval);
    }
    element.style.opacity = opacity;
  }, 50); 
}

function fadeOut(element, callback) {
  let opacity = 1;
  const interval = setInterval(() => {
    opacity -= 0.05; 
    if (opacity <= 0) {
      clearInterval(interval);
      callback();
    }
    element.style.opacity = opacity;
  }, 50); 
}

showJob(); 