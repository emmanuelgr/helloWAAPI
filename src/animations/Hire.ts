import Motion from "../Motion";
import Props from "../Properties";
import * as esz from "../Ease";
import CameraMotions from "../CameraMotions";
import Colors from "../Colors";
import Model from "../Model";
import Circle from "../geom/Circle";
import Ring from "./Ring";
import Grid from "../geom/Grid";

export default function(delay:number=0){

const m = new Model().get();
  const grid = Grid();
  grid.style.visibility = 'visible';
  grid.style.position='absolute';
  grid.style.transformOrigin = '0 0';
  grid.style.transform = ' translate3d(50vw, 50vh,0) translate(-50%, -50%)';
  // document.querySelector('#world').appendChild(grid);
const paps = new Motion(document.querySelector('#hire'), delay);
// paps.setFill('both');
paps.addKey(0, new Props().C().TY(0).RX(0).RY(0).S(0).get());
paps.setEas(esz.s.EASE_OUT);
paps.addKey(333, new Props().C().TY(11).RX(-45).RY(90).S(1).get());
paps.setEas(esz.s.EASE_OUT4);
paps.addKey(999, new Props().C().TY(11).RX(-55).RY(90+360-45).S(1).get());
paps.holdPrev(222);
paps.setEas(esz.s.EASE_OUT4);
paps.addKey(999, new Props().C().TY(11).RX(-45).RY(90+360-45+360).S(1.1).get());
paps.setEas(esz.s.EASE_OUT4);
paps.addKey(222, new Props().C().TY(11).RX(-45).RY(90+360-45+360).S(0.7).get());
paps.setEas(esz.s.EASE_OUT4);
paps.addKey(222, new Props().C().TY(11).RX(-45).RY(90+360-45+360).S(1.2).get());
paps.setEas(esz.s.EASE_OUT4);
paps.addKey(999, new Props().C().TY(11).RX(-45).RY(90+360-45+360).S(0.9).get());
paps.setEas(esz.s.EASE_OUT4);
paps.addKey(999, new Props().C().TY(11).RX(-45).RY(90+360-45+360+360).S(1.4).get());
paps.setEas(esz.s.EASE_IN4);
paps.addKey(666, new Props().C().TY(0).RX(-45).RY(90+360-45+360+360-360).S(0).get());

const hi = new Motion(document.querySelector('#hi'), delay);
// hi.setFill('both');
hi.addKey(0,    new Props().O().T(-11,0,-11).RZ().RY(-270).RX(90).S(0).F(0,-100).get());
hi.setEas(esz.s.EASE_OUT4);
hi.addKey(666,  new Props().O().T(-11,0,-11).RZ().RY(0).RX().S().F(0,-100).get());
hi.holdPrev(999);
hi.setEas(esz.s.EASE_IN_OUT);
hi.addKey(444,  new Props().O().T(-11,-22,-11).RZ().RY(-90).RX(90).S().F(0,-100).get());
hi.holdPrev(999);
hi.setEas(esz.s.EASE_OUT4);
hi.addKey(666,  new Props().O().T(-11,0,-11).RZ().RY(0).RX().S().F(0,-100).get());
hi.holdPrev(2222);

const re = new Motion( document.querySelector('#re'), delay+150);
// re.setFill('both');
re.addKey(0, new Props().O(1).T(11,0,-11).RY(-180).RX(90).S(0).F(-100,0).get());
re.setEas(esz.s.EASE_OUT3);
re.addKey(666, new Props().O(1).T(11,0,-11).RY(0).RX(90).S(1).F(-100,0).get());
re.holdPrev(999);
re.setEas(esz.s.EASE_IN_OUT);
re.addKey(444, new Props().O(1).T(-11,-22,11).RY(-90).RX(0).S(1).F(-100,0).get());
re.holdPrev(999);
re.setEas(esz.s.EASE_OUT3);
re.addKey(666, new Props().O(1).T(11,0,-11).RY(0).RX(90).S(1).F(-100,0).get());
re.holdPrev(2100);

const me = new Motion( document.querySelector('#me'), delay+300);
// me.setFill('both');
me.addKey(0, new Props().O(1).T(11,0,-11).RX(-90).RY(90).S(0).F(0,-100).get());
me.setEas(esz.s.EASE_OUT3);
me.addKey(666, new Props().O(1).T(11,0,-11).RX(0).RY(-90).S(1).F(0,-100).get());
me.holdPrev(999);
me.setEas(esz.s.EASE_IN_OUT);
me.addKey(444, new Props().O(1).T(-11,0,11).RX(0).RY().S(1).F(0,-100).get());
me.holdPrev(999);
me.setEas(esz.s.EASE_OUT3);
me.addKey(666, new Props().O(1).T(11,0,-11).RX(0).RY(-90).S(1).F(0,-100).get());
me.holdPrev(2100);

const circle1:HTMLCanvasElement = Circle( 128, Colors.grey.W900, '#bgs', 'circ') as HTMLCanvasElement;
const motionBg1 = new Motion(circle1,delay+4000);
motionBg1.addKey(0, new Props().C().S(0).F().get());
motionBg1.setEas(esz.s.EASE_OUT3);
motionBg1.addKey(999, new Props().C().S(0.75).F().get());
motionBg1.holdPrev(222);
motionBg1.addKey(444, new Props().C().S(0).F().get());

const ring = Ring(delay+500, 1, 256, '#000', Colors.grey.W800);

const g = new GroupEffect([
  paps.get(),
  hi.get(),
  re.get(),
  me.get(),
  ring,
  motionBg1.get(),
]);
return g;
}
