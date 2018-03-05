export default class Pool {
  idPrefix: '';
  pool:HTMLDivElement[] = [];
  inUse:HTMLDivElement[] = [];
  parentSelector = 'body';
  className = '';
  size;
  constructor(size,idPrefix,parentSelector, className) {
    this.size = size;
    this.idPrefix = idPrefix;
    this.parentSelector = parentSelector;
    this.className = className;
    for (let index = 0; index < size; index++) {this.create()}
  }
  create() {
    const deDiv = document.createElement("div");
    deDiv.id = `${this.idPrefix}${this.pool.length+this.inUse.length}`;
    deDiv.classList.add(this.className);
    document.querySelector(this.parentSelector).appendChild(deDiv);
    this.pool.push(deDiv);
  }
  checkOut():HTMLDivElement {
    if (this.pool.length == 0) {
      this.create();
    }
    let o:HTMLDivElement = this.pool.shift();
    this.inUse.push(o);
    return o;
  }
  checkIn(o) {
    const index = this.inUse.indexOf(o);
    if (index > -1) {
      this.inUse.splice(index, 1);
      this.pool.push(o);
    }
  }
}
