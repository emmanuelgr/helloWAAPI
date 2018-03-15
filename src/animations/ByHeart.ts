import Motion from "../Motion";
import * as esz from "../Ease";
import Colors from "../Colors";
import Props from "../Properties";
import Pool from "../Pool";
import Spinner from "../Spinner";

export default function(delay:number=0){
  const kfs = [];
  for (let i = 0; i < 7; i++) {
    const mtn = new Motion(new Spinner(i, `spin${i}`, "#spinners", "spinner").get(), delay + 150*i);
    const s = 140;
    mtn.addKey(0, new Props().C().S().RZ(180).O(0).F().get());
    mtn.addKey(1, new Props().C().S((i+1)*s).RZ(180).O(1).F().get());
    mtn.setEas(esz.s.EASE_OUT5);
    mtn.addKey(1711, new Props().C().S(0).RZ().O(1).F().get());
    mtn.addKey(    1, new Props().C().S((i+1)*s).RZ().O(0).F().get());
    kfs.push(mtn.get());
  }

const creative = new Motion(document.querySelector('#creative'), delay+2400);
creative.addKey(0,  { color:Colors.pink.W500,   letterSpacing:'-6vmin',...new Props().C().F().O(0).get()});
creative.setEas(esz.s.EASE_OUT3);
creative.addKey(333, { color:Colors.red.W500,   letterSpacing:'1.5vmin',...new Props().C().F().O(1).get()});
creative.setEas(esz.s.EASE_IN_OUT);
creative.addKey(999, { color:Colors.lightBlue.W500,   letterSpacing:'1.5vmin',...new Props().C().F().O(1).get()});
creative.setEas(esz.s.EASE_IN_OUT);
creative.addKey(999, { color:Colors.deepOrange.W500,   letterSpacing:'1.5vmin',...new Props().C().F().O(1).get()});
creative.setEas(esz.s.EASE_IN_OUT);
creative.addKey(999, { color:Colors.amber.W500,   letterSpacing:'1.5vmin',...new Props().C().F().O(1).get()});
creative.setEas(esz.s.EASE_OUT3);
creative.addKey(999,  { color:Colors.pink.W500,   letterSpacing:'-6vmin',...new Props().C().F().O(0).get()});

const by = new Motion(document.querySelector('#byheart'),delay+ 2500);
by.addKey(0, new Props().C().F().O(0).TY(6).get());
by.setEas(esz.s.EASE_OUT3);
by.addKey(666, new Props().C().F().O(1).TY(9).get());
by.holdPrev(666);
by.setEas(esz.s.EASE_IN_OUT);
by.addKey(444, new Props().C().F().O(0).TY(9).get());

const heart = new Motion(document.querySelector('#heart'), delay+2600);
heart.addKey(0, { ...new Props().C().F().O(0).TY(15).get()});
heart.setEas(esz.s.EASE_OUT2);
heart.addKey(666, { ...new Props().C().F().O(1).TY(18).get()});
heart.holdPrev(666);
heart.setEas(esz.s.EASE_IN_OUT);
heart.addKey(444, { ...new Props().C().F().O(0).TY(18).get()});


const g = new GroupEffect([
  new GroupEffect(kfs),
  creative.get(),
  by.get(),
  heart.get(),
]);
return g;
}