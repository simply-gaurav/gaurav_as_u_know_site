document.addEventListener('DOMContentLoaded', () => {
  console.log("Welcome to Gaurav's website!");

  const dynamicText = document.getElementById('dynamicText');
  const mainActionButton = document.getElementById('mainActionButton');
  const featureButtons = document.querySelectorAll('.feature-btn');
  const featureOutput = document.getElementById('featureOutput');

  let clickCount = 0;
  mainActionButton.addEventListener('click', () => {
    clickCount++;
    if (clickCount % 2 === 1) {
      dynamicText.textContent = "You clicked the 'Learn More' button! This text changed.";
    } else {
      dynamicText.textContent = "Click the button to change this text again.";
    }
  });

  featureButtons.forEach(button => {
    button.addEventListener('click', () => {
      const feature = button.dataset.feature;
      let message = '';
      switch (feature) {
        case 'one':
          message = 'Feature One: Dynamic content allows for real-time updates without page reloads, enhancing user experience and engagement.';
          break;
        case 'two':
          message = 'Feature Two: The website is built with a responsive design approach, ensuring optimal viewing and interaction across a wide range of devices.';
          break;
        case 'three':
          message = 'Feature Three: Intuitive and smooth navigation makes it easy for users to find the information they need quickly and efficiently.';
          break;
        case 'four':
          message = 'Feature Four: Utilizing modern CSS techniques, the site boasts a clean, attractive, and professional aesthetic.';
          break;
        default:
          message = 'Unknown feature activated.';
      }
      if (featureOutput) {
        featureOutput.querySelector('p').textContent = message;
      }
    });
  });

  // Handle navigation for all pages
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      } else {
        // For external links or full page navigation, let the default action happen
        // Or, if you want to handle it with client-side routing, you'd implement that here.
      }
    });
  });
});
