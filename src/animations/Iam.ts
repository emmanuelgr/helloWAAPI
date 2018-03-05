import Motion from "../Motion";
import Props from "../Properties";
import * as esz from "../Ease";
import CameraMotions from "../CameraMotions";
import Colors from "../Colors";
import Model from "../Model";

export default function(delay:number=0){

const m = new Model().get();

const iam = new Motion(document.querySelector('#iam'), delay);
iam.addKey(0, new Props().O(0).T(0, 0, 0).F().get());
iam.setEas(esz.s.EASE_OUT4);
iam.addKey(500, new Props().O().T(-20, -20, 0).F().get());
iam.holdPrev(777);
iam.setEas(esz.s.EASE_IN4);
iam.addKey(400, new Props().O(0).T(0, 0, 0).F().get());

const eme = new Motion(document.querySelector('#eme'), delay+555);
eme.addKey(0, new Props().O(0).T(0, 0, -222).R().F().get());
eme.setEas(esz.s.EASE_OUT4);
eme.addKey(444, new Props().O().T(-5, 0, 0).R(0, -5, 0).F().get());
eme.setEas(esz.s.EASE_IN_OUT);
eme.addKey(333, new Props().O().T(0, 0, 5).R(0, 10, 0).F().get());
eme.setEas(esz.s.EASE_IN4);
eme.addKey(666, new Props().O(0).T(0, 0, -222).R(-110, 0, 0).F().get());

const emmanuelMotion = new GroupEffect(
    Array.from(document.querySelectorAll('#eme > span'))
        .map((el: HTMLElement, index) => {
          //
          const emmanuelAnim = new Motion(el as HTMLElement,delay +  index * 70 + 666);
          // m.addKey(0,{transform:'translate3d(30vw,0,0) rotateY(-90deg)'});
          emmanuelAnim.addKey(0, {transform: `rotateY(-180deg)`});
          emmanuelAnim.setEas(esz.s.LINEAR);
          emmanuelAnim.addKey( 333, {transform: ` rotateY(0deg)`});
          emmanuelAnim.setEas(esz.s.EASE_IN_OUT);
          emmanuelAnim.addKey( 333, {transform: `rotateY(0deg)`});
          return emmanuelAnim.get();
        })
);

const bg1 = document.createElement("div");
bg1.classList.add('circle');
document.querySelector('#bgs').appendChild(bg1);
bg1.style.background = Colors.grey.W800;
const motionBg1 = new Motion(bg1,delay+333);
motionBg1.addKey(0, new Props().O(0).S(0, 0, 0).F().get());
motionBg1.setEas(esz.s.EASE_OUT3);
motionBg1.addKey(999, new Props().O(1).S(10,10,1).F().get());
motionBg1.holdPrev(666);
motionBg1.setEas(esz.s.EASE_OUT3);
motionBg1.addKey(333, new Props().O(0).S(10,10,1).F().get());


const bg2: HTMLDivElement = document.createElement("div");
bg2.style.background = Colors.red.W500;
bg2.classList.add('circle');
document.querySelector('#bgs').appendChild(bg2);
const motionBg2 = new Motion( bg2,delay+2100);
motionBg2.addKey(0, new Props().O(0).S(0,0,0).F().get());
motionBg2.addKey(1, new Props().O(1).S( 2,2,1 ).F().get());
motionBg2.setEas(esz.s.EASE_OUT1);
motionBg2.addKey(999, new Props().O(1).S(5,5, 1).F().get());
motionBg2.setEas(esz.s.EASE_IN1);
motionBg2.addKey(444, new Props().O(0).S(0,0,1).F().get());

const bg3: HTMLDivElement =document.createElement("div");
bg3.style.background = Colors.amber.W700;
bg3.classList.add('circle');
document.querySelector('#bgs').appendChild(bg3);
const motionBg3 = new Motion(bg3, delay+2200);
motionBg3.addKey(0, new Props().O(0).S(0,0,0).F().get());
motionBg3.addKey(1, new Props().O(1).S(1,1,1).F().get());
motionBg3.setEas(esz.s.EASE_OUT1);
motionBg3.addKey(999, new Props().O(1).S(3,3,1).F().get());
motionBg3.setEas(esz.s.EASE_IN1);
motionBg3.addKey(222, new Props().O(0).S(0,0,1).F().get());

const cam = new Motion( document.querySelector('#seq2'), delay);
cam.addKey(0, new Props().T(0, 0, 0).R(0, 0, 0).get());
cam.setEas(esz.s.EASE_OUT);
cam.addKey(300, new Props().T(9, 0, 0).R(0, 10, -11).get());
cam.setEas(esz.s.EASE_IN_OUT);
cam.addKey(1500, new Props().T(5, 0, 0).R(8, 5, -11).get());
cam.setEas(esz.s.EASE_IN);
cam.addKey(222, new Props().T(0, 0, 0).R(0, 0, 0).get());

const g = new GroupEffect([
    iam.get(),
    eme.get(),
    emmanuelMotion,
    cam.get(),
  motionBg1.get(),
  motionBg2.get(),
  motionBg3.get()
]);
return g;
}
