import Motion from "../Motion";
import Props from "../Properties";
import * as esz from "../Ease";
import CameraMotions from "../CameraMotions";

export default function(){

const cam  = CameraMotions();

const hello = new Motion(document.querySelector('#hello'), 0);
hello.addKey(0, new Props().O(0).R(0, 0, 0).T(0, 0, -99).F().get());
hello.setEas(esz.s.EASE_IN_OUT);
hello.addKey(500, new Props().O().R(0, 390, 10).T(0, -10, 0).F().get());
hello.setEas(esz.s.EASE_OUT);
hello.addKey(100, new Props().O().R(0, 350, 0).T(0, -20, 20).F().get());
hello.setEas(esz.s.EASE_IN_OUT);
hello.addKey(800, new Props().O().R(0, 390, -10).T(0, -10, 0).F().get());
hello.setEas(esz.s.EASE_IN_OUT);
hello.addKey(400, new Props().O(0).R(0, 300, 30).T(0, 0, -99).F().get());

const there = new Motion(document.querySelector('#there'), 500);
there.addKey(0, new Props().O(0).T(0, 0, -99).R().F().get());
there.setEas(esz.s.EASE_OUT4);
there.addKey(444, new Props().O().T(10, 0, 0).R(0, 30, 0).F().get());
there.setEas(esz.s.EASE_OUT4);
there.addKey(333, new Props().O().T(10, 0, 20).R(0, 20, 0).F().get());
there.setEas(esz.s.EASE_IN4);
there.addKey(333, new Props().O(0).T(0, 0, -99).R(0, -20, -150).F().get());

const anim = new Animation( 
    new GroupEffect([
        hello.get(),
        there.get(),
        cam.cam1.get(),
    ]), document.timeline
);
anim.pause();
anim.id ='HelloThere';
return anim;
}
