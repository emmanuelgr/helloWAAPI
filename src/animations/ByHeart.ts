import Motion from "../Motion";
import * as esz from "../Ease";
import Colors from "../Colors";
import Props from "../Properties";
import Pool from "../Pool";
import Spinner from "../Spinner";

export default function(delay:number=0){
  const kfs = [];
  for (let i = 0; i < 1; i++) {
    const mtn = new Motion(new Spinner(i, `spin${i}`, "#spinners", "spinner").get(), delay + 150*i);
    mtn.addKey(0, new Props()
        .S((i+1)*3,(i+1)*3,1)
        .TZ(`${i*1}px`)
        .RZ("1turn")
        .get());
    mtn.setEas(esz.s.EASE_OUT5);
    mtn.addKey(2222, new Props()
        .S(0, 0, 0)
        .TZ(`${i*1}px`)
        .RZ()
        .get());
        kfs.push(mtn.get());
  }



const creative = new Motion(document.querySelector('#creative'), delay+3333);
creative.addKey(0, { color:Colors.yellow.W500, ...new Props().O(0).F().get()});
creative.setEas(esz.s.EASE_IN_OUT);
creative.addKey(555, { color:Colors.red.W500, ...new Props().O(1).F().get()});
creative.setEas(esz.s.EASE_IN_OUT);
creative.addKey(555, { color:Colors.amber.W500, ...new Props().O(1).F().get()});
creative.setEas(esz.s.EASE_IN_OUT);
creative.addKey(555, { color:Colors.deepOrange.W500, ...new Props().O(1).F().get()});
creative.setEas(esz.s.EASE_IN_OUT);
creative.addKey(555, { color:Colors.lime.W500, ...new Props().O(1).F().get()});
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
const divMotion = new Motion(deDiv, delay + 2222);
divMotion.addKey(0, new Props().O(0).S(100,100,1).F().get());
divMotion.setEas(esz.s.LINEAR);
divMotion.addKey(999, new Props().O(1).S(100,100,1).F().get());
divMotion.holdPrev(2222);
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