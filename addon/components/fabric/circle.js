import FabricObject from '../../lib/object';

export default class FabricCircleComponent extends FabricObject {
  createObject (fabric) {
    return new fabric.Circle (this.options);
  }

  get options () {
    return Object.assign (super.options, { radius: this.args.radius });
  }
}
