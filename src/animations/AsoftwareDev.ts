import Motion from "../Motion";
import Props from "../Properties";
import CameraMotions from "../CameraMotions";
import * as esz from "../Ease";

export default function(){
    
    const cam  = CameraMotions();
const a = new Motion(document.querySelector('#a'), 0);
a.addKey(0, new Props().O(0).TY('30vmin').RX('-2turn').F().get());
a.setEas(esz.s.EASE_OUT5);
a.addKey(444, new Props().O().TY('-10vmin').RX().F().get());
a.setEas(esz.s.EASE_IN2);
a.addKey(1600, new Props().O(0).TY('30vmin').RX('-.25turn').F().get());

const soft = new Motion(document.querySelector('#software'), 111);
soft.addKey(0, new Props().O(0).TY('40vmin').RX('-1.5turn').F().get());
soft.setEas(esz.s.EASE_OUT4);
soft.addKey(444, new Props().O().TY().RX().F().get());
soft.setEas(esz.s.EASE_IN2);
soft.addKey(1300, new Props().O(0).TY('40vmin').RX('-.25turn').F().get());


const dev = new Motion(document.querySelector('#dev'), 222);
dev.addKey(0, new Props().O(0).TY('50vmin').RX('-1.5turn').F().get());
dev.setEas(esz.s.EASE_OUT4);
dev.addKey(444, new Props().O().TY('10vmin').RX().F().get());
dev.setEas(esz.s.EASE_IN2);
dev.addKey(1000, new Props().O(0).TY('50vmin').RX('-.25turn').F().get());

const anim = new Animation( 
    new GroupEffect([
        cam.cam3.get(),
        a.get(),
        soft.get(),
        dev.get()
    ]), document.timeline
);
anim.id ='ASoftwareDeveloper';
anim.pause();
return anim;
}
