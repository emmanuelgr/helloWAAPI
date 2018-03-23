import Motion from "../Motion";
import Props from "../Properties";
import * as esz from "../Ease";
import Colors from "../Colors";
import PartsS from "./PartsS";

export default function(delay:number=0){

const a = new Motion(document.querySelector('#ageek'), delay);
a.addKey(0, new Props().C().O(0).T(  0, 20, 0).F().get());
a.setEas(esz.s.EASE_OUT3);
a.addKey(555, new Props().C().O(1).T(   0, 0, 0).F().get());
a.holdPrev(333);
a.setEas(esz.s.EASE_IN_OUT);
a.addKey(333, new Props().C().O(0).T(  0, 20, 0).F().get());


// const geek = new Motion(document.querySelector('#geek'),delay+ 1100);
// geek.addKey(0, new Props().C().O(1).TX(120).F().get());
// geek.setEas(esz.s.STEPS1);
// geek.addKey(555, new Props().C().O(1).TX(40).F().get());
// geek.setEas(esz.s.STEPS1);
// geek.addKey(555, new Props().C().O(1).TX(-40).F().get());
// geek.setEas(esz.s.STEPS1);
// geek.addKey(555, new Props().C().O(1).TX(-120).F().get());
// geek.holdPrev(555)
// geek.addKey(1, new Props().C().O(0).T().F().get());

const geekGroupFx = new GroupEffect(
  Array.from(document.querySelectorAll('.geek'))
  .map((el: HTMLElement, i) => {
    const x = i * 12 - 15;
    const emmanuelAnim = new Motion(el as HTMLElement,delay +  i * 160 + 1100);
    emmanuelAnim.addKey(0, new Props().C().T(x-5,50,0).RZ(360).F(-50,-100).get());
    emmanuelAnim.setEas(esz.s.EASE_OUT5);
    emmanuelAnim.addKey( 666, new Props().C().T(x, 0,0).RZ(0).F().get() );
    emmanuelAnim.setEas(esz.s.EASE_IN5);
    emmanuelAnim.addKey( 666, new Props().C().T(x+5,50,0).RZ(-180).F().get() );
    return emmanuelAnim.get();
  })
);

const by = new Motion(document.querySelector('#by'), delay+3400);
by.addKey(0, new Props().C().O(0).T(  0, 10, 0).S().F().get());
by.setEas(esz.s.EASE_OUT);
by.addKey(555, new Props().C().O(1).T( 0, 0, 0).S().F().get());
by.holdPrev(888);
by.setEas(esz.s.EASE_IN2);
by.addKey(3333, new Props().C().O(0).T( 0, 0, 0).S(0).F().get());

const nature = new Motion(document.querySelector('#nature'), delay+3600);
nature.addKey(0, new Props().C().O(0).T(5, 30, 0).S().F().get());
nature.setEas(esz.s.EASE_OUT);
nature.addKey(555, new Props().C().O(1).T(5, 15, 0).S().F().get());
nature.holdPrev(888);
nature.setEas(esz.s.EASE_IN2);
nature.addKey(3333, new Props().C().O(0).T(0, 0, 0).S(0).F().get());

const parts = PartsS(delay+3000);


const g = new GroupEffect([
  a.get(),
  // geek.get(),
  geekGroupFx,
  by.get(),
  nature.get(),
  parts,
]);
return g;
}
