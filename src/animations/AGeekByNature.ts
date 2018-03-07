import Motion from "../Motion";
import Props from "../Properties";
import * as esz from "../Ease";
import Colors from "../Colors";

export default function(delay:number=0){

const key______IN = 0, key_POSE_IN = 888, key____POSE=666, keyPOSE_OUT=444, key_____OUT=333;

const deDiv = document.createElement("div");
deDiv.id = 'geekBg';
deDiv.classList.add('rect');
document.querySelector('#bgs').appendChild(deDiv);
const divMotion = new Motion(deDiv, delay + 0);
divMotion.addKey(0, new Props().O(0).TY('100vh').S(100,100,1).F().get());
divMotion.setEas(esz.s.EASE_OUT3);
divMotion.addKey(1111, new Props().O().TY().S(100,100,1).F().get());
divMotion.setEas(esz.s.EASE_OUT3);
divMotion.addKey(1111, new Props().O().TY('-100vh').S(100,100,1).F().get());
divMotion.holdPrev(700);
divMotion.setEas(esz.s.EASE_OUT3);
divMotion.addKey(1111, new Props().O(1).TY().S(100,100,1).F().get());

const a = new Motion(document.querySelector('#ageek'), delay+666);
a.addKey(0, new Props().O(0).T(  0, 0, 0).F().get());
a.setEas(esz.s.EASE_IN_OUT);
a.addKey(key_POSE_IN, new Props().O(1).T(   0, 0, 0).F().get());
a.holdPrev(999);
a.setEas(esz.s.EASE_IN_OUT);
a.addKey(333, new Props().O(0).T(  0, 0, 0).F().get());


const geek = new Motion(document.querySelector('#geek'),delay+ 650);
geek.addKey(0, new Props().O(0).TX('140vmin').F().get());
geek.setEas(esz.s.STEPS1);
geek.addKey(444, new Props().O(1).TX('90vmin').F().get());
geek.setEas(esz.s.STEPS1);
geek.addKey(444, new Props().O(1).TX('20vmin').F().get());
geek.setEas(esz.s.STEPS1);
geek.addKey(444, new Props().O(1).TX('-40vmin').F().get());
geek.setEas(esz.s.STEPS1);
geek.addKey(444, new Props().O(1).TX('-90vmin').F().get());
geek.setEas(esz.s.STEPS1);
geek.addKey(444, new Props().O(1).TX('-150vmin').F().get());
geek.holdPrev(444)
geek.addKey(1, new Props().O(0).T().F().get());

const by = new Motion(document.querySelector('#by'), delay+3300);
by.addKey(0, new Props().O(0).T(  2, -10, 0).F().get());
by.setEas(esz.s.EASE_OUT);
by.addKey(555, new Props().O(1).T( 2, 0, 0).F().get());
by.holdPrev(555);
by.setEas(esz.s.EASE_IN3);
by.addKey(666, new Props().O(0).T(  2, 0, 0).F().get());

const nature = new Motion(document.querySelector('#nature'), delay+3400);
nature.addKey(0, new Props().O(0).T(5, 0, 0).F().get());
nature.setEas(esz.s.EASE_OUT);
nature.addKey(555, new Props().O(1).T(5, 15, 0).F().get());
nature.holdPrev(555);
nature.setEas(esz.s.EASE_IN3);
nature.addKey(666, new Props().O(0).T(5, 15, 0).F().get());


const papa = new Motion(document.getElementById('seq4'), delay+5555);
papa.addKey(0, new Props().S(1  ,1, 1).get());
papa.setEas(esz.s.EASE_OUT);
papa.addKey(333, new Props().S(1  ,1, 1).get());
papa.setEas(esz.s.EASE_IN);
papa.addKey(1555, new Props().S(1  ,1, 1).get());
papa.setEas(esz.s.EASE_IN3);
papa.addKey(555, new Props().S(0  ,0, 10).get());

const g = new GroupEffect([
  a.get(),
  geek.get(),
  by.get(),
  nature.get(),
  // papa.get(),
  divMotion.get()
]);
return g;
}
