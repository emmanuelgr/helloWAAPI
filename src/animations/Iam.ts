import Motion from "../Motion";
import Props from "../Properties";
import * as esz from "../Ease";
import CameraMotions from "../CameraMotions";
import Colors from "../Colors";
import Model from "../Model";
import Circle from "../geom/Circle";

export default function(delay:number=0){

const m = new Model().get();

const iam = new Motion(document.querySelector('#iam'), delay+333);
iam.addKey(0, new Props().C().O(0).T(0, 0,-100).RY(99).RX().F().get());
iam.setEas(esz.s.EASE_OUT4);
iam.addKey(500, new Props().C().O().T(0, 0,0).RY(0).RX().F().get());
iam.setEas(esz.s.EASE_OUT4);
iam.addKey(1000, new Props().C().O().T(45, -5, -15).RY(316).RX(0).F(-50,-100).get());
iam.holdPrev(30);
iam.setEas(esz.s.EASE_IN4);
iam.addKey(400, new Props().C().O(0).T(0, 0, -100).RX().F().get());


const eme = new Motion( document.querySelector('#eme'), delay+777);
eme.addKey(0, new Props().C().O(0).T(0, 0, -222).R(0,-190,0).F().get());
eme.setEas(esz.s.EASE_OUT4);
eme.addKey(444, new Props().C().O().T(0, 5, -15).R(0, -15, 0).F().get());
eme.setEas(esz.s.EASE_OUT3);
eme.addKey(111, new Props().C().O().T(0, 5, -15).R(0, 20, 0).F().get());
eme.setEas(esz.s.EASE_IN_OUT)
eme.addKey(333, new Props().C().O().T(0, 5, -15).R(0, 25, 0).F().get());
eme.setEas(esz.s.EASE_IN4);
eme.addKey(666, new Props().C().O(0).T(0, 0, -222).R(-110, 0, 0).F().get());

const emmanuelGroupFX = new GroupEffect(
    Array.from(document.querySelectorAll('#eme > span'))
        .map((el: HTMLElement, index) => {
          //
          const emmanuelAnim = new Motion(el as HTMLElement,delay +  index * 70 + 1050);
          // m.addKey(0,{transform:'translate3d(30%,0,0) rotateY(-90deg)'});
          emmanuelAnim.addKey(0, {transform: `translatez(5vmin) rotateY(-120deg)`});
          emmanuelAnim.setEas(esz.s.LINEAR);
          emmanuelAnim.addKey( 333, {transform: `translatez(10vmin)  rotateY(0deg)`});
          emmanuelAnim.setEas(esz.s.EASE_IN_OUT);
          emmanuelAnim.addKey( 333, {transform: `translatez(5vmin) rotateY(0deg)`});
          return emmanuelAnim.get();
        })
);

const circle1:HTMLCanvasElement = Circle( m.dim.max*0.27, Colors.grey.W700, '#bgs', 'circ') as HTMLCanvasElement;
circle1.id = 'iamBg1';
const motionBg1 = new Motion(circle1,delay+333);
motionBg1.addKey(0, new Props().C().S(0).F().get());
motionBg1.setEas(esz.s.EASE_OUT3);
motionBg1.addKey(1666, new Props().C().S(3).F().get());
// motionBg1.holdPrev(666);
// motionBg1.setEas(esz.s.EASE_OUT3);
// motionBg1.addKey(333, new Props().C().O(0).S(3).F().get());

const bgColorKeyFX = new KeyframeEffect(document.querySelector('#bgColor'),
[
  { backgroundColor:Colors.grey.W700, opacity:1},
  { backgroundColor:Colors.grey.W700, opacity:1},
],{duration:1,fill:'forwards'}
);

const circle2:HTMLCanvasElement = Circle( 200, Colors.red.W500, '#bgs', 'circ') as HTMLCanvasElement;
circle2.id = 'iamBg2';
const motionBg2 = new Motion( circle2,delay+2300);
motionBg2.addKey(0, new Props().C().O(1).S(0).F().get());
motionBg2.setEas(esz.s.EASE_OUT4);
motionBg2.addKey(333, new Props().C().O(1).S(1).F().get());
motionBg2.holdPrev(333);
motionBg2.setEas(esz.s.EASE_IN3);
motionBg2.addKey(666, new Props().C().O(0).S(0).F().get());

const circle3:HTMLCanvasElement = Circle( 200, Colors.amber.W700, '#bgs', 'circ') as HTMLCanvasElement;
circle3.id = 'iamBg3';
const motionBg3 = new Motion(circle3, delay+2300);
motionBg3.addKey(0, new Props().C().O(1).S(0).F().get());
motionBg3.setEas(esz.s.EASE_OUT4);
motionBg3.addKey(444, new Props().C().O(1).S(0.5).F().get());
motionBg3.holdPrev(333);
motionBg3.setEas(esz.s.EASE_IN3);
motionBg3.addKey(666, new Props().C().O(0).S(0).F().get());
// motionBg3.holdPrev( 2000 );
// motionBg3.addKey(1, new Props().C().O(0).S(0,0,0).F().get());

const votis = Array.from( document.querySelectorAll('#votis span') );
const votisGroupFX = new GroupEffect( 
  votis.map( (e, index )=>{
  const r = index*(180/8);
  const tY = -28;
  const m = new Motion( e, index*30 + delay +2260);
  m.addKey( 0, new Props().S(0.8).RZ(r).TY(tY).F(-50,-100).C().O(0).get());
  m.setEas(esz.s.EASE_OUT4);
  m.addKey( 333, new Props().S(1).RZ(r-90).TY(tY).F(-50,-100).C().O(1).get());
  m.holdPrev(222);
  m.setEas(esz.s.EASE_IN1);
  m.addKey( 444, new Props().S(0.8).RZ(r-180).TY(tY).F(-50,-100).C().O(0).get());
  return m.get();
}));

const cam = new Motion( document.querySelector('#seq2'), delay);
cam.addKey(0, new Props().C().T(0, 0, 0).R(0, 0, 0).get());
cam.setEas(esz.s.EASE_OUT);
cam.addKey(300, new Props().C().T(9, 0, 0).R(0, 10, -11).get());
cam.setEas(esz.s.EASE_IN_OUT);
cam.addKey(1500, new Props().C().T(5, 0, 0).R(8, 5, -11).get());
cam.setEas(esz.s.EASE_IN);
cam.addKey(222, new Props().C().T(0, 0, 0).R(0, 0, 0).get());

const g = new GroupEffect([
    iam.get(),
    eme.get(),
    emmanuelGroupFX,
    // cam.get(),
  new SequenceEffect([motionBg1.get(),bgColorKeyFX]),
  motionBg2.get(),
  motionBg3.get(),
  votisGroupFX
]);
return g;
}
