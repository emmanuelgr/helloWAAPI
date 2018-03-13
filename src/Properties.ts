import Model from "./Model";
const dim = new Model().get().dim;

export default class Properties {
  // offset center to center of container
  _origin = '';
  _transforms = '';
  _offset = "";
  _opacity = -1;
  _visable = -1;

  /**Translation on X defaults to vmin as a unit */
  TX(x:number = 0, unit:string='vmin') {
    this._transforms += `translateX(${x}${unit}) `;
    return this;
  }
  /**Translation on X defaults to vmin as a unit */
  TY(y: number = 0, unit:string='vmin') {
    this._transforms += `translateY(${y}${unit}) `;
    return this;
  }
  /**Translation on X defaults to vmin as a unit */
  TZ(z:number = 0, unit:string='vmin') {
    this._transforms += `translateZ(${z}${unit}) `;
    return this;
  }
  /**
   * Translation default unit is vmin
   * @param x defaults to 0
   * @param y  defaults to 0
   * @param z  defaults to 0
   */
  T(x: number = 0, y: number = 0, z: number = 0, unit:string='vmin') {
    this._transforms += ` translate3d( ${x}${unit} , ${y}${unit} , ${z}${unit} ) `;
    return this;
  }

  /**Rotation on X defaults to degrees */
  RX(x: number = 0, unit:string='deg') {
    this._transforms += `rotateX(${x}${unit}) `;
    return this;
  }
  /**Rotation on Y defaults to degrees */
  RY(y: number = 0, unit:string='deg') {
    this._transforms += `rotateY(${y}${unit}) `;
    return this;
  }
  /**Rotation on Z defaults to degrees */
  RZ(z: number = 0, unit:string='deg') {
    this._transforms += `rotateZ(${z}${unit}) `;
    return this;
  }
  /**
   * Rotation default to 0,0,0
   * unit is deg
   * @param x default to 0
   * @param y default to 0
   * @param z default to 0
   */
  R(x: number = 0, y: number = 0, z: number = 0) {
    this._transforms +=
      // `rotateZ( ${z}deg ) rotateY( ${y}deg ) rotateX( ${x}deg ) `;
      `rotateX( ${x}deg ) rotateY( ${y}deg ) rotateZ( ${z}deg ) `;
    return this;
  }
  /**
   * Scale default to 1
   * @param x default to 1
   * @param y default to 1
   * @param z default to 1
   */
  SXYZ(x: number = 1, y: number = 1, z: number = 1) {
    this._transforms += `scaleX( ${x} ) scaleY( ${y} ) scaleZ( ${z} ) `;
    return this;
  }
  S(v: number = 1) {
    this._transforms += `scale3d( ${v} ,${v} ,${v} ) `;
    return this;
  }
  /**
   * Offset translation
   * to position the pivot of an element.
   * Uses precentages as its relative to its own size.
   * Defaults to -50% -50%
   * @param x default to -50%
   * @param y default to -50%
   */
  F(x: number = -50, y: number = -50) {
    this._offset = `translate3d( ${x}%,  ${y}% , 0) `;
    return this;
  }
  /**
   * Origin Offset middle of viewport
   */
  C() {
    this._origin = 'translate3d( 50vw, 50vh, 0) ';
    return this;
  }

  /**
   * Opacity value , default to 1
   * @param opacity 0 to 1 defaults to 1
   */
  O(opacity: number = 1) {
    this._opacity = opacity;
    return this;
  }
  /**Switch visability
   * 0 is hidden
   * 1 is vissible default
   */
  VIS(visability: 1) {
    this._visable = visability;
    return this;
  }
  /**
   * Returns an object with ppopulated
   * fields
   */
  get() {
    let o = {    };
    if (this._offset) {
      this._transforms += this._offset;
    }
    if (this._origin) {
      this._transforms = this._origin + this._transforms;
    }
    if(this._transforms){
      o["transform"] = this._transforms;
    }
    if (this._opacity >= 0) {
      o["opacity"] = this._opacity;
    }
    if (this._visable >= 0) {
      o["hidden"] = true;
    }
    // console.log(o);
    return o;
  }
  SRT(
    tX: number = 0,
    tY: number = 0,
    tZ: number = 0,
    rX: number = 0,
    rY: number = 0,
    rZ: number = 0,
    sX: number = 1,
    sY: number = 1,
    sZ: number = 1
  ) {
    this.T(tX, tY, tZ);
    this.R(rX, rY, rZ);
    this.SXYZ(sX, sY, sZ);
    return this;
  }
}
