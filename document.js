document.addEventListener('DOMContentLoaded', (event) => {
    // Typing effect for designation
    const designationElement = document.querySelector('.designation');
    const designationText = "Artificial Intelligence and Machine Learning Engineer";
    let i = 0;

    function typeWriter() {
        if (i < designationText.length) {
            designationElement.innerHTML += designationText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for section animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                if (entry.target.classList.contains('skills-list')) {
                    animateSkills(entry.target);
                } else if (entry.target.classList.contains('project')) {
                    animateProject(entry.target);
                } else if (entry.target.id === 'about' || entry.target.id === 'contact') {
                    animateSection(entry.target);
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.skills-list, .project, #about, #contact, .container-effect').forEach(section => {
        observer.observe(section);
    });

    function animateSkills(skillsList) {
        skillsList.querySelectorAll('li').forEach((skill, index) => {
            setTimeout(() => {
                skill.style.opacity = 1;
                skill.style.transform = 'translateY(0) rotate(360deg)';
                skill.classList.add('skill-animate');
            }, index * 100);
        });
    }

    function animateProject(project) {
        project.style.opacity = 1;
        project.style.transform = 'translateY(0) scale(1)';
    }

    function animateSection(section) {
        section.style.opacity = 1;
        section.style.transform = 'translateY(0)';
        // Additional animations for the 'about' or 'contact' sections if needed
    }

    // Update active navigation link on scroll
    const sections = document.querySelectorAll('.fullpage');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Add hover effect to container-effect elements
    document.querySelectorAll('.container-effect').forEach(container => {
        container.addEventListener('mouseenter', () => {
            container.style.transform = 'translateY(-5px)';
            container.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.4)';
        });
        container.addEventListener('mouseleave', () => {
            container.style.transform = 'translateY(0)';
            container.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        });
    });
});
