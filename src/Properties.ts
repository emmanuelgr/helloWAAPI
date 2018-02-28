export default class Properties {
  _s='';
  _r='';
  _t='';
  _o='';
  constructor() {}
  T(x: number = 0, y: number = 0, z: number = 0) {
    this._t +=` translateX( ${x}vw ) translateY( ${y}vh ) translateZ( ${z}vw ) `;
    return this;
  }
  R(x: number = 0, y: number = 0, z: number = 0) {
    this._r +=
        `rotateZ( ${z}deg ) rotateY( ${y}deg ) rotateX( ${x}deg ) `;
    return this;
  }
  S(x: number = 1, y: number = 1, z: number = 1) {
    this._s += `scaleX( ${x} ) scaleY( ${y} ) scaleZ( ${z} ) `;
    return this;
  }
  O(x: number = -50, y: number = -50) {
    this._o += `translate3d( ${x}%,  ${y}% , 0) `;
    return this;
  }
  get() {
    const o = this._t+this._r+this._s+this._o;
    // console.log(o);
    return {
      transform: o
    }
  }
  SRT(tX: number = 0, tY: number = 0, tZ: number = 0, rX: number = 0,
      rY: number = 0, rZ: number = 0, sX: number = 0, sY: number = 0,
      sZ: number = 0) {
    this.T(tX, tY, tZ);
    this.R(rX, rY, rZ);
    this.S(sX, sY, sZ);
    return this;
  }
}
