// ---------------------------
// TEMPLE DATA
// ---------------------------
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
  },
  
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Guatemala City Guatemala",
    location: "Guatemala City, Guatemala",
    dedicated: "1984, December, 14",
    area: 11600,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/guatemala-city-guatemala-temple/guatemala-city-guatemala-temple-6415-main.jpg"
  },
  {
    templeName: "Calgary Alberta",
    location: "Calgary, Alberta, Canada",
    dedicated: "2012, October, 28",
    area: 33000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/calgary-alberta-temple/calgary-alberta-temple-13199-main.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  }
];

// ---------------------------
// RENDER FUNCTION
// ---------------------------
function displayTemples(list) {
  const container = document.querySelector("#temple-gallery");
  container.innerHTML = ""; 

  list.forEach((temple) => {
    const card = document.createElement("figure");

    card.innerHTML = `
      <img 
        src="${temple.imageUrl}" 
        alt="${temple.templeName} Temple in ${temple.location}" 
        loading="lazy"
        width="400"
        height="250"
      >

      <figcaption>
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </figcaption>
    `;

    container.appendChild(card);
  });
}

// ---------------------------
// FILTERING
// ---------------------------
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const filter = event.target.dataset.filter;

    let filtered = temples;

    if (filter === "old") {
      filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
    }
    if (filter === "new") {
      filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
    }
    if (filter === "large") {
      filtered = temples.filter(t => t.area > 90000);
    }
    if (filter === "small") {
      filtered = temples.filter(t => t.area < 10000);
    }

    displayTemples(filtered);
  });
});

// ---------------------------
// INITIAL PAGE LOAD
// ---------------------------
displayTemples(temples);

// ---------------------------
// HAMBURGER MENU
// ---------------------------
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  hamburger.textContent = navMenu.classList.contains("open") ? "X" : "☰";
});

// ---------------------------
// FOOTER DATES
// ---------------------------
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
