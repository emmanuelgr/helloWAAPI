import data from './data';
import * as esz from './Ease';
import off from './Offsets';
import motions from './Motions';
import Props from "./Properties";
import Motions from './Motions';
import Motion from './Motion';
import Colors from './Colors';
import Pool from './Pool';
import Model from './Model';
//

export default function(){
const origin:HTMLElement = document.querySelector("#origin");
// const dddWithChildren:HTMLElement = document.querySelector("#dddWithChildren");
// const dddNoChild:HTMLElement = document.querySelector("#dddNoChild");
// const b:HTMLElement = document.querySelector("#b");
// const c:HTMLElement = document.querySelector("#c");
const word1:HTMLElement = document.querySelector("#word1");
const word2:HTMLElement = document.querySelector("#word2");
const word3:HTMLElement = document.querySelector("#word3");
const word4:HTMLElement = document.querySelector("#word4");
const word5:HTMLElement = document.querySelector("#word5");

// dddNoChild.animate([
//   {transform:'translate3d(0,0,0) rotateY(0) translate(-50%,-50%)'},
//   {transform:'translate3d(100px,0,0) rotateY(1000deg) translate(-50%,-50%)'},
// ],{fill:'both',delay:5000,duration:9999,direction:'alternate',iterations:Infinity});

// dddWithChildren.animate([
//   {transform:'translateZ(200px) rotateY(0) ',easing:esz.s.POSE},
//   {transform:' translateZ(0) rotateY(1360deg) '},
// ], {duration:3333,iterations:Infinity,direction:'alternate'})


const cam1 =  new Motion(origin,0,0,false);
cam1.addKey(0, { ...new Props().T(0,0,0).R(0,0,0).get()});
cam1.setInter(esz.s.EASE_OUT);
cam1.addKey(300, { ...new Props().T(0,10,0).R(0,-15,0).get()});
cam1.setInter(esz.s.EASE_IN_OUT);
cam1.addKey(1000, { ...new Props().T(0,10,10).R(8,-20,9).get()});
cam1.setInter(esz.s.EASE_IN);
cam1.addKey(222, { ...new Props().T(0,0,0).R(0,0,0).get()});

const cam2 =  new Motion(origin,0,0,false);
cam2.addKey(0, { ...new Props().T(0,0,0).R(0,0,0).get()});
cam2.setInter(esz.s.EASE_OUT);
cam2.addKey(300, { ...new Props().T(9,0,0).R(0,10,-11).get()});
cam2.setInter(esz.s.EASE_IN_OUT);
cam2.addKey(2000, { ...new Props().T(5,0,0).R(8,5,-11).get()});
cam2.setInter(esz.s.EASE_IN);
cam2.addKey(222, { ...new Props().T(0,0,0).R(0,0,0).get()});

const hello = new Motion(word1,0);
hello.addKey(0,     { opacity: "0",...new Props().R(0,0,0).T(    0,   0, -99).get()});
hello.setInter(esz.s.EASE_IN_OUT);
hello.addKey(500,   {   opacity: "1",...new Props().R(0,390,10).T( 0,  -10,  0).get()});
hello.setInter(esz.s.EASE_OUT);
hello.addKey(100,   {   opacity: "1",...new Props().R(0,350,0).T( 0,   -20,  20).get()});
hello.setInter(esz.s.EASE_IN_OUT);
hello.addKey(800,   { opacity: "1",...new Props().R(0,390,-10).T( 0,  -10,  0).get()});
hello.setInter(esz.s.EASE_IN_OUT);
hello.addKey(400,   { opacity: "0",...new Props().R(0,300,30).T(0,0,-99).get()});

const there = new Motion(word2,500);
there.addKey(0, {opacity:0, ...new Props().T(0, 0, -99).R().get()});
there.setInter(esz.s.EASE_OUT4);
there.addKey(444, {opacity:1, ...new Props().T(10, 0, 0).R(0,30,0).get()});
there.setInter(esz.s.EASE_OUT4);
there.addKey(333, {opacity:1, ...new Props().T(10, 0, 20).R(0,20,0).get()});
there.setInter(esz.s.EASE_IN4);
there.addKey(333, {opacity:0, ...new Props().T(0, 0, -99).R(0,-20,-150).get()});

const iam = new Motion(word3,0);
iam.addKey(0,     { opacity: "0",...new Props().R(0,0,0).T(    0,   0, -99).get()});
iam.setInter(esz.s.EASE_IN_OUT);
iam.addKey(500,   {   opacity: "1",...new Props().R(0,390,10).T( 0,  -10,  0).get()});
iam.setInter(esz.s.EASE_IN_OUT);
iam.addKey(100,   {   opacity: "1",...new Props().R(0,333,0).T( 0,   -20,  0).get()});
iam.setInter(esz.s.EASE_IN_OUT);
iam.addKey(800,   { opacity: "1",...new Props().R(0,390,-10).T( 0,   -10,  0).get()});
iam.setInter(esz.s.EASE_IN_OUT);
iam.addKey(400,   { opacity: "0",...new Props().R(0,300,30).T(0,0,-99).get()});

const eme = new Motion(word4,500);
eme.addKey(0, {opacity:0, ...new Props().T(0, 0, -99).R().get()});
eme.setInter(esz.s.EASE_OUT4);
eme.addKey(555, {opacity:1, ...new Props().T(0, 0, 0).R(0,30,0).get()});
eme.setInter(esz.s.EASE_IN4);
eme.addKey(555, {opacity:1, ...new Props().T(0, 0, 5).R(0,20,0).get()});
eme.setInter(esz.s.EASE_OUT3);
eme.addKey(555, {opacity:1, ...new Props().T(-10, -10, 10).R(0,10,0).get()});
eme.setInter(esz.s.EASE_IN4);
eme.addKey(555, {opacity:0, ...new Props().T(0, 0, -222).R(110,0,0).get()});

const emeArr =[];
word4.querySelectorAll('span').forEach((element,index) => {
  const m = new Motion(element,index*30+777);
  m.addKey(0,{transform:'translate3d(30vw,0,0) rotateY(-90deg)'});
  m.setInter(esz.s.EASE_OUT3);
  m.addKey(444,{transform:'translate3d(0,0,0) rotateY(0deg)'});
  m.setInter(esz.s.EASE_IN);
  m.addKey(333,{transform:'translate3d(10vw,0,0) rotateY(360deg)'});
  emeArr.push( m.get() );
});
const emeSpan = new GroupEffect(emeArr);

const div1:HTMLDivElement = Model.bgs.checkOut();
div1.style.background = Colors.yellow.W600;
const bg1 = new Motion( div1, 0,);
bg1.addKey(0, new Props().S(0.1,0.1,0).O().get());
bg1.setInter(esz.s.EASE_OUT4);
bg1.addKey(1111, new Props().S().O().get());

const div2:HTMLDivElement = Model.bgs.checkOut();
div2.style.background = Colors.yellow.W700;
const bg2 = new Motion( div2, 333);
bg2.addKey(0, new Props().S(0,0,0).O().get());
bg2.setInter(esz.s.EASE_OUT3);
bg2.addKey(1111, new Props().S().O().get());

const div3:HTMLDivElement = Model.bgs.checkOut();
div3.style.background = Colors.yellow.W800;
const bg3 = new Motion( div3, 555);
bg3.addKey(0, new Props().S(0,0,0).O().get());
bg3.setInter(esz.s.EASE_IN2);
bg3.addKey(1111, new Props().S().O().get());

const div4:HTMLDivElement = Model.bgs.checkOut();
div4.style.background = Colors.yellow.W900;
const bg4 = new Motion( div4, 999);
bg4.addKey(0, new Props().S(0,0,0).O().get());
bg4.setInter(esz.s.EASE_IN1);
bg4.addKey(1111, new Props().S().O().get());


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
        bg3.get(),
        bg4.get(),
      ]),
    ]),
    // emeSpan,
    document.timeline);
player.onfinish = () => player.play();
player.play()

// const thisIs = new Motion(word3);
// thisIs.addKey(0,     {opacity: "0",...new Transf().S(0.5,0.5,0.5).R(0,0,0).T(-100,100,-100).get()});
// thisIs.setInter(esz.s.EASE_OUT4);
// thisIs.addKey(333,   {opacity: "1",...new Transf().S(1.5,1.5,1.5).R(0,45,0).T(100,  0,   0).get()});
// thisIs.setInter(esz.s.POSE);
// thisIs.addKey(333,   {opacity: "1",...new Transf().S(1.5,1.5,1.5).R(0,45,0).T(100,  0,   0).get()});
// thisIs.setInter(esz.s.EASE_IN4);
// thisIs.addKey(333,   {opacity: "0",...new Transf().S(0.5,0.5,0.5).R(0,0,0).T(-100,100,-100).get()});

// const emmanuel = new Motion(word4);
// emmanuel.addKey(0,     {opacity: "0",...new Transf().S(0.5,0.5,0.5).R(0,0,0).T(-100,100,-100).get()});
// emmanuel.setInter(esz.s.EASE_OUT4);
// emmanuel.addKey(333,   {opacity: "1",...new Transf().S(1.5,1.5,1.5).R(0,45,0).T(100,  0,   0).get()});
// emmanuel.setInter(esz.s.POSE);
// emmanuel.addKey(333,   {opacity: "1",...new Transf().S(1.5,1.5,1.5).R(0,45,0).T(100,  0,   0).get()});
// emmanuel.setInter(esz.s.EASE_IN4);
// emmanuel.addKey(333,   {opacity: "0",...new Transf().S(0.5,0.5,0.5).R(0,0,0).T(-100,100,-100).get()});

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