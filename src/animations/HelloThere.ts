import Motion from "../Motion";
import Props from "../Properties";
import * as esz from "../Ease";
import Colors from "../Colors";

export default function(delay:number=0){

const hello = new Motion(document.querySelector('#hello'), delay);
hello.addKey(0, new Props().O(0).T(0, 0, -99).F().get());
hello.setEas(esz.s.EASE_OUT3);
hello.addKey(600, new Props().O().T(0, 0, 0).F().get());
hello.holdPrev(222);
hello.setEas(esz.s.EASE_IN4);
hello.addKey(555, new Props().O(0).T(0, 0, -55).F().get());

const there = new Motion(document.querySelector('#there'), delay+222);
there.addKey(0, new Props().O(0).T(10, 11, 0).F().get());
there.addKey(555, new Props().O().T(10, 11, 0).F().get());
there.setEas(esz.s.EASE_IN4);
there.holdPrev(222);
there.addKey(555, new Props().O(0).T(10, 11, -55).F().get());

const deDiv = document.createElement("div");
deDiv.id = 'helloBg';
deDiv.classList.add('circle');
document.querySelector('#bgs').appendChild(deDiv);
deDiv.style.background = Colors.yellow.W700;
const divMotion = new Motion(deDiv);
divMotion.addKey(0, new Props().S(0, 0, 0).O(0).F().get());
divMotion.setEas(esz.s.EASE_OUT5);
divMotion.addKey(2222, new Props().S(10,10,1).O().F().get());
divMotion.holdPrev(666);
divMotion.addKey(1, new Props().S(0,0,1).O(0).F().get());

const papa = new Motion(document.getElementById('seq1'), delay);
papa.addKey(0, new Props().T(0, 0, 0).R(0, 0, 0).get());
papa.setEas(esz.s.EASE_OUT);
papa.addKey(300, new Props().T(0, 10, 0).R(0, -15, 0).get());
papa.setEas(esz.s.EASE_IN_OUT);
papa.addKey(888, new Props().T(0, 10, 10).R(8, -20, 9).get());
papa.setEas(esz.s.EASE_IN);
papa.addKey(222, new Props().T(0, 0, 0).R(0, 0, 0).get());

const g = new GroupEffect([
  hello.get(),
  there.get(),
  // papa.get(),
  divMotion.get(),
]);
return g;
}
