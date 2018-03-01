export default class Properties {
  _scale = ''
  _rotation = '';
  _translation = '';
  _offset = '';
  _opacity = -1;

  /**
   * Translation
   * @param x default to 0
   * @param y  default to 0
   * @param z  default to 0
   */
  T(x: number = 0, y: number = 0, z: number = 0) {
    this._translation =
        ` translateX( ${x}vmin ) translateY( ${y}vmin ) translateZ( ${z}vmin ) `;
    return this;
  }
  /**
   * Rotation default to 0,0,0
   * @param x default to 0
   * @param y default to 0
   * @param z default to 0
   */
  R(x: number = 0, y: number = 0, z: number = 0) {
    this._rotation = `rotateZ( ${z}deg ) rotateY( ${y}deg ) rotateX( ${x}deg ) `;
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
  /** 
   * Returns an object with ppopulated 
   * fields
  */
  get() {
    let s = '';
    let o = {};
    if (this._translation.length != 0) {
      s += this._translation;
    }
    if (this._rotation.length != 0) {
      s += this._rotation;
    }
    if (this._scale.length != 0) {
      s += this._scale;
    }
    if (this._offset.length != 0) {
      s += this._offset;
    }
    if( s.length!=0){
      o['transform'] = s;
    }
    if (this._opacity >= 0) {
      o['opacity'] =this._opacity;
    }
    // console.log(o);
    return o;
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
