var svgNS = "http://www.w3.org/2000/svg";

export default function(radius, clr, parentSelector, className) {
  //   var myCircle = document.createElementNS(svgNS, "circle"); //to create a circle. for rectangle use "rectangle"
  //   myCircle.setAttributeNS(null, "id", "circle");
  //   myCircle.setAttributeNS(null, "cx", `${radius * 2}`);
  //   myCircle.setAttributeNS(null, "cy", `${radius * 2}`);
  //   myCircle.setAttributeNS(null, "r", radius);
  //   myCircle.setAttributeNS(null, "fill", "black");
  //   myCircle.setAttributeNS(null, "stroke", "none");
  //   return myCircle;

  const c = document.createElement("canvas");
  c.classList.add(className);
  c.setAttribute("width", `${radius * 2}`);
  c.setAttribute("height", `${radius * 2}`);
  const cntx = c.getContext("2d");
  cntx.imageSmoothingEnabled = false;
  cntx.beginPath();
  cntx.arc(radius, radius, radius, 0, 2 * Math.PI, false);
  cntx.fillStyle = clr;
  cntx.fill();

  document.querySelector(parentSelector).appendChild(c);
  return c;
}
