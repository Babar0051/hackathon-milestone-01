// Select DOM elements
const toggleSkillsBtn = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
const toggleEducationBtn = document.getElementById('toggle-education-btn') as HTMLButtonElement;
const toggleWorkBtn = document.getElementById('toggle-work-btn') as HTMLButtonElement;

const skillsSection = document.getElementById('skills-section') as HTMLElement;
const educationSection = document.getElementById('education-section') as HTMLElement;
const workExperienceSection = document.getElementById('work-experience-section') as HTMLElement;

// Function to toggle visibility of sections
const toggleVisibility = (section: HTMLElement) => {
    if (section.style.display === 'none' || !section.style.display) {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
};

// Event listeners for buttons
toggleSkillsBtn.addEventListener('click', () => {
    toggleVisibility(skillsSection);
});

toggleEducationBtn.addEventListener('click', () => {
    toggleVisibility(educationSection);
});

toggleWorkBtn.addEventListener('click', () => {
    toggleVisibility(workExperienceSection);
});
