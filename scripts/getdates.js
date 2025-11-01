// Dynamically set the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically display the last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
