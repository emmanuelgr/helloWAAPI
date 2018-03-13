export default function(){
    const div:HTMLDivElement = document.createElement('div');
    div.classList.add('grid');
    div.style.position = 'absolute';
    div.style.backgroundColor='black';
    div.style.opacity ='0.1';
    div.style.width= `200px`;
    div.style.height= `200px`;
    div.style.transformStyle = 'preserve-3d';
    div.style.backgroundImage = `
    linear-gradient(white 1px, transparent 1px),
    linear-gradient(90deg, white 1px, transparent 1px),
    linear-gradient(#aaa 1px, transparent 1px),
    linear-gradient(90deg, #aaa 1px, transparent 1px)`;
    div.style.backgroundSize = '100px 100px, 100px 100px, 10px 10px, 10px 10px';
    div.style.backgroundPosition = '-0.5px -0.5px, -0.5px -0.5px, -1px -1px, -1px -1px';
    return div;
}