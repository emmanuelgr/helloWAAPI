import Motion from "../Motion";
import Props from "../Properties";
import * as esz from "../Ease";
import CameraMotions from "../CameraMotions";
import Colors from "../Colors";
import Model from "../Model";
import Circle from "../geom/Circle";
import Ring from "./Ring";

export default function(delay:number=0){

const m = new Model().get();

const iamPapa = new Motion(document.querySelector('#iamPapa'), delay+666);
iamPapa.addKey(0, new Props().C().TX().RY(-360).S(0).get());
iamPapa.setEas(esz.s.EASE_OUT4);
iamPapa.addKey(666, new Props().C().TX().RY(0).S().get());
iamPapa.holdPrev(666);
iamPapa.setEas(esz.s.EASE_OUT4);
iamPapa.addKey(1222, new Props().C().TX(-38).RY(-90).S(1).get());
iamPapa.setEas(esz.s.EASE_IN3);
iamPapa.addKey(666, new Props().C().TX().RY(-90).S(0).get());

const iam = new Motion(document.querySelector('#iam'), delay+666);
iam.addKey(0,    new Props().O(0).T().RY().RX().S(0).F().get());
iam.setEas(esz.s.EASE_OUT4);
iam.addKey(500,  new Props().O().T().RY().RX().S().F().get());
iam.holdPrev(888);
iam.setEas(esz.s.EASE_OUT4);
iam.addKey(444, new Props().O().T().RY().RX(0).S().F(-100,-50).get());
iam.holdPrev(333);

const eme = new Motion( document.querySelector('#eme'), delay+2000);
eme.addKey(0, new Props().O(0).T(0, 0, 0).R(0,90,0).SX(0).F(0,-50).get());
eme.setEas(esz.s.EASE_OUT3);
eme.addKey(444, new Props().O().T(0, 0, 0).R(0, 90, 0).SX(1).F(0,-50).get());
eme.holdPrev(1444);

const emmanuelGroupFX = new GroupEffect(
  Array.from(document.querySelectorAll('#eme > span'))
  .map((el: HTMLElement, index) => {
    const emmanuelAnim = new Motion(el as HTMLElement,delay +  index * 70 + 2222);
    emmanuelAnim.addKey(0, {opacity:0, transform: `translatez(2vmin) rotateY(-120deg)`});
    emmanuelAnim.setEas(esz.s.LINEAR);
    emmanuelAnim.addKey( 333, {opacity:1,transform: `translatez(5vmin)  rotateY(0deg)`});
    emmanuelAnim.setEas(esz.s.EASE_IN_OUT);
    emmanuelAnim.holdPrev((7-index)*70+ 500);
    emmanuelAnim.addKey( 333, {opacity:1,transform: `translatez(5vmin)  rotateY(0deg)`});
    return emmanuelAnim.get();
  })
);

const circle1:HTMLCanvasElement = Circle( 256, Colors.grey.W900, '#bgs', 'circ') as HTMLCanvasElement;
const motionCirc1 = new Motion(circle1,delay+733);
motionCirc1.addKey(0, new Props().C().S(0).F().get());
motionCirc1.setEas(esz.s.EASE_OUT3);
motionCirc1.addKey(999, new Props().C().S(1.4).F().get());

const ring = Ring(delay+2000, 1.3, 256,Colors.yellow.W800,Colors.grey.W900);
const ring2 = Ring(delay+2200, 1, 256,Colors.yellow.W800,Colors.grey.W900);

const circle2:HTMLCanvasElement = Circle( 256, Colors.yellow.W800, '#bgs', 'circ') as HTMLCanvasElement;
const motionCirc2 = new Motion( circle2,delay+2000);
motionCirc2.addKey(0, new Props().C().O(1).S(0).F().get());
motionCirc2.setEas(esz.s.EASE_OUT3);
motionCirc2.addKey(666, new Props().C().O(1).S(0.7).F().get());
motionCirc2.holdPrev(333);
motionCirc2.setEas(esz.s.EASE_IN3);
motionCirc2.addKey(666, new Props().C().O(1).S(0).F().get());



const g = new GroupEffect([
  iamPapa.get(),
  iam.get(),
  eme.get(),
  ring,
  ring2,
  emmanuelGroupFX,
  motionCirc1.get(),
  motionCirc2.get(),
  // motionCirc3.get()
]);
return g;
}
