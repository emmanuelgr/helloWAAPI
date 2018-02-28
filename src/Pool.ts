export default class Pool {
  pool = [];
  inUse = [];
  size;
  constructor(size) {
    this.size = size;
    for (let index = 0; index < size; index++) {this.create()}
  }
  create() {
    const deDiv = document.createElement("div");
    deDiv.id = `swimmer${this.pool.length}`;
    document.body.appendChild(deDiv);
    this.pool.push(deDiv);
  }
  get() {
    if (this.pool.length > 0) {
      const o = this.pool.shift;
      this.inUse.push(o);
      return o;
    } else {
      this.create()
    }
  }
  returnn(o) {
    const index = this.inUse.indexOf(o);
    if (index > -1) {
      this.inUse.splice(index, 1);
      this.pool.push(o);
    }
  }
}
