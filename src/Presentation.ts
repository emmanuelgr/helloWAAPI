import Colors from './Colors';
import data from './data';
import * as esz from './Ease';
import Model from './Model';
import Motion from './Motion';
import off from './Offsets';
import Pool from './Pool';
import Props from './Properties';
import Anims from './AnimationKeyframes';
import CameraMotions from "./CameraMotions";
import HelloThere from './animations/HelloThere';
import Iam from './animations/Iam';
import AsoftwareDev from './animations/AsoftwareDev';
import AGeekByNature from './animations/AGeekByNature';
import ByHeart from './animations/ByHeart';
//

export default function() {
  const world: HTMLElement = document.querySelector('#world');
  // const dddWithChildren:HTMLElement =
  // document.querySelector("#dddWithChildren"); const dddNoChild:HTMLElement =
  // document.querySelector("#dddNoChild"); const b:HTMLElement =
  // document.querySelector("#b"); const c:HTMLElement =
  // document.querySelector("#c");

  // dddNoChild.animate([
  //   {transform:'translate3d(0,0,0) rotateY(0) translate(-50%,-50%)'},
  //   {transform:'translate3d(100px,0,0) rotateY(1000deg)
  //   translate(-50%,-50%)'},
  // ],{fill:'both',delay:5000,duration:9999,direction:'alternate',iterations:Infinity});

  // dddWithChildren.animate([
  //   {transform:'translateZ(200px) rotateY(0) ',easing:esz.s.POSE},
  //   {transform:' translateZ(0) rotateY(1360deg) '},
  // ], {duration:3333,iterations:Infinity,direction:'alternate'})

// let el:HTMLElement =  document.querySelector("#geek");
// console.log(el);
// let g = new GroupEffect(
//   [
//     new KeyframeEffect( el, [{transform:'translateY(-5vh)'},{transform:'translateY(15vh)'},{transform:'translateY(-5vh)'}],3333),
//     new KeyframeEffect( el, [{transform:'rotateY(-45deg)'},{transform:'rotateY(45deg)'}],3333)
//   ]
// );
//   let player = new Animation( g, document.timeline);
//       player.onfinish = () => {
//         console.log('a');  
//         player.play();
//       }
//       player.play();

let timeToEnter=333;
const hellothere = HelloThere(timeToEnter);
timeToEnter += hellothere.activeDuration-1900;
const iam = Iam(timeToEnter);
timeToEnter += iam.activeDuration-1600
const aSoftDev = AsoftwareDev(timeToEnter);
timeToEnter += aSoftDev.activeDuration-5500
const aGeek = AGeekByNature(timeToEnter);
timeToEnter += aGeek.activeDuration-6200
const byHeart = ByHeart(timeToEnter);
timeToEnter += byHeart.activeDuration-500
// const iam = Iam(0);
// const aGeek = AGeekByNature(0);
// const aGeek = AGeekByNature(0);
// const byHeart = ByHeart(0);
//
const text = new GroupEffect([
  hellothere,
  iam,
  aSoftDev,
  aGeek,
  byHeart,
]);

const cams = new SequenceEffect([
  CameraMotions().cam1.get(),
  CameraMotions().cam2.get(),
  CameraMotions().cam3.get(),
]);

  const gfx = new GroupEffect([
    text,
    // cams,
  ]);


let player = new Animation( gfx,  document.timeline);
player.onfinish = () => player.play();
// player.pause();
player.play();
// player.playbackRate = 3;
// player.reverse();

document.addEventListener('dblclick',(e)=>{
  console.log('dd');
  location.reload();
});
const cont:HTMLElement = document.querySelector('#container');
const tmline:HTMLElement = document.querySelector('#timeline');
cont.ontouchstart = (e)=>{
  player.pause();
  cont.ontouchmove =(e)=>{
    const t = e.touches[0].clientX/cont.clientWidth;
    player.currentTime = Math.floor( player.effect.activeDuration * t );
    tmline.style.transform = `scaleX(${t})`
    tmline.hidden = false;
    tmline.style.visibility = 'visible';
  }
}
cont.ontouchend = (e)=>{
  player.play();
  cont.onmousemove = null;
  tmline.style.visibility = 'hidden';
}
function updateScrubberFeedback(){

}

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