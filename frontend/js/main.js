document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // --- Dark Mode ---
    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    }

    function enableLightMode() {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }

    darkModeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            enableLightMode();
        } else {
            enableDarkMode();
        }
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') enableDarkMode(); else enableLightMode();

    // --- Rendering Functions ---
    function renderHero(hero) {
        const heroSection = document.getElementById('home');
        if (!hero || hero.length === 0) {
            heroSection.innerHTML = '<p>Hero content not available.</p>';
            return;
        }
        const heroData = hero[0];
        heroSection.innerHTML = `
            <h1>${heroData.name}</h1>
            <p>${heroData.title}</p>
            <p>${heroData.intro}</p>
        `;
    }

    function renderAbout(about) {
        const aboutSection = document.querySelector('#about .about-content');
        if (!about || about.length === 0) {
            aboutSection.innerHTML = '<p>About content not available.</p>';
            return;
        }
        const aboutData = about[0];
        aboutSection.innerHTML = `
            <img src="${aboutData.profile_photo}" alt="Profile Photo" style="width:150px; border-radius:50%;">
            <p>${aboutData.bio}</p>
            <a href="${aboutData.cv}" download>Download CV</a>
        `;
    }

    function renderSkills(skills) {
        const skillsGrid = document.querySelector('#skills .skills-grid');
        if (!skills || skills.length === 0) {
            skillsGrid.innerHTML = '<p>No skills to display.</p>';
            return;
        }
        skillsGrid.innerHTML = skills.map(skill => `
            <div class="card">
                <h3>${skill.name}</h3>
                <p>Proficiency: ${skill.proficiency_level}%</p>
            </div>
        `).join('');
    }

    function renderProjects(projects) {
        const projectsGrid = document.querySelector('#projects .projects-grid');
        if (!projects || projects.length === 0) {
            projectsGrid.innerHTML = '<p>No projects to display.</p>';
            return;
        }
        projectsGrid.innerHTML = projects.map(project => `
            <div class="card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p><strong>Technologies:</strong> ${project.technologies}</p>
                <a href="${project.live_link}" target="_blank">Live Demo</a>
                <a href="${project.github_link}" target="_blank">GitHub</a>
            </div>
        `).join('');
    }

    function renderExperience(experience) {
        const experienceTimeline = document.querySelector('#experience .experience-timeline');
        if (!experience || experience.length === 0) {
            experienceTimeline.innerHTML = '<p>No experience to display.</p>';
            return;
        }
        experienceTimeline.innerHTML = experience.map(exp => `
            <div class="card">
                <h3>${exp.job_title} at ${exp.company}</h3>
                <p>${exp.start_date} - ${exp.end_date || 'Present'}</p>
                <p>${exp.description}</p>
            </div>
        `).join('');
    }

    function renderSocialLinks(links) {
        const socialLinksContainer = document.querySelector('footer .social-links');
        socialLinksContainer.innerHTML = links.map(link => `
            <a href="${link.url}" target="_blank">${link.name}</a>
        `).join(' | ');
    }

    // --- API Data Loading ---
    async function loadPortfolio() {
        renderHero(await getHeroData());
        renderAbout(await getAboutData());
        renderSkills(await getSkillsData());
        renderProjects(await getProjectsData());
        renderExperience(await getExperienceData());
        renderSocialLinks(await getSocialLinksData());
    }

    // --- Contact Form ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        const result = await postContactMessage(data);
        if (result) {
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            alert('Failed to send message.');
        }
    });

    loadPortfolio();
});
