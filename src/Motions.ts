import * as esz from "./Ease";
import off from "./Offsets";
import T from "./Transform";

const opa0 = {opacity:0};
const opa1 = {opacity:1};
const actS = { ...opa0, ...esz.o.pi };
const act1 = { ...opa1, ...esz.o.pi, ...off.set2 };
const act2 = { ...opa1, ...esz.o.po, ...off.set8 };
const actE = { ...opa0 };

export default {
  in1: [
    { ...actS, ...new T().S(0.5, 0.5, 0.5).R(0, 90, 0) },
    { ...act1, ...new T().S(1, 1, 1).R(0, 0, 0) },
    { ...act2, ...new T().S(1, 1, 1).R(0, 0, 0) },
    { ...actE, ...new T().S(0.5, 0.5, 0.5).R(0, -9, 0) }
  ],
  in2: [
    { opacity: 0, ...new T().T(-220, 0, 0), ...esz.o.pi },
    { opacity: 0, ...new T().T(-220, 0, 0), ...esz.o.io, ...off.set15 },
    { opacity: 1, ...new T().T(0, 0, 0), ...esz.o.in, ...off.set85 },
    { opacity: 0, ...new T().T(10, 0, 0) }
  ],
  inPlayA: [
    { ...actS, ...new T().SRT(-50, -60, 0, 0, 0, 120, 0.5, 0.5, 0.5) },
    { ...act1, ...new T().SRT(-100, -130, 0, 0, 60, 0, 1.5, 1.5, 1.5) },
    { ...act2, ...new T().SRT(-50, -150, 0, 10, -30, 10, 1.5, 1.5, 1.5) },
    { ...actE, ...new T().SRT(-50, -110, 0, -20, 50, -50, 0.8, 0.8, 0.8) }
  ],
  inPlayB: [
    { ...actS, ...new T().SRT(-50, -160, 0, 0, 0, 120, 0.5, 0.5, 0.5) },
    { ...act1, ...new T().SRT(-300, -30, 0, -10, 10, 10, 1.5, 1.5, 1.5) },
    { ...act2, ...new T().SRT(-90, -50, 110, 10, -30, 10, 1.5, 1.5, 1.5) },
    { ...actE, ...new T().SRT(-50, -110, 0, -20, 50, -50, 0.3, 0.3, 0.3) }
  ],
  rainbow(steps, satur=80, lum=55 ) {
    const a=[];
    const d = 360/steps;
    for (let index = 0; index < steps; index++) {
      let o = { color:`hsl(${d*index}, ${satur}%, ${lum}% )`}
      a.push( o );
    }
    return a;
  }
};
