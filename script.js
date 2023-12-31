// Function to show/hide content based on target
function showContent(target) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        if (section.id === target) {
        section.style.display = 'block';
        } else {
        section.style.display = 'none';
        }
    });

    localStorage.setItem('lastActiveSection', target);
}

window.addEventListener('load', () => {
    const lastActiveSection = localStorage.getItem('lastActiveSection');
    if (lastActiveSection) {
        showContent(lastActiveSection);
    }
});
  
// Event listener for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const targetSection = link.getAttribute('data-target');
        showContent(targetSection);
    });
});

const image = document.getElementById("poster");
image.addEventListener("click", function() {
    popup(image);
});

function popup(image) {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
}

const closeButton = document.getElementById("close");
closeButton.addEventListener('click', function() {
    const popup = document.getElementById("popup");
    const container = document.getElementById("about");

    popup.style.display = "none";
    container.style.display = "block";
})