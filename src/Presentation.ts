import Colors from './Colors';
import data from './data';
import * as esz from './Ease';
import Model from './Model';
import Motion from './Motion';
import off from './Offsets';
import Pool from './Pool';
import Props from './Properties';
import Anims from './AnimationKeyframes'

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


  const cam1 = new Motion(world, 0, 0, false);
  cam1.addKey(0, new Props().T(0, 0, 0).R(0, 0, 0).get());
  cam1.setEas(esz.s.EASE_OUT);
  cam1.addKey(300, new Props().T(0, 10, 0).R(0, -15, 0).get());
  cam1.setEas(esz.s.EASE_IN_OUT);
  cam1.addKey(1000, new Props().T(0, 10, 10).R(8, -20, 9).get());
  cam1.setEas(esz.s.EASE_IN);
  cam1.addKey(222, new Props().T(0, 0, 0).R(0, 0, 0).get());

  const cam2 = new Motion(world, 0, 0, false);
  cam2.addKey(0, new Props().T(0, 0, 0).R(0, 0, 0).get());
  cam2.setEas(esz.s.EASE_OUT);
  cam2.addKey(300, new Props().T(9, 0, 0).R(0, 10, -11).get());
  cam2.setEas(esz.s.EASE_IN_OUT);
  cam2.addKey(1500, new Props().T(5, 0, 0).R(8, 5, -11).get());
  cam2.setEas(esz.s.EASE_IN);
  cam2.addKey(222, new Props().T(0, 0, 0).R(0, 0, 0).get());

  const cam3 = new Motion(world, 0, 0, false);
  cam3.addKey(0, new Props().T(0, 0, 0).R(0, 0, 0).get());
  cam3.setEas(esz.s.EASE_IN3);
  cam3.addKey(300, new Props().T(-10, 0, 10).R(0, -20, 0).get());
  cam3.setEas(esz.s.EASE_IN_OUT);
  cam3.addKey(666, new Props().T(-10, 0, -10).R(8, -360, 9).get());
  cam3.setEas(esz.s.EASE_IN3);
  cam3.addKey(999, new Props().T(10, 0, 10).R(0, 0, 0).get());
  cam3.setEas(esz.s.EASE_IN3);
  cam3.addKey(333, new Props().T(0, 0, 0).R(0, 360, 0).get());

  const hello = new Motion(document.querySelector('#hello'), 0);
  hello.addKey(0, new Props().O(0).R(0, 0, 0).T(0, 0, -99).F().get());
  hello.setEas(esz.s.EASE_IN_OUT);
  hello.addKey(500, new Props().O().R(0, 390, 10).T(0, -10, 0).F().get());
  hello.setEas(esz.s.EASE_OUT);
  hello.addKey(100, new Props().O().R(0, 350, 0).T(0, -20, 20).F().get());
  hello.setEas(esz.s.EASE_IN_OUT);
  hello.addKey(800, new Props().O().R(0, 390, -10).T(0, -10, 0).F().get());
  hello.setEas(esz.s.EASE_IN_OUT);
  hello.addKey(400, new Props().O(0).R(0, 300, 30).T(0, 0, -99).F().get());

  const there = new Motion(document.querySelector('#there'), 500);
  there.addKey(0, new Props().O(0).T(0, 0, -99).R().F().get());
  there.setEas(esz.s.EASE_OUT4);
  there.addKey(444, new Props().O().T(10, 0, 0).R(0, 30, 0).F().get());
  there.setEas(esz.s.EASE_OUT4);
  there.addKey(333, new Props().O().T(10, 0, 20).R(0, 20, 0).F().get());
  there.setEas(esz.s.EASE_IN4);
  there.addKey(333, new Props().O(0).T(0, 0, -99).R(0, -20, -150).F().get());

  const iam = new Motion(document.querySelector('#iam'), 0);
  iam.addKey(0, new Props().O(0).R(0, 0, 0).T(0, 0, -99).F().get());
  iam.setEas(esz.s.EASE_IN_OUT);
  iam.addKey(500, new Props().O().R(0, 390, 10).T(-20, -20, 0).F().get());
  iam.setEas(esz.s.EASE_IN_OUT);
  iam.addKey(100, new Props().O().R(0, 333, 0).T(-20, -30, 0).F().get());
  iam.setEas(esz.s.EASE_IN_OUT);
  iam.addKey(800, new Props().O().R(0, 390, -10).T(-20, -20, 0).F().get());
  iam.setEas(esz.s.EASE_IN_OUT);
  iam.addKey(400, new Props().O(0).R(0, 300, 30).T(0, 0, -99).F().get());

  const eme = new Motion(document.querySelector('#eme'), 444);
  eme.addKey(0, new Props().O(0).T(0, 0, -222).R().F().get());
  eme.setEas(esz.s.EASE_OUT4);
  eme.addKey(444, new Props().O().T(-5, 0, 0).R(0, -5, 0).F().get());
  eme.setEas(esz.s.LINEAR);
  eme.addKey(333, new Props().O().T(0, 0, 5).R(0, 10, 0).F().get());
  eme.setEas(esz.s.EASE_IN4);
  eme.addKey(666, new Props().O(0).T(0, 0, -222).R(-110, 0, 0).F().get());

  let ep = document.querySelector('#eme').getBoundingClientRect();
  const emeSpan = new GroupEffect(
      Array.from(document.querySelectorAll('#eme > span'))
          .map((el: HTMLElement, index) => {
            //
            const m = new Motion(el as HTMLElement, index * 70 + 333);
            // m.addKey(0,{transform:'translate3d(30vw,0,0) rotateY(-90deg)'});
            m.addKey(0, {transform: `rotateY(-180deg)`});
            m.setEas(esz.s.LINEAR);
            m.addKey( 333, {transform: ` rotateY(0deg)`});
            m.setEas(esz.s.EASE_IN_OUT);
            m.addKey( 333, {transform: `rotateY(0deg)`});
            return m.get();
          })

  );

  const div1: HTMLDivElement = Model.bgs.checkOut();
  div1.style.background = Colors.yellow.W600;
  const bg1 = new Motion(
      div1,
      0,
  );
  bg1.addKey(0, new Props().S(0.1, 0.1, 0).F().get());
  bg1.setEas(esz.s.EASE_OUT4);
  bg1.addKey(1111, new Props().S().F().get());

  const div2: HTMLDivElement = Model.bgs.checkOut();
  div2.style.background = Colors.yellow.W700;
  const bg2 = new Motion(div2, 444);
  bg2.addKey(0, new Props().S(0, 0, 0).F().get());
  bg2.setEas(esz.s.EASE_OUT3);
  bg2.addKey(1111, new Props().S().F().get());

  const div3: HTMLDivElement = Model.bgs.checkOut();
  // div3.style.background = Colors.yellow.W900;
  // const bg3 = new Motion(div3, 666);
  // bg3.addKey(0, new Props().S(0, 0, 0).F().get());
  // bg3.setEas(esz.s.EASE_OUT3);
  // bg3.addKey(1111, new Props().S().F().get());



  const a = new Motion(document.querySelector('#a'), 0);
  a.addKey(0, new Props().O(0).T(0, 110, 0).R().F().get());
  a.setEas(esz.s.EASE_OUT4);
  a.addKey(333, new Props().O().T(0, -20, -30).R(0,30,0).F().get());
  a.setEas(esz.s.EASE_IN_OUT);
  a.addKey(777, new Props().O().T(0, -30, 10).R(0,0,0).F().get());
  a.setEas(esz.s.EASE_IN4);
  a.addKey(999, new Props().O(0).T(0, 110, 0).R().F().get());

  const soft = new Motion(document.querySelector('#software'), 111);
  soft.addKey(0, new Props().O(0).T(0, 110, 0).R().F().get());
  soft.setEas(esz.s.EASE_OUT4);
  soft.addKey(333, new Props().O().T(0, 0, -20).R(0,-30,0).F().get());
  soft.setEas(esz.s.EASE_IN_OUT);
  soft.addKey(777, new Props().O().T(0, 0, 20).R(0,0,0).F().get());
  soft.setEas(esz.s.EASE_IN4);
  soft.addKey(666, new Props().O(0).T(0, 110, 0).R().F().get());


  const dev = new Motion(document.querySelector('#dev'), 222);
  dev.addKey(0, new Props().O(0).T(0, 110, 0).R().F().get());
  dev.setEas(esz.s.EASE_OUT4);
  dev.addKey(333, new Props().O().T(0, 20, -10).R(0,40,0).F().get());
  dev.setEas(esz.s.EASE_IN_OUT);
  dev.addKey(777, new Props().O().T(0, 20, 30).R(0,0,0).F().get());
  dev.setEas(esz.s.EASE_IN4);
  dev.addKey(333, new Props().O(0).T(0, 110, 0).R().F().get());

  let player = new Animation(
      new SequenceEffect([
        new GroupEffect([
          cam1.get(),
          hello.get(),
          there.get(),
        ]),
        new GroupEffect([
          cam2.get(),
          iam.get(),
          eme.get(),
          emeSpan
        ]),
        new GroupEffect([
          bg1.get(),
          bg2.get(),
          // bg3.get(),
        ]),
        new GroupEffect([
          cam3.get(),
          a.get(),
          soft.get(),
          dev.get()
        ])
      ]),
      // emeSpan,
      document.timeline);
    const plaeryerTotalAnimations = player.timeline.getAnimations().length;
  player.onfinish = () => player.play();
  player.play();

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
  // document.timeline.getAnimations()[0].
  // p2.play();
  // const thisIs = new Motion(word3);
  // thisIs.addKey(0,     {opacity: "0",...new
  // Transf().S(0.5,0.5,0.5).R(0,0,0).T(-100,100,-100).get()});
  // thisIs.setInter(esz.s.EASE_OUT4);
  // thisIs.addKey(333,   {opacity: "1",...new
  // Transf().S(1.5,1.5,1.5).R(0,45,0).T(100,  0,   0).get()});
  // thisIs.setInter(esz.s.POSE);
  // thisIs.addKey(333,   {opacity: "1",...new
  // Transf().S(1.5,1.5,1.5).R(0,45,0).T(100,  0,   0).get()});
  // thisIs.setInter(esz.s.EASE_IN4);
  // thisIs.addKey(333,   {opacity: "0",...new
  // Transf().S(0.5,0.5,0.5).R(0,0,0).T(-100,100,-100).get()});

  // const emmanuel = new Motion(word4);
  // emmanuel.addKey(0,     {opacity: "0",...new
  // Transf().S(0.5,0.5,0.5).R(0,0,0).T(-100,100,-100).get()});
  // emmanuel.setInter(esz.s.EASE_OUT4);
  // emmanuel.addKey(333,   {opacity: "1",...new
  // Transf().S(1.5,1.5,1.5).R(0,45,0).T(100,  0,   0).get()});
  // emmanuel.setInter(esz.s.POSE);
  // emmanuel.addKey(333,   {opacity: "1",...new
  // Transf().S(1.5,1.5,1.5).R(0,45,0).T(100,  0,   0).get()});
  // emmanuel.setInter(esz.s.EASE_IN4);
  // emmanuel.addKey(333,   {opacity: "0",...new
  // Transf().S(0.5,0.5,0.5).R(0,0,0).T(-100,100,-100).get()});

  // document.timeline.play(
  //   new SequenceEffect([
  //     new GroupEffect([
  //       cam1.get(),
  //       hello.get(),
  //       there.get(),
  //       ]),
  // motionA.get(),
  // there.get(),
  // thisIs.get(),
  // emmanuel.get(),
  // new GroupEffect([
  // ])
  // ])
  // );
}