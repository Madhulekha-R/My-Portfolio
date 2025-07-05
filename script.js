document.addEventListener('DOMContentLoaded', function() {
    // Navigation active state
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    function updateNavigation() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateNavigation);
    
    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Portfolio filter functionality
    const portfolioFilters = document.querySelectorAll('.portfolio-filter');
    const portfolioSections = document.querySelectorAll('.portfolio-section');
    
    portfolioFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Remove active class from all filters
            portfolioFilters.forEach(item => item.classList.remove('active'));
            
            // Add active class to clicked filter
            this.classList.add('active');
            
            // Get filter type
            const filterValue = this.getAttribute('data-filter');
            
            // Hide all sections and show the filtered section
            portfolioSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === `${filterValue}-section`) {
                    section.classList.add('active');
                }
            });
        });
    });
    
    // Form submission handler
    const emailForm = document.getElementById('email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to your backend or email service
            // For demo purposes, we'll just show an alert
            alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
            
            // Reset the form
            emailForm.reset();
        });
    }
    
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-level');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (barPosition < screenPosition) {
                bar.style.width = bar.style.width;
            }
        });
    }
    
    window.addEventListener('scroll', animateSkillBars);
    
    // Initialize to set initial states
    updateNavigation();
    animateSkillBars();
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.skill-level').forEach(function(bar) {
    const level = bar.getAttribute('data-level');
    setTimeout(() => {
      bar.style.width = level + '%';
    }, 300);
  });
});
