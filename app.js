// Select DOM elements
var toggleSkillsBtn = document.getElementById('toggle-skills-btn');
var toggleEducationBtn = document.getElementById('toggle-education-btn');
var toggleWorkBtn = document.getElementById('toggle-work-btn');
var skillsSection = document.getElementById('skills-section');
var educationSection = document.getElementById('education-section');
var workExperienceSection = document.getElementById('work-experience-section');
// Function to toggle visibility of sections
var toggleVisibility = function (section) {
    if (section.style.display === 'none' || !section.style.display) {
        section.style.display = 'block';
    }
    else {
        section.style.display = 'none';
    }
};
// Event listeners for buttons
toggleSkillsBtn.addEventListener('click', function () {
    toggleVisibility(skillsSection);
});
toggleEducationBtn.addEventListener('click', function () {
    toggleVisibility(educationSection);
});
toggleWorkBtn.addEventListener('click', function () {
    toggleVisibility(workExperienceSection);
});
