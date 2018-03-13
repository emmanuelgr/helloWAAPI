export default function(){
    const all: HTMLDivElement = document.createElement("div");
    const r: HTMLDivElement = document.createElement("div");
    const g: HTMLDivElement = document.createElement("div");
    const b: HTMLDivElement = document.createElement("div");
    all.appendChild(r);
    all.appendChild(g);
    all.appendChild(b);
    r.style.backgroundColor = '#ff0000';
    g.style.backgroundColor = '#00ff00';
    b.style.backgroundColor = '#0000ff';
    r.style.width='1px';
    g.style.width='1px';
    b.style.width='1px';
    r.style.height='1px';
    g.style.height='1px';
    b.style.height='1px';

}