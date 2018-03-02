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
//

export default function() {
  const m = new Model().get();
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


  const div1: HTMLDivElement = m.bgs.checkOut();
  div1.style.background = Colors.yellow.W600;
  const bg1 = new Motion(
      div1,
      0,
  );
  bg1.addKey(0, new Props().S(0.1, 0.1, 0).F().get());
  bg1.setEas(esz.s.EASE_OUT4);
  bg1.addKey(1111, new Props().S().F().get());

  const div2: HTMLDivElement = m.bgs.checkOut();
  div2.style.background = Colors.yellow.W700;
  const bg2 = new Motion(div2, 444);
  bg2.addKey(0, new Props().S(0, 0, 0).F().get());
  bg2.setEas(esz.s.EASE_OUT3);
  bg2.addKey(1111, new Props().S().F().get());

  // const div3: HTMLDivElement = m.bgs.checkOut();
  // div3.style.background = Colors.yellow.W900;
  // const bg3 = new Motion(div3, 666);
  // bg3.addKey(0, new Props().S(0, 0, 0).F().get());
  // bg3.setEas(esz.s.EASE_OUT3);
  // bg3.addKey(1111, new Props().S().F().get());



  const hellothere = HelloThere();
  const iam = Iam();
  const aSoftDev = AsoftwareDev();
  //
  
  hellothere.onfinish = () => iam.play();
  iam.onfinish = () => aSoftDev.play();
  aSoftDev.onfinish = () => hellothere.play();
  // aSoftDev.onfinish = () => aSoftDev.play();
  hellothere.play();
  
    // const dummyM = new Motion(m.world, 10,0, false);
    // dummyM.addKey(0, new Props().T(0, 0, 0).R(0, 0, 0).get());
    // dummyM.addKey(1, new Props().T(0, 0, 0).R(0, 90,0).get());

  // let player = new Animation(
  //   new SequenceEffect([
  //     new GroupEffect([
  //       bg1.get(),
  //       bg2.get(),
  //       CameraMotions().cam1.get(),
  //       // CameraMotions().cam2.get(),
  //       // CameraMotions().cam3.get(),
  //         // bg3.get(),
  //       ])
  //     ]),
      // document.timeline);
      // player.onfinish = () => hellothere.play();
      // player.play();
      
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