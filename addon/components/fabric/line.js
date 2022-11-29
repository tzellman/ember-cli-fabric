import FabricObject from '../../lib/object';

export default class FabricLineComponent extends FabricObject {
  createObject (fabric) {
    return new fabric.Line (this.coords, this.options);
  }

  get coords () {
    return [this.args.x1, this.args.y1, this.args.x2, this.args.y2];
  }
}
