import FabricObject from '../../lib/object';

export default class FabricTriangleComponent extends FabricObject {
  createObject(fabric) {
    return new fabric.Triangle(this.options);
  }

  get options() {
    return Object.assign(super.options, { radius: this.args.radius });
  }
}
