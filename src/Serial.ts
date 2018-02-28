import * as esz from "./Ease";

export default class Serial {
  element: HTMLElement;
  animationKeyFrames: AnimationKeyFrame[] = [];
  interpolations: string[] = [];
  durations: number[] = [];
  delays: number[] = [];
  endDelays: number[] = [];
  constructor(element: HTMLElement) {
    this.element = element;
  }
  add(
    animationKeyFrame: AnimationKeyFrame,
    duration: number = 100,
    interpolation: string = esz.s.EASE_IN_OUT,
    delay: number = 0,
    endDelay: number = 0
  ) {
    this.animationKeyFrames.push(animationKeyFrame);
    this.durations.push(duration);
    this.interpolations.push(interpolation);
    this.delays.push(delay);
    this.endDelays.push(endDelay);
  }
  get(): SequenceEffect {
    const s = [];
    for (let index = 0; index < this.animationKeyFrames.length - 1; index++) {
      const key = this.animationKeyFrames[index];
      const keyN = this.animationKeyFrames[index + 1];
      let fill:AnimationEffectTimingFillMode='none';
      if (index == 0){
          fill = "backwards";
      }else if (index == this.animationKeyFrames.length - 2){
          fill = "forwards";
      }
      let tim: AnimationEffectTiming = {
        duration: this.durations[index],
        easing: this.interpolations[index],
        delay: this.delays[index],
        endDelay: this.endDelays[index],
        fill:fill
      };
      const k = new KeyframeEffect(this.element, [key, keyN], tim);
      s.push(k);
    }
    return new SequenceEffect(s);
  }
}
