import Motion from "../Motion";
import * as esz from "../Ease";
import Colors from "../Colors";
import Props from "../Properties";
import Pool from "../Pool";

export default function(delay:number=0){
  
  setupSpinners();
  
  const animSpinner = new Motion(document.querySelector('#spinners'), delay);
  animSpinner.addKey( 0, new Props().S(0,0,0).RZ().get() );
  animSpinner.setEas(esz.s. EASE_IN_OUT);
  animSpinner.addKey( 8888, new Props().S(6,6,6).RZ('1turn').get() );

// const deDiv = document.createElement("div");
// deDiv.id = 'geekBg';
// deDiv.classList.add('rect');
// document.querySelector('#bgs').appendChild(deDiv);
// const divMotion = new Motion(deDiv, delay + 0);
// divMotion.addKey(0, new Props().O(0).TY('100vh').F().get());
// divMotion.setEas(esz.s.EASE_OUT3);
// divMotion.addKey(1111, new Props().O().TY().F().get());
// divMotion.setEas(esz.s.EASE_IN3);
// divMotion.addKey(1111, new Props().O().TY('-100vh').F().get());
// divMotion.holdPrev(1333);
// divMotion.setEas(esz.s.EASE_OUT3);
// divMotion.addKey(1111, new Props().O(1).TY().F().get());

// const a = new Motion(document.querySelector('#ageek'), delay+666);
// a.addKey(0, new Props().O(0).T(  -3, 0, 0).F().get());
// a.setEas(esz.s.EASE_IN_OUT);
// a.addKey(key_POSE_IN, new Props().O(1).T(   -3, 0, 0).F().get());
// a.holdPrev(333);
// a.setEas(esz.s.EASE_IN_OUT);
// a.addKey(333, new Props().O(0).T(  -3, 0, 0).F().get());


// const geek = new Motion(document.querySelector('#geek'),delay+ 1100);
// geek.addKey(0, new Props().O(0).T().F().get());
// geek.addKey(444, new Props().O(1).TX('90vmin').F().get());
// geek.holdPrev(500);
// geek.setEas(esz.s.STEPS1);
// geek.addKey(444, new Props().O(1).TX('20vmin').F().get());
// geek.setEas(esz.s.STEPS1);
// geek.addKey(444, new Props().O(1).TX('-40vmin').F().get());
// geek.setEas(esz.s.STEPS1);
// geek.addKey(444, new Props().O(1).TX('-90vmin').F().get());
// geek.holdPrev(999)
// geek.addKey(1, new Props().O(0).T().F().get());

// const by = new Motion(document.querySelector('#by'), delay+3300);
// by.addKey(0, new Props().O(0).T(  2, 0, 0).F().get());
// by.setEas(esz.s.EASE_OUT);
// by.addKey(333, new Props().O(1).T(   2, 0, 0).F().get());
// by.holdPrev(555);
// by.setEas(esz.s.EASE_IN3);
// by.addKey(666, new Props().O(0).T(  2, -10, 0).F().get());

// const nature = new Motion(document.querySelector('#nature'), delay+3400);
// nature.addKey(0, new Props().O(0).T(5, 30, 0).F().get());
// nature.setEas(esz.s.EASE_OUT);
// nature.addKey(333, new Props().O(1).T(5, 15, 0).F().get());
// nature.holdPrev(555);
// nature.setEas(esz.s.EASE_IN3);
// nature.addKey(666, new Props().O(0).T(5, 0, 0).F().get());


// const papa = new Motion(document.getElementById('seq4'), delay+5555);
// papa.addKey(0, new Props().S(1  ,1, 1).get());
// papa.setEas(esz.s.EASE_OUT);
// papa.addKey(333, new Props().S(1  ,1, 1).get());
// papa.setEas(esz.s.EASE_IN);
// papa.addKey(1555, new Props().S(1  ,1, 1).get());
// papa.setEas(esz.s.EASE_IN3);
// papa.addKey(555, new Props().S(0  ,0, 10).get());

const g = new GroupEffect([
  animSpinner.get(),
  // a.get(),
  // geek.get(),
  // by.get(),
  // nature.get(),
  // papa.get(),
  // divMotion.get()
]);
return g;
}

function setupSpinners(){
    const colors = [
  [Colors.deepOrange.W300, Colors.deepOrange.W500,Colors.deepOrange.W700,Colors.deepOrange.W900],
  [Colors.indigo.W300, Colors.indigo.W500,Colors.indigo.W700,Colors.indigo.W900],
  [Colors.green.W300, Colors.green.W500,Colors.green.W700,Colors.green.W900],
  [Colors.amber.W300, Colors.amber.W500,Colors.amber.W700,Colors.amber.W900],
];
const spinnersPool = new Pool(16, 'spinner', '#spinners', 'spinner');
for (let set = 0; set < 4; set++) {
  for (let index = 0; index < 4; index++) {
    const element = spinnersPool.checkOut();
    element.style.width  =  '66.6vmin';
    element.style.height =  '33.4vmin';
    element.style.backgroundColor = colors[set%colors.length][index];
    let t ;
    const m = Math.pow(3,set)*50;
    switch (index) {
      case 0:
        t  = `translate3d( ${-m}vmin, ${-m}vmin, 0) `;
        break;
        case 1:
        t  = `translate3d( ${m}vmin, ${-m}vmin, 0) `;
        t += `rotateZ( ${90}deg ) `;
        break;
        case 2:
        t =  `translate3d( ${m}vmin, ${m}vmin, 0) `;
        t += `rotateZ( ${180}deg ) `;
        break;
        case 3:
        t =  `translate3d( ${-m}vmin, ${m}vmin, 0) `;
        t += `rotateZ( ${270}deg ) `;
        break;
    }
    const s = Math.pow(3,set);
    element.style.transform = t + `scale( ${s} ) `;
  }
}

}