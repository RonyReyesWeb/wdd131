// --------------------
// Tutorials Data
// --------------------
let tutorials = [
    { title: "HTML Basics", level: "Beginner" },
    { title: "CSS Grid", level: "Intermediate" },
    { title: "JavaScript DOM", level: "Advanced" }
];

// Load tutorials from localStorage
if(localStorage.getItem('tutorials')) {
    tutorials = JSON.parse(localStorage.getItem('tutorials'));
}

// Display tutorials
function displayTutorials() {
    const container = document.querySelector('#tutorial-list');
    if(!container) return;
    container.innerHTML = '';
    tutorials.forEach((tut, index) => {
        const card = document.createElement('div');
        card.className = 'tutorial-card';
        card.innerHTML = `<h3>${tut.title}</h3><p>Level: ${tut.level}</p>`;
        container.appendChild(card);
    });
}

// Add tutorial
function addTutorial(title, level) {
    if(title && level) {
        tutorials.push({ title, level });
        localStorage.setItem('tutorials', JSON.stringify(tutorials));
        displayTutorials();
    }
}

// --------------------
// Forum Data
// --------------------
let posts = JSON.parse(localStorage.getItem('posts')) || [];

// Display forum posts
function displayPosts() {
    const container = document.querySelector('#forum-list');
    if(!container) return;
    container.innerHTML = '';
    posts.forEach((post, i) => {
        const div = document.createElement('div');
        div.className = 'forum-post';
        div.innerHTML = `<strong>${post.name}</strong> <em>${post.date}</em><p>${post.message}</p>`;
        container.appendChild(div);
    });
}

// Add forum post
function addPost(name, message) {
    if(name && message) {
        const date = new Date().toLocaleString();
        posts.push({ name, message, date });
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts();
    }
}

// --------------------
// Event Listeners
// --------------------
document.addEventListener('DOMContentLoaded', () => {
    displayTutorials();
    displayPosts();

    const tutorialForm = document.querySelector('#tutorial-form');
    if(tutorialForm) {
        tutorialForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('title').value;
            const level = document.getElementById('level').value;
            addTutorial(title, level);
            tutorialForm.reset();
        });
    }

    const forumForm = document.querySelector('#forum-form');
    if(forumForm) {
        forumForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            addPost(name, message);
            forumForm.reset();
        });
    }
});
