import Motion from "../Motion";
import Props from "../Properties";
import CameraMotions from "../CameraMotions";
import * as esz from "../Ease";
import Colors from "../Colors";
import Model from "../Model";

export default function(delay:number=0){
    
const m = new Model().get();

const a = new Motion(document.querySelector('#a'), delay);
a.addKey(0, new Props().C().O(0).TY(10).RX(-180).F().get());
a.setEas(esz.s.EASE_OUT2);
a.addKey(666, new Props().C().O().TY(-10).RX().F().get());
a.holdPrev(444);
a.setEas(esz.s.EASE_IN2);
a.addKey(1600, new Props().C().O(0).TY(30).RX(-90).F().get());

const soft = new Motion(document.querySelector('#software'),delay+111);
soft.addKey(0, new Props().C().O(0).TY(20).RX(-180).F().get());
soft.setEas(esz.s.EASE_OUT2);
soft.addKey(666, new Props().C().O().TY().RX().F().get());
soft.holdPrev(444);
soft.setEas(esz.s.EASE_IN2);
soft.addKey(1300, new Props().C().O(0).TY(40).RX(-90).F().get());


const dev = new Motion( document.querySelector('#dev'), delay+222);
dev.addKey(0, new Props().C().O(0).TY(30).RX(-180).F().get());
dev.setEas(esz.s.EASE_OUT2);
dev.addKey(666, new Props().C().O().TY(10).RX().F().get());
dev.holdPrev(444);
dev.setEas(esz.s.EASE_IN2);
dev.addKey(1000, new Props().C().O(0).TY(50).RX(-90).F().get());


const deDiv = document.createElement("div");
deDiv.id = 'aSoft1';
deDiv.classList.add('rect');
document.querySelector('#bgs').appendChild(deDiv);
deDiv.style.background = Colors.yellow.W500;
const divMotion1 = new Motion(deDiv,delay+0);

divMotion1.addKey(0, new Props().C().TY(100).O(0).S(10).F().get());
divMotion1.addKey(1, new Props().C().TY(100).O().S(10).F().get());
divMotion1.setEas(esz.s.EASE_OUT5);
divMotion1.addKey(1111, new Props().C().TY(0).O().S(10).F().get());
divMotion1.holdPrev(666);
divMotion1.setEas(esz.s.EASE_IN3);
divMotion1.addKey(1111, new Props().C().TY(100).O().S(10).F().get());
divMotion1.addKey(1, new Props().C().TY(100).O(0).S(10).F().get());

const deDiv2 = document.createElement("div");
deDiv2.id = 'aSoft2';
deDiv2.classList.add('rect');
document.querySelector('#bgs').appendChild(deDiv2);
deDiv2.style.background = Colors.yellow.W300;
const divMotion2 = new Motion(deDiv2,delay+100);
divMotion2.addKey(0, new Props().C().TY(100).O(0).S(10).F().get());
divMotion2.addKey(1, new Props().C().TY(100).O().S(10).F().get());
divMotion2.setEas(esz.s.EASE_OUT5);
divMotion2.addKey(1111, new Props().C().TY(0).O().S(10).F().get());
divMotion2.holdPrev(333);
divMotion2.setEas(esz.s.EASE_IN3);
divMotion2.addKey(1111, new Props().C().TY(100).O().S(10).F().get());
divMotion2.addKey(1, new Props().C().TY(100).O(0).S(10).F().get());

const deDiv3 = document.createElement("div");
deDiv3.id = 'aSoft3';
deDiv3.classList.add('rect');
document.querySelector('#bgs').appendChild(deDiv3);
deDiv3.style.background = Colors.yellow.W200;
const divMotion3 = new Motion(deDiv3,delay+200);
divMotion3.addKey(0, new Props().C().TY(100).O(0).S(10).F().get());
divMotion3.addKey(1, new Props().C().TY(100).O(1).S(10).F().get());
divMotion3.setEas(esz.s.EASE_OUT5);
divMotion3.addKey(1111, new Props().C().TY(0).O(1).S(10).F().get());
divMotion3.holdPrev(111);
divMotion3.setEas(esz.s.EASE_IN3);
divMotion3.addKey(1111, new Props().C().TY(100).O(1).S(10).F().get());
divMotion3.addKey(1, new Props().C().TY(100).O(0).S(10).F().get());

const papa = new Motion(document.querySelector('#seq3'), delay);
papa.addKey(0, new Props().C().T(0, 0, -10).R(      -30, 0, 0  ).get());
papa.setEas(esz.s.LINEAR);
papa.addKey(666, new Props().C().T(0, 0, 0).R(   5, 0, 0   ).get());
papa.setEas(esz.s.LINEAR);
papa.addKey(666, new Props().C().T(0, 0, 0).R(  -5, 0, 0     ).get());
papa.setEas(esz.s.LINEAR);
papa.addKey(333, new Props().C().T(0, 0, -10).R(    0, 0, 0).get());

const g = new GroupEffect([
    a.get(),
    soft.get(),
    dev.get(),
      divMotion1.get(),
      divMotion2.get(),
      divMotion3.get(),
    // papa.get(),
]);
return g;
}
