import Motion from "../Motion";
import Props from "../Properties";
import * as esz from "../Ease";
import CameraMotions from "../CameraMotions";
import Colors from "../Colors";
import Model from "../Model";
import Circle from "../geom/Circle";
import Ring from "./Ring";

const colors = [
  [Colors.amber.W300, Colors.amber.W500,Colors.amber.W700,Colors.amber.W900],
  [Colors.green.W300, Colors.green.W500,Colors.green.W700,Colors.green.W900],
  [Colors.red.W300, Colors.red.W500,Colors.red.W700,Colors.red.W900],
  [Colors.pink.W300, Colors.pink.W500,Colors.pink.W700,Colors.pink.W900],
  [Colors.purple.W300, Colors.purple.W500,Colors.purple.W700,Colors.purple.W900],
];

 function petal(i){
  const div:HTMLDivElement = document.createElement('div');
  div.classList.add('petal');
  div.style.position = 'absolute';
  div.style.backgroundColor= colors[1][i%colors.length];
  div.style.width=  `3vmin`;
  div.style.height= `3vmin`;
  document.querySelector('#roses').appendChild( div);
  return div;
}

export default function(delay:number=0){

const m = new Model().get();

const  petals =[];
for (let i = 0; i < 18; i++) {
  petals.push( petal(i) );
}
console.log(petals);

const emmanuelGroupFX = new GroupEffect(
  petals.map((el: HTMLElement, i) => {
    const roseAnim = new Motion(el as HTMLElement,delay +  i * 60 + 0);
    roseAnim.addKey(0,    new Props().RZ(i*-40).RX().S(0).F(333,333).C().get() );
    roseAnim.setEas(esz.s.EASE_IN_OUT);
    let rot= 90;
    roseAnim.addKey(999,    new Props().RZ(i*-40+rot).RX(70).S(i%2?-3:-2).F(50,50).C().get() );
    roseAnim.holdPrev(1111);
    roseAnim.setEas(esz.s.EASE_IN_OUT);
    rot+=90;
    // rot+=90;
    roseAnim.addKey(1111,    new Props().RZ(i*-20+rot).RX(0).S(i%3?-1:1).F(-555,0).C().get() );
    roseAnim.setEas(esz.s.EASE_IN4);
    // rot+=90;
    // rot+=90;
    // roseAnim.addKey( 3333, new Props().RZ(i-40 +rot).RX(0).S( (i%2?-1:1)).F(i*20, (petals.length-1)*20).C().get()  );
    // roseAnim.setEas(esz.s.EASE_IN_OUT);
    // rot+=180;
    rot+=90;
    roseAnim.addKey( 2222, new Props().RZ(i+rot).RX(999).S(0).F().C().get() );
    return roseAnim.get();
  })
);


const g = new GroupEffect([
  emmanuelGroupFX,
]);
return g;
}
