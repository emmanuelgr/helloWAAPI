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


  let timeToEnter = 999;
  const hellothere = HelloThere(timeToEnter);
  timeToEnter += hellothere.activeDuration-1500;
  const iam = Iam(timeToEnter);
  timeToEnter += iam.activeDuration-2000
    const aSoftDev = AsoftwareDev(timeToEnter);
  timeToEnter += aSoftDev.activeDuration-5900
  const aGeek = AGeekByNature(timeToEnter);
  timeToEnter += aGeek.activeDuration-7800
  const byHeart = ByHeart(timeToEnter);
  timeToEnter += byHeart.activeDuration-500
  // iam = Iam(0);
  // aGeek = AGeekByNature(0);
  // aGeek = AGeekByNature(0);
  // byHeart = ByHeart(0);
  // hellothere = HelloThere(0);
  //
  const text = new GroupEffect([
    hellothere,
    iam,
    aSoftDev,
    aGeek,
    byHeart,
  ]);

  const cams = new SequenceEffect([
    CameraMotions().cam1.get(),
    CameraMotions().cam2.get(),
    CameraMotions().cam3.get()
  ]);

  const gfx = new GroupEffect([
    text
    // cams,
  ]);

  m.player = new Animation(gfx, document.timeline);
  m.player.onfinish = () => m.player.play();
  // m.player.pause();
  m.player.play();
  // m.player.playbackRate = 3;
  // m.player.reverse();
  Timeline();
}
