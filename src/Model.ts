const data = {
  world: null,
  dim: { w: null, h: null, min: null, max: null },
  player:null
};

export default class Model {
  get() {
    return data;
  }
  setDim(w, h) {
    data.dim.w = w;
    data.dim.h = h;
    data.dim.min = Math.min(w, h);
    data.dim.max = Math.max(w, h);
    return this;
  }
}
