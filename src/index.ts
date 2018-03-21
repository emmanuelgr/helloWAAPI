import "/Users/emmanuel/Projects/websiteAnimated/node_modules/web-animations-js/web-animations-next.min.js";
import Pool from "./Pool";
import data from "./data";
import * as esz from "./Ease";
import Presentation from "./Presentation";
import Model from "./Model";

let m: Model;
let container;

function init() {
  // scroll
  // window.scrollTo(0,1);
  //
  container = document.getElementById("container");
  m = new Model().setDim(container.clientWidth, container.clientHeight);

  m.get().world = document.getElementById("world");
  // popText();
  // spinWorld();
  document.getElementById("world").ondragstart = function() {
    return false;
  };
  // setupResize();
  window.addEventListener("load", function() {
    setTimeout(function() {
      console.log("loaded");
    }, 0);
  });
  window.addEventListener(
    "orientationchange",
    function() {
      this.document.location.reload();
    },
    false
  );
  Presentation();
}
function spinWorld() {
  m.world.animate(
    [
      { transform: "rotate3d(0,1,0,-90deg)" },
      { transform: "rotate3d( 0,1,0,90deg)" }
    ],
    {
      duration: 2222,
      easing: esz.s.EASE_IN_OUT,
      iterations: Infinity,
      direction: "alternate",
      fill: "both"
    }
  );
}
function popText() {
  const words = data.text.split(" ");
  words.forEach((word, index) => {
    const div = document.createElement("div");
    const divContent = document.createElement("div");
    div.appendChild(divContent);
    div.id = `word${index + 1}`;
    m.world.appendChild(div);
    const disected = words[index].split("").forEach((element, index) => {
      let el = document.createElement("span");
      el.innerText = element;
      divContent.appendChild(el);
    });
  });
}

function setupResize() {
  window.addEventListener("resize", resizeThrottler, false);
  let resizeTimeout;
  function resizeThrottler() {
    console.log(resizeTimeout);
    m.get().player.pause();
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if (resizeTimeout == null) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        actualResizeHandler();
        // The actualResizeHandler will execute at a rate of 15fps
      }, 1000);
    }
  }
  function actualResizeHandler() {
    console.log("resizing");
    m.setDim(container.clientWidth, container.clientHeight);
    document.documentElement.style.setProperty("--vmin", m.get().dim.min);
    const v = document.documentElement.style.getPropertyValue("--vmin");
    console.log("value is " + v);

    document.location.reload();
  }
}

init();
