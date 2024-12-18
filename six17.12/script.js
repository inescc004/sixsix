// Drawing functionality
let pos;
function setup() {
    let maxWidth = 1600; // Set maximum width to screen width
    let maxHeight = 2000; // Set maximum height to screen height
  let canvasWidth = Math.min(document.documentElement.scrollWidth, maxWidth);
  let canvasHeight = Math.min(document.documentElement.scrollHeight, maxHeight);
  let canvas = createCanvas(window.innerWidth, window.innerHeight); // Create canvas with full viewport dimensions
  canvas.position(0, 0); // Position the canvas at the top-left corner
  canvas.style("z-index", "-1"); // Send canvas to the back
  window.addEventListener('resize', () => {
    resizeCanvas(window.innerWidth, window.innerHeight); // Resize canvas to full viewport on window resize
  });
  pos = [];
  stroke(190, 190, 190); // Define the line color (darker grey) with less opacity
  strokeWeight(1); // Set the thickness of the line ONCE
  noFill(); // Ensure no fill is applied to shapes
}

function draw() {
  background(0, 0, 0, 0); // Set background to transparent
  let mousePos = createVector(mouseX, mouseY);
  append(pos, mousePos);
  if (pos.length > 1) {
    for (let i = 0; i < pos.length - 1; i++) {
      line(pos[i].x, pos[i].y, pos[i + 1].x, pos[i + 1].y);
    }
  }
  if (pos.length > 500) {
    pos.shift();
  }
}//

// Function to scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Function to scroll to next section
function scrollToBottom() {
  const sections = document.querySelectorAll('section');
  const currentScroll = window.pageYOffset;
  let targetSection = null;

  // Find the next section below current scroll position
  for (const section of sections) {
    const sectionTop = section.offsetTop;
    if (sectionTop > currentScroll + 10) { // Adding small offset to prevent getting stuck
      targetSection = section;
      break;
    }
  }

  // If we found a target section, scroll to it
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    // If no next section, scroll to footer
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Show/hide scroll-to-top button based on scroll position
window.addEventListener('scroll', function() {
  const scrollTopBtn = document.querySelector('.scroll-top');
  const footer = document.querySelector('footer');
  
  if (footer) {
    const footerPosition = footer.getBoundingClientRect();
    
    // Show scroll-to-top button when footer is visible
    if (footerPosition.top <= window.innerHeight) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }
});




