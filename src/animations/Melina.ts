import Motion from "../Motion";
import Props from "../Properties";
import * as esz from "../Ease";
import Colors from "../Colors";

export default function(delay:number=0){

const meli = document.createElement('div');
meli.textContent = 'Melina is';
document.querySelector('#world').appendChild(meli);
const meliMotion = new Motion(meli, delay);
meliMotion.addKey(0, new Props().O(0).R(0, -80, 0).T(0, 0, -99).F().get());
meliMotion.setEas(esz.s.EASE_IN_OUT);
meliMotion.addKey(500, new Props().O().R(0, 30, 10).T(0, -10, 0).F().get());
meliMotion.setEas(esz.s.EASE_OUT);
meliMotion.addKey(100, new Props().O().R(0, -10, 0).T(0, -20, 20).F().get());
meliMotion.setEas(esz.s.EASE_IN_OUT);
meliMotion.addKey(800, new Props().O().R(0, 60, -10).T(0, -10, 0).F().get());
meliMotion.setEas(esz.s.EASE_IN_OUT);
meliMotion.addKey(400, new Props().O(0).R(0, 80, 30).T(0, 0, -99).F().get());

const there = new Motion(document.querySelector('#there'), delay+350);
there.addKey(0, new Props().O(0).T(0, 0, -99).R().F().get());
there.setEas(esz.s.EASE_OUT4);
there.addKey(444, new Props().O().T(10, 0, 0).R(0, 30, 0).F().get());
there.setEas(esz.s.EASE_OUT4);
there.addKey(333, new Props().O().T(10, 0, 20).R(0, 20, 0).F().get());
there.setEas(esz.s.EASE_IN4);
there.addKey(333, new Props().O(0).T(0, 0, -99).R(0, -20, -60).F().get());

const deDiv = document.createElement("div");
deDiv.id = 'helloBg';
deDiv.classList.add('circle');
document.querySelector('#bgs').appendChild(deDiv);
deDiv.style.background = Colors.yellow.W700;
const divMotion = new Motion(deDiv);
divMotion.addKey(0, new Props().S(0, 0, 0).F().get());
divMotion.setEas(esz.s.EASE_OUT5);
divMotion.addKey(2222, new Props().S(10,10,1).F().get());
divMotion.addKey(1, new Props().S(0,0,1).F().get());

const papa = new Motion(document.getElementById('seq1'), delay);
papa.addKey(0, new Props().T(0, 0, 0).R(0, 0, 0).get());
papa.setEas(esz.s.EASE_OUT);
papa.addKey(300, new Props().T(0, 10, 0).R(0, -15, 0).get());
papa.setEas(esz.s.EASE_IN_OUT);
papa.addKey(888, new Props().T(0, 10, 10).R(8, -20, 9).get());
papa.setEas(esz.s.EASE_IN);
papa.addKey(222, new Props().T(0, 0, 0).R(0, 0, 0).get());

const g = new GroupEffect([
  meliMotion.get(),
  there.get(),
  papa.get(),
  divMotion.get(),
]);
return g;
}
