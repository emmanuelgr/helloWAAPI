import Motion from "../Motion";
import * as esz from "../Ease";
import Colors from "../Colors";
import Props from "../Properties";
import Pool from "../Pool";
import Spinner from "../Spinner";

export default function(delay:number=0){
  const kfs = [];
  for (let i = 0; i < 6; i++) {
    const mtn = new Motion(new Spinner(i, `spin${i}`, "#spinners", "spinner").get(), delay + 170*i);
    const s = 140;
    mtn.addKey(0, new Props().S().RZ("0.5turn").O(0).F().get());
    mtn.addKey(1, new Props().S((i+1)*s,(i+1)*s,1).RZ("0.5turn").O(1).F().get());
    mtn.setEas(esz.s.EASE_OUT5);
    mtn.addKey(1311, new Props().S(0, 0, 0).RZ().O(1).F().get());
    mtn.addKey(    1, new Props().S((i+1)*s,(i+1)*s,1).RZ().O(0).F().get());
    kfs.push(mtn.get());
  }



const creative = new Motion(document.querySelector('#creative'), delay+2000);
// creative.addKey(0,  new Props().O(0).F().get() );
// creative.setEas(esz.s.EASE_IN_OUT);
// creative.addKey(444, new Props().O(1).F().get() );
// creative.holdPrev(2000);
// creative.setEas(esz.s.EASE_IN_OUT);
// creative.addKey(333,  new Props().O(0).F().get() );
creative.addKey(0, { color:Colors.yellow.W500, ...new Props().O(0).F().get()});
creative.setEas(esz.s.EASE_IN_OUT);
creative.addKey(777, { color:Colors.red.W500, ...new Props().O(1).F().get()});
creative.setEas(esz.s.EASE_IN_OUT);
creative.addKey(777, { color:Colors.amber.W500, ...new Props().O(1).F().get()});
creative.setEas(esz.s.EASE_IN_OUT);
creative.addKey(777, { color:Colors.deepOrange.W500, ...new Props().O(1).F().get()});
creative.setEas(esz.s.EASE_IN_OUT);
creative.addKey(777, { color:Colors.lime.W500, ...new Props().O(1).F().get()});
creative.holdPrev(999);
creative.setEas(esz.s.EASE_IN_OUT);
creative.addKey(444, { color:Colors.amber.W500,...new Props().O(0).F().get()});


const by = new Motion(document.querySelector('#byheart'),delay+ 3333);
by.addKey(0, new Props().O(0).T(0, 11, 0).F().get());
by.setEas(esz.s.EASE_IN_OUT);
by.addKey(888, new Props().O(1).T(0 ,11, 0).F().get());
by.holdPrev(999);
by.setEas(esz.s.EASE_IN_OUT);
by.addKey(444, new Props().O(0).T( 0, 11, 0).F().get());



const heart = new Motion(document.querySelector('#heart'), delay+3400);
heart.addKey(0, new Props().O(0).T(5, 20, 0).F().get());
heart.setEas(esz.s.EASE_OUT);
heart.addKey(333, new Props().O(1).T(5, 20, 0).F().get());
heart.holdPrev(999);
heart.setEas(esz.s.EASE_IN3);
heart.addKey(444, new Props().O(0).T(5, 20, 0).F().get());



const deDiv = document.createElement("div");
deDiv.id = 'heartBg';
deDiv.classList.add('rect');
document.querySelector('#bgs').appendChild(deDiv);
const divMotion = new Motion(deDiv, delay + 1000);
divMotion.addKey(0, new Props().O(0).S(0,0,0).F().get() );
divMotion.addKey(1, new Props().O(1).S(100,100,1).F().get());
divMotion.setEas(esz.s.EASE_OUT3);
divMotion.addKey(333, new Props().O(1).S(100,100,1).F().get());
divMotion.holdPrev(3333);
divMotion.setEas(esz.s.LINEAR);
divMotion.addKey(444, new Props().O(0).S(100,100,1).F().get());

// const papa = new Motion(document.getElementById('seq4'), delay+5555);
// papa.addKey(0, new Props().S(1  ,1, 1).get());
// papa.setEas(esz.s.EASE_OUT);
// papa.addKey(333, new Props().S(1  ,1, 1).get());
// papa.setEas(esz.s.EASE_IN);
// papa.addKey(1555, new Props().S(1  ,1, 1).get());
// papa.setEas(esz.s.EASE_IN3);
// papa.addKey(555, new Props().S(0  ,0, 10).get());

const g = new GroupEffect([
  new GroupEffect(kfs),
  // animSpinnerSpin.get(),
  creative.get(),
  by.get(),
  heart.get(),
  // papa.get(),
  divMotion.get()
]);
return g;
}