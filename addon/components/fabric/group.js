import FabricObject from '../../lib/object';

export default class FabricGroupComponent extends FabricObject {
  createObject(fabric) {
    return new fabric.Group([], this.options);
  }

  add(object) {
    this.object.add (object.object);
    this.object.addWithUpdate ();
    this.object.setCoords ();
  }
}
