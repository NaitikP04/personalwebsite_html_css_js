// Modal functionality
const modals = document.querySelectorAll('.modal');
const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
const closeBtns = document.querySelectorAll('.close');

learnMoreBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const project = this.getAttribute('data-project');
        const modal = document.getElementById(project + 'Modal');
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            alert('Modal for ' + project + ' not implemented yet. You can add it following the tacitModal example.');
        }
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

window.addEventListener('click', function(event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Project filtering
function showAllProjects() {
    const projects = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    projects.forEach(project => {
        project.style.display = 'block';
    });
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    projects.forEach(project => {
        if (project.getAttribute('data-category') === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll effect for navbar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});