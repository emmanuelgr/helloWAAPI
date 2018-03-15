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

const paps = new Motion(document.querySelector('#contactSection'), delay,666);
paps.addKey(0, new Props().C().TX().RY(-360).S(0).F().get());
paps.setEas(esz.s.EASE_OUT4);
paps.addKey(999, new Props().C().TX().RY(0).S().F().get());
// paps.holdPrev(2000);
paps.setFill('forwards');

const h2 = new Motion(document.querySelector('#contactSection h2'), delay,666);
h2.addKey(0, new Props().O(0).TZ().get());
h2.addKey(333, new Props().O(1).TZ(0).get());
// h2.holdPrev(2666);
h2.setFill('forwards');

const a = new Motion(document.querySelector('#contactSection a'), delay,666);
a.addKey(0, new Props().O(0).TZ().get());
a.addKey(333, new Props().O(1).TZ(0).get());
// a.holdPrev(4666);
a.setFill('forwards');


const groupFX = new GroupEffect(
  Array.from(document.querySelectorAll('#contactSection  span'))
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

console.log(paps.get().activeDuration);
console.log(h2.get().activeDuration);
console.log(a.get().activeDuration);
console.log(groupFX.activeDuration);


const g = new GroupEffect([
paps.get(),
h2.get(),
a.get(),
groupFX,
]);
return g;
}