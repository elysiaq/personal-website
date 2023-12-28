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
}
  
// Event listener for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const targetSection = link.getAttribute('data-target');
        showContent(targetSection);
    });
});