import Colors from "./Colors";

export default class Spinner {
  cnvs:HTMLCanvasElement;
  // cnvs:HTMLDivElement;
  colors = [
    [Colors.red.W300, Colors.red.W500,Colors.red.W700,Colors.red.W900],
    [Colors.amber.W300, Colors.amber.W500,Colors.amber.W700,Colors.amber.W900],
    [Colors.pink.W300, Colors.pink.W500,Colors.pink.W700,Colors.pink.W900],
    [Colors.purple.W300, Colors.purple.W500,Colors.purple.W700,Colors.purple.W900],
  ];
  constructor(clrIndx, idPrefix, parentSelector, className) {
    const w = 9*20;
    const h = 8*20;
    const size = w+h;
    this.cnvs = document.createElement("canvas");
    this.cnvs.classList.add('spinner');
    this.cnvs.setAttribute('width', `${size}`);
    this.cnvs.setAttribute('height', `${size}`);
    const cntx = this.cnvs.getContext('2d');
    cntx.imageSmoothingEnabled = false;
      cntx.fillStyle = this.colors[clrIndx % this.colors.length][0];
      cntx.fillRect( 0,0, w, h);
      cntx.fillStyle = this.colors[clrIndx % this.colors.length][1];
      cntx.fillRect( w,0, h, w);
      cntx.fillStyle = this.colors[clrIndx % this.colors.length][2];
      cntx.fillRect( h,w, w, h);
      cntx.fillStyle = this.colors[clrIndx % this.colors.length][3];
      cntx.fillRect( 0,h, h, w);

      // this.cnvs = document.createElement("div");
      // this.cnvs.classList.add('spinner');
      // this.cnvs.style.width =  `${size}px`;
      // this.cnvs.style.height =  `${size}px`;
      // this.cnvs.style.backgroundPositionX = `${clrIndx*-17}px`
      // this.cnvs.style.position ='absolute';

      document.querySelector(parentSelector).appendChild(this.cnvs);
  }
  get(){
    return this.cnvs;
  }
}
