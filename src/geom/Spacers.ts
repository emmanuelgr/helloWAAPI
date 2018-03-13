export default function() {
  const div: HTMLDivElement = document.createElement("div");
  div.innerHTML = `
      <div class="spacer" style="transform: translate3d( -50px,  -50px,  -50px );"></div>
      <div class="spacer" style="transform: translate3d(  50px,  -50px,  -50px );"></div>
      <div class="spacer" style="transform: translate3d(  50px,   50px,  -50px );"></div>
      <div class="spacer" style="transform: translate3d( -50px,   50px,  -50px );"></div>
      <div class="spacer" style="transform: translate3d( -50px,  -50px,   50px );"></div>
      <div class="spacer" style="transform: translate3d(  50px,  -50px,   50px );"></div>
      <div class="spacer" style="transform: translate3d(  50px,   50px,   50px );"></div>
      <div class="spacer" style="transform: translate3d( -50px,   50px,   50px );"></div>
    `;
  div.id = "spacers";
  div.style.position = "absolute";
  div.style.width = `100px`;
  div.style.height = `100px`;
  div.style.transformStyle = 'preserve-3d';
  //
  const sheet = document.createElement('style')
  sheet.innerHTML = `
  .spacer{
    position:absolute; 
    width:10px;
    height:10px;
    transform:translate3d( -50px,  -50px,  -50px );
    background-color = 'rgb(111,11,111)';
  }
  `;
  document.body.appendChild(sheet);
  return div;
}
