import Motion from "../Motion";
import Props from "../Properties";
import * as esz from "../Ease";
import CameraMotions from "../CameraMotions";

export default function(){

    const cam  = CameraMotions();

const iam = new Motion(document.querySelector('#iam'), 0);
iam.addKey(0, new Props().O(0).R(0, 0, 0).T(0, 0, -99).F().get());
iam.setEas(esz.s.EASE_IN_OUT);
iam.addKey(500, new Props().O().R(0, 390, 10).T(-20, -20, 0).F().get());
iam.setEas(esz.s.EASE_IN_OUT);
iam.addKey(100, new Props().O().R(0, 333, 0).T(-20, -30, 0).F().get());
iam.setEas(esz.s.EASE_IN_OUT);
iam.addKey(800, new Props().O().R(0, 390, -10).T(-20, -20, 0).F().get());
iam.setEas(esz.s.EASE_IN_OUT);
iam.addKey(400, new Props().O(0).R(0, 300, 30).T(0, 0, -99).F().get());

const eme = new Motion(document.querySelector('#eme'), 444);
eme.addKey(0, new Props().O(0).T(0, 0, -222).R().F().get());
eme.setEas(esz.s.EASE_OUT4);
eme.addKey(444, new Props().O().T(-5, 0, 0).R(0, -5, 0).F().get());
eme.setEas(esz.s.EASE_IN_OUT);
eme.addKey(333, new Props().O().T(0, 0, 5).R(0, 10, 0).F().get());
eme.setEas(esz.s.EASE_IN4);
eme.addKey(666, new Props().O(0).T(0, 0, -222).R(-110, 0, 0).F().get());

let ep = document.querySelector('#eme').getBoundingClientRect();
const emeSpan = new GroupEffect(
    Array.from(document.querySelectorAll('#eme > span'))
        .map((el: HTMLElement, index) => {
          //
          const m = new Motion(el as HTMLElement, index * 70 + 333);
          // m.addKey(0,{transform:'translate3d(30vw,0,0) rotateY(-90deg)'});
          m.addKey(0, {transform: `rotateY(-180deg)`});
          m.setEas(esz.s.LINEAR);
          m.addKey( 333, {transform: ` rotateY(0deg)`});
          m.setEas(esz.s.EASE_IN_OUT);
          m.addKey( 333, {transform: `rotateY(0deg)`});
          return m.get();
        })

);

const anim = new Animation( 
    new GroupEffect([
        cam.cam2.get(),
        iam.get(),
        eme.get(),
        emeSpan
    ]), document.timeline
);
anim.id ='Iam';
anim.pause();
return anim;
}
