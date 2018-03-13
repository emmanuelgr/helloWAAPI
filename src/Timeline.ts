import Model from "./Model";

export default function() {
  const m = new Model().get();
  document.addEventListener("dblclick", e => {
    console.log("dd");
    location.reload();
  });
  const cont: HTMLElement = document.querySelector("#container");
  const tmline: HTMLElement = document.querySelector("#timeline");
  cont.onmousedown = e => {
    m.player.pause();
    updateScrubberFeedback(e.clientX);
    cont.onmousemove = e => {
      updateScrubberFeedback(e.clientX);
    };
  };
  cont.onmouseup = e => {
    if( playPause.getAttribute("pause") == null ) m.player.play();
    cont.onmousemove = null;
  };
  cont.ontouchstart = e => {
    m.player.pause();
    updateScrubberFeedback(e.touches[0].clientX);
    cont.ontouchmove = e => {
      updateScrubberFeedback(e.touches[0].clientX);
    };
  };
  cont.ontouchend = e => {
    m.player.play();
    cont.onmousemove = null;
  };
  function updateScrubberFeedback(x) {
    const t = x / cont.clientWidth;
    m.player.currentTime = Math.floor(m.player.effect.activeDuration * t);
  }
  const playPause: HTMLElement = document.querySelector("#playPause");
  playPause.onmousedown = e => {
    e.stopPropagation();
    if (m.player.playState == "running") {
      m.player.pause();
      playPause.setAttribute("pause", "");
    } else {
      playPause.removeAttribute("pause");
      m.player.play();
    }
  };
  const time: HTMLDivElement = document.querySelector("#time");
  function onTick(e) {
    time.textContent = Math.round(m.player.currentTime).toString();
    const r = m.player.currentTime / m.player.effect.activeDuration;
    tmline.style.transform = `scaleX(${r})`;
    requestAnimationFrame(onTick);
  }
  requestAnimationFrame(onTick);

  // const plaeryerTotalAnimations = player.timeline.getAnimations().length;
  // player.ready.then( ()=>requestAnimationFrame(onFrame));
  // function onFrame(timestamp) {
  // console.log( timestamp );
  // console.log( '>', player.timeline.getAnimations()[0].);
  // const remainingAnimations = plaeryerTotalAnimations - plaeryerTotalAnimations;
  // switch( remainingAnimations )
  // console.log( remainingAnimations);
  // requestAnimationFrame(onFrame);
  // }

  // const p2 = new Animation(bg3.get(),document.timeline);
  // p2.onfinish =  ()=>p2.reverse();
  // p2.play();
  //
}
