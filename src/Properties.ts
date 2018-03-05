export default class Properties {
  _scale = ''
  _rotation = '';
  _rotationX = '';
  _rotationY = '';
  _rotationZ = '';
  _translation = '';
  _translationX = '';
  _translationY = '';
  _translationZ = '';
  _offset = '';
  _opacity = -1;
  _visable = -1;

  /**Translation on X as a string need to define unit */
  TX(x: string ='0') {
    this._translationX = `translateX(${x}) `;
    return this;
  }
  /**Translation on X as a string need to define unit */
  TY(y: string ='0') {
    this._translationY = `translateY(${y}) `;
    return this;
  }
  /**Translation on X as a string need to define unit */
  TZ(z: string ='0') {
    this._translationZ = `translateZ(${z}) `;
    return this;
  }
  /**
   * Translation unit is vmin
   * @param x default to 0
   * @param y  default to 0
   * @param z  default to 0
   */
  T(x: number = 0, y: number = 0, z: number = 0) {
    this._translation = ` translateX( ${x}vmin ) translateY( ${
        y}vmin ) translateZ( ${z}vmin ) `;
    return this;
  }

    /**Rotation on X as a string need to define unit */
    RX(x: string ='0') {
      this._rotationX = `rotateX(${x}) `;
      return this;
    }
    /**Rotation on Y as a string need to define unit */
    RY(y: string ='0') {
      this._rotationY = `rotateY(${y}) `;
      return this;
    }
    /**Rotation on Z as a string need to define unit */
    RZ(z: string ='0') {
      this._rotationZ = `rotateZ(${z}) `;
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
    this._rotation =
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
  S(x: number = 1, y: number = 1, z: number = 1) {
    this._scale = `scaleX( ${x} ) scaleY( ${y} ) scaleZ( ${z} ) `;
    return this;
  }
  /**
   * Offset translation
   * to center pivot to center of div
   * Defaults to -50% -50%
   * @param x default to -50%
   * @param y default to -50%
   */
  F(x: number = -50, y: number = -50) {
    this._offset = `translate3d( ${x}%,  ${y}% , 0) `;
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
  VIS(visability:1){
    this._visable = visability;
    return this;
    
  }
  /**
   * Returns an object with ppopulated
   * fields
   */
  get() {
    let s = '';
    let o = {
      // transform:'translate3d(50vw,50vh,0) '
    };
    if (this._translationX) {
      s += this._translationX;
    }
    if (this._translationY) {
      s += this._translationY;
    }
    if (this._translationZ) {
      s += this._translationZ;
    }
    if (this._translation) {
      s += this._translation;
    }
    if (this._rotationX) {
      s += this._rotationX;
    }
    if (this._rotationY) {
      s += this._rotationY;
    }
    if (this._rotationZ) {
      s += this._rotationZ;
    }
    if (this._rotation) {
      s += this._rotation;
    }
    if (this._scale) {
      s += this._scale;
    }
    if (this._offset) {
      s += this._offset;
    }
    if (s) {
      o['transform'] = s;
    }
    if (this._opacity >= 0) {
      o['opacity'] = this._opacity;
    }
    if (this._visable >= 0) {
      o['hidden'] = true;
    }
    // console.log(o);
    return o;
  }
  SRT(tX: number = 0, tY: number = 0, tZ: number = 0, rX: number = 0,
      rY: number = 0, rZ: number = 0, sX: number = 1, sY: number = 1,
      sZ: number = 1) {
    this.T(tX, tY, tZ);
    this.R(rX, rY, rZ);
    this.S(sX, sY, sZ);
    return this;
  }
}
