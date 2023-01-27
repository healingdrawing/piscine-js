// Today, you're gonna create your own color picker.

// Write the function pick which turns the screen into a hsl color picker, varying the hue and luminosity
// of according to the position of the mouse, which:
export const pick = () => {
  // displays those 3 values using the text class:
  // the full hsl value in a div with the class hsl in the middle of the screen
  // the hue value in a div with the class hue in the top right corner of the screen
  // the luminosity value in a div with the class luminosity in the bottom left corner of the screen
  const hsl = document.createElement("div");
  hsl.className = "text hsl";
  hsl.style.top = `50%`;
  hsl.style.left = `50%`;
  hsl.style.textAlign = `center`;
  document.querySelector("body").append(hsl);

  const hue = document.createElement("div");
  hue.className = "text hue";
  document.querySelector("body").append(hue);

  const luminosity = document.createElement("div");
  luminosity.className = "text luminosity";
  document.querySelector("body").append(luminosity);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  document.querySelector("body").append(svg);
  const axisX = document.createElementNS("http://www.w3.org/2000/svg", "line");
  axisX.id = "axisX";

  const axisY = document.createElementNS("http://www.w3.org/2000/svg", "line");
  axisY.id = "axisY";

  svg.appendChild(axisX);
  svg.appendChild(axisY);
  document.addEventListener("mousedown", (e) => navigator.clipboard.writeText(hsl.textContent));
  // changes the background color of the body, so the hsl value is different on each mouse position on the screen:
  // on the axis X, the hue value has to vary between 0 and 360
  // on the axis Y, the luminosity value has to vary between 0 and 100
  document.addEventListener("mousemove", (e) => {
    const x = Math.round((e.clientX / window.innerWidth) * 360);
    const y = Math.round((e.clientY / window.innerHeight) * 100);
    //<line x1="25%" y1="0" x2="25%" y2="100%" />
    axisX.setAttributeNS(null, "x1", `${e.clientX}`);
    axisX.setAttributeNS(null, "x2", `${e.clientX}`);
    axisX.setAttributeNS(null, "y1", "0");
    axisX.setAttributeNS(null, "y2", "100%");
    axisY.setAttributeNS(null, "x1", "0");
    axisY.setAttributeNS(null, "x2", "100%");
    axisY.setAttributeNS(null, "y1", `${e.clientY}`);
    axisY.setAttributeNS(null, "y2", `${e.clientY}`);
    hue.textContent = `hue\n${x}`;
    luminosity.textContent = `${y}\nluminosity`;
    hsl.textContent = `hsl(${x},50%,${y}%)`;
    document.body.style.background = `hsl(${x},50%,${y}%)`;
  });
};

// copies that value in the clipboard on click
// displays two SVG lines, with respective ids axisX and axisY, following the cursor like so:
// the axisX has to set the attributes x1 and x2 to the mouse X position
// the axisY has to set the attributes y1 and y2 to the mouse Y position