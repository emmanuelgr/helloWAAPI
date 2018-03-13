import Motion from "../Motion";
import Props from "../Properties";
import * as esz from "../Ease";
import Colors from "../Colors";
import Model from "../Model";
import Circle from "../geom/Circle";

export default function(delay:number=0){
const m = new Model().get();
//
const hello = new Motion(document.querySelector('#hello'), delay);
hello.addKey(0, new Props().C().O(0).T(0,0,-99).F().get());
hello.setEas(esz.s.EASE_OUT3);
hello.addKey(600, new Props().C().O(1).T(0,0,0).F().get());
hello.holdPrev(222);
hello.setEas(esz.s.EASE_IN4);
hello.addKey(555, new Props().C().O(0).T(0,0,-99).F().get());

const there = new Motion(document.querySelector('#there'), delay + 444);
there.addKey(0, new Props().C().O(0).TZ(-10).TY(5).RX(70).F(-50,0).get());
there.setEas(esz.s.EASE_OUT);
there.addKey(700, new Props().C().O(1).TZ(10).TY(5).RX(70).F(-50,0).get());
there.setEas(esz.s.EASE_IN);
there.addKey(444, new Props().C().O(0).TZ(-10).TY(5).RX(70).F(-50,0).get());

const circle1:HTMLCanvasElement = Circle( m.dim.max/6, Colors.yellow.W700, '#bgs', 'circ') as HTMLCanvasElement;
circle1.id = 'helloBg';
// deDiv.classList.add('circle');
const circleMotion1 = new Motion(circle1, delay);
circleMotion1.addKey(0, new Props().C().S(0).O(1).F().get());
circleMotion1.setEas(esz.s.EASE_OUT4);
circleMotion1.addKey(1111, new Props().C().S(4.2).O(1).F().get());
// divMotion.addKey(1, new Props().C().S(3).O(0).F().get());
// divMotion.holdPrev(666);
// divMotion.addKey(1, new Props().C().S(0).O(0).F().get());

const bgColorKeyFX = new KeyframeEffect(document.querySelector('#bgColor'),
[
  { backgroundColor:Colors.yellow.W700, opacity:1},
  { backgroundColor:Colors.yellow.W700, opacity:1},
],{duration:1,fill:'forwards'}
);


// const papa = new Motion(document.getElementById('seq1'), delay);
// papa.addKey(0, new Props().C().T(0, 0, 0).R(0, 0, 0).get());
// papa.setEas(esz.s.EASE_OUT);
// papa.addKey(300, new Props().C().T(0, 10, 0).R(0, -15, 0).get());
// papa.setEas(esz.s.EASE_IN_OUT);
// papa.addKey(888, new Props().C().T(0, 10, 10).R(8, -20, 9).get());
// papa.setEas(esz.s.EASE_IN);
// papa.addKey(222, new Props().C().T(0, 0, 0).R(0, 0, 0).get());

const g = new GroupEffect([
  hello.get(),
  there.get(),
  // papa.get(),
  new SequenceEffect([circleMotion1.get(),bgColorKeyFX])
]);
return g;
}
