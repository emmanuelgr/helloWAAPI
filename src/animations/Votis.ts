import Motion from "../Motion";
import Props from "../Properties";
import * as esz from "../Ease";
import CameraMotions from "../CameraMotions";
import Colors from "../Colors";
import Model from "../Model";
import Circle from "../geom/Circle";

export default function(delay:number=0){

const m = new Model().get();

const circle1:HTMLCanvasElement = Circle( 256, Colors.grey.W700, '#bgs', 'circ') as HTMLCanvasElement;
const motionBg1 = new Motion(circle1,delay);
motionBg1.addKey(0, new Props().C().S(0).F().get());
motionBg1.setEas(esz.s.EASE_OUT3);
motionBg1.addKey(999, new Props().C().S(1.4).F().get());

const circle2:HTMLCanvasElement = Circle( 256, Colors.grey.W800, '#bgs', 'circ') as HTMLCanvasElement;
const motionBg2 = new Motion( circle2,delay+200);
motionBg2.addKey(0, new Props().C().O(1).S(0).F().get());
motionBg2.setEas(esz.s.EASE_OUT4);
motionBg2.addKey(333, new Props().C().O(1).S(0.5).F().get());
motionBg2.holdPrev(333);
motionBg2.setEas(esz.s.EASE_IN3);
motionBg2.addKey(666, new Props().C().O(0).S(0).F().get());

const circle3:HTMLCanvasElement = Circle( 256, Colors.grey.W700, '#bgs', 'circ') as HTMLCanvasElement;
const motionBg3 = new Motion(circle3, delay+200);
motionBg3.addKey(0, new Props().C().O(1).S(0).F().get());
motionBg3.setEas(esz.s.EASE_OUT4);
motionBg3.addKey(444, new Props().C().O(1).S(0.45).F().get());
motionBg3.holdPrev(333);
motionBg3.setEas(esz.s.EASE_IN3);
motionBg3.addKey(666, new Props().C().O(0).S(0).F().get());

const votis = Array.from( document.querySelectorAll('#votis span') );
const votisGroupFX = new GroupEffect( 
  votis.map( (e, index )=>{
  const r = index*(180/8);
  const tY = -28;
  const m = new Motion( e, index*30 + delay + 400);
  m.addKey( 0, new Props().S(0.8).RZ(r).TY(tY).F(-50,-100).C().O(0).get());
  m.setEas(esz.s.EASE_OUT4);
  m.addKey( 333, new Props().S(1).RZ(r-90).TY(tY).F(-50,-100).C().O(1).get());
  m.holdPrev(222);
  m.setEas(esz.s.EASE_IN1);
  m.addKey( 444, new Props().S(0.8).RZ(r-180).TY(tY).F(-50,-100).C().O(0).get());
  return m.get();
}));

const g = new GroupEffect([
  motionBg1.get(),
  motionBg2.get(),
  motionBg3.get(),
  votisGroupFX
]);
return g;
}
