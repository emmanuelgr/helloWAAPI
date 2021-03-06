import Motion from "../Motion";
import Props from "../Properties";
import * as esz from "../Ease";
import CameraMotions from "../CameraMotions";
import Colors from "../Colors";
import Model from "../Model";
import Circle from "../geom/Circle";
import Ring from "./Ring";

export default function(delay:number=0){

const m = new Model().get();

const paps = new Motion(document.querySelector('#outro'), delay,666);
paps.addKey(0, new Props().C().TX().RY(-360).S(0).F().get());
paps.setEas(esz.s.EASE_OUT4);
paps.addKey(999, new Props().C().TX().RY(0).S().F().get());
// paps.holdPrev(2000);
paps.setFill('forwards');


const groupFX = new GroupEffect(
  Array.from(document.querySelectorAll('#outro  span'))
  .map((el: HTMLElement, index) => {
    const emmanuelAnim = new Motion(el as HTMLElement,delay +  index * 333 +333,666 );
    emmanuelAnim.addKey(0, {opacity:0, ...new Props().TZ(0).get()});
    emmanuelAnim.setEas(esz.s.LINEAR);
    emmanuelAnim.addKey( 333, {opacity:1, ...new Props().TZ(10).get()});
    // emmanuelAnim.holdPrev((7-index)*333);
    emmanuelAnim.setFill('forwards');
    return emmanuelAnim.get();
  })
);

const mailme = new Motion( document.querySelector('#emailme'), delay+999);
mailme.addKey(0, new Props().TY(28).S(0).F().C().get());
mailme.setEas(esz.s.EASE_OUT4);
mailme.addKey(999, new Props().TY(28).S(1).F().C().get());
mailme.setFill('forwards');

const scrollUp = new Motion( document.querySelector('#scroll-up'), delay+3000);
// me.setFill('both');
scrollUp.addKey(0, new Props().O(1).TX(50,'vw').TY(100,'vh').F().get());
scrollUp.setEas(esz.s.EASE_OUT3);
scrollUp.addKey(999, new Props().O(1).TX(50,'vw').TY(90,'vh').F().get());
scrollUp.setFill('forwards');


console.log(paps.get().activeDuration);
console.log(groupFX.activeDuration);


const g = new GroupEffect([
paps.get(),
groupFX,
mailme.get(),
scrollUp.get(),
]);
return g;
}
