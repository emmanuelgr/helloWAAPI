import Motion from "../Motion";
import Props from "../Properties";
import * as esz from "../Ease";
import Colors from "../Colors";

export default function(delay:number=0){

const a = new Motion(document.querySelector('#ageek'), delay+666);
a.addKey(0, new Props().C().O(0).T(  0, 0, 0).F().get());
a.setEas(esz.s.EASE_IN_OUT);
a.addKey(800, new Props().C().O(1).T(   0, 0, 0).F().get());
a.holdPrev(666);
a.setEas(esz.s.EASE_IN_OUT);
a.addKey(333, new Props().C().O(0).T(  0, 0, 0).F().get());


const geek = new Motion(document.querySelector('#geek'),delay+ 1850);
geek.addKey(0, new Props().C().O(0).TX(190).F().get());
geek.setEas(esz.s.STEPS1);
geek.addKey(333, new Props().C().O(1).TX(140).F().get());
geek.setEas(esz.s.STEPS1);
geek.addKey(333, new Props().C().O(1).TX(90).F().get());
geek.setEas(esz.s.STEPS1);
geek.addKey(333, new Props().C().O(1).TX(20).F().get());
geek.setEas(esz.s.STEPS1);
geek.addKey(333, new Props().C().O(1).TX(-40).F().get());
geek.setEas(esz.s.STEPS1);
geek.addKey(333, new Props().C().O(1).TX(-90).F().get());
geek.setEas(esz.s.STEPS1);
geek.addKey(333, new Props().C().O(1).TX(-150).F().get());
geek.holdPrev(333)
geek.addKey(1, new Props().C().O(0).T().F().get());

const by = new Motion(document.querySelector('#by'), delay+3700);
by.addKey(0, new Props().C().O(0).T(  2, 10, 0).F().get());
by.setEas(esz.s.EASE_OUT);
by.addKey(555, new Props().C().O(1).T( 2, 0, 0).F().get());
by.holdPrev(555);
by.setEas(esz.s.EASE_IN3);
by.addKey(666, new Props().C().O(0).T(  2, 10, 0).F().get());

const nature = new Motion(document.querySelector('#nature'), delay+3700);
nature.addKey(0, new Props().C().O(0).T(5, 30, 0).F().get());
nature.setEas(esz.s.EASE_OUT);
nature.addKey(555, new Props().C().O(1).T(5, 15, 0).F().get());
nature.holdPrev(555);
nature.setEas(esz.s.EASE_IN3);
nature.addKey(666, new Props().C().O(0).T(5, 30, 0).F().get());


const g = new GroupEffect([
  a.get(),
  geek.get(),
  by.get(),
  nature.get(),
]);
return g;
}
