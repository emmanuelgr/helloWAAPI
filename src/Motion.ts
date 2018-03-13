import * as esz from "./Ease";

export default class Motion {
  id: 'NonSet';
  element: Element;
  animationKeyFrames: AnimationKeyFrame[] = [];
  interpolations: string [] = [];
  deltaTime: number[] = [];
  delay: number;
  endDelay: number;
  tim: AnimationEffectTiming;

  constructor(element: Element, delay: number = 0, endDelay: number = 0, fillBoth=true) {
    this.element = element;
    this.delay = delay;
    this.endDelay = endDelay;
    this.tim = {
      delay: this.delay,
      endDelay: this.endDelay,
      fill: fillBoth?"both":"none"
    };
  }
  holdPrev(holdTime:number){
    const i = this.interpolations.length-1;
    this.animationKeyFrames.push({...this.animationKeyFrames[i]});
    this.deltaTime.push(holdTime);
    this.interpolations.push(esz.s.LINEAR);
  }
  addKey(
    deltaTime: number,
    animationKeyFrame: AnimationKeyFrame,
  ) {
    this.animationKeyFrames.push(animationKeyFrame);
    this.deltaTime.push(deltaTime);
    this.interpolations.push(esz.s.STEPS6);
  }
  setEas(
    interpolation: string
  ) {
    const i = this.interpolations.length-1;
    this.interpolations[i]= interpolation;
  }
  get(): KeyframeEffect {
    const totalTime = this.deltaTime.reduce((a, b) => a + b);
    let currentTime=0;
    this.animationKeyFrames.forEach((v, index,a) => {
      currentTime += this.deltaTime[index];
      v.offset = currentTime / totalTime;
      v.easing = this.interpolations[index];
    });
    this.tim.duration = totalTime;
    // console.log(this.animationKeyFrames);
    let kfx = new KeyframeEffect(this.element, this.animationKeyFrames, this.tim);
    return kfx;
  }
}
