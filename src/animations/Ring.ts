import Motion from "../Motion";
import Props from "../Properties";
import * as esz from "../Ease";
import Circle from "../geom/Circle";

export default function(delay:number=0,scale:number=1,size:number=256, clr1='#fff', bgClr='#000'){

const circle1:HTMLCanvasElement = Circle( size, clr1, '#bgs', 'ring') as HTMLCanvasElement;
const motionCirc1 = new Motion( circle1,delay);
motionCirc1.addKey(0, new Props().C().S(0).F().get());
motionCirc1.setEas(esz.s.EASE_OUT1);
motionCirc1.addKey(666, new Props().C().S(0.98*scale).F().get());

const circle2:HTMLCanvasElement = Circle( size, bgClr, '#bgs', 'ring') as HTMLCanvasElement;
const motionCirc2 = new Motion(circle2, delay+50);
motionCirc2.addKey(0, new Props().C().S(0).F().get());
motionCirc2.setEas(esz.s.EASE_OUT1);
motionCirc2.addKey(666, new Props().C().S(1*scale).F().get());


const g = new GroupEffect([
  motionCirc1.get(),
  motionCirc2.get()
]);
return g;
}
