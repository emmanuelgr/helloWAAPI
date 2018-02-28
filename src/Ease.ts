const STEPS = (stepsAmount: number) => `steps(${stepsAmount},end)`;
const BEZIER = (pX: number, pY: number, ppX: number, ppY: number) =>
  `cubic-bezier(${pX},${pY},${ppX},${ppY})`;
const s = {
  LINEAR: "linear",
  EASE_OUT: "ease-out",
  EASE_IN: "ease-in",
  EASE_IN_OUT: "ease-in-out",
  EASE_OUT1: "cubic-bezier(0, 1, 0, 1)",
  EASE_OUT2: "cubic-bezier(0, 1, 0.25, 1)",
  EASE_OUT3: "cubic-bezier(0, 1, 0.5, 1)",
  EASE_OUT4: "cubic-bezier(0, 1, 0.75, 1)",
  POSE: "cubic-bezier(0, 1, 1, 0)",
  EASE_IN1: "cubic-bezier(1, 0, 1, 0)",
  EASE_IN2: "cubic-bezier(1, 0, 1, 0.25)",
  EASE_IN3: "cubic-bezier(1, 0, 1, 0.5)",
  EASE_IN4: "cubic-bezier(1, 0, 1, 0.75)",
  STEPS1: "steps(1,end)",
  STEPS2: "steps(2,end)",
  STEPS3: "steps(3,end)",
  STEPS4: "steps(4,end)",
  STEPS5: "steps(5,end)",
  STEPS6: "steps(6,end)",
  STEPS7: "steps(7,end)",
  STEPS8: "steps(8,end)",
  STEPS9: "steps(9,end)"
};

const o = {
  ln: { easing: s.LINEAR },
  ot: { easing: s.EASE_OUT },
  in: { easing: s.EASE_IN },
  io: { easing: s.EASE_IN_OUT },
  s1: { easing: s.STEPS1 },
  s2: { easing: s.STEPS2 },
  s3: { easing: s.STEPS3 },
  s4: { easing: s.STEPS4 },
  s5: { easing: s.STEPS5 },
  s6: { easing: s.STEPS6 },
  pi: { easing: s.EASE_OUT4 },
  p: { easing: s.POSE },
  po: { easing: s.EASE_IN4 }
};
export { o,s, STEPS, BEZIER };
