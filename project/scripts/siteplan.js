const STORAGE_KEYS = {
  TUTORIALS: 'gdc_tutorials_v1',
  POSTS: 'gdc_posts_v1'
};

const DEFAULT_TUTORIALS = [
  { id: cryptoId(), title: 'HTML Basics', level: 'Beginner', author: 'Site' },
  { id: cryptoId(), title: 'CSS Grid Layout', level: 'Intermediate', author: 'Site' },
  { id: cryptoId(), title: 'JavaScript DOM', level: 'Advanced', author: 'Site' }
];

function cryptoId() {
  return 'id-' + Math.random().toString(36).slice(2, 9);
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function load(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

let tutorials = load(STORAGE_KEYS.TUTORIALS) || DEFAULT_TUTORIALS.slice();

function displayTutorials() {
  const list = document.querySelector('#tutorial-list');
  if (!list) return;
  list.innerHTML = '';

  tutorials.forEach(t => {
    const node = document.createElement('article');
    node.className = 'tutorial-card';
    node.innerHTML = `
      <h3>${t.title}</h3>
      <p><strong>Level:</strong> ${t.level} • <strong>Author:</strong> ${t.author}</p>
      <div class="row">
        <button data-action="save-fav" data-id="${t.id}">Favorite</button>
        <button data-action="remove" data-id="${t.id}">Remove</button>
      </div>
    `;
    list.appendChild(node);
  });
}

function addTutorial(title, level, author = 'Guest') {
  if (!title || !level) {
    alert('Please provide both title and level for the tutorial.');
    return false;
  }

  const newTut = { id: cryptoId(), title, level, author };
  tutorials.push(newTut);
  save(STORAGE_KEYS.TUTORIALS, tutorials);
  displayTutorials();
  return true;
}

function removeTutorial(id) {
  tutorials = tutorials.filter(t => t.id !== id);
  save(STORAGE_KEYS.TUTORIALS, tutorials);
  displayTutorials();
}

let posts = load(STORAGE_KEYS.POSTS) || [];

function displayPosts() {
  const list = document.querySelector('#forum-list');
  if (!list) return;
  list.innerHTML = '';

  posts.slice().reverse().forEach(p => { // reverse copy to show newest first
    const el = document.createElement('div');
    el.className = 'forum-post';
    el.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <strong>${p.name}</strong>
        <small>${p.date}</small>
      </div>
      <p>${p.message}</p>
    `;
    list.appendChild(el);
  });
}

function addPost(name, message) {
  if (!name || !message) {
    alert('Please provide your name and a message.');
    return false;
  }
  const newPost = { id: cryptoId(), name, message, date: new Date().toLocaleString() };
  posts.push(newPost);
  save(STORAGE_KEYS.POSTS, posts);
  displayPosts();
  return true;
}

function tutorialListHandler(e) {
  const action = e.target.getAttribute('data-action');
  const id = e.target.getAttribute('data-id');
  if (!action) return;

  if (action === 'remove') {
    if (confirm('Remove this tutorial?')) removeTutorial(id);
  } else if (action === 'save-fav') {
    alert(`Tutorial saved to favorites: ${id}`);
  }
}

function initMobileNavToggle() {
  const btn = document.querySelector('#nav-toggle');
  const nav = document.querySelector('#primary-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    nav.classList.toggle('open'); 
  });
}


function init() {
  displayTutorials();
  displayPosts();

  const tForm = document.querySelector('#tutorial-form');
  if (tForm) {
    tForm.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const title = tForm.querySelector('#title').value.trim();
      const level = tForm.querySelector('#level').value;
      const author = tForm.querySelector('#author') ? tForm.querySelector('#author').value.trim() : 'Guest';
      const ok = addTutorial(title, level, author);
      if (ok) tForm.reset();
    });
  }

  const fForm = document.querySelector('#forum-form');
  if (fForm) {
    fForm.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const name = fForm.querySelector('#name').value.trim();
      const message = fForm.querySelector('#message').value.trim();
      const ok = addPost(name, message);
      if (ok) fForm.reset();
    });
  }

  const tList = document.querySelector('#tutorial-list');
  if (tList) tList.addEventListener('click', tutorialListHandler);

  initMobileNavToggle();
}

document.addEventListener('DOMContentLoaded', () => {
  init();

  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
