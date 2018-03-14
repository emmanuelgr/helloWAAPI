import Colors from "./Colors";
import data from "./data";
import * as esz from "./Ease";
import Model from "./Model";
import Motion from "./Motion";
import off from "./Offsets";
import Pool from "./Pool";
import Props from "./Properties";
import Anims from "./AnimationKeyframes";
import CameraMotions from "./CameraMotions";
import HelloThere from "./animations/HelloThere";
import Iam from "./animations/Iam";
import AsoftwareDev from "./animations/AsoftwareDev";
import AGeekByNature from "./animations/AGeekByNature";
import ByHeart from "./animations/ByHeart";
import Timeline from "./Timeline";
import Grid from "./geom/Grid";
import Spacers from "./geom/Spacers";
import Ring from "./animations/Ring";
import Votis from "./animations/Votis";
//
export default function() {
  const m = new Model().get();
  const world: HTMLElement = document.querySelector("#world");

  // const grid = Grid();
  // world.appendChild(grid);
  // grid.animate(
  // [new Props().C().F().T().get(),
  //   new Props().C().F().T().get()],
  //   {duration:0,fill:'both'}
  // );

  // const spacers = Spacers();
  // world.appendChild(spacers);
  // spacers.animate(
  //   [new Props().C().T().get(),
  //    new Props().C().T().get()],
  //   {duration:0,fill:'both'}
  // );
  const motionBgClr = new Motion(document.querySelector('#bgColor'),0 );
  motionBgClr.addKey(0, { backgroundColor:Colors.grey.W700} );
  motionBgClr.holdPrev(888);
  motionBgClr.setEas(esz.s.EASE_IN2);
  motionBgClr.addKey(999, { backgroundColor:Colors.yellow.W700} );
  motionBgClr.holdPrev(666);
  motionBgClr.setEas(esz.s.EASE_IN2);
  motionBgClr.addKey(999, { backgroundColor:Colors.grey.W900} );
  motionBgClr.holdPrev(999);
  motionBgClr.setEas(esz.s.EASE_IN2);
  motionBgClr.addKey(999, { backgroundColor:Colors.yellow.W800} );
  motionBgClr.setEas(esz.s.EASE_IN2);
  motionBgClr.addKey(999, { backgroundColor:Colors.grey.W700} );
  motionBgClr.holdPrev(555);
  motionBgClr.setEas(esz.s.EASE_IN2);
  motionBgClr.addKey(999, { backgroundColor:Colors.yellow.W600} );
  motionBgClr.holdPrev(2000);
  motionBgClr.setEas(esz.s.EASE_IN2);
  motionBgClr.addKey(999, { backgroundColor:Colors.grey.W800} );
  motionBgClr.holdPrev(2500);
  motionBgClr.setEas(esz.s.EASE_IN2);
  motionBgClr.addKey(999, { backgroundColor:Colors.grey.W900} );
  motionBgClr.holdPrev(1000);
  motionBgClr.setEas(esz.s.EASE_IN2);
  motionBgClr.addKey(999, { backgroundColor:Colors.yellow.W100} );
  motionBgClr.holdPrev(2000);
  motionBgClr.setEas(esz.s.EASE_IN2);
  motionBgClr.addKey(999, { backgroundColor:Colors.grey.W900} );
  motionBgClr.holdPrev(4000);
  // motionBgClr.setEas(esz.s.EASE_IN2);
  // motionBgClr.addKey(999, { backgroundColor:Colors.yellow.W100} );
  // motionBgClr.holdPrev(4000);
  // motionBgClr.setEas(esz.s.EASE_IN2);
  // motionBgClr.addKey(999, { backgroundColor:Colors.grey.W800} );
  // motionBgClr.holdPrev(8000);
  

  const hellothere = HelloThere(999);
  const iam = Iam(hellothere.activeDuration-700);
  const votis = Votis(iam.activeDuration-200);
  const aSoftDev = AsoftwareDev(votis.activeDuration-100);
  const aGeek = AGeekByNature(aSoftDev.activeDuration-200);
  const byHeart = ByHeart(aGeek.activeDuration-800);
  //
  const text = new GroupEffect([
    hellothere,
    iam,
    votis,
    aSoftDev,
    aGeek,
    byHeart,
  ]);

  const cams = new SequenceEffect([
    CameraMotions().cam1.get(),
    CameraMotions().cam2.get(),
    CameraMotions().cam3.get()
  ]);

  const ring = Ring(0,1, 256,'#fff',Colors.grey.W900);

  const gfx = new GroupEffect([
    text,
    // cams,
    motionBgClr.get(),
    // ring
  ]);

  m.player = new Animation(gfx, document.timeline);
  m.player.onfinish = () => m.player.play();
  m.player.pause();
  // m.player.play();
  // m.player.playbackRate = 3;
  // m.player.reverse();
  Timeline();
}
