import * as esz from './Ease';
import Model from './Model';
import Motion from './Motion';
import Props from './Properties';

export default function(){
    const m = new Model().get();
    console.log( m.world);

    const cam1 = new Motion(m.world, 0, 0, false);
    cam1.addKey(0, new Props().C().T(0, 0, 0).R(0, 0, 0).get());
    cam1.setEas(esz.s.EASE_OUT);
    cam1.addKey(300, new Props().C().T(0, 10, 0).R(0, -15, 0).get());
    cam1.setEas(esz.s.EASE_IN_OUT);
    cam1.addKey(1000, new Props().C().T(0, 10, 10).R(8, -20, 9).get());
    cam1.setEas(esz.s.EASE_IN);
    cam1.addKey(222, new Props().C().T(0, 0, 0).R(0, 0, 0).get());

    const cam2 = new Motion(m.world, 0, 0, false);
    cam2.addKey(0, new Props().C().T(0, 0, 0).R(0, 0, 0).get());
    cam2.setEas(esz.s.EASE_OUT);
    cam2.addKey(300, new Props().C().T(9, 0, 0).R(0, 10, -11).get());
    cam2.setEas(esz.s.EASE_IN_OUT);
    cam2.addKey(1500, new Props().C().T(5, 0, 0).R(8, 5, -11).get());
    cam2.setEas(esz.s.EASE_IN);
    cam2.addKey(222, new Props().C().T(0, 0, 0).R(0, 0, 0).get());

    const cam3 = new Motion(m.world, 0, 0, false);
    cam3.addKey(0, new Props().C().T(0, 0, -10).R(      -30, 0, 0  ).get());
    cam3.setEas(esz.s.LINEAR);
    cam3.addKey(666, new Props().C().T(0, 0, 0).R(   5, 0, 0   ).get());
    cam3.setEas(esz.s.LINEAR);
    cam3.addKey(666, new Props().C().T(0, 0, 0).R(  -5, 0, 0     ).get());
    cam3.setEas(esz.s.LINEAR);
    cam3.addKey(999, new Props().C().T(0, 0, -10).R(    0, 0, 0).get());


    return {cam1,cam2,cam3};
}