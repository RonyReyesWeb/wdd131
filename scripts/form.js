const select = document.getElementById("product");

if (select) {
    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("lastModified");

if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
    const countElement = document.getElementById("count");

    if (countElement) {
        let count = Number(localStorage.getItem("reviewCount")) || 0;
        count++;
        localStorage.setItem("reviewCount", count);
        countElement.textContent = count;
    }
});
