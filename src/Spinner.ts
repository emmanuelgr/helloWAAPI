import Colors from "./Colors";

export default class Spinner {
  papa;
  colors = [
    [Colors.amber.W300, Colors.amber.W500,Colors.amber.W700,Colors.amber.W900],
    [Colors.red.W300, Colors.red.W500,Colors.red.W700,Colors.red.W900],
    [Colors.pink.W300, Colors.pink.W500,Colors.pink.W700,Colors.pink.W900],
    [Colors.purple.W300, Colors.purple.W500,Colors.purple.W700,Colors.purple.W900],
  ];
  constructor(clrIndx, idPrefix, parentSelector, className) {
    this.papa = document.createElement("div");
    const w = 11;
    const h = 7;
    const o = 2;
    let x = 0;
    let y = 0;
    let z = 0;
    for (let index = 0; index < 4; index++) {
      const el = document.createElement("div");
      el.id = `${idPrefix + index}`;
      el.classList.add(className);
      this.papa.appendChild(el);
      //
      el.style.transformOrigin = "0 0";
      el.style.width = `${w}px`;
      el.style.height = `${h}px`;
      el.style.backgroundColor = this.colors[clrIndx % this.colors.length][index];
      //
      const pwr = 200;
      const mag = pwr * 9;
      switch (index) {
        case 0:
          x = -mag;
          y = -mag;
          break;
        case 1:
          x = mag;
          y = -mag;
          break;
        case 2:
          x = mag;
          y = mag;
          break;
        case 3:
          x = -mag;
          y = mag;
          break;
      }
      el.style.transform = `translate3d( ${x}px, ${y}px, ${index}px ) `;
      el.style.transform += `rotateZ(${index * 90}deg)`;
      el.style.transform += `scale(${pwr})`;
    }
    document.querySelector(parentSelector).appendChild(this.papa);
  }
  get(){
    return this.papa;
  }
}
