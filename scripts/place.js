  // FOOTER DATE REQUIREMENTS
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("modified").textContent = document.lastModified;

  // STATIC WEATHER VALUES (match your HTML content)
  const temp = parseFloat(document.getElementById("temp").textContent);
  const wind = parseFloat(document.getElementById("wind").textContent);
  const chillSpan = document.getElementById("chill");

  // WIND CHILL FORMULA FOR CELSIUS
  function calculateWindChill(t, s) {
    return (
      13.12 +
      0.6215 * t -
      11.37 * Math.pow(s, 0.16) +
      0.3965 * t * Math.pow(s, 0.16)
    ).toFixed(1);
  }

  // VALIDATION RULES
  if (temp <= 10 && wind > 4.8) {
    chillSpan.textContent = calculateWindChill(temp, wind) + " °C";
  } else {
    chillSpan.textContent = "N/A";
  }
