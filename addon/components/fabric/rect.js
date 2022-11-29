import FabricObject from '../../lib/object';

export default class FabricRectComponent extends FabricObject {
  createObject(fabric) {
    return new fabric.Rect(this.options);
  }

  get options () {
    return Object.assign (super.options, FabricObject.compactOptions ({
      rx: this.args.rx,
      ry: this.args.ry
    }));
  }
}
