import Model from "./Model";

export default function() {
  const m = new Model().get();
  document.addEventListener("dblclick", e => {
    location.reload();
  });
  const tmline: HTMLElement = document.querySelector("#timeline");
  const playPause: HTMLElement = document.querySelector("#playPause");
  document.onmousedown = togglePlayback;
  function togglePlayback(e){
    if (m.player.playState == "running") {
      m.player.pause();
      playPause.setAttribute("pause", "");
    } else {
      playPause.removeAttribute("pause");
      m.player.play();
    }
  }

  const time: HTMLDivElement = document.querySelector("#time");
  const scrolltainer:HTMLDivElement = document.querySelector('#scrolltainer');
  let requestAnimationFrameID;
  let currentTimeRatio=0;
  let manuallySettingScroll = true;
  function onTick(e) {
    manuallySettingScroll = true;
    // const c =  (scrolltainer.scrollHeight - scrolltainer.clientHeight) * currentTimeRatio;
    // scrolltainer.scrollTop = c;
    updateUIs();
    manuallySettingScroll = false;
    requestAnimationFrameID = requestAnimationFrame(onTick);
  }
  requestAnimationFrameID = requestAnimationFrame(onTick);
  scrolltainer.onscroll = onSroll;
  
  
  let timeoutID;
  function onSroll (e) {
    if(manuallySettingScroll) return;
    // console.log(e);
    // console.log('on scroll trigeered ');
    // cancelAnimationFrame(requestAnimationFrameID);
    // console.log(ssss.scrollTop + " " + ssss.scrollHeight + " " + ssss.clientHeight);
    if (m.player.playState == "running") {
      m.player.pause();
      clearTimeout(timeoutID);
      timeoutID = setTimeout((e) => {
        manuallySettingScroll = true;
        m.player.play();
      }, 100);
    }
    m.player.currentTime = scrolltainer.scrollTop / (scrolltainer.scrollHeight - scrolltainer.clientHeight) * m.player.effect.activeDuration;
    // requestAnimationFrameID = requestAnimationFrame(onTick);
  };

function updateUIs(){
  time.textContent = Math.round(m.player.currentTime).toString();
  currentTimeRatio = m.player.currentTime / m.player.effect.activeDuration;
  tmline.style.transform = `translate(0, 100vh) scaleX(${currentTimeRatio})  translate(0,-100%)`;
}
  // scrolltainer.addEventListener('scroll', onSroll);

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
