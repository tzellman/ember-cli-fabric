import FabricObject from '../../lib/object';

export default class FabricEllipseComponent extends FabricObject {
  createObject(fabric) {
    return new fabric.Ellipse (this.options);
  }

  get options () {
    return Object.assign(super.options, {
      rx: this.args.rx,
      ry: this.args.ry
    });
  }
}
