document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved user preference, if any, on load of the website
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    body.classList.add(savedTheme);

    if (savedTheme === 'light-mode') {
        themeToggleBtn.textContent = 'Dark Mode';
        themeToggleBtn.classList.remove('btn-outline-light');
        themeToggleBtn.classList.add('btn-outline-dark');
    }

    themeToggleBtn.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');

        let theme = 'dark-mode';
        if (body.classList.contains('light-mode')) {
            theme = 'light-mode';
            themeToggleBtn.textContent = 'Dark Mode';
            themeToggleBtn.classList.remove('btn-outline-light');
            themeToggleBtn.classList.add('btn-outline-dark');
        } else {
            themeToggleBtn.textContent = 'Light Mode';
            themeToggleBtn.classList.remove('btn-outline-dark');
            themeToggleBtn.classList.add('btn-outline-light');
        }

        // Save the user preference in local storage
        localStorage.setItem('theme', theme);
    });

    // Filter projects
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterProjects(filter);
        });
    });

    function filterProjects(filter) {
        projects.forEach(project => {
            if (filter === 'all') {
                project.style.display = 'block';
            } else {
                if (project.classList.contains(filter)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            }
        });
    }

    // Default to show all projects
    filterProjects('all');
});
