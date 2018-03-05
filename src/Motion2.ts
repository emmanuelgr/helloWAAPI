export default class Motion2{
    constructor(){

    }
    parseT( prpertyName:string, dim:string,s:string){
        const values = s.split(/ +/);
        const ratios = s.match(/ +/g).map(v=>v.length);
        const totalTime = ratios.reduce((a, b) => a + b);

        let currentTime=0;
        const keys = values.map((v,i)=>{
            let o = {};
            o[prpertyName] =`opacity(${v})`;
            o['easing'] = `${ease}`;
            o['offset'] = `${currentTime / totalTime}`;
        });
        this.animationKeyFrames.forEach((v, index,a) => {
          currentTime += this.deltaTime[index];
          v.offset = currentTime / totalTime;
          v.easing = this.interpolations[index];
        });
    }
    test(){

        const aaa ={
            op:'0                                           01',
            tX:'0        11                     55          99',
            tY:'0        11                     55          99',
            tZ:'0        11                     55          99',
            rX:'0        11                     55          99',
            rY:'0        11                     55          99',
            rZ:'0        11                     55          99',
            sX:'1        11                     55          99',
            sY:'1        11                     55          99',
            sZ:'1        11                     55          99',
        };
        for( let k in aaa){
            console.log(k);
            switch(k.slice(0,2)){
                case 'op':
                
                break;
                case 'tX':
                
                break;
                case 'tY':
                break;
                case 'tZ':
                break;
                case 'rX':
                break;
                case 'rY':
                break;
                case 'rZ':
                break;
                case 'sX':
                break;
                case 'sY':
                break;
                case 'sZ':
                break;
            }
        }


    }
}