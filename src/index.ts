import '/Users/emmanuel/Projects/websiteAnimated/node_modules/web-animations-js/web-animations-next.min.js';
import Pool from "./Pool";
import data from "./data";
import * as esz from './Ease';
import Presentation from './Presentation';

let origin;

(function init() {
  origin = document.getElementById('origin');
  popPool();
  popText();
  // spinWorld();
  Presentation();
})();
function popPool(){
  const pool = new Pool(10);
  for (let index = 0; index < 10; index++) {
    const aDiv = [index];
  }
}
function spinWorld() {
  origin.animate([
    { transform: "rotate3d(0,1,0,-15deg)" },
    { transform: "rotate3d( 0,1,0, 15deg)" }
  ], {
    duration: 3333,
    easing:esz.s.EASE_IN_OUT,
    iterations: Infinity,
    direction: "alternate",
    fill:'both'
  });
}
function popText() {
  const words = data.text.split(" ");
  words.forEach((word, index) => {
    const div = document.createElement("div");
    const divContent = document.createElement("div");
    divContent.className = 'dddContainer';
    div.appendChild(divContent);
    div.id = `word${index+1}`;
    div.classList.add("ddd");
    div.classList.add("label");
    origin.appendChild(div);
    const disected = words[index].split("").forEach((element, index) => {
      let el = document.createElement("span");
      el.innerText = element;
      divContent.appendChild(el);
    });
  });
}

