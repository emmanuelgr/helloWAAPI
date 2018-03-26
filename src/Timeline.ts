import Model from "./Model";

export default function() {
  const time: HTMLDivElement = document.querySelector("#time");
  const scrolltainer: HTMLDivElement = document.querySelector("#scrolltainer");
  const tmline: HTMLElement = document.querySelector("#timeline");
  const m = new Model().get();
  let requestAnimationFrameID = NaN;
  let currentTimeRatio = 0;
  let timeoutID;
  let isDown = false;
  let lastScrollStamp = 0;
  let lastDownlStamp = 0;
  let wasPlaying;
  //
  scrolltainer.ondblclick = () => location.reload();
  scrolltainer.onmousedown = handleDown;
  scrolltainer.ontouchstart = handleDown;
  scrolltainer.onmouseup = handlUp;
  scrolltainer.ontouchend = handlUp;
  scrolltainer.onscroll = onSroll;

  
  function handleDown(e) {
    lastDownlStamp = e.timeStamp;
    isDown = true;
    if (m.player.playState == "running") {
      wasPlaying = true;
      m.player.pause();
      updateScrollbar();
    } else {
      wasPlaying = false;
    }
    // console.log("DOWN ", e.timeStamp);
    // clearTimeout(timeoutID);
  }
  function handlUp(e) {
    e.preventDefault();
    isDown = false;
    const d = e.timeStamp - lastDownlStamp;
    console.log("delta ", e.timeStamp, " ", d);

    // console.log("UP " );
    if (d < 200) {
      if(wasPlaying){
        m.player.pause();
      }else{
        if(m.player.currentTime == m.player.effect.activeDuration){
          m.player.currentTime = 0;
        }
        m.player.play();
      }
    }
  }

  function togglePlayback() {
    if (m.player.playState == "running") {
      m.player.pause();
      updateScrollbar();
    } else {
      m.player.play();
    }
  }

  function updateScrollbar() {
    const c =
      (scrolltainer.scrollHeight - scrolltainer.clientHeight) *
      currentTimeRatio;
    scrolltainer.scrollTop = c;
  }

  function onTick(e) {
    updateUIs();
    requestAnimationFrame(onTick);
  }
  requestAnimationFrame(onTick);

  function onSroll(e) {
    let d = e.timeStamp - lastScrollStamp;
    // lastScrollStamp = e.timeStamp;
    // console.log(d, isDown);

    m.player.pause();
    if (!requestAnimationFrameID) {
      requestAnimationFrameID = requestAnimationFrame(() => {
        requestAnimationFrameID = NaN;
        //
        m.player.currentTime =
          scrolltainer.scrollTop /
          (scrolltainer.scrollHeight - scrolltainer.clientHeight) *
          m.player.effect.activeDuration;
      });
    }
    // if (isDown) {
    // } else {
    //   console.log("wait...");
    //   clearTimeout(timeoutID);
    //   timeoutID = setTimeout(e => {
    //     console.log("timer end play");
    //     m.player.play();
    //   }, 100);
    // }
  }

  function updateUIs() {
    time.textContent = Math.round(m.player.currentTime).toString();
    currentTimeRatio = m.player.currentTime / m.player.effect.activeDuration;
    tmline.style.transform = `translate(0, 100vh) scaleX(${currentTimeRatio})  translate(0,-100%)`;
  }
  m.player.onfinish = () => {
    wasPlaying = false;
    scrolltainer.scrollTo(0, scrolltainer.scrollHeight);
  };
}
