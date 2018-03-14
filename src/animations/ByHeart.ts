import Motion from "../Motion";
import * as esz from "../Ease";
import Colors from "../Colors";
import Props from "../Properties";
import Pool from "../Pool";
import Spinner from "../Spinner";

export default function(delay:number=0){
  const kfs = [];
  for (let i = 0; i < 7; i++) {
    const mtn = new Motion(new Spinner(i, `spin${i}`, "#spinners", "spinner").get(), delay + 150*i);
    const s = 140;
    mtn.addKey(0, new Props().C().S().RZ(180).O(0).F().get());
    mtn.addKey(1, new Props().C().S((i+1)*s).RZ(180).O(1).F().get());
    mtn.setEas(esz.s.EASE_OUT5);
    mtn.addKey(1711, new Props().C().S(0).RZ().O(1).F().get());
    mtn.addKey(    1, new Props().C().S((i+1)*s).RZ().O(0).F().get());
    kfs.push(mtn.get());
  }

const creative = new Motion(document.querySelector('#creative'), delay+2300);
creative.addKey(0,  { color:Colors.yellow.W500, ...new Props().O(0).get()});
creative.setEas(esz.s.EASE_IN_OUT);
creative.addKey(777, { color:Colors.red.W500, ...new Props().O(1).get()});
creative.setEas(esz.s.EASE_IN_OUT);
creative.addKey(777, { color:Colors.amber.W500, ...new Props().O(1).get()});
creative.setEas(esz.s.EASE_IN_OUT);
creative.addKey(777, { color:Colors.deepOrange.W500, ...new Props().O(1).get()});
creative.setEas(esz.s.EASE_IN_OUT);
creative.addKey(777, { color:Colors.lime.W500, ...new Props().O(1).get()});
creative.holdPrev(9999);
creative.setEas(esz.s.EASE_IN_OUT);
creative.addKey(444, { color:Colors.amber.W500,...new Props().O(0).get()});


const by = new Motion(document.querySelector('#byheart'),delay+ 3333);
by.addKey(0, new Props().O(0).get());
by.setEas(esz.s.EASE_IN_OUT);
by.addKey(888, new Props().O(1).get());
by.holdPrev(999);
by.setEas(esz.s.EASE_IN_OUT);
by.addKey(444, new Props().O(0).get());



const heart = new Motion(document.querySelector('#heart'), delay+3400);
heart.addKey(0, new Props().O(0).TY(10).get());
heart.setEas(esz.s.EASE_OUT);
heart.addKey(333, new Props().O(1).TY(0).get());
heart.holdPrev(999);
heart.setEas(esz.s.EASE_IN3);
heart.addKey(444, new Props().O(0).TY(10).get());


const g = new GroupEffect([
  new GroupEffect(kfs),
  creative.get(),
  by.get(),
  heart.get(),
]);
return g;
}